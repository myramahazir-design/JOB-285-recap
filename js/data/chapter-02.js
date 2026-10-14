// Lesson 2, from the textbook's Vocabulary and Grammar Notes pages.
// The grammar quiz will be built from the practice pages once they are added.
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
    { group: 'expressions', jp: 'あのう', en: 'Er… (used to show hesitation)', zh: '那个……（犹豫时）' },
    { group: 'expressions', jp: 'えっ', en: 'Oh? What! (on hearing something unexpected)', zh: '诶？！（听到意外的事时）' },
    { group: 'expressions', jp: 'どうぞ。', en: 'Here you are. (when offering something)', zh: '请。（递东西给别人时）' },
    { group: 'expressions', jp: '［どうも］ ありがとう ［ございます］。', en: 'Thank you [very much].', zh: '（非常）感谢。',
      note: { en: 'The words in [ ] can be left out, but the full version is more polite.', zh: '［ ］里的部分可以省略，但说全了更礼貌。' } },
    { group: 'expressions', jp: 'そうですか。', en: 'I see.', zh: '是吗。／原来如此。' },
    { group: 'expressions', jp: 'ちがいます。', kanji: '違います。', en: 'No, it isn’t. / You are wrong.', zh: '不是。／不对。' },
    { group: 'expressions', jp: 'あ', en: 'Oh! (when you suddenly notice something)', zh: '啊！（突然意识到时）' },

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

  // Story practice will be added from the Lesson 2 practice pages.
  grammarQuiz: []
});
