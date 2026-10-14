// Lesson 2, from the textbook's Vocabulary and Grammar Notes pages.
// Grammar quiz: story practice built from the practice pages (練習A/B/C, 問題).
MNN.registerChapter({
  id: 2,
  title: { jp: 'ほんの気持ちです', en: "It's just a small token", zh: '一点儿心意' },

  vocab: [
    // ----- Words -----
    { group: 'words', jp: 'これ', en: 'this (thing here)', zh: '这个（近处的东西）',
      note: { en: 'こ = close to me (the speaker).', zh: 'こ＝靠近我（说话人）。' } },
    { group: 'words', jp: 'それ', en: 'that (thing near the listener)', zh: '那个（听话人附近的东西）',
      note: { en: 'そ = close to you (the listener).', zh: 'そ＝靠近你（听话人）。' } },
    { group: 'words', jp: 'あれ', en: 'that (thing over there)', zh: '那个（远处的东西）',
      note: { en: 'あ = away from both of us.', zh: 'あ＝离我们两个人都远。' } },
    { group: 'words', jp: 'この 〜', en: 'this 〜, this 〜 here', zh: '这个～',
      note: { en: 'この always needs a noun after it: この 本.', zh: 'この后面一定要接名词：この 本。' } },
    { group: 'words', jp: 'その 〜', en: 'that 〜, that 〜 near the listener', zh: '那个～（听话人附近的）' },
    { group: 'words', jp: 'あの 〜', en: 'that 〜, that 〜 over there', zh: '那个～（远处的）' },
    { group: 'words', jp: 'ほん', kanji: '本', en: 'book', zh: '书' },
    { group: 'words', jp: 'じしょ', kanji: '辞書', en: 'dictionary', zh: '词典' },
    { group: 'words', jp: 'ざっし', kanji: '雑誌', en: 'magazine', zh: '杂志' },
    { group: 'words', jp: 'しんぶん', kanji: '新聞', en: 'newspaper', zh: '报纸',
      note: { en: 'Careful: 新聞 means “newspaper”, not “news”.', zh: '注意：日语的「新聞」是“报纸”，不是“新闻”！' } },
    { group: 'words', jp: 'ノート', en: 'notebook', zh: '笔记本' },
    { group: 'words', jp: 'てちょう', kanji: '手帳', en: 'personal organiser', zh: '记事本，日程本' },
    { group: 'words', jp: 'めいし', kanji: '名刺', en: 'business card', zh: '名片' },
    { group: 'words', jp: 'カード', en: '(credit) card', zh: '（信用）卡' },
    { group: 'words', jp: 'えんぴつ', kanji: '鉛筆', en: 'pencil', zh: '铅笔' },
    { group: 'words', jp: 'ボールペン', en: 'ballpoint pen', zh: '圆珠笔' },
    { group: 'words', jp: 'シャープペンシル', en: 'mechanical pencil, propelling pencil', zh: '自动铅笔' },
    { group: 'words', jp: 'かぎ', en: 'key', zh: '钥匙' },
    { group: 'words', jp: 'とけい', kanji: '時計', en: 'watch, clock', zh: '手表，钟' },
    { group: 'words', jp: 'かさ', kanji: '傘', en: 'umbrella', zh: '伞' },
    { group: 'words', jp: 'かばん', en: 'bag, briefcase', zh: '包，公文包' },
    { group: 'words', jp: 'CD', en: 'CD, compact disc', zh: 'CD，光盘' },
    { group: 'words', jp: 'テレビ', en: 'television', zh: '电视' },
    { group: 'words', jp: 'ラジオ', en: 'radio', zh: '收音机' },
    { group: 'words', jp: 'カメラ', en: 'camera', zh: '照相机' },
    { group: 'words', jp: 'コンピューター', en: 'computer', zh: '电脑' },
    { group: 'words', jp: 'くるま', kanji: '車', en: 'car, vehicle', zh: '汽车，车' },
    { group: 'words', jp: 'つくえ', kanji: '机', en: 'desk', zh: '书桌',
      note: { en: 'Written 机. In Chinese that character means “machine”, but in Japanese it’s a desk.', zh: '注意：日语的「机」是“书桌”，不是“机器”！' } },
    { group: 'words', jp: 'いす', en: 'chair', zh: '椅子' },
    { group: 'words', jp: 'チョコレート', en: 'chocolate', zh: '巧克力' },
    { group: 'words', jp: 'コーヒー', en: 'coffee', zh: '咖啡' },
    { group: 'words', jp: '［お］みやげ', kanji: '［お］土産', en: 'souvenir, present', zh: '土特产，礼物',
      note: { en: 'The お makes it sound polite. Both みやげ and おみやげ are fine.', zh: 'お表示礼貌。みやげ和おみやげ都可以。' } },
    { group: 'words', jp: 'えいご', kanji: '英語', en: 'the English language', zh: '英语' },
    { group: 'words', jp: 'にほんご', kanji: '日本語', en: 'the Japanese language', zh: '日语' },
    { group: 'words', jp: '〜ご', kanji: '〜語', en: '〜 language', zh: '～语',
      note: { en: 'Country + ご = its language: ちゅうごくご (Chinese), かんこくご (Korean).', zh: '国名＋ご＝该国的语言：ちゅうごくご（汉语）、かんこくご（韩语）。' } },
    { group: 'words', jp: 'なん', kanji: '何', en: 'what', zh: '什么' },
    { group: 'words', jp: 'そう', en: 'so', zh: '是的，那样' },

    // ----- Practice C phrases -----
    { group: 'expressions', jp: 'あのう', en: 'Er… (used to show hesitation)', zh: '那个……（犹豫时）',
      note: { en: 'Use it to get someone’s attention politely or before saying something a little awkward, like handing over a gift.', zh: '礼貌地引起对方注意，或者在说有点不好意思的话之前用，比如送礼物时。' } },
    { group: 'expressions', jp: 'えっ', en: 'Oh? What! (on hearing something unexpected)', zh: '诶？！（听到意外的事时）',
      note: { en: 'A little gasp of surprise when you hear something you didn’t expect.', zh: '听到意外的事时发出的惊讶声。' } },
    { group: 'expressions', jp: 'どうぞ。', en: 'Here you are. (when offering something)', zh: '请。（递东西给别人时）',
      note: { en: 'Say it while handing something over or inviting someone to go ahead.', zh: '递东西给别人，或请别人先请时说。' } },
    { group: 'expressions', jp: '［どうも］ ありがとう ［ございます］。', en: 'Thank you [very much].', zh: '（非常）感谢。',
      note: { en: 'The words in [ ] can be left out, but the full version is more polite.', zh: '［ ］里的部分可以省略，但说全了更礼貌。' } },
    { group: 'expressions', jp: 'そうですか。', en: 'I see.', zh: '是吗。／原来如此。',
      note: { en: 'Say it with a falling tone when you’ve just learned something new.', zh: '刚得知新信息时，用降调说。' } },
    { group: 'expressions', jp: 'ちがいます。', kanji: '違います。', en: 'No, it isn’t. / You are wrong.', zh: '不是。／不对。',
      note: { en: 'Use it to say “no, that’s not right”, then give the correct answer.', zh: '用来表示“不对”，然后说出正确答案。' } },
    { group: 'expressions', jp: 'あ', en: 'Oh! (when you suddenly notice something)', zh: '啊！（突然意识到时）',
      note: { en: 'A small “oh!” when you suddenly notice or remember something.', zh: '突然注意到或想起什么时轻轻说的“啊！”。' } },

    // ----- Conversation phrases -----
    { group: 'conversation', jp: 'これから おせわに なります。', kanji: 'これから お世話に なります。', en: 'Thank you in advance for your kindness.', zh: '今后要承蒙您关照了。',
      note: { en: 'Said when you start relying on someone, e.g. a new neighbour or colleague.', zh: '开始受人照顾时说，比如对新邻居或新同事。' } },
    { group: 'conversation', jp: 'こちらこそ ［どうぞ］ よろしく ［おねがいします］。', kanji: 'こちらこそ ［どうぞ］ よろしく ［お願いします］。', en: 'Pleased to meet you, too.', zh: '我才要请您多关照。',
      note: { en: 'The reply to ［どうぞ］ よろしく ［おねがいします］. こちらこそ means “I’m the one who should say that”.', zh: '这是对［どうぞ］よろしく［おねがいします］的回应。こちらこそ的意思是“我才应该这么说”。' } }
  ],

  grammar: [
    {
      pattern: 'これ／それ／あれ',
      title: { en: 'This one / that one', zh: '这个／那个' },
      explain: {
        en: 'これ, それ and あれ point at things and work as nouns. これ is something near the speaker, それ is something near the listener, and あれ is something far from both of you.',
        zh: 'これ、それ、あれ是指示代词，作名词用。これ指说话人附近的东西，それ指听话人附近的东西，あれ指离两个人都远的东西。'
      },
      notes: [
        { en: 'Remember: こ = close to me, そ = close to you, あ = away from both of us.', zh: '记法：こ＝靠近我，そ＝靠近你，あ＝离我们都远。' }
      ],
      examples: [
        { jp: 'それは {辞書|じしょ}ですか。', en: 'Is that a dictionary?', zh: '那是词典吗？' },
        { jp: 'これは だれの {傘|かさ}ですか。', en: 'Whose umbrella is this?', zh: '这是谁的伞？' }
      ]
    },
    {
      pattern: 'この N／その N／あの N',
      title: { en: 'This N / that N', zh: '这个N／那个N' },
      explain: {
        en: 'この, その and あの go right before a noun to point at it. Unlike これ/それ/あれ, they can’t stand alone: a noun must follow.',
        zh: 'この、その、あの直接放在名词前面修饰名词。和これ／それ／あれ不同，它们不能单独使用，后面一定要接名词。'
      },
      notes: [
        { en: 'これは 本です。 (This is a book.) vs この 本は わたしのです。 (This book is mine.)', zh: 'これは 本です。（这是书。）／この 本は わたしのです。（这本书是我的。）' }
      ],
      examples: [
        { jp: 'この {本|ほん}は わたしのです。', en: 'This book is mine.', zh: '这本书是我的。' },
        { jp: 'あの {方|かた}は どなたですか。', en: 'Who is that [person]?', zh: '那位是谁？' }
      ]
    },
    {
      pattern: 'そうです／違います',
      title: { en: 'Yes, it is / No, it isn’t', zh: '是的／不是' },
      explain: {
        en: 'In a noun sentence, そう is often used to say “yes”: はい、そうです (Yes, it is). For “no”, people don’t usually use そう. Say いいえ、違います (No, it isn’t), then give the correct answer.',
        zh: '在名词句中，常用そう表示肯定回答：はい、そうです（是的）。否定时一般不用そう，而是说いいえ、違います（不是），然后说出正确答案。'
      },
      notes: [
        { en: '違います literally means “it’s different”.', zh: '違います的字面意思是“不一样”。' }
      ],
      examples: [
        { jp: 'それは {辞書|じしょ}ですか。\n……はい、そうです。', en: 'Is that a dictionary?\n……Yes, it is.', zh: '那是词典吗？\n……是的。' },
        { jp: 'それは ミラーさんのですか。\n……いいえ、{違|ちが}います。', en: 'Is that Mr. Miller’s?\n……No, it isn’t.', zh: '那是米勒先生的吗？\n……不，不是。' },
        { jp: 'それは シャープペンシルですか。\n……いいえ、ボールペンです。', en: 'Is that a mechanical pencil?\n……No, it’s a ballpoint pen.', zh: '那是自动铅笔吗？\n……不，是圆珠笔。' }
      ]
    },
    {
      pattern: 'S₁ か、S₂ か',
      title: { en: 'Either-or questions', zh: '选择疑问句' },
      explain: {
        en: 'To ask someone to choose between two or more options, put か after each one. In the answer, just say the option you choose, without はい or いいえ.',
        zh: '要让对方在两个或多个选项中选择时，在每个选项后面都加か。回答时直接说出所选的答案，不用はい或いいえ。'
      },
      examples: [
        { jp: 'これは「９」ですか、「７」ですか。\n……「９」です。', en: 'Is this a 9 or a 7?\n……It’s a 9.', zh: '这是“9”还是“7”？\n……是“9”。' }
      ]
    },
    {
      pattern: 'N₁ の N₂',
      title: { en: 'More uses of の', zh: 'の的其他用法' },
      explain: {
        en: 'In Lesson 1, の showed the group N₂ belongs to. の can also show what N₂ is about, or who owns N₂.',
        zh: '第1课中，の表示N₂所属的团体。の还可以表示N₂的内容，或者N₂的所有者。'
      },
      notes: [
        { en: 'What it’s about: コンピューターの 本 = a book on computers', zh: '内容：コンピューターの 本＝关于电脑的书' },
        { en: 'Who owns it: わたしの 本 = my book', zh: '所有者：わたしの 本＝我的书' }
      ],
      examples: [
        { jp: 'これは コンピューターの {本|ほん}です。', en: 'This is a book on computers.', zh: '这是关于电脑的书。' },
        { jp: 'これは わたしの {本|ほん}です。', en: 'This is my book.', zh: '这是我的书。' }
      ]
    },
    {
      pattern: 'N の（＝ N の N）',
      title: { en: 'の standing in for a noun', zh: 'の代替名词' },
      explain: {
        en: 'の can replace a noun that has already been mentioned, so you don’t repeat it. Instead of 佐藤さんの かばん, just say 佐藤さんの (Ms. Sato’s). It only replaces things, not people.',
        zh: 'の可以代替前面已经提到过的名词，避免重复。比如不说佐藤さんの かばん，只说佐藤さんの（佐藤女士的）。它只能代替东西，不能代替人。'
      },
      notes: [
        { en: 'Things only: ✕ はい、IMCのです。 ○ はい、IMCの 社員です。 (Mr. Miller is a person, not a thing.)', zh: '只能代替东西：✕ はい、IMCのです。 ○ はい、IMCの 社員です。（米勒先生是人，不是东西。）' }
      ],
      examples: [
        { jp: 'あれは だれの かばんですか。\n……{佐藤|さとう}さんのです。', en: 'Whose bag is that?\n……It’s Ms. Sato’s.', zh: '那是谁的包？\n……是佐藤女士的。' },
        { jp: 'この かばんは あなたのですか。\n……いいえ、わたしのじゃ ありません。', en: 'Is this bag yours?\n……No, it isn’t [mine].', zh: '这个包是你的吗？\n……不，不是我的。' },
        { jp: 'ミラーさんは IMCの {社員|しゃいん}ですか。\n……はい、IMCの {社員|しゃいん}です。', en: 'Does Mr. Miller work at IMC?\n……Yes, he does.', zh: '米勒先生是IMC公司的职员吗？\n……是的，是IMC公司的职员。' }
      ]
    },
    {
      pattern: 'お〜',
      title: { en: 'The polite prefix お', zh: '礼貌前缀お' },
      explain: {
        en: 'The prefix お is added to some words when the speaker is being polite, for example ［お］みやげ (souvenir) and ［お］さけ (sake).',
        zh: '说话人表示礼貌时，会在一些词前面加上前缀お，例如［お］みやげ（礼物）、［お］さけ（酒）。'
      },
      notes: [
        { en: 'The [ ] means the お is optional: みやげ and おみやげ are both correct.', zh: '［ ］表示お可加可不加：みやげ和おみやげ都对。' }
      ],
      examples: []
    },
    {
      pattern: 'そうですか',
      title: { en: 'I see', zh: '是吗／原来如此' },
      explain: {
        en: 'Say そうですか to show you’ve taken in some new information. It’s said with a falling intonation, so it isn’t a real question.',
        zh: '听到新的信息、表示明白时说そうですか。要用降调，所以并不是在提问。'
      },
      examples: [
        { jp: 'この {傘|かさ}は あなたのですか。\n……いいえ、{違|ちが}います。シュミットさんのです。\nそうですか。', en: 'Is this umbrella yours?\n……No, it isn’t. It’s Mr. Schmidt’s.\nOh, I see.', zh: '这把伞是你的吗？\n……不，不是。是施密特先生的。\n是吗。' }
      ]
    }
  ],

  // Left empty: the vocab quiz is generated from the word list above.
  vocabQuiz: [],

  // Story practice: "Day 2 · Moving day". Built from 練習A, 練習B, 練習C and 問題,
  // with the partner exercises turned into conversations with the town's characters.
  grammarQuiz: [
    {
      type: 'scene', who: 'neko',
      title: { en: 'Day 2 · Moving day', zh: '第2天 · 搬家日' },
      lines: [
        { en: '{name}! Today you move into your very own home in Minna Town.', zh: '{name}！今天你要搬进大家町自己的新家啦。' },
        { en: 'In Japan, when you move in, you visit the neighbours with a small gift. But first, let’s sort out your moving boxes!', zh: '在日本，搬家后要带点小礼物去拜访邻居。不过，我们先来整理搬家的箱子吧！' }
      ]
    },

    // ----- Part 1: the moving boxes (練習A, 練習B 1, 問題4, 問題5, 問題7) -----
    {
      prompt: { en: 'You’re holding a dictionary and showing it to Neko-chan. What do you say?', zh: '你拿着一本词典给小猫看。你该怎么说？' },
      jp: '（　）は {辞書|じしょ}です。',
      choices: ['これ', 'それ', 'あれ', 'この'],
      answer: 'これ',
      explanation: { en: 'The dictionary is in YOUR hands, close to you (the speaker), so it’s これ.', zh: '词典在你手里，离你（说话人）近，所以用これ。' },
      why: {
        'それ': { en: 'それ is for things near the listener. The dictionary is near you.', zh: 'それ指听话人附近的东西，但词典在你身边。' },
        'あれ': { en: 'あれ is for things far from both of you.', zh: 'あれ指离两个人都远的东西。' },
        'この': { en: 'この must be followed by a noun: この 辞書は… It can’t stand alone before は.', zh: 'この后面一定要接名词：この 辞書は…… 不能单独放在は前面。' }
      }
    },
    {
      prompt: { en: 'Neko-chan is holding a radio. You point at it and ask:', zh: '小猫手里拿着收音机。你指着它问：' },
      jp: '（　）は ラジオですか。',
      choices: ['それ', 'これ', 'あれ', 'その'],
      answer: 'それ',
      explanation: { en: 'The radio is near Neko-chan, the listener, so it’s それ.', zh: '收音机在听话人小猫身边，所以用それ。' },
      why: {
        'これ': { en: 'これ is for things near YOU. The radio is in Neko-chan’s hands.', zh: 'これ指你身边的东西，但收音机在小猫手里。' },
        'あれ': { en: 'あれ is for things far from both of you, but Neko-chan is holding it.', zh: 'あれ指离两人都远的东西，但收音机就在小猫手里。' },
        'その': { en: 'その needs a noun after it: その ラジオは…', zh: 'その后面要接名词：その ラジオは……' }
      }
    },
    {
      prompt: { en: 'There’s a TV on a shelf across the room, far from both of you. You say:', zh: '房间另一头的架子上有一台电视，离你们俩都很远。你说：' },
      jp: '（　）は テレビです。',
      choices: ['あれ', 'それ', 'これ', 'あの'],
      answer: 'あれ',
      explanation: { en: 'It’s far from both the speaker and the listener, so it’s あれ.', zh: '离说话人和听话人都远，所以用あれ。' },
      why: {
        'それ': { en: 'それ would mean the TV is near Neko-chan. It’s far from both of you.', zh: '用それ表示电视在小猫身边，但它离你们俩都远。' },
        'これ': { en: 'これ would mean the TV is right next to you.', zh: '用これ表示电视就在你身边。' },
        'あの': { en: 'あの needs a noun after it: あの テレビは…', zh: 'あの后面要接名词：あの テレビは……' }
      }
    },
    {
      type: 'order',
      prompt: { en: 'Neko-chan picks up a key from your box. Tell her it’s yours.', zh: '小猫从你的箱子里拿起一把钥匙。告诉她那是你的。' },
      translation: { en: 'That is my key.', zh: '那是我的钥匙。' },
      pieces: ['それ', 'は', 'わたし', 'の', 'かぎ', 'です。'],
      explanation: { en: 'The key is in Neko-chan’s hand, so それ. わたしの かぎ = my key (the owner comes before の).', zh: '钥匙在小猫手里，所以用それ。わたしの かぎ＝我的钥匙（所有者放在の前面）。' }
    },
    {
      prompt: { en: 'Read the answer, then choose the word that fits the question.', zh: '先看回答，再选出符合问句的词。' },
      jp: 'それは（　）の {雑誌|ざっし}ですか。\n……いいえ、{違|ちが}います。カメラの {雑誌|ざっし}です。',
      choices: ['イーさん', 'だれ', '何'],
      answer: 'イーさん',
      explanation: { en: 'The answer starts with いいえ, so the question was a yes/no question: “Is that Ms. Lee’s magazine?” Questions with だれ or 何 can’t be answered with いいえ.', zh: '回答以いいえ开头，所以问句是是非疑问句：“那是イーさん的杂志吗？”带だれ或何的问句不能用いいえ回答。' },
      why: {
        'だれ': { en: 'だれの 雑誌ですか asks “whose?”. You can’t answer that with いいえ.', zh: 'だれの 雑誌ですか问“谁的？”，不能用いいえ回答。' },
        '何': { en: '何の 雑誌ですか asks “what kind?”. The answer would just be カメラの 雑誌です, without いいえ、違います.', zh: '何の 雑誌ですか问“什么杂志？”，回答应直接说カメラの 雑誌です，不会说いいえ、違います。' }
      }
    },
    {
      prompt: { en: 'Tricky! Who is being asked about?', zh: '有点难！问的是谁的？' },
      jp: 'これは（　）のですか。\n……はい、わたしのです。',
      choices: ['あなた', 'わたし', 'あの 人'],
      answer: 'あなた',
      explanation: { en: 'The reply is “Yes, it’s mine”, so the question must be “Is this YOURS?”: あなたのですか.', zh: '回答是“是的，是我的”，所以问句一定是“这是你的吗？”：あなたのですか。' },
      why: {
        'わたし': { en: 'わたしのですか means “Is this mine?”. The other person wouldn’t answer “Yes, it’s mine”.', zh: 'わたしのですか是问“这是我的吗？”，对方不会回答“是的，是我的”。' },
        'あの 人': { en: 'あの 人のですか asks about a third person. The answer would be はい、あの 人のです.', zh: 'あの 人のですか问的是第三个人，回答应该是はい、あの 人のです。' }
      }
    },

    {
      type: 'scene', who: 'tanuki',
      title: { en: 'Part 2 · Lost and found', zh: '第2部分 · 失物招领' },
      lines: [
        { en: 'Ah, {name}, perfect timing! People keep leaving their things at the shrine.', zh: '啊，{name}，你来得正好！大家总把东西忘在神社里。' },
        { en: 'Help me find out whose things these are, so we can give them back.', zh: '帮我弄清楚这些东西是谁的，好还给他们。' }
      ]
    },

    // ----- Part 2: whose is it? (練習B 5–8, 練習C 3, 問題6, 問題7) -----
    {
      prompt: { en: 'The bag has a name tag: やまだ. How does Tanuki-sensei answer?', zh: '包上有名牌：やまだ。狸猫老师会怎么回答？' },
      talk: [{ who: 'you', jp: 'これは だれの かばんですか。' }, { who: 'tanuki', jp: '（　）' }],
      choices: ['山田さんの かばんです。', '山田さんです。', 'わたしの かばんです。', '山田さんの です かばん。'],
      answer: '山田さんの かばんです。',
      explanation: { en: 'Owner + の + thing: 山田さんの かばん (Ms. Yamada’s bag).', zh: '所有者＋の＋东西：山田さんの かばん（山田女士的包）。' },
      why: {
        '山田さんです。': { en: 'This says the bag IS Ms. Yamada. You need の to show she owns it.', zh: '这句话的意思是包“是山田女士”。要用の表示所属。' },
        'わたしの かばんです。': { en: 'The tag says やまだ, so it isn’t Tanuki-sensei’s bag.', zh: '名牌上写的是やまだ，所以不是狸猫老师的包。' },
        '山田さんの です かばん。': { en: 'Word order: the noun comes before です. 山田さんの かばんです。', zh: '语序不对：名词要放在です前面。山田さんの かばんです。' }
      }
    },
    {
      prompt: { en: 'The camera has a tag that says サントス. What’s the short answer?', zh: '照相机上的名牌写着サントス。简短的回答是什么？' },
      talk: [{ who: 'you', jp: 'この カメラは だれのですか。' }, { who: 'tanuki', jp: '（　）' }],
      choices: ['サントスさんのです。', 'サントスさんです。', 'サントスのです。', 'サントスさんじゃ ありません。'],
      answer: 'サントスさんのです。',
      explanation: { en: 'の can stand in for the noun you already mentioned: サントスさんの (カメラ) です. Use さん because it’s someone else.', zh: 'の可以代替前面提到的名词：サントスさんの（カメラ）です。因为是别人，所以要加さん。' },
      why: {
        'サントスさんです。': { en: 'This says the camera IS Mr. Santos. Add の: サントスさんのです.', zh: '这句话的意思是照相机“是桑托斯先生”。要加の：サントスさんのです。' },
        'サントスのです。': { en: 'When talking about someone else, add さん to their name.', zh: '说到别人时，名字后面要加さん。' },
        'サントスさんじゃ ありません。': { en: 'The tag says サントス, so it IS his.', zh: '名牌上写着サントス，所以就是他的。' }
      }
    },
    {
      type: 'order',
      prompt: { en: 'A villager holds up an umbrella. Ask whose it is.', zh: '一位村民举起一把伞。问问是谁的。' },
      translation: { en: 'Whose umbrella is that?', zh: '那把伞是谁的？' },
      pieces: ['その', '傘', 'は', 'だれ', 'の', 'です', 'か。'],
      explanation: { en: 'その 傘 (that umbrella, near the listener) is the topic. だれの (whose) + です + か makes the question.', zh: 'その 傘（听话人附近的那把伞）是主题。だれの（谁的）＋です＋か构成问句。' }
    },
    {
      prompt: { en: 'You ask around about the umbrella. Ms. Lee suddenly recognises it. What does she say?', zh: '你到处问这把伞是谁的。イーさん突然认出来了。她会说什么？' },
      talk: [
        { who: 'you', jp: 'この 傘は ミラーさんのですか。' },
        { who: 'ミラー', jp: 'いいえ、違います。' },
        { who: 'you', jp: 'だれのですか。' },
        { who: 'イー', jp: '（　）' }
      ],
      choices: ['あ、わたしのです。ありがとう ございます。', 'あ、わたしです。ありがとう ございます。', 'はい、そうです。', 'あ、イーさんのです。'],
      answer: 'あ、わたしのです。ありがとう ございます。',
      explanation: { en: 'あ shows she has just noticed. わたしのです = It’s mine (の stands in for 傘).', zh: 'あ表示突然意识到。わたしのです＝是我的（の代替“伞”）。' },
      why: {
        'あ、わたしです。ありがとう ございます。': { en: 'わたしです means “It’s me”. Add の: わたしのです (It’s mine).', zh: 'わたしです的意思是“是我”。要加の：わたしのです（是我的）。' },
        'はい、そうです。': { en: 'The question was “Whose is it?”, not a yes/no question.', zh: '问的是“是谁的？”，不是是非疑问句。' },
        'あ、イーさんのです。': { en: 'She’s talking about herself, so no さん. Use わたし.', zh: '她在说自己，不能加さん，要用わたし。' }
      }
    },
    {
      prompt: { en: 'Careful! Which answer is correct?', zh: '注意！哪个回答正确？' },
      talk: [{ who: 'you', jp: 'ミラーさんは IMCの 社員ですか。' }, { who: 'tanuki', jp: '（　）' }],
      choices: ['はい、IMCの 社員です。', 'はい、IMCのです。', 'はい、社員の IMCです。', 'いいえ、IMCのです。'],
      answer: 'はい、IMCの 社員です。',
      explanation: { en: 'の can replace things, but not people. Mr. Miller is a person, so keep 社員: IMCの 社員です.', zh: 'の可以代替东西，但不能代替人。米勒先生是人，所以要保留“社員”：IMCの 社員です。' },
      why: {
        'はい、IMCのです。': { en: 'The textbook warns about this one! の can’t replace a person (社員).', zh: '课本特别提醒过这个错误！の不能代替人（社員）。' },
        'はい、社員の IMCです。': { en: 'The order is backwards: the company comes first, IMCの 社員.', zh: '语序反了：公司在前，IMCの 社員。' },
        'いいえ、IMCのです。': { en: 'いいえ contradicts the rest, and の can’t replace a person.', zh: 'いいえ和后面的话矛盾，而且の不能代替人。' }
      }
    },
    {
      type: 'input',
      prompt: { en: 'Read the answer and type the missing question word.', zh: '看回答，输入缺少的疑问词。' },
      jp: 'それは（　）の かぎですか。\n……{車|くるま}の かぎです。',
      answers: ['なん', '何'],
      explanation: { en: '何の かぎ asks “what kind of key?” (what is it for). The answer 車の かぎ = a car key.', zh: '何の かぎ问的是“什么钥匙？”（做什么用的）。回答車の かぎ＝车钥匙。' },
      why: {
        'だれ': { en: 'だれの かぎ asks whose key it is. The answer would be a person’s name, but 車 is a thing.', zh: 'だれの かぎ问的是谁的钥匙，回答应该是人名，但“車”是东西。' },
        'なに': { en: 'Before の it’s read なん: 何の → なんの.', zh: '在の前面读作なん：何の→なんの。' }
      }
    },

    {
      type: 'scene', who: 'kitsune',
      title: { en: 'Part 3 · The gift shop', zh: '第3部分 · 礼品店' },
      lines: [
        { en: 'Irasshaimase, {name}! You need gifts for your new neighbours, right?', zh: '欢迎光临，{name}！你要给新邻居买礼物，对吧？' },
        { en: 'Let’s make sure you know what everything is before you buy.', zh: '买之前，先确认一下你知道这些都是什么吧。' }
      ]
    },

    // ----- Part 3: the gift shop (練習B 2–4, 練習C 1–2) -----
    {
      prompt: { en: 'The label is smudged. It’s actually り. How do you answer?', zh: '标签有点模糊，其实写的是り。该怎么回答？' },
      talk: [{ who: 'kitsune', jp: 'これは「い」ですか、「り」ですか。' }, { who: 'you', jp: '（　）' }],
      choices: ['「り」です。', 'はい、「り」です。', 'いいえ、「い」です。', 'そうです。'],
      answer: '「り」です。',
      explanation: { en: 'For an either-or question, just say the one you choose. Don’t start with はい or いいえ.', zh: '回答选择疑问句时，直接说出选择的答案，不要用はい或いいえ开头。' },
      why: {
        'はい、「り」です。': { en: 'Either-or questions aren’t answered with はい.', zh: '选择疑问句不用はい回答。' },
        'いいえ、「い」です。': { en: 'It’s り, and either-or questions don’t take いいえ either.', zh: '答案是り，而且选择疑问句也不用いいえ。' },
        'そうです。': { en: 'そうです answers a yes/no question. Here you must choose one of the two.', zh: 'そうです用来回答是非疑问句，这里要从两个中选一个。' }
      }
    },
    {
      prompt: { en: 'Kitsune-san is holding a CD for learning English. How does she answer?', zh: '狐狸小姐手里拿着一张学英语的CD。她会怎么回答？' },
      talk: [{ who: 'you', jp: 'それは 何ですか。' }, { who: 'kitsune', jp: 'これですか。（　）' }],
      choices: ['英語の CDです。', 'CDの 英語です。', 'あれは 英語の CDです。', 'はい、英語の CDです。'],
      answer: '英語の CDです。',
      explanation: { en: 'N₁ の N₂: 英語の CD = a CD about English. A 何 question is answered without はい.', zh: 'N₁ の N₂：英語の CD＝关于英语的CD。何的问句不用はい回答。' },
      why: {
        'CDの 英語です。': { en: 'The order is backwards. What it’s about (英語) comes first: 英語の CD.', zh: '语序反了。表示内容的“英語”要放在前面：英語の CD。' },
        'あれは 英語の CDです。': { en: 'She’s holding it, so it’s これ, not あれ.', zh: '东西在她手里，应该用これ，不是あれ。' },
        'はい、英語の CDです。': { en: 'A 何 question isn’t a yes/no question, so no はい.', zh: '带何的问句不是是非疑问句，不用はい。' }
      }
    },
    {
      prompt: { en: 'You’ve just learned what it is. How do you react?', zh: '你刚知道那是什么。你该怎么回应？' },
      talk: [{ who: 'kitsune', jp: '英語の CDです。' }, { who: 'you', jp: '（　）' }],
      choices: ['そうですか。', 'そうです。', 'どうぞ。', '違います。'],
      answer: 'そうですか。',
      explanation: { en: 'そうですか (said with a falling tone) means “Oh, I see”. It shows you’ve taken in new information.', zh: 'そうですか（用降调）表示“原来如此”，表示你接收了新的信息。' },
      why: {
        'そうです。': { en: 'そうです means “Yes, that’s right”. It confirms something, it doesn’t react to news.', zh: 'そうです的意思是“是的，没错”，用来肯定，不是对新信息的回应。' },
        'どうぞ。': { en: 'どうぞ is said when you offer something to someone.', zh: 'どうぞ是递东西给别人时说的。' },
        '違います。': { en: '違います means “No, that’s wrong”, which would be rude here.', zh: '違います的意思是“不对”，在这里不礼貌。' }
      }
    },
    {
      prompt: { en: 'It’s actually a radio. How do you answer?', zh: '那其实是收音机。你该怎么回答？' },
      talk: [{ who: 'kitsune', jp: 'これは 時計ですか。' }, { who: 'you', jp: '（　）' }],
      choices: ['いいえ、ラジオです。', 'はい、ラジオです。', 'いいえ、時計です。', 'ラジオですか、時計ですか。'],
      answer: 'いいえ、ラジオです。',
      explanation: { en: 'Say いいえ, then give the correct answer. (You could also say いいえ、違います。)', zh: '先说いいえ，再说出正确答案。（也可以说いいえ、違います。）' },
      why: {
        'はい、ラジオです。': { en: 'はい would agree that it’s a clock, but it isn’t.', zh: '说はい表示同意它是钟，但它不是。' },
        'いいえ、時計です。': { en: 'いいえ (no) followed by “it’s a clock” contradicts itself.', zh: 'いいえ（不是）后面却说“是钟”，前后矛盾。' },
        'ラジオですか、時計ですか。': { en: 'That’s asking a question back, not answering one.', zh: '这是在反问，而不是回答。' }
      }
    },

    {
      type: 'scene', who: 'neko',
      title: { en: 'Part 4 · Meeting the neighbours', zh: '第4部分 · 拜访邻居' },
      lines: [
        { en: 'Gift in hand, {name}! Your neighbour Ms. Yamada lives right next door.', zh: '{name}，礼物准备好了！你的邻居山田女士就住在隔壁。' },
        { en: 'Ring the bell, introduce yourself and give her your gift. 頑張って!', zh: '按门铃，做个自我介绍，然后把礼物送给她。加油（頑張って）！' }
      ]
    },

    // ----- Part 4: visiting the neighbour (会話, 練習C 1, 問題8) -----
    {
      prompt: { en: 'You live in room 408. Ms. Yamada opens the door. What do you say?', zh: '你住在408号房间。山田女士开了门。你该说什么？' },
      talk: [{ who: '山田', jp: 'はい。どなたですか。' }, { who: 'you', jp: '（　）' }],
      choices: ['408の {name}です。', '408の {name}さんです。', '{name}ですか。', 'どなたですか。'],
      answer: '408の {name}です。',
      explanation: { en: 'Room number + の + your name: 408の {name}です (I’m {name} from room 408). No さん for yourself.', zh: '房间号＋の＋名字：408の {name}です（我是408号的{name}）。自己的名字不加さん。' },
      why: {
        '408の {name}さんです。': { en: 'Never add さん to your own name!', zh: '绝对不能在自己的名字后面加さん！' },
        '{name}ですか。': { en: 'That turns it into a question: “Am I {name}?”', zh: '这就变成了问句：“我是{name}吗？”' },
        'どなたですか。': { en: 'That’s her question. You need to answer it.', zh: '那是她的问题，你要回答它。' }
      }
    },
    {
      prompt: { en: 'You’ve just moved in next door. Fill in the set phrase.', zh: '你刚搬到隔壁。请填入固定说法。' },
      jp: 'これから（　）。どうぞ よろしく。',
      choices: ['お世話に なります', 'ありがとう ございます', 'こちらこそ', 'そうですか'],
      answer: 'お世話に なります',
      explanation: { en: 'これから お世話に なります means “Thank you in advance for your kindness”. It’s what you say when you start depending on new neighbours or colleagues.', zh: 'これから お世話に なります的意思是“今后要承蒙您关照了”，是开始受新邻居或新同事照顾时说的话。' },
      why: {
        'ありがとう ございます': { en: 'This thanks someone for something they’ve already done. You’ve only just arrived.', zh: '这是感谢别人已经做过的事，而你才刚搬来。' },
        'こちらこそ': { en: 'こちらこそ is the reply (“me too”), so Ms. Yamada says it, not you.', zh: 'こちらこそ是回应（“我才是”），应该由山田女士来说，而不是你。' },
        'そうですか': { en: 'そうですか reacts to news. It doesn’t fit here.', zh: 'そうですか是对新信息的回应，这里不合适。' }
      }
    },
    {
      type: 'order',
      prompt: { en: 'Now hand over your gift. Put the words in order.', zh: '现在把礼物送给她。请排列词语。' },
      translation: { en: 'Um, this is a little gift for you. Here you are.', zh: '那个，这是一点小礼物。请收下。' },
      pieces: ['あのう、', 'これ、', 'お土産', 'です。', 'どうぞ。'],
      explanation: { en: 'あのう softens the start, これ、お土産です presents the gift, and どうぞ offers it.', zh: 'あのう让开头更委婉，これ、お土産です介绍礼物，どうぞ表示请对方收下。' }
    },
    {
      prompt: { en: 'Your gift is coffee. How do you answer Ms. Yamada?', zh: '你的礼物是咖啡。该怎么回答山田女士？' },
      talk: [{ who: '山田', jp: 'えっ、何ですか。' }, { who: 'you', jp: '（　）' }],
      choices: ['コーヒーです。どうぞ。', 'はい、コーヒーです。', 'コーヒーですか。', 'コーヒーのです。'],
      answer: 'コーヒーです。どうぞ。',
      explanation: { en: 'Answer 何ですか with the thing itself, then どうぞ to offer it.', zh: '回答何ですか时直接说出东西，再用どうぞ请对方收下。' },
      why: {
        'はい、コーヒーです。': { en: 'A 何 question isn’t a yes/no question, so no はい.', zh: '带何的问句不是是非疑问句，不用はい。' },
        'コーヒーですか。': { en: 'That asks “Is it coffee?” instead of answering.', zh: '这是在问“是咖啡吗？”，而不是回答。' },
        'コーヒーのです。': { en: 'の here would mean “coffee’s”. Just say コーヒーです.', zh: '这里加の就变成“咖啡的”。直接说コーヒーです就好。' }
      }
    },

    {
      type: 'scene', who: 'neko',
      title: { en: 'Epilogue', zh: '尾声' },
      lines: [
        { en: 'Ms. Yamada smiled and said: どうも ありがとう ございます。 You’re a great neighbour already, {name}!', zh: '山田女士笑着说：どうも ありがとう ございます。{name}，你已经是个好邻居了！' },
        { en: 'Let’s see how you did today.', zh: '来看看你今天的表现吧。' }
      ]
    }
  ]
});
