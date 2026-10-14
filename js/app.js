(function () {
  'use strict';

  var STR = window.MNN_STRINGS;
  var SPR = window.MNN_SPRITES;
  var DATA = window.MNN;
  var ROMAJI = window.MNN_ROMAJI;

  var app = document.getElementById('app');
  var modalRoot = document.getElementById('modal-root');

  var KANJI_NUM = ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
  // Modes shown on a lesson's menu. The phrase quiz is reached from the end of Conversation.
  var MODES = ['vocab', 'grammar', 'phrases', 'vocab-quiz', 'grammar-quiz', 'dictation'];
  var ALL_MODES = MODES.concat(['phrases-quiz']);
  var STUDY_MODES = ['vocab', 'grammar', 'phrases'];
  var GUIDE = { vocab: 'tanuki', 'vocab-quiz': 'tanuki', grammar: 'kitsune', 'grammar-quiz': 'kitsune',
    phrases: 'neko', 'phrases-quiz': 'neko', dictation: 'neko' };
  var MODE_JP = { vocab: 'ごい', grammar: 'ぶんぽう', phrases: 'かいわ', 'vocab-quiz': 'ごいクイズ', 'grammar-quiz': 'ぶんぽうクイズ',
    'phrases-quiz': 'かいわクイズ', dictation: 'ききとり' };

  // Phrases from 練習C and 会話 live in the Conversation section, not in Vocabulary.
  var PHRASE_GROUPS = ['expressions', 'conversation'];
  function isPhrase(v) { return PHRASE_GROUPS.indexOf(v.group) >= 0; }
  function words(ch) { return ch.vocab.filter(function (v) { return !isPhrase(v); }); }
  function phrases(ch) { return ch.vocab.filter(isPhrase); }
  // The Conversation section: the lesson's 会話 dialogue first (when we have it), then its phrases.
  function convo(ch) { return (ch.dialogue ? [{ dialogue: ch.dialogue }] : []).concat(phrases(ch)); }

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

  // Japanese text: escapes, adds readings (furigana / romaji) and highlights （　） blanks.
  // A fill like 'は … か' fills several blanks in turn.
  function jp(s, fill, mode) {
    var fills = fill == null ? null : String(fill).split(' … ');
    var n = 0;
    var html = readings(esc(P(s)), mode || 'ja').replace(/\n/g, '<br>');
    return html.replace(/[（(]\s*[　 ]?\s*[）)]/g, function () {
      return fills
        ? '<span class="blank blank--filled">' + readings(esc(fills[Math.min(n++, fills.length - 1)]), 'ja') + '</span>'
        : '<span class="blank">（　）</span>';
    });
  }

  // Translated content ({en, zh}) or a Japanese string. Chinese sentences must not get
  // Japanese readings over their hanzi, so in Chinese only the Japanese inside them does:
  // anything quoted in 「」 and kanji written next to kana (e.g. 社員です).
  function tj(v) {
    if (typeof v === 'string') return jp(v);
    var text = tx(v);
    if (lang !== 'zh') return jp(text);
    return text.split(/(「[^」]*」)/).map(function (part) {
      return jp(part, null, part.charAt(0) === '「' ? 'ja' : 'zh');
    }).join('');
  }

  // Readings for every kanji word the app uses. Longest match wins; {漢字|かな} in the
  // content still overrides. 人 is decided by context (アメリカ人 → じん, あの人 → ひと).
  var KANJI_READINGS = {
    '第一課': 'だいいっか', '第二課': 'だいにか', '第三課': 'だいさんか', '第四課': 'だいよんか',
    '第五課': 'だいごか', '第六課': 'だいろっか', '第七課': 'だいななか', '第八課': 'だいはっか',
    '日本語': 'にほんご', '日本': 'にほん', '中国': 'ちゅうごく', '韓国': 'かんこく', '英語': 'えいご',
    '会社員': 'かいしゃいん', '銀行員': 'ぎんこういん', '研究者': 'けんきゅうしゃ', '社員': 'しゃいん',
    '会社': 'かいしゃ', '銀行': 'ぎんこう', '医者': 'いしゃ', '教師': 'きょうし', '先生': 'せんせい',
    '学生': 'がくせい', '大学': 'だいがく', '病院': 'びょういん', '神戸': 'こうべ', '富士': 'ふじ',
    '電気': 'でんき', '電車': 'でんしゃ', '甲子園': 'こうしえん',
    '山田': 'やまだ', '田中': 'たなか', '佐藤': 'さとう', '鈴木': 'すずき',
    '名前': 'なまえ', '名刺': 'めいし', '失礼': 'しつれい', '世話': 'せわ', '一郎': 'いちろう', '土産': 'みやげ',
    '何時': 'なんじ', '何歳': 'なんさい', '何': 'なん', '歳': 'さい',
    '辞書': 'じしょ', '雑誌': 'ざっし', '新聞': 'しんぶん', '手帳': 'てちょう', '鉛筆': 'えんぴつ',
    '時計': 'とけい', '傘': 'かさ', '車': 'くるま', '机': 'つくえ', '本': 'ほん', '語': 'ご', '方': 'かた',
    '気持': 'きも', '頑張': 'がんば', '初': 'はじ', '来': 'き', '行': 'い', '違': 'ちが', '願': 'ねが',
    '練習': 'れんしゅう', '問題': 'もんだい', '会話': 'かいわ', '例': 'れい', '人': 'ひと',
    '教室': 'きょうしつ', '食堂': 'しょくどう', '事務所': 'じむしょ', '会議室': 'かいぎしつ', '受付': 'うけつけ',
    '部屋': 'へや', '手洗': 'てあら', '階段': 'かいだん', '自動販売機': 'じどうはんばいき', '電話': 'でんわ',
    '国': 'くに', '学校': 'がっこう', '靴': 'くつ', '売': 'う', '場': 'ば', '地下': 'ちか', '店員': 'てんいん',
    '何階': 'なんがい', '階': 'かい', '円': 'えん', '百': 'ひゃく', '千': 'せん', '万': 'まん', '見': 'み',
    '新大阪': 'しんおおさか', '大阪': 'おおさか', '屋上': 'おくじょう', '遊園地': 'ゆうえんち',
    '催': 'もよお', '物': 'もの', '会場': 'かいじょう', '眼鏡': 'めがね', '用品': 'ようひん', '旅行': 'りょこう',
    '子': 'こ', '服': 'ふく', '文房具': 'ぶんぼうぐ', '家具': 'かぐ', '食器': 'しょっき', '電化製品': 'でんかせいひん',
    '紳士服': 'しんしふく', '婦人服': 'ふじんふく', '化粧品': 'けしょうひん', '食品': 'しょくひん', '駐車場': 'ちゅうしゃじょう',
    '起': 'お', '寝': 'ね', '働': 'はたら', '休': 'やす', '勉強': 'べんきょう', '終': 'お',
    '郵便局': 'ゆうびんきょく', '図書館': 'としょかん', '美術館': 'びじゅつかん', '今晩': 'こんばん', '今': 'いま',
    '何時': 'なんじ', '何分': 'なんぷん', '時間': 'じかん', '時': 'じ', '分': 'ふん', '半': 'はん',
    '午前': 'ごぜん', '午後': 'ごご', '朝': 'あさ', '昼休': 'ひるやす', '昼': 'ひる', '晩': 'ばん', '夜': 'よる',
    '試験': 'しけん', '会議': 'かいぎ', '映画': 'えいが', '毎朝': 'まいあさ', '毎晩': 'まいばん', '毎日': 'まいにち',
    '月曜日': 'げつようび', '火曜日': 'かようび', '水曜日': 'すいようび', '木曜日': 'もくようび', '金曜日': 'きんようび',
    '土曜日': 'どようび', '日曜日': 'にちようび', '何曜日': 'なんようび', '曜日': 'ようび',
    '大変': 'たいへん', '番号': 'ばんごう', '何番': 'なんばん', '北京': 'ぺきん', '店': 'みせ', '病院': 'びょういん', '東京': 'とうきょう', '奈良': 'なら'
  };
  var KANJI_KEYS = Object.keys(KANJI_READINGS).sort(function (a, b) { return b.length - a.length; });
  var READING_RE = new RegExp('\\{([^|}]+)\\|([^}]+)\\}|(' + KANJI_KEYS.join('|') + ')|([\\u30A1-\\u30FA\\u30FC]+)', 'g');
  var KANA = /[ぁ-ゖァ-ヺー]/;

  function ruby(base, reading, cls) {
    return '<ruby' + (cls ? ' class="' + cls + '"' : '') + '>' + base +
      '<rt' + (cls ? ' class="romaji"' : '') + '>' + reading + '</rt></ruby>';
  }

  // mode 'ja': all readings. mode 'zh': kanji readings only next to kana (see tj).
  function readings(html, mode) {
    return html.replace(READING_RE, function (m, base, reading, kanji, kata, offset, str) {
      if (base) return ruby(base, reading);
      if (kanji) {
        var before = str.charAt(offset - 1), after = str.charAt(offset + m.length);
        if (mode === 'zh' && !KANA.test(before) && !KANA.test(after)) return m;
        if (m === '分') {
          var digits = str.slice(0, offset).match(/[0-9０-９]+$/);
          var last = digits ? digits[0].normalize('NFKC') : '';
          var pun = /[13468]$|0$/.test(last);
          return ruby(m, pun ? 'ぷん' : 'ふん');
        }
        if (m === '人') {
          // After a country name (katakana, 国, 日本) or 〜 it's the suffix じん.
          var jin = /[ァ-ヺー〜～国]/.test(before) || str.slice(offset - 2, offset) === '日本';
          return ruby(m, jin ? 'じん' : 'ひと');
        }
        return ruby(m, KANJI_READINGS[m]);
      }
      if (/^ー+$/.test(kata)) return m;
      return ruby(kata, ROMAJI(kata), 'kata');
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
  if (canSpeak && window.speechSynthesis.addEventListener) {
    window.speechSynthesis.addEventListener('voiceschanged', function () {
      japaneseVoice();
      if (view.quiz && route.mode === 'dictation' && noJapaneseVoice()) render();
    });
  }

  var voicesLoaded = false;
  var lastUtterance = null; // kept so the browser doesn't drop it mid-sentence

  function japaneseVoice() {
    var voices = window.speechSynthesis.getVoices();
    if (voices.length) voicesLoaded = true;
    return voices.filter(function (v) { return /^ja/i.test(v.lang); })[0] || null;
  }

  // True once we know this device has voices but none of them speak Japanese.
  function noJapaneseVoice() {
    return canSpeak && voicesLoaded && !japaneseVoice();
  }

  // Must be called straight from a tap: iPhone/Safari and some embeds block speech otherwise.
  // onFail runs if the browser refuses to speak, so the page can show a fallback.
  function speak(text, slow, onFail) {
    if (!canSpeak) { if (onFail) onFail(); return; }
    var synth = window.speechSynthesis;
    if (synth.speaking || synth.pending) synth.cancel();
    if (synth.paused) synth.resume();
    var u = new SpeechSynthesisUtterance(text.replace(/[〜～［］\[\]]/g, ''));
    u.lang = 'ja-JP';
    u.rate = slow ? 0.55 : 0.85;
    u.volume = 1;
    var voice = japaneseVoice();
    if (voice) u.voice = voice;
    u.onerror = function (e) {
      if (onFail && e.error !== 'interrupted' && e.error !== 'canceled') onFail(e.error);
    };
    lastUtterance = u;
    synth.speak(u);
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
      var mode = ALL_MODES.indexOf(parts[2]) >= 0 ? parts[2] : null;
      return { ch: DATA.chapters[parts[1]], mode: mode };
    }
    return {};
  }

  function onRouteChange() {
    route = parseRoute();
    if (route.ch) store('mnn-here', String(route.ch.id));
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

    document.body.classList.toggle('is-home', !!userName && !route.ch);
    if (!userName) return renderWelcome();
    if (!route.ch) return renderHome();
    if (!route.mode) return renderChapter(route.ch);
    if (route.mode === 'vocab') return renderVocab(route.ch);
    if (route.mode === 'phrases') return renderPhrases(route.ch);
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
    return ['vocab-quiz', 'grammar-quiz', 'dictation'].reduce(function (sum, m) {
      return sum + (best[ch.id + ':' + m] || 0);
    }, 0);
  }

  // Each lesson is a village on a winding path, laid out to fit the screen without scrolling:
  // 4 villages per row on wide screens, 2 per row on phones, snaking back and forth.
  // Tapping a village walks the traveller there along the path, then opens the lesson.
  var VILLAGE_ART = ['house', 'shrinePink', 'housePink', 'shrine'];
  var traveling = false;
  var mapState = null;

  function mapIds() {
    return Object.keys(DATA.chapters).map(Number).sort(function (a, b) { return a - b; });
  }

  function mapLayout(w, h) {
    var ids = mapIds();
    var cols = w / h >= 1.1 ? Math.min(4, ids.length) : 2;
    var rows = Math.ceil(ids.length / cols);
    var rowH = h / rows, colW = w / cols;
    var pts = ids.map(function (id, i) {
      var r = Math.floor(i / cols), c = i % cols;
      if (r % 2) c = cols - 1 - c; // snake back on every other row
      return { id: id, x: colW * (c + 0.5), y: rowH * r + rowH * 0.52 + (c % 2 ? 6 : -6) };
    });
    var d = 'M' + pts[0].x.toFixed(1) + ' ' + pts[0].y.toFixed(1);
    for (var i = 1; i < pts.length; i++) {
      var p0 = pts[i - 1], p1 = pts[i], c1, c2;
      if (Math.abs(p1.y - p0.y) > rowH / 2) {
        // Down to the next row: bulge out toward the nearer edge.
        var out = (p0.x > w / 2 ? 1 : -1) * colW * 0.42;
        c1 = [p0.x + out, p0.y + (p1.y - p0.y) * 0.3];
        c2 = [p1.x + out, p1.y - (p1.y - p0.y) * 0.3];
      } else {
        var mx = (p1.x - p0.x) / 2;
        c1 = [p0.x + mx, p0.y];
        c2 = [p1.x - mx, p1.y];
      }
      d += ' C' + c1[0].toFixed(1) + ' ' + c1[1].toFixed(1) + ' ' + c2[0].toFixed(1) + ' ' + c2[1].toFixed(1) +
        ' ' + p1.x.toFixed(1) + ' ' + p1.y.toFixed(1);
    }
    return { ids: ids, pts: pts, w: w, h: h, d: d, rowH: rowH, colW: colW };
  }

  function currentVillage() {
    var here = Number(store('mnn-here'));
    return DATA.chapters[here] ? here : mapIds()[0];
  }

  // Trees scattered with a fixed seed, so the map looks the same on every visit.
  function mapScenery(layout) {
    var out = '', seed = 11;
    function rnd() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
    var n = Math.round(layout.w * layout.h / 4200);
    for (var i = 0; i < n; i++) {
      var x = 4 + rnd() * (layout.w - 20), y = 4 + rnd() * (layout.h - 24);
      var kind = rnd() < 0.35 ? 'sakura' : 'pine';
      var clear = layout.pts.every(function (p) {
        return Math.abs(p.x - x) > layout.colW * 0.36 || Math.abs(p.y - y) > layout.rowH * 0.48;
      });
      if (clear) out += '<g transform="translate(' + x.toFixed(0) + ' ' + y.toFixed(0) + ') scale(1.5)">' + SPR.raw(kind) + '</g>';
    }
    return out;
  }

  function renderHome() {
    var ids = mapIds();
    var here = currentVillage();
    var next = ids[ids.indexOf(here) + 1];
    app.innerHTML = '<section class="screen home">' +
      guide('neko', esc(t('homeGreeting'))) +
      '<div class="map-actions">' +
      '<button type="button" class="btn btn--small" data-act="travel" data-ch="' + here + '">' + esc(t('enterVillage', here)) + '</button>' +
      (next ? '<button type="button" class="btn btn--small btn--primary" data-act="travel" data-ch="' + next + '">' + esc(t('nextVillage', next)) + '</button>' : '') +
      '<button type="button" class="link-btn" data-act="change-name">' + esc(t('notYou')) + '</button>' +
      '</div>' +
      '<div class="map px" id="map" role="group" aria-label="' + esc(t('chooseChapter')) + '"></div></section>';
    drawMap();
  }

  // Sizes the map to the space left on screen, then draws the road, villages and traveller.
  function drawMap() {
    var box = document.getElementById('map');
    if (!box) return;
    var w = box.clientWidth;
    var h = Math.round(window.innerHeight - box.getBoundingClientRect().top - 12);
    h = Math.max(320, Math.min(h, w * 2.2));
    box.style.height = h + 'px';
    var layout = mapState = mapLayout(w, h);
    box.classList.toggle('map--compact', layout.rowH < 110);
    var here = currentVillage();
    var art = Math.max(30, Math.min(54, layout.rowH * 0.34));

    var villages = layout.pts.map(function (p, i) {
      var ch = DATA.chapters[p.id];
      var stars = chapterStars(ch);
      return '<button type="button" class="village' + (p.id === here ? ' is-here' : '') + (hasContent(ch) ? '' : ' is-soon') +
        '" data-act="travel" data-ch="' + p.id + '" style="left:' + p.x.toFixed(1) + 'px;top:' + p.y.toFixed(1) + 'px;--art:' + art.toFixed(0) + 'px" ' +
        'aria-label="' + esc(STR.en.lessonN(p.id) + ' · ' + ch.title.jp) + '" title="' + esc(ch.title.jp) + '">' +
        SPR.svg(VILLAGE_ART[i % VILLAGE_ART.length], 'village-art') +
        '<span class="village-sign"><span class="village-kanji">' + jp('第' + kanjiNum(p.id) + '課') + '</span>' +
        '<span class="village-en">' + esc(STR.en.lessonN(p.id)) + '</span>' +
        (stars ? '<span class="village-stars">★ ' + stars + ' / 9</span>'
          : hasContent(ch) ? '' : '<span class="village-soon">' + esc(t('comingSoon')) + '</span>') +
        '</span></button>';
    }).join('');

    var herePt = layout.pts[layout.ids.indexOf(here)];
    box.innerHTML = '<svg class="map-svg" viewBox="0 0 ' + w + ' ' + h + '" shape-rendering="crispEdges" aria-hidden="true" focusable="false">' +
      mapScenery(layout) +
      '<path d="' + layout.d + '" class="map-road-edge"/>' +
      '<path d="' + layout.d + '" class="map-road" id="map-path"/>' +
      '<path d="' + layout.d + '" class="map-road-stones"/>' +
      '</svg>' + villages +
      '<div class="traveler" id="traveler" style="left:' + herePt.x.toFixed(1) + 'px;top:' + herePt.y.toFixed(1) + 'px">' +
      '<span class="traveler-name">' + esc(userName) + '</span>' + SPR.svg('traveler') + '</div>';
  }

  var resizeTimer = null;
  window.addEventListener('resize', function () {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(function () {
      if (!traveling && document.getElementById('map')) drawMap();
    }, 150);
  });

  // Length along the road up to village number idx.
  function roadLengthTo(layout, idx) {
    if (idx <= 0) return 0;
    var svg = app.querySelector('.map-svg');
    var tmp = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    tmp.setAttribute('d', layout.d.split(' C').slice(0, idx + 1).join(' C'));
    svg.appendChild(tmp);
    var len = tmp.getTotalLength();
    svg.removeChild(tmp);
    return len;
  }

  function travelTo(id) {
    if (traveling) return;
    var layout = mapState;
    var from = currentVillage();
    var go = function () {
      traveling = false;
      store('mnn-here', String(id));
      navigate('#/ch/' + id);
    };
    var walker = document.getElementById('traveler');
    var road = document.getElementById('map-path');
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!layout || !walker || !road || from === id || reduce) return go();

    var i0 = layout.ids.indexOf(from), i1 = layout.ids.indexOf(id);
    var l0 = roadLengthTo(layout, i0), l1 = roadLengthTo(layout, i1);
    var duration = Math.min(2800, 600 + Math.abs(i1 - i0) * 450);

    traveling = true;
    walker.classList.add('is-walking');
    var start = null, lastX = null;
    function step(ts) {
      if (start === null) start = ts;
      var k = Math.min(1, (ts - start) / duration);
      var e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
      var pt = road.getPointAtLength(l0 + (l1 - l0) * e);
      if (lastX !== null && Math.abs(pt.x - lastX) > 0.05) walker.classList.toggle('is-left', pt.x < lastX);
      lastX = pt.x;
      walker.style.left = pt.x.toFixed(1) + 'px';
      walker.style.top = pt.y.toFixed(1) + 'px';
      if (k < 1) window.requestAnimationFrame(step);
      else {
        walker.classList.remove('is-walking');
        walker.classList.add('is-arrived');
        window.setTimeout(go, 350);
      }
    }
    window.requestAnimationFrame(step);
  }

  // ---------- Chapter menu ----------

  function quizLength(ch, mode) {
    if (mode === 'dictation') return Math.min(10, dictationPool(words(ch)).length);
    if (mode === 'grammar-quiz') return Math.min(MAX_QUESTIONS, ch.grammarQuiz.filter(function (q) { return q.type !== 'scene'; }).length);
    var pool = mode === 'phrases-quiz' ? phrases(ch) : words(ch);
    var n = pool.filter(function (v) { return v.group !== 'names' && v.en; }).length;
    if (mode === 'phrases-quiz') return n >= 4 ? Math.min(10, n) : 0;
    return ch.vocabQuiz.length || (n >= 4 ? Math.min(10, n) : 0);
  }

  function renderChapter(ch) {
    var counts = {
      vocab: t('itemsCount', words(ch).length),
      phrases: t('itemsCount', convo(ch).length),
      grammar: t('itemsCount', ch.grammar.length),
      'vocab-quiz': t('questionsCount', quizLength(ch, 'vocab-quiz')),
      'grammar-quiz': t('questionsCount', quizLength(ch, 'grammar-quiz')),
      dictation: t('questionsCount', quizLength(ch, 'dictation'))
    };
    var best = bestScores();
    var modes = MODES.map(function (m) {
      var isQuiz = STUDY_MODES.indexOf(m) < 0;
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
      '<div class="chapter-head"><div class="kanji">' + jp('第' + kanjiNum(ch.id) + '課') + '</div>' +
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
    var list = words(ch);
    if (!list.length) return emptyScreen(ch, 'vocab');
    if (view.index == null) view.index = 0;
    var v = list[view.index];
    var card = (v.group ? '<div class="chip">' + esc(t('groups')[v.group] || v.group) + '</div>' : '') +
      '<div class="word-jp" lang="ja">' + jp(v.jp) + '</div>' +
      (v.kanji ? '<div class="word-kanji" lang="ja">' + jp(v.kanji) + '</div>' : '') +
      '<div class="word-divider"></div>' +
      '<div class="word-meaning">' + tj({ en: v.en, zh: v.zh }) + '</div>' +
      (canSpeak ? '<button class="btn btn--small btn--blue listen" type="button" data-act="speak">🔊 ' + esc(t('listen')) + '</button>' : '');
    var bubble = v.note ? tj(v.note) : esc(view.index === 0 ? t('vocabIntro') : t('vocabTip'));
    studyFrame(ch, 'vocab', list, card, bubble);
  }

  // Conversation: the lesson's set phrases, each with when to use it.
  function renderPhrases(ch) {
    var list = convo(ch);
    if (!list.length) return emptyScreen(ch, 'phrases');
    if (view.index == null) view.index = 0;
    var v = list[view.index];
    if (v.dialogue) return studyFrame(ch, 'phrases', list, renderDialogue(v.dialogue), esc(t('dialogueIntro')));
    var card = (v.group ? '<div class="chip">' + esc(t('groups')[v.group] || v.group) + '</div>' : '') +
      '<div class="word-jp phrase-jp" lang="ja">' + jp(v.jp) + '</div>' +
      (v.kanji ? '<div class="word-kanji" lang="ja">' + jp(v.kanji) + '</div>' : '') +
      '<div class="word-divider"></div>' +
      '<div class="word-meaning">' + tj({ en: v.en, zh: v.zh }) + '</div>' +
      (v.note ? '<div class="tip phrase-when"><span class="tip-head">' + esc(t('whenToUse')) + '</span>' + tj(v.note) + '</div>' : '') +
      (canSpeak ? '<button class="btn btn--small btn--blue listen" type="button" data-act="speak">🔊 ' + esc(t('listen')) + '</button>' : '');
    var first = view.index === (ch.dialogue ? 1 : 0);
    var bubble = esc(first ? t('phrasesIntro') : t('phrasesTip'));
    studyFrame(ch, 'phrases', list, card, bubble);
  }

  // The 会話 as chat bubbles, split into its scenes, with the meaning tucked away until asked for.
  function renderDialogue(d) {
    var lines = [].concat.apply([], d.parts);
    return '<div class="chip">' + jp(esc(t('dialogue'))) + '</div>' +
      '<div class="dialogue-title" lang="ja">' + jp(d.title) + '</div>' +
      d.parts.map(function (part) { return renderTalk(part); }).join('<div class="dialogue-break"></div>') +
      '<details class="dialogue-meaning"><summary>' + esc(t('showMeaning')) + '</summary><ol>' +
      lines.map(function (l) { return '<li><span lang="ja">' + jp(l.who) + '</span>: ' + tj({ en: l.en, zh: l.zh }) + '</li>'; }).join('') +
      '</ol></details>' +
      (canSpeak ? '<button class="btn btn--small btn--blue listen" type="button" data-act="speak">🔊 ' + esc(t('listen')) + '</button>' : '');
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
      return '<li>' + tj(nt) + '</li>';
    }).join('');
    var card = '<div class="pattern" lang="ja">' + jp(g.pattern) + '</div>' +
      '<div class="pattern-title">' + esc(tx(g.title)) + '</div>' +
      (g.table ? grammarTable(g.table) : '') +
      (notes ? '<ul class="notes"><li class="notes-head">' + esc(t('noteLabel')) + '</li>' + notes + '</ul>' : '') +
      (examples ? '<div class="examples"><h3>' + esc(t('examples')) + '</h3>' + examples + '</div>' : '');
    studyFrame(ch, 'grammar', ch.grammar, card, tj(g.explain));
  }

  function grammarTable(tb) {
    return '<div class="g-table-wrap"><table class="g-table"><thead><tr><th></th>' +
      tb.head.map(function (h) { return '<th>' + tj(h) + '</th>'; }).join('') + '</tr></thead><tbody>' +
      tb.rows.map(function (r) {
        return '<tr><th scope="row">' + esc(tx(r.label)) + '</th>' +
          r.cells.map(function (c) { return '<td lang="ja">' + jp(c) + '</td>'; }).join('') + '</tr>';
      }).join('') + '</tbody></table></div>';
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
  function generateVocabQuiz(all, isPhrases) {
    var kMeaning = isPhrases ? 'pqMeaning' : 'vqMeaning', kWord = isPhrases ? 'pqWord' : 'vqWord';
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
          prompt: both(kMeaning),
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
        prompt: both(kWord, meaning),
        jp: '',
        explanation: both('vqExplain', wordLabel(item), meaning),
        choices: shuffle([{ value: wordLabel(item), correct: true }].concat(others.map(function (o) {
          return { value: wordLabel(o), correct: false, why: both('vqWhyWord', wordLabel(o), { en: o.en, zh: o.zh }) };
        })))
      };
    });
  }

  // Every quiz has at most MAX_QUESTIONS questions (story scenes don't count).
  var MAX_QUESTIONS = 20;
  function capQuestions(list) {
    var count = 0;
    return list.filter(function (q) { return q.type === 'scene' || ++count <= MAX_QUESTIONS; });
  }

  // Dictation: plain kana words (no 〜, brackets or alternatives) that are easy to hear and type.
  function dictationPool(vocab) {
    return vocab.filter(function (v) {
      var word = v.jp.replace(/[。、？！\s]/g, '');
      return v.group !== 'names' && v.en && /^[\u3041-\u3096\u30A1-\u30FA\u30FC]+$/.test(word) && word.length <= 10;
    });
  }

  function generateDictation(vocab) {
    return shuffle(dictationPool(vocab)).slice(0, 10).map(function (v) {
      var reading = v.jp.replace(/[。、？！\s]/g, '');
      var meaning = { en: v.en, zh: v.zh };
      return {
        type: 'dictation',
        prompt: both('dictPrompt'),
        say: reading,
        word: wordLabel(v),
        meaning: meaning,
        answers: [reading].concat(v.kanji ? [v.kanji.replace(/[。、？！\s]/g, '')] : []),
        why: {},
        explanation: both('vqExplain', wordLabel(v), meaning)
      };
    });
  }

  // Katakana → hiragana, so a dictation answer counts whichever kana it's typed in.
  function toHiragana(s) {
    return s.replace(/[\u30A1-\u30F6]/g, function (c) { return String.fromCharCode(c.charCodeAt(0) - 0x60); });
  }

  function kanaRomaji(s) {
    return ROMAJI(s.replace(/[\u3041-\u3096]/g, function (c) { return String.fromCharCode(c.charCodeAt(0) + 0x60); }));
  }

  function buildQuiz(ch, mode) {
    if (mode === 'dictation') return generateDictation(words(ch));
    if (mode === 'phrases-quiz') return generateVocabQuiz(phrases(ch), true);
    if (mode === 'grammar-quiz') {
      // A quiz with story scenes is played in its authored order.
      var story = ch.grammarQuiz.some(function (q) { return q.type === 'scene'; });
      return capQuestions(story ? ch.grammarQuiz : shuffle(ch.grammarQuiz)).map(normalizeQuestion);
    }
    if (ch.vocabQuiz.length) return capQuestions(shuffle(ch.vocabQuiz)).map(normalizeQuestion);
    return generateVocabQuiz(words(ch));
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
    return '<div class="namecard"><div class="namecard-top">' + jp('名刺') + '</div>' +
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
        '<div class="talk-bubble"><span class="talk-who">' + (you || sprite ? esc(label) : jp(label)) + '</span>' +
        '<span class="talk-text" lang="ja">' + jp(l.jp, fill) + '</span></div></div>';
    }).join('') + '</div>';
  }

  // The text that fills （　） blanks once the question is answered.
  function fillText(q) {
    if (q.type === 'input' || q.type === 'dictation') return q.answers[0];
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
        return '<p class="bubble-text' + (idx === quiz.line ? ' is-new' : '') + '">' + tj(l) + '</p>';
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

    var bubble = tj(q.prompt);
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
          (a ? ' disabled' : '') + ' lang="' + (typeof c.value === 'string' ? 'ja' : lang) + '">' + tj(c.value) + '</button>';
      }).join('') + '</div>';
    } else {
      var dict = q.type === 'dictation';
      if (dict) {
        // If this device can't speak Japanese, say so and show the word in romaji instead.
        var fallback = !canSpeak || quiz.speechFailed || noJapaneseVoice();
        body += '<div class="dict-controls">' +
          (canSpeak ? '<button type="button" class="btn btn--blue dict-play" data-act="dict-play">🔊 ' + esc(t('dictPlay')) + '</button>' +
            '<button type="button" class="btn btn--small" data-act="dict-slow">' + esc(t('dictSlow')) + '</button>' : '') +
          (fallback && !a ? '<p class="dict-fallback">' + esc(t('noSpeech')) + '</p><div class="q-jp dict-romaji">' + esc(kanaRomaji(q.say)) + '</div>' : '') +
          '</div>';
      }
      body += '<form class="answer-form" data-act="submit" autocomplete="off">' +
        '<input class="answer-input' + (a ? (a.correct ? ' is-correct' : ' is-wrong') : '') + '" id="quiz-answer" name="answer" lang="ja" ' +
        'autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="' + esc(t(dict ? 'dictPlaceholder' : 'typePlaceholder')) + '"' +
        ' value="' + esc(a ? a.given : '') + '"' + (a ? ' readonly' : '') + '>' +
        (a ? '' : '<button class="btn btn--primary" type="submit">' + esc(t('check')) + '</button>') +
        '</form>';
    }

    // Dictation: once answered, reveal the word with its kanji, reading and meaning.
    if (a && q.type === 'dictation') {
      body += '<div class="dict-reveal"><div class="dict-word" lang="ja">' + jp(q.word) + '</div>' +
        '<div class="dict-meaning">' + tj(q.meaning) + '</div></div>';
    }

    // After a correct answer, show the explanation too: knowing *why* makes it stick.
    if (a && a.correct && q.explanation) {
      body += '<div class="tip"><span class="tip-head">' + esc(t('explanation')) + '</span>' + tj(q.explanation) + '</div>';
    }

    app.innerHTML = '<section class="screen">' + quizTop(ch, quiz) +
      guide(character, bubble, a && a.correct ? 'guide--happy' : '') +
      '<article class="card px">' + body +
      (a ? '<div class="feedback"><button class="btn btn--primary" type="button" data-act="next-q">' +
        esc(quiz.i === quiz.questions.length - 1 ? t('finish') : t('next')) + ' ▶</button></div>' : '') +
      '</article></section>';

    var input = app.querySelector('.answer-input');
    if (input && !a) input.focus({ preventScroll: true });

    // Play each dictation word once automatically. This runs inside the tap that opened the
    // question, which browsers require for speech (and not again on a language switch).
    if (q.type === 'dictation' && !a && quiz.spoken !== q) {
      quiz.spoken = q;
      speak(q.say, false);
    }
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
      var fold = q.type === 'dictation' ? toHiragana : function (x) { return x; };
      var norm = fold(normalizeAnswer(given));
      correct = q.answers.some(function (ans) { return fold(normalizeAnswer(ans)) === norm; });
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
      var correctHtml = q.type === 'dictation' ? jp(q.word)
        : q.type === 'input' ? jp(q.answers.join(' / '))
        : q.type === 'order' ? jp(q.correctText)
        : tj(q.choices.filter(function (c) { return c.correct; })[0].value);
      var givenHtml = q.type === 'choice' ? tj(q.choices[choiceIdx].value) : jp(given || t('emptyAnswer'));
      return '<div class="modal-head">' + SPR.svg(character) +
      '<div><div class="modal-who">' + esc(tx(SPR.CHARACTERS[character])) + '</div>' +
      '<h2 class="modal-title" id="modal-title">' + esc(t('wrongTitle')) + '</h2></div></div>' +
      (q.jp ? '<div class="q-jp" lang="ja" style="font-size:19px">' + jp(q.jp, fillText(q)) + '</div>' : '') +
      (q.translation ? '<div class="q-tr">' + esc(tx(q.translation)) + '</div>' : '') +
      '<div class="answer-row answer-row--wrong"><span class="lbl">' + esc(t('yourAnswer')) + '</span>' +
      '<span class="val" lang="ja">' + givenHtml + '</span></div>' +
      '<div class="answer-row answer-row--right"><span class="lbl">' + esc(t('correctAnswer')) + '</span>' +
      '<span class="val" lang="ja">' + correctHtml + '</span></div>' +
      (why ? '<div class="explain-block"><h3>' + esc(t('whyWrong')) + '</h3><p>' + tj(why) + '</p></div>' : '') +
      (q.explanation ? '<div class="explain-block"><h3>' + esc(t('explanation')) + '</h3><p>' + tj(q.explanation) + '</p></div>' : '') +
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

    var items = route.mode === 'vocab' ? words(route.ch) : route.mode === 'phrases' ? convo(route.ch)
      : route.mode === 'grammar' ? route.ch.grammar : null;
    if (act === 'prev' && view.index > 0) { view.index--; render(); }
    if (act === 'next' && items) {
      if (view.index < items.length - 1) { view.index++; render(); }
      else lessonDone(route.ch, route.mode);
    }
    if (act === 'travel') return travelTo(Number(el.getAttribute('data-ch')));
    if ((act === 'dict-play' || act === 'dict-slow') && view.quiz) {
      var dq = view.quiz;
      speak(dq.questions[dq.i].say, act === 'dict-slow', function () {
        if (!dq.speechFailed) { dq.speechFailed = true; render(); }
      });
      var field = app.querySelector('.answer-input');
      if (field && !view.quiz.answered) field.focus({ preventScroll: true });
      return;
    }
    if (act === 'speak') {
      var v = (route.mode === 'phrases' ? convo(route.ch) : words(route.ch))[view.index];
      if (v.dialogue) speak([].concat.apply([], v.dialogue.parts).map(function (l) { return l.jp; }).join('　'));
      else speak(v.kanji || v.jp);
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
