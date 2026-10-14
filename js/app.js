(function () {
  'use strict';

  var STR = window.MNN_STRINGS;
  var SPR = window.MNN_SPRITES;
  var DATA = window.MNN;
  var ROMAJI = window.MNN_ROMAJI;

  var app = document.getElementById('app');
  var modalRoot = document.getElementById('modal-root');

  var KANJI_NUM = ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
  var MODES = ['vocab', 'grammar', 'vocab-quiz', 'grammar-quiz'];
  var GUIDE = { vocab: 'tanuki', 'vocab-quiz': 'tanuki', grammar: 'kitsune', 'grammar-quiz': 'kitsune' };
  var MODE_JP = { vocab: 'ごい', grammar: 'ぶんぽう', 'vocab-quiz': 'ごいクイズ', 'grammar-quiz': 'ぶんぽうクイズ' };

  // ---------- Small helpers ----------

  function store(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, value);
    } catch (e) { /* storage unavailable (private mode etc.) */ }
    return null;
  }

  // Per-tab storage: forgotten when the tab is closed.
  function session(key, value) {
    try {
      if (value === undefined) return sessionStorage.getItem(key);
      if (value === null) sessionStorage.removeItem(key);
      else sessionStorage.setItem(key, value);
    } catch (e) { /* storage unavailable */ }
    return null;
  }

  var lang = store('mnn-lang') === 'zh' ? 'zh' : 'en';
  var userName = session('mnn-name') || '';

  // Fill in the learner's name wherever text says {name}.
  function P(s) {
    return typeof s === 'string' ? s.replace(/\{name\}/g, userName) : s;
  }

  // UI string lookup
  function t(key) {
    var v = STR[lang][key];
    if (v === undefined) v = STR.en[key];
    if (typeof v === 'function') v = v.apply(null, Array.prototype.slice.call(arguments, 1));
    return P(v);
  }

  // Content lookup: plain strings pass through, {en, zh} objects pick the current language.
  function tx(v) {
    if (v == null) return '';
    if (typeof v === 'string') return P(v);
    return P(v[lang] != null ? v[lang] : (v.en || ''));
  }

  // Same string in both languages, for generated content that should follow the toggle.
  function both(key) {
    var args = Array.prototype.slice.call(arguments, 1);
    var out = {};
    ['en', 'zh'].forEach(function (l) {
      var v = STR[l][key];
      out[l] = typeof v === 'function' ? v.apply(null, args.map(function (a) {
        return a && typeof a === 'object' ? (a[l] || a.en) : a;
      })) : v;
    });
    return out;
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  // Japanese text: escapes, supports {漢字|かな} furigana and highlights （　） blanks.
  // A fill like 'は … か' fills several blanks in turn.
  function jp(s, fill) {
    var fills = fill == null ? null : String(fill).split(' … ');
    var n = 0;
    var html = readings(esc(P(s))).replace(/\n/g, '<br>');
    return html.replace(/[（(]\s*[　 ]?\s*[）)]/g, function () {
      return fills
        ? '<span class="blank blank--filled">' + readings(esc(fills[Math.min(n++, fills.length - 1)])) + '</span>'
        : '<span class="blank">（　）</span>';
    });
  }

  // Adds readings above escaped text: {漢字|かな} becomes furigana, and every katakana
  // word gets its romaji in small type (ミラー -> mirā).
  var KATAKANA = /\{([^|}]+)\|([^}]+)\}|[\u30A1-\u30FA\u30FC]+/g;
  function readings(html) {
    return html.replace(KATAKANA, function (m, base, reading) {
      if (base) return '<ruby>' + base + '<rt>' + reading + '</rt></ruby>';
      if (/^ー+$/.test(m)) return m;
      return '<ruby class="kata">' + m + '<rt class="romaji">' + ROMAJI(m) + '</rt></ruby>';
    });
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function kanjiNum(n) { return n <= 10 ? KANJI_NUM[n] : String(n); }

  function wordLabel(v) { return v.kanji ? v.kanji + '（' + v.jp + '）' : v.jp; }

  function guide(character, text, extraClass) {
    return '<div class="guide' + (extraClass ? ' ' + extraClass : '') + '">' + SPR.svg(character) +
      '<div class="bubble px"><span class="bubble-name">' + esc(tx(SPR.CHARACTERS[character])) + '</span>' +
      '<p class="bubble-text">' + text + '</p></div></div>';
  }

  function progressBar(i, n, label) {
    var pct = n ? Math.round((i / n) * 100) : 0;
    return '<div class="progress"><span>' + esc(label) + '</span>' +
      '<div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="' + n + '" aria-valuenow="' + i + '"><span style="width:' + pct + '%"></span></div></div>';
  }

  function backLink(href, label) {
    return '<a class="back" href="' + href + '">◀ ' + esc(label) + '</a>';
  }

  // ---------- Speech (Japanese TTS, works in Chrome and Safari) ----------

  var canSpeak = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;

  function speak(text) {
    if (!canSpeak) return;
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text.replace(/[〜～［］\[\]]/g, ''));
    u.lang = 'ja-JP';
    u.rate = 0.85;
    var voice = window.speechSynthesis.getVoices().filter(function (v) { return /^ja/i.test(v.lang); })[0];
    if (voice) u.voice = voice;
    window.speechSynthesis.speak(u);
  }

  // ---------- Routing ----------
  // #/                    home (chapter select)
  // #/ch/3                chapter menu
  // #/ch/3/vocab          vocab | grammar | vocab-quiz | grammar-quiz

  // Navigation is kept in memory and mirrored to the URL hash when the browser allows it,
  // so the app also works where the page URL can't be changed (e.g. inside an embed).
  var currentPath = location.hash;
  var route = {};
  var view = {}; // per-screen state (card index, quiz progress); reset on navigation

  function parseRoute() {
    var parts = currentPath.replace(/^#\/?/, '').split('/').filter(Boolean);
    if (parts[0] === 'ch' && DATA.chapters[parts[1]]) {
      var mode = MODES.indexOf(parts[2]) >= 0 ? parts[2] : null;
      return { ch: DATA.chapters[parts[1]], mode: mode };
    }
    return {};
  }

  function onRouteChange() {
    route = parseRoute();
    view = {};
    closeModal();
    render();
    window.scrollTo(0, 0);
    app.focus({ preventScroll: true });
  }

  function render() {
    document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : 'en';
    document.title = t('appTitle');
    document.querySelector('[data-i18n="appSub"]').textContent = t('appSub');
    document.querySelectorAll('.lang-toggle button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });

    if (!userName) return renderWelcome();
    if (!route.ch) return renderHome();
    if (!route.mode) return renderChapter(route.ch);
    if (route.mode === 'vocab') return renderVocab(route.ch);
    if (route.mode === 'grammar') return renderGrammar(route.ch);
    return renderQuiz(route.ch, route.mode);
  }

  // ---------- Welcome (asks the learner's name once per tab) ----------

  function renderWelcome() {
    app.innerHTML = '<section class="screen welcome">' +
      guide('neko', esc(t('welcomeLine'))) +
      '<form class="name-form px" data-act="name" autocomplete="off">' +
      '<label class="name-label" for="name-input">' + esc(t('nameLabel')) + '</label>' +
      '<div class="answer-form"><input class="answer-input" id="name-input" name="name" maxlength="20" ' +
      'autocapitalize="words" spellcheck="false" placeholder="' + esc(t('namePlaceholder')) + '">' +
      '<button class="btn btn--primary" type="submit">' + esc(t('nameGo')) + '</button></div>' +
      '<p class="name-note">' + esc(t('nameNote')) + '</p></form></section>';
    app.querySelector('#name-input').focus({ preventScroll: true });
  }

  // ---------- Home ----------

  function hasContent(ch) {
    return ch.vocab.length || ch.grammar.length || ch.grammarQuiz.length || ch.vocabQuiz.length;
  }

  function chapterStars(ch) {
    var best = bestScores();
    return (best[ch.id + ':vocab-quiz'] || 0) + (best[ch.id + ':grammar-quiz'] || 0);
  }

  function renderHome() {
    var cards = Object.keys(DATA.chapters).sort(function (a, b) { return a - b; }).map(function (id) {
      var ch = DATA.chapters[id];
      return '<a class="sign sign--' + (ch.id % 4) + '" href="#/ch/' + ch.id + '">' +
        '<span class="sign-kanji">第' + kanjiNum(ch.id) + '課</span>' +
        '<span class="sign-num">' + esc(t('lessonN', ch.id)) + '</span>' +
        '<span class="sign-sub" lang="ja">' + jp(ch.title.jp) + '</span>' +
        (hasContent(ch) ? '' : '<span class="badge badge--soft">' + esc(t('comingSoon')) + '</span>') +
        (chapterStars(ch) ? '<span class="sign-stars">★ ' + chapterStars(ch) + ' / 6</span>' : '') +
        '</a>';
    }).join('');

    app.innerHTML = '<section class="screen">' +
      guide('neko', esc(t('homeGreeting'))) +
      '<button type="button" class="link-btn" data-act="change-name">' + esc(t('notYou')) + '</button>' +
      '<h1 class="section-title">' + esc(t('chooseChapter')) + '</h1>' +
      '<div class="chapter-grid">' + cards + '</div>' +
      '</section>';
  }

  // ---------- Chapter menu ----------

  function quizLength(ch, mode) {
    if (mode === 'grammar-quiz') return ch.grammarQuiz.filter(function (q) { return q.type !== 'scene'; }).length;
    var n = ch.vocab.filter(function (v) { return v.group !== 'names' && v.en; }).length;
    return ch.vocabQuiz.length || (n >= 4 ? Math.min(10, n) : 0);
  }

  function renderChapter(ch) {
    var counts = {
      vocab: t('itemsCount', ch.vocab.length),
      grammar: t('itemsCount', ch.grammar.length),
      'vocab-quiz': t('questionsCount', quizLength(ch, 'vocab-quiz')),
      'grammar-quiz': t('questionsCount', quizLength(ch, 'grammar-quiz'))
    };
    var best = bestScores();
    var modes = MODES.map(function (m) {
      var isQuiz = m.indexOf('quiz') >= 0;
      return '<a class="mode px' + (isQuiz ? ' mode--quiz' : '') + '" href="#/ch/' + ch.id + '/' + m + '">' +
        SPR.svg(GUIDE[m]) +
        '<span class="mode-text"><span class="mode-jp">' + MODE_JP[m] + '</span>' +
        '<span class="mode-name">' + esc(t('modes')[m]) + '</span>' +
        '<span class="mode-meta">' + esc(t('modeDesc')[m]) + ' · ' + esc(counts[m]) +
        (m === 'grammar-quiz' && ch.sampleQuiz ? ' · ' + esc(t('sampleTag')) : '') + '</span>' +
        (isQuiz && best[ch.id + ':' + m] != null ? '<span class="mode-stars">' + starText(best[ch.id + ':' + m]) + '</span>' : '') +
        '</span></a>';
    }).join('');

    app.innerHTML = '<section class="screen">' +
      '<div class="toprow">' + backLink('#/', t('allLessons')) + '</div>' +
      '<div class="chapter-head"><div class="kanji">第' + kanjiNum(ch.id) + '課</div>' +
      '<div class="title-jp" lang="ja">' + jp(ch.title.jp) + '</div>' +
      '<div class="title-tr">' + esc(tx(ch.title)) + '</div></div>' +
      guide('neko', esc(t('chapterGreeting'))) +
      '<div class="mode-grid">' + modes + '</div>' +
      '</section>';
  }

  function emptyScreen(ch, mode) {
    app.innerHTML = '<section class="screen">' +
      '<div class="toprow">' + backLink('#/ch/' + ch.id, t('backToLesson')) + '</div>' +
      guide(GUIDE[mode], esc(t('emptyContent'))) +
      '</section>';
  }

  // ---------- Vocab & grammar study ----------

  function studyFrame(ch, mode, items, cardHtml, bubbleHtml) {
    var i = view.index;
    var last = i === items.length - 1;
    app.innerHTML = '<section class="screen">' +
      '<div class="toprow">' + backLink('#/ch/' + ch.id, t('backToLesson')) +
      progressBar(i + 1, items.length, (i + 1) + ' / ' + items.length) + '</div>' +
      guide(GUIDE[mode], bubbleHtml) +
      '<article class="card px">' + cardHtml + '</article>' +
      '<div class="nav">' +
      '<button class="btn" type="button" data-act="prev"' + (i === 0 ? ' disabled' : '') + '>◀ ' + esc(t('prev')) + '</button>' +
      '<button class="btn btn--primary" type="button" data-act="next">' + esc(last ? t('finish') : t('next')) + ' ▶</button>' +
      '</div></section>';
  }

  function renderVocab(ch) {
    if (!ch.vocab.length) return emptyScreen(ch, 'vocab');
    if (view.index == null) view.index = 0;
    var v = ch.vocab[view.index];
    var card = (v.group ? '<div class="chip">' + esc(t('groups')[v.group] || v.group) + '</div>' : '') +
      '<div class="word-jp" lang="ja">' + jp(v.jp) + '</div>' +
      (v.kanji ? '<div class="word-kanji" lang="ja">' + jp(v.kanji) + '</div>' : '') +
      '<div class="word-divider"></div>' +
      '<div class="word-meaning">' + jp(tx(v)) + '</div>' +
      (canSpeak ? '<button class="btn btn--small btn--blue listen" type="button" data-act="speak">🔊 ' + esc(t('listen')) + '</button>' : '');
    var bubble = v.note ? jp(tx(v.note)) : esc(view.index === 0 ? t('vocabIntro') : t('vocabTip'));
    studyFrame(ch, 'vocab', ch.vocab, card, bubble);
  }

  function renderGrammar(ch) {
    if (!ch.grammar.length) return emptyScreen(ch, 'grammar');
    if (view.index == null) view.index = 0;
    var g = ch.grammar[view.index];
    var examples = (g.examples || []).map(function (ex) {
      return '<div class="example"><div class="example-jp" lang="ja">' + jp(ex.jp) + '</div>' +
        '<div class="example-tr">' + esc(tx(ex)).replace(/\n/g, '<br>') + '</div></div>';
    }).join('');
    var notes = (g.notes || []).map(function (nt) {
      return '<li>' + jp(tx(nt)) + '</li>';
    }).join('');
    var card = '<div class="pattern" lang="ja">' + esc(g.pattern) + '</div>' +
      '<div class="pattern-title">' + esc(tx(g.title)) + '</div>' +
      (notes ? '<ul class="notes"><li class="notes-head">' + esc(t('noteLabel')) + '</li>' + notes + '</ul>' : '') +
      (examples ? '<div class="examples"><h3>' + esc(t('examples')) + '</h3>' + examples + '</div>' : '');
    studyFrame(ch, 'grammar', ch.grammar, card, jp(tx(g.explain)));
  }

  function lessonDone(ch, mode) {
    var quizMode = mode + '-quiz';
    openModal(function () {
      return '<div class="modal-head">' + SPR.svg(GUIDE[mode]) +
      '<div><div class="modal-who">' + esc(tx(SPR.CHARACTERS[GUIDE[mode]])) + '</div>' +
      '<h2 class="modal-title">' + esc(t('lessonDoneTitle')) + '</h2></div></div>' +
      '<p>' + esc(t('lessonDoneBody')) + '</p>' +
      '<div class="modal-actions">' +
      '<a class="btn" href="#/ch/' + ch.id + '">' + esc(t('later')) + '</a>' +
      '<a class="btn btn--primary" href="#/ch/' + ch.id + '/' + quizMode + '">' + esc(t('goQuiz')) + ' ▶</a>' +
      '</div>';
    }, { closable: true });
  }

  // ---------- Quiz ----------
  // Question shapes after normalizeQuestion():
  //   scene:  { type, who, title, lines }                 a story beat between questions (not scored)
  //   choice: { type, prompt, jp, talk, card, translation, explanation, choices: [{ value, correct, why }] }
  //   input:  { ...same context fields, answers, why }
  //   order:  { ...same context fields, pieces, answers, correctText, tiles }

  // Replace {name} everywhere in authored content (object keys too, so `why` keys still match choices).
  function personalize(v) {
    if (typeof v === 'string') return P(v);
    if (Array.isArray(v)) return v.map(personalize);
    if (v && typeof v === 'object') {
      var o = {};
      Object.keys(v).forEach(function (k) { o[P(k)] = personalize(v[k]); });
      return o;
    }
    return v;
  }

  function normalizeQuestion(raw) {
    var q = personalize(raw);
    if (q.type === 'scene') return { type: 'scene', who: q.who || 'neko', title: q.title, lines: q.lines || [] };
    var out = {
      type: q.type === 'input' || q.type === 'order' ? q.type : 'choice',
      prompt: q.prompt || (q.type === 'order' ? both('orderPrompt') : null),
      jp: q.jp || '',
      translation: q.translation,
      talk: q.talk,
      card: q.card,
      explanation: q.explanation,
      why: q.why || {}
    };
    if (out.type === 'input') {
      out.answers = q.answers || [q.answer];
      return out;
    }
    if (out.type === 'order') {
      // pieces are listed in the correct order; `answers` can add other accepted orders.
      out.pieces = q.pieces;
      out.answers = (q.answers || [q.pieces]).map(function (a) { return a.join(''); });
      out.correctText = q.pieces.join(' ');
      out.tiles = shuffleTiles(q.pieces);
      return out;
    }
    var answerIdx = typeof q.answer === 'number' ? q.answer : q.choices.indexOf(q.answer);
    var list = q.choices.map(function (c, i) {
      var key = typeof c === 'string' ? c : i;
      return { value: c, correct: i === answerIdx, why: out.why[key] };
    });
    out.fixedOrder = !!q.fixedOrder;
    out.choices = out.fixedOrder ? list : shuffle(list);
    return out;
  }

  // Shuffled piece indices, never left in the already-correct order.
  function shuffleTiles(pieces) {
    var idx = pieces.map(function (p, i) { return i; });
    for (var tries = 0; tries < 10; tries++) {
      var s = shuffle(idx);
      if (s.map(function (i) { return pieces[i]; }).join('') !== pieces.join('')) return s;
    }
    return idx.slice().reverse();
  }

  // A fresh copy of a question with its options reshuffled, for second tries.
  function reshuffled(q) {
    if (q.type === 'choice') return Object.assign({}, q, { choices: q.fixedOrder ? q.choices : shuffle(q.choices) });
    if (q.type === 'order') return Object.assign({}, q, { tiles: shuffleTiles(q.pieces) });
    return Object.assign({}, q);
  }

  // When a chapter has no authored vocab quiz, build one from its word list.
  function generateVocabQuiz(all) {
    var vocab = all.filter(function (v) { return v.group !== 'names' && v.en; });
    if (vocab.length < 4) return [];
    return shuffle(vocab).slice(0, 10).map(function (item, n) {
      // Prefer look-alike options from the same group (e.g. countries vs countries).
      var same = vocab.filter(function (v) { return v !== item && v.group === item.group; });
      var pool = same.length >= 3 ? same : vocab.filter(function (v) { return v !== item; });
      var others = shuffle(pool).slice(0, 3);
      var meaning = { en: item.en, zh: item.zh };
      if (n % 2 === 0) {
        // Japanese -> meaning
        return {
          type: 'choice',
          prompt: both('vqMeaning'),
          jp: wordLabel(item),
          explanation: both('vqExplain', wordLabel(item), meaning),
          choices: shuffle([{ value: meaning, correct: true }].concat(others.map(function (o) {
            return { value: { en: o.en, zh: o.zh }, correct: false, why: both('vqWhyMeaning', { en: o.en, zh: o.zh }, wordLabel(o)) };
          })))
        };
      }
      // Meaning -> Japanese
      return {
        type: 'choice',
        prompt: both('vqWord', meaning),
        jp: '',
        explanation: both('vqExplain', wordLabel(item), meaning),
        choices: shuffle([{ value: wordLabel(item), correct: true }].concat(others.map(function (o) {
          return { value: wordLabel(o), correct: false, why: both('vqWhyWord', wordLabel(o), { en: o.en, zh: o.zh }) };
        })))
      };
    });
  }

  function buildQuiz(ch, mode) {
    if (mode === 'grammar-quiz') {
      // A quiz with story scenes is played in its authored order.
      var story = ch.grammarQuiz.some(function (q) { return q.type === 'scene'; });
      return (story ? ch.grammarQuiz : shuffle(ch.grammarQuiz)).map(normalizeQuestion);
    }
    if (ch.vocabQuiz.length) return shuffle(ch.vocabQuiz).map(normalizeQuestion);
    return generateVocabQuiz(ch.vocab);
  }

  function normalizeAnswer(s) {
    return String(s || '')
      .normalize('NFKC')
      .replace(/[\s　]/g, '')
      .replace(/[。.!！?？、,]+$/g, '');
  }

  function startQuiz(questions, isReview) {
    view.quiz = {
      questions: questions,
      total: questions.filter(function (q) { return q.type !== 'scene'; }).length,
      isReview: !!isReview, // a "retry mistakes" run doesn't update the best score
      i: 0, line: 0, score: 0, streak: 0, bestStreak: 0,
      answered: null, wrong: [], picked: []
    };
  }

  // ----- Context blocks shown above a question -----

  function renderCard(c) {
    var rows = [['country', c.country], ['job', c.job], ['org', c.org], ['age', c.age != null ? c.age + '歳' : null]]
      .filter(function (r) { return r[1]; });
    return '<div class="namecard"><div class="namecard-top">名刺</div>' +
      '<div class="namecard-name" lang="ja">' + jp(c.name) + '</div><dl>' +
      rows.map(function (r) {
        return '<div><dt>' + esc(t('cardLabels')[r[0]]) + '</dt><dd lang="ja">' + jp(String(r[1])) + '</dd></div>';
      }).join('') + '</dl></div>';
  }

  function renderTalk(lines, fill) {
    return '<div class="talk">' + lines.map(function (l) {
      var you = l.who === 'you';
      var sprite = SPR.CHARACTERS[l.who];
      var avatar = you ? '' : sprite ? SPR.svg(l.who, 'talk-sprite')
        : '<span class="talk-initial" lang="ja">' + esc(l.who.charAt(0)) + '</span>';
      var label = you ? t('you') : sprite ? tx(sprite) : l.who;
      return '<div class="talk-line' + (you ? ' talk-line--you' : '') + '">' + avatar +
        '<div class="talk-bubble"><span class="talk-who">' + jp(label) + '</span>' +
        '<span class="talk-text" lang="ja">' + jp(l.jp, fill) + '</span></div></div>';
    }).join('') + '</div>';
  }

  // The text that fills （　） blanks once the question is answered.
  function fillText(q) {
    if (q.type === 'input') return q.answers[0];
    if (q.type === 'order') return q.correctText;
    return tx(q.choices.filter(function (c) { return c.correct; })[0].value);
  }

  // Progress counts only the original questions, so second tries never make the finish line move away.
  function quizTop(ch, quiz) {
    var done = quiz.questions.slice(0, quiz.i).filter(function (q) { return q.type !== 'scene' && !q.retry; }).length;
    var cur = quiz.questions[quiz.i];
    var label = cur && cur.type !== 'scene' && !cur.retry ? t('question', done + 1, quiz.total) : done + ' / ' + quiz.total;
    return '<div class="toprow">' + backLink('#/ch/' + ch.id, t('backToLesson')) +
      (quiz.streak >= 2 ? '<span class="combo" aria-live="polite">' + esc(t('combo', quiz.streak)) + '</span>' : '') +
      progressBar(done, quiz.total, label) + '</div>';
  }

  function renderScene(ch, quiz, q) {
    var last = quiz.line >= q.lines.length - 1;
    app.innerHTML = '<section class="screen">' + quizTop(ch, quiz) +
      '<article class="scene-card px">' +
      (q.title ? '<div class="scene-title">' + esc(tx(q.title)) + '</div>' : '') +
      SPR.svg(q.who, 'scene-sprite') +
      '<div class="bubble px scene-bubble"><span class="bubble-name">' + esc(tx(SPR.CHARACTERS[q.who])) + '</span>' +
      q.lines.slice(0, quiz.line + 1).map(function (l, idx) {
        return '<p class="bubble-text' + (idx === quiz.line ? ' is-new' : '') + '">' + jp(tx(l)) + '</p>';
      }).join('') + '</div>' +
      '<div class="feedback"><button class="btn btn--primary" type="button" data-act="scene-next">' +
      esc(last ? t('letsGo') : '▶') + '</button></div></article></section>';
    app.querySelector('[data-act="scene-next"]').focus({ preventScroll: true });
  }

  function renderQuiz(ch, mode) {
    if (!view.quiz) startQuiz(buildQuiz(ch, mode));
    var quiz = view.quiz;
    if (!quiz.questions.length) return emptyScreen(ch, mode);
    if (quiz.i >= quiz.questions.length) return renderResults(ch, mode);

    var q = quiz.questions[quiz.i];
    if (q.type === 'scene') return renderScene(ch, quiz, q);

    var a = quiz.answered; // null until the current question is answered
    var character = GUIDE[mode];

    var bubble = jp(tx(q.prompt));
    if (a && a.correct) {
      bubble = '<strong>' + esc(a.streak >= 3 ? t('streakLine', a.streak) : P(t('correctLines')[a.cheer])) + '</strong>';
    }

    var fill = a ? fillText(q) : null;
    var body = (q.retry ? '<div class="chip chip--retry">' + esc(t('secondChance')) + '</div>' : '') +
      (q.card ? renderCard(q.card) : '') +
      (q.talk ? renderTalk(q.talk, fill) : '') +
      (q.jp ? '<div class="q-jp" lang="ja">' + jp(q.jp, fill) + '</div>' : '') +
      (q.translation ? '<div class="q-tr">' + esc(tx(q.translation)) + '</div>' : '');

    if (q.type === 'order') {
      var picked = quiz.picked;
      var line = picked.length ? picked.map(function (pos) {
        return '<button type="button" class="btn tile" data-act="unpick" data-pos="' + pos + '"' + (a ? ' disabled' : '') + ' lang="ja">' +
          jp(q.pieces[q.tiles[pos]]) + '</button>';
      }).join('') : '<span class="order-hint">' + esc(t('orderHint')) + '</span>';
      body += '<div class="order-line' + (a ? (a.correct ? ' is-correct' : ' is-wrong') : '') + '">' + line + '</div>' +
        '<div class="order-bank">' + q.tiles.map(function (pieceIdx, pos) {
          var used = picked.indexOf(pos) >= 0;
          return '<button type="button" class="btn tile' + (used ? ' is-used' : '') + '" data-act="pick" data-pos="' + pos + '"' +
            (used || a ? ' disabled' : '') + ' lang="ja">' + jp(q.pieces[pieceIdx]) + '</button>';
        }).join('') + '</div>' +
        (a ? '' : '<div class="feedback"><button class="btn btn--primary" type="button" data-act="check-order"' +
          (picked.length === q.tiles.length ? '' : ' disabled') + '>' + esc(t('check')) + '</button></div>');
    } else if (q.type === 'choice') {
      // Sentence-length options get one per row so they stay readable on phones.
      var wide = q.choices.some(function (c) { return tx(c.value).length > 6; });
      body += '<div class="choices' + (wide ? ' choices--wide' : '') + '">' + q.choices.map(function (c, idx) {
        var cls = '';
        if (a) {
          if (c.correct) cls = ' is-correct';
          else if (a.choiceIdx === idx) cls = ' is-wrong';
        }
        return '<button type="button" class="btn choice' + cls + '" data-act="choose" data-idx="' + idx + '"' +
          (a ? ' disabled' : '') + ' lang="' + (typeof c.value === 'string' ? 'ja' : lang) + '">' + jp(tx(c.value)) + '</button>';
      }).join('') + '</div>';
    } else {
      body += '<form class="answer-form" data-act="submit" autocomplete="off">' +
        '<input class="answer-input' + (a ? (a.correct ? ' is-correct' : ' is-wrong') : '') + '" id="quiz-answer" name="answer" lang="ja" ' +
        'autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="' + esc(t('typePlaceholder')) + '"' +
        ' value="' + esc(a ? a.given : '') + '"' + (a ? ' readonly' : '') + '>' +
        (a ? '' : '<button class="btn btn--primary" type="submit">' + esc(t('check')) + '</button>') +
        '</form>';
    }

    // After a correct answer, show the explanation too: knowing *why* makes it stick.
    if (a && a.correct && q.explanation) {
      body += '<div class="tip"><span class="tip-head">' + esc(t('explanation')) + '</span>' + jp(tx(q.explanation)) + '</div>';
    }

    app.innerHTML = '<section class="screen">' + quizTop(ch, quiz) +
      guide(character, bubble, a && a.correct ? 'guide--happy' : '') +
      '<article class="card px">' + body +
      (a ? '<div class="feedback"><button class="btn btn--primary" type="button" data-act="next-q">' +
        esc(quiz.i === quiz.questions.length - 1 ? t('finish') : t('next')) + ' ▶</button></div>' : '') +
      '</article></section>';

    var input = app.querySelector('.answer-input');
    if (input && !a) input.focus({ preventScroll: true });
  }

  function answerQuestion(given, choiceIdx) {
    var quiz = view.quiz;
    var q = quiz.questions[quiz.i];
    var correct, why;
    if (q.type === 'choice') {
      var c = q.choices[choiceIdx];
      correct = c.correct;
      why = c.why;
      given = tx(c.value);
    } else if (q.type === 'order') {
      var words = quiz.picked.map(function (pos) { return q.pieces[q.tiles[pos]]; });
      given = words.join(' ');
      correct = q.answers.indexOf(words.join('')) >= 0;
    } else {
      var norm = normalizeAnswer(given);
      correct = q.answers.some(function (ans) { return normalizeAnswer(ans) === norm; });
      Object.keys(q.why).forEach(function (k) {
        if (normalizeAnswer(k) === norm) why = q.why[k];
      });
    }

    var requeued = false;
    if (correct) {
      quiz.streak++;
      quiz.bestStreak = Math.max(quiz.bestStreak, quiz.streak);
      if (!q.retry) quiz.score++;
    } else {
      quiz.streak = 0;
      if (!q.retry) {
        quiz.wrong.push(q);
        // Bring the question back a few steps later: retrieving it again is what makes it stick.
        var copy = reshuffled(q);
        copy.retry = true;
        quiz.questions.splice(Math.min(quiz.i + 4, quiz.questions.length), 0, copy);
        requeued = true;
      }
    }
    quiz.answered = {
      correct: correct, given: given, choiceIdx: choiceIdx, streak: quiz.streak,
      cheer: Math.floor(Math.random() * t('correctLines').length)
    };
    render();
    if (!correct) showMistake(q, given, why, choiceIdx, requeued);
  }

  function showMistake(q, given, why, choiceIdx, requeued) {
    var character = GUIDE[route.mode];

    openModal(function () {
      var correctText = q.type === 'input' ? q.answers.join(' / ')
        : q.type === 'order' ? q.correctText
        : tx(q.choices.filter(function (c) { return c.correct; })[0].value);
      if (q.type === 'choice') given = tx(q.choices[choiceIdx].value);
      return '<div class="modal-head">' + SPR.svg(character) +
      '<div><div class="modal-who">' + esc(tx(SPR.CHARACTERS[character])) + '</div>' +
      '<h2 class="modal-title" id="modal-title">' + esc(t('wrongTitle')) + '</h2></div></div>' +
      (q.jp ? '<div class="q-jp" lang="ja" style="font-size:19px">' + jp(q.jp, fillText(q)) + '</div>' : '') +
      (q.translation ? '<div class="q-tr">' + esc(tx(q.translation)) + '</div>' : '') +
      '<div class="answer-row answer-row--wrong"><span class="lbl">' + esc(t('yourAnswer')) + '</span>' +
      '<span class="val" lang="ja">' + jp(given || t('emptyAnswer')) + '</span></div>' +
      '<div class="answer-row answer-row--right"><span class="lbl">' + esc(t('correctAnswer')) + '</span>' +
      '<span class="val" lang="ja">' + jp(correctText) + '</span></div>' +
      (why ? '<div class="explain-block"><h3>' + esc(t('whyWrong')) + '</h3><p>' + jp(tx(why)) + '</p></div>' : '') +
      (q.explanation ? '<div class="explain-block"><h3>' + esc(t('explanation')) + '</h3><p>' + jp(tx(q.explanation)) + '</p></div>' : '') +
      (requeued ? '<p class="comeback">' + esc(t('comeBack')) + '</p>' : '') +
      '<div class="modal-actions"><button class="btn btn--primary" type="button" data-act="close-modal">' + esc(t('gotIt')) + '</button></div>';
    }, { closable: true, className: 'modal--wrong' });
  }

  // ----- Best results, kept in this browser -----

  function bestScores() {
    try { return JSON.parse(store('mnn-best') || '{}') || {}; } catch (e) { return {}; }
  }

  function starText(n) {
    var s = '';
    for (var i = 0; i < 3; i++) s += i < n ? '★' : '☆';
    return s;
  }

  function renderResults(ch, mode) {
    var quiz = view.quiz;
    var n = quiz.total;
    var ratio = n ? quiz.score / n : 0;
    var stars = ratio === 1 ? 3 : ratio >= 0.6 ? 2 : ratio > 0 ? 1 : 0;
    var msg = stars === 3 ? t('resultsGreat') : stars === 2 ? t('resultsGood') : t('resultsTry');
    var starHtml = '';
    for (var s = 0; s < 3; s++) starHtml += s < stars ? '★' : '<span class="off">★</span>';
    var studyMode = mode.replace('-quiz', '');

    if (!quiz.isReview && !quiz.saved) {
      var best = bestScores();
      var key = ch.id + ':' + mode;
      if (!(best[key] >= stars)) {
        best[key] = stars;
        store('mnn-best', JSON.stringify(best));
      }
      quiz.saved = true;
    }

    app.innerHTML = '<section class="screen">' +
      '<div class="toprow">' + backLink('#/ch/' + ch.id, t('backToLesson')) + '</div>' +
      guide('neko', esc(msg), stars >= 2 ? 'guide--happy' : '') +
      '<article class="card px results">' +
      '<h1 class="modal-title">' + esc(t('resultsTitle')) + '</h1>' +
      '<div class="stars" aria-label="' + stars + ' / 3">' + starHtml + '</div>' +
      '<div class="score">' + esc(t('score', quiz.score, n)) + '</div>' +
      (quiz.bestStreak >= 2 ? '<div class="best-combo">' + esc(t('bestCombo', quiz.bestStreak)) + '</div>' : '') +
      '<div class="actions">' +
      (quiz.wrong.length ? '<button class="btn btn--primary" type="button" data-act="retry-wrong">' + esc(t('retryMistakes')) + '</button>' : '') +
      '<button class="btn" type="button" data-act="retry-all">' + esc(t('retryAll')) + '</button>' +
      '<a class="btn" href="#/ch/' + ch.id + '/' + studyMode + '">' + esc(t('reviewLesson')) + '</a>' +
      '</div></article></section>';
  }

  // ---------- Modal ----------

  // build() returns the modal's HTML; it is called again when the language changes.
  var modalOpts = null;
  var lastFocus = null;

  function drawModal() {
    modalRoot.innerHTML = '<div class="overlay" data-act="overlay">' +
      '<div class="modal px ' + (modalOpts.className || '') + '" role="dialog" aria-modal="true">' + modalOpts.build() + '</div></div>';
    var focusable = modalRoot.querySelector('.btn--primary') || modalRoot.querySelector('.btn');
    if (focusable) focusable.focus();
  }

  function openModal(build, opts) {
    modalOpts = opts || {};
    modalOpts.build = build;
    lastFocus = document.activeElement;
    drawModal();
  }

  function closeModal() {
    if (!modalOpts) return;
    modalRoot.innerHTML = '';
    modalOpts = null;
    // Return focus to the "Next" button if there is one, so keyboard users can carry on.
    var next = app.querySelector('[data-act="next-q"]');
    if (next) next.focus();
    else if (lastFocus && document.body.contains(lastFocus)) lastFocus.focus();
  }

  // ---------- Events ----------

  document.addEventListener('click', function (e) {
    var langBtn = e.target.closest('.lang-toggle button');
    if (langBtn) {
      lang = langBtn.getAttribute('data-lang');
      store('mnn-lang', lang);
      render();
      if (modalOpts) drawModal();
      return;
    }

    var el = e.target.closest('[data-act]');
    if (!el) return;
    var act = el.getAttribute('data-act');

    if (act === 'overlay') {
      if (e.target === el && modalOpts && modalOpts.closable) closeModal();
      return;
    }
    if (act === 'close-modal') return closeModal();
    if (act === 'change-name') {
      userName = '';
      session('mnn-name', null);
      return render();
    }
    if (act === 'scene-next' && view.quiz) {
      var scene = view.quiz.questions[view.quiz.i];
      if (view.quiz.line < scene.lines.length - 1) view.quiz.line++;
      else { view.quiz.i++; view.quiz.line = 0; window.scrollTo(0, 0); }
      return render();
    }

    var items = route.mode === 'vocab' ? route.ch.vocab : route.mode === 'grammar' ? route.ch.grammar : null;
    if (act === 'prev' && view.index > 0) { view.index--; render(); }
    if (act === 'next' && items) {
      if (view.index < items.length - 1) { view.index++; render(); }
      else lessonDone(route.ch, route.mode);
    }
    if (act === 'speak') {
      var v = route.ch.vocab[view.index];
      speak(v.kanji || v.jp);
    }
    if (act === 'choose' && view.quiz && !view.quiz.answered) {
      answerQuestion(null, Number(el.getAttribute('data-idx')));
    }
    if (act === 'pick' && view.quiz && !view.quiz.answered) {
      view.quiz.picked.push(Number(el.getAttribute('data-pos')));
      render();
    }
    if (act === 'unpick' && view.quiz && !view.quiz.answered) {
      var pos = Number(el.getAttribute('data-pos'));
      view.quiz.picked = view.quiz.picked.filter(function (p) { return p !== pos; });
      render();
    }
    if (act === 'check-order' && view.quiz && !view.quiz.answered) answerQuestion(null, null);
    if (act === 'next-q') {
      view.quiz.i++;
      view.quiz.picked = [];
      view.quiz.answered = null;
      render();
      window.scrollTo(0, 0);
    }
    if (act === 'retry-wrong') {
      startQuiz(shuffle(view.quiz.wrong).map(reshuffled), true);
      render();
    }
    if (act === 'retry-all') {
      view.quiz = null;
      render();
    }
  });

  document.addEventListener('submit', function (e) {
    var nameForm = e.target.closest('[data-act="name"]');
    if (nameForm) {
      e.preventDefault();
      var name = nameForm.elements.name.value.trim().slice(0, 20);
      if (!name) return nameForm.elements.name.focus();
      userName = name;
      session('mnn-name', name);
      return render();
    }
    var form = e.target.closest('[data-act="submit"]');
    if (!form) return;
    e.preventDefault();
    if (view.quiz && !view.quiz.answered) answerQuestion(form.elements.answer.value, null);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalOpts && modalOpts.closable) closeModal();
    // Pressing Enter to confirm a Japanese IME conversion must not submit the form.
    if (e.key === 'Enter' && (e.isComposing || e.keyCode === 229)) e.preventDefault();
  });

  // Some browsers load speech voices asynchronously.
  if (canSpeak) window.speechSynthesis.getVoices();

  document.getElementById('street').innerHTML = SPR.scene();
  function navigate(path) {
    if (path === currentPath) return onRouteChange();
    currentPath = path;
    try { history.pushState(null, '', path); } catch (e) { /* URL can't be changed here */ }
    onRouteChange();
  }

  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href^="#/"]');
    if (!link) return;
    e.preventDefault();
    navigate(link.getAttribute('href'));
  }, true);

  window.addEventListener('popstate', function () {
    currentPath = location.hash;
    onRouteChange();
  });
  onRouteChange();
})();
