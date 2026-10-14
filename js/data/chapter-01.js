// Lesson 1, from the textbook's Vocabulary, Grammar Notes and practice (練習A/B/C, 問題) pages.
(function () {
  // Name cards from the 練習B picture tables.
  var CARDS = {
    watt: { name: 'ワット', country: 'イギリス', job: '{先生|せんせい}', age: 45 },
    thawaphon: { name: 'タワポン', country: 'タイ', job: '{学生|がくせい}', age: 19 },
    yamada: { name: '{山田|やまだ}', country: '{日本|にほん}', job: '{銀行員|ぎんこういん}', age: 38 },
    schmidt: { name: 'シュミット', country: 'ドイツ', job: '{会社員|かいしゃいん}', age: 52 },
    gupta: { name: 'グプタ', country: 'インド', job: '{会社員|かいしゃいん}', org: 'IMC', age: 42 },
    wang: { name: 'ワン', country: '{中国|ちゅうごく}', job: '{医者|いしゃ}', org: '{神戸病院|こうべびょういん}', age: 29 },
    lee: { name: 'イー', country: '{韓国|かんこく}', job: '{研究者|けんきゅうしゃ}', org: 'AKC', age: 35 },
    karina: { name: 'カリナ', country: 'インドネシア', job: '{学生|がくせい}', org: '{富士大学|ふじだいがく}', age: 24 },
    santos: { name: 'サントス', country: 'ブラジル', job: '{会社員|かいしゃいん}', org: 'ブラジルエアー', age: 39 }
  };

  // True / false options, kept in this order.
  var TF = [{ en: '○  Correct', zh: '○  正确' }, { en: '×  Not correct', zh: '×  不正确' }];

MNN.registerChapter({
  id: 1,
  title: { jp: 'はじめまして', en: 'Nice to meet you', zh: '初次见面' },

  vocab: [
    // ----- Words -----
    { group: 'words', jp: 'わたし', en: 'I', zh: '我' },
    { group: 'words', jp: 'あなた', en: 'you', zh: '你',
      note: { en: 'If you know someone’s name, use their name + さん instead of あなた. It can sound rude.', zh: '知道对方名字时，用“名字＋さん”代替あなた，否则可能显得不礼貌。' } },
    { group: 'words', jp: 'あのひと（あのかた）', kanji: 'あの人（あの方）', en: 'that person, he, she', zh: '那个人，他，她',
      note: { en: 'あのかた (あの方) is the polite equivalent of あのひと.', zh: 'あのかた（あの方）是あのひと的礼貌说法。' } },
    { group: 'words', jp: '〜さん', en: 'Mr., Ms. (suffix added to a name, expressing politeness)', zh: '～先生，～女士（接在名字后，表示礼貌）',
      note: { en: 'Never use さん with your own name!', zh: '绝对不能在自己的名字后面加さん！' } },
    { group: 'words', jp: '〜ちゃん', en: 'suffix often added to a child’s name instead of 〜さん', zh: '常接在小孩名字后，代替～さん',
      note: { en: 'ちゃん shows familiarity, e.g. テレーザちゃん.', zh: 'ちゃん表示亲昵，例如テレーザちゃん。' } },
    { group: 'words', jp: '〜じん', kanji: '〜人', en: 'a national of 〜 (e.g. アメリカじん, an American)', zh: '～国人（例：アメリカじん，美国人）' },
    { group: 'words', jp: 'せんせい', kanji: '先生', en: 'teacher, instructor', zh: '老师',
      note: { en: 'Not used when talking about your own job. For yourself, use きょうし.', zh: '不用于说自己的职业。说自己时用きょうし。' } },
    { group: 'words', jp: 'きょうし', kanji: '教師', en: 'teacher, instructor (your own job)', zh: '教师（说自己的职业）' },
    { group: 'words', jp: 'がくせい', kanji: '学生', en: 'student', zh: '学生' },
    { group: 'words', jp: 'かいしゃいん', kanji: '会社員', en: 'company employee', zh: '公司职员' },
    { group: 'words', jp: 'しゃいん', kanji: '社員', en: 'employee of 〜 company', zh: '～公司的职员',
      note: { en: 'Used with the company’s name, e.g. IMCの しゃいん.', zh: '与公司名一起使用，例如IMCの しゃいん。' } },
    { group: 'words', jp: 'ぎんこういん', kanji: '銀行員', en: 'bank employee', zh: '银行职员' },
    { group: 'words', jp: 'いしゃ', kanji: '医者', en: '[medical] doctor', zh: '医生' },
    { group: 'words', jp: 'けんきゅうしゃ', kanji: '研究者', en: 'researcher, scholar', zh: '研究人员，学者' },
    { group: 'words', jp: 'だいがく', kanji: '大学', en: 'university', zh: '大学' },
    { group: 'words', jp: 'びょういん', kanji: '病院', en: 'hospital', zh: '医院' },
    { group: 'words', jp: 'だれ（どなた）', en: 'who', zh: '谁',
      note: { en: 'どなた is the polite equivalent of だれ.', zh: 'どなた是だれ的礼貌说法。' } },
    { group: 'words', jp: '〜さい', kanji: '〜歳', en: '— years old', zh: '～岁' },
    { group: 'words', jp: 'なんさい（おいくつ）', kanji: '何歳', en: 'how old', zh: '几岁',
      note: { en: 'おいくつ is the polite equivalent of なんさい.', zh: 'おいくつ是なんさい的礼貌说法。' } },
    { group: 'words', jp: 'はい', en: 'yes', zh: '是' },
    { group: 'words', jp: 'いいえ', en: 'no', zh: '不是' },

    // ----- Practice C phrases -----
    { group: 'expressions', jp: 'はじめまして。', kanji: '初めまして。', en: 'How do you do?', zh: '初次见面。',
      note: { en: 'Literally “I am meeting you for the first time.” Usually the first thing you say when introducing yourself.', zh: '字面意思是“第一次见面”。通常在自我介绍的开头说。' } },
    { group: 'expressions', jp: '〜から きました。', kanji: '〜から 来ました。', en: 'I’m from 〜 (country).', zh: '我来自～（国家）。',
      note: { en: 'Use it right after your name in a self-introduction: アメリカから 来ました。', zh: '自我介绍时紧接在名字后面说：アメリカから 来ました。' } },
    { group: 'expressions', jp: '［どうぞ］ よろしく ［おねがいします］。', kanji: '［どうぞ］ よろしく ［お願いします］。', en: 'Pleased to meet you.', zh: '请多关照。',
      note: { en: 'Literally “Please be nice to me.” Usually said at the end of a self-introduction. The words in [ ] can be left out.', zh: '字面意思是“请多多关照我”。通常在自我介绍的最后说。［ ］里的部分可以省略。' } },
    { group: 'expressions', jp: 'しつれいですが', kanji: '失礼ですが', en: 'Excuse me, but…', zh: '不好意思，请问……',
      note: { en: 'Used when asking someone for personal information, such as their name or address.', zh: '询问对方姓名、住址等个人信息时使用。' } },
    { group: 'expressions', jp: 'おなまえは？', kanji: 'お名前は？', en: 'May I have your name?', zh: '请问您叫什么名字？',
      note: { en: 'A polite way to ask someone’s name, often after 失礼ですが.', zh: '礼貌地问对方名字，常接在失礼ですが后面。' } },
    { group: 'expressions', jp: 'こちらは 〜さんです。', en: 'This is Mr./Ms. 〜.', zh: '这位是～先生／女士。',
      note: { en: 'Use it to introduce one person to another. Always add さん to their name.', zh: '把一个人介绍给另一个人时用。名字后面一定要加さん。' } },

    // ----- Countries -----
    { group: 'countries', jp: 'アメリカ', en: 'U.S.A.', zh: '美国' },
    { group: 'countries', jp: 'イギリス', en: 'U.K.', zh: '英国' },
    { group: 'countries', jp: 'インド', en: 'India', zh: '印度' },
    { group: 'countries', jp: 'インドネシア', en: 'Indonesia', zh: '印度尼西亚' },
    { group: 'countries', jp: 'かんこく', kanji: '韓国', en: 'South Korea', zh: '韩国' },
    { group: 'countries', jp: 'タイ', en: 'Thailand', zh: '泰国' },
    { group: 'countries', jp: 'ちゅうごく', kanji: '中国', en: 'China', zh: '中国' },
    { group: 'countries', jp: 'ドイツ', en: 'Germany', zh: '德国' },
    { group: 'countries', jp: 'にほん', kanji: '日本', en: 'Japan', zh: '日本' },
    { group: 'countries', jp: 'ブラジル', en: 'Brazil', zh: '巴西' },

    // ----- Names used in the textbook (shown in review, left out of the quiz) -----
    { group: 'names', jp: 'IMC／パワーでんき／ブラジルエアー', kanji: 'IMC／パワー電気／ブラジルエアー', en: 'fictitious companies', zh: '虚构的公司' },
    { group: 'names', jp: 'AKC', en: 'a fictitious institute', zh: '虚构的研究所' },
    { group: 'names', jp: 'こうべびょういん', kanji: '神戸病院', en: 'a fictitious hospital', zh: '虚构的医院' },
    { group: 'names', jp: 'さくらだいがく／ふじだいがく', kanji: 'さくら大学／富士大学', en: 'fictitious universities', zh: '虚构的大学' }
  ],

  grammar: [
    {
      pattern: 'N₁ は N₂ です',
      title: { en: 'N₁ is N₂', zh: 'N₁ 是 N₂' },
      explain: {
        en: 'は marks N₁ as the topic: the thing you want to talk about. Then you say something about it. です ends the sentence. It makes the noun before it the predicate and shows politeness to the listener.',
        zh: 'は表示前面的名词N₁是句子的主题，也就是你想谈论的事物，然后再对它进行说明。です放在句尾，使前面的名词成为谓语，并表示对听话人的礼貌。'
      },
      notes: [
        { en: 'As a particle, は is read わ (wa).', zh: 'は作助词时读作わ（wa）。' },
        { en: 'です changes form in negative sentences (next card) and in the past tense (Lesson 12).', zh: '在否定句（见下一张卡）和过去时（第12课）中，です会变形。' }
      ],
      examples: [
        { jp: 'わたしは マイク・ミラーです。', en: 'I’m Mike Miller.', zh: '我是麦克·米勒。' },
        { jp: 'わたしは {会社員|かいしゃいん}です。', en: 'I’m a company employee.', zh: '我是公司职员。' }
      ]
    },
    {
      pattern: 'N₁ は N₂ じゃ（では） ありません',
      title: { en: 'N₁ is not N₂', zh: 'N₁ 不是 N₂' },
      explain: {
        en: 'じゃ ありません is the negative form of です. じゃ ありません is common in everyday conversation. では ありません is used in formal speech and writing.',
        zh: 'じゃ ありません是です的否定形式。日常会话中常用じゃ ありません，正式场合和书面语中用では ありません。'
      },
      notes: [
        { en: 'The は in では is also pronounced わ.', zh: 'では中的は也读作わ。' }
      ],
      examples: [
        { jp: 'サントスさんは {学生|がくせい}じゃ ありません。', en: 'Mr. Santos isn’t a student.', zh: '桑托斯先生不是学生。' }
      ]
    },
    {
      pattern: 'N₁ は N₂ ですか',
      title: { en: 'Yes / no questions', zh: '是非疑问句' },
      explain: {
        en: 'Add the particle か to the end of a sentence to make a question. The word order stays the same, and the question usually ends with a rising intonation. Answer with はい if you agree, or いいえ if you don’t.',
        zh: '在句尾加上助词か就成为疑问句。语序不变，句尾一般用升调。同意时用はい回答，不同意时用いいえ。'
      },
      notes: [
        { en: 'か expresses uncertainty or doubt on the part of the speaker.', zh: 'か表示说话人的不确定或疑问。' }
      ],
      examples: [
        { jp: 'ミラーさんは アメリカ{人|じん}ですか。\n……はい、アメリカ{人|じん}です。', en: 'Is Mr. Miller an American?\n……Yes, he is [an American].', zh: '米勒先生是美国人吗？\n……是的，是美国人。' },
        { jp: 'ミラーさんは {先生|せんせい}ですか。\n……いいえ、{先生|せんせい}じゃ ありません。', en: 'Is Mr. Miller a teacher?\n……No, he isn’t [a teacher].', zh: '米勒先生是老师吗？\n……不，不是老师。' }
      ]
    },
    {
      pattern: 'N₁ は どなた（だれ）ですか',
      title: { en: 'Questions with question words', zh: '带疑问词的疑问句' },
      explain: {
        en: 'Put a question word such as どなた or だれ in the place of the information you want to ask about. The word order doesn’t change, and か still goes at the end.',
        zh: '把疑问词（如どなた、だれ）放在想询问的内容的位置上。语序不变，句尾仍然加か。'
      },
      notes: [
        { en: 'どなた is the polite form of だれ.', zh: 'どなた是だれ的礼貌说法。' },
        { en: 'The answer can drop the topic: [あの 方は] ミラーさんです。', zh: '回答时可以省略主题：［あの 方は］ミラーさんです。' }
      ],
      examples: [
        { jp: 'あの {方|かた}は どなたですか。\n……［あの {方|かた}は］ ミラーさんです。', en: 'Who’s that [person]?\n……That’s Mr. Miller.', zh: '那位是谁？\n……［那位］是米勒先生。' }
      ]
    },
    {
      pattern: 'N も',
      title: { en: 'N also / too', zh: 'N 也' },
      explain: {
        en: 'Use も when the same thing applies as was said before. も takes the place of は.',
        zh: '当情况与前面所说的相同时用も。も代替は。'
      },
      notes: [
        { en: 'も replaces は, so never say はも.', zh: 'も是替换は的，所以不能说「はも」。' }
      ],
      examples: [
        { jp: 'ミラーさんは {会社員|かいしゃいん}です。グプタさんも {会社員|かいしゃいん}です。', en: 'Mr. Miller is a company employee. Mr. Gupta is also a company employee.', zh: '米勒先生是公司职员。古普塔先生也是公司职员。' }
      ]
    },
    {
      pattern: 'N₁ の N₂',
      title: { en: 'N₂ of N₁', zh: 'N₁ 的 N₂' },
      explain: {
        en: 'When a noun N₁ describes the noun N₂ that follows it, connect them with の. In Lesson 1, N₁ is an organisation or group that N₂ belongs to.',
        zh: '名词N₁修饰后面的名词N₂时，用の连接。在第1课中，N₁表示N₂所属的组织或团体。'
      },
      examples: [
        { jp: 'ミラーさんは IMCの {社員|しゃいん}です。', en: 'Mr. Miller is an IMC employee.', zh: '米勒先生是IMC公司的职员。' }
      ]
    },
    {
      pattern: '〜さん',
      title: { en: 'Mr. / Ms. 〜', zh: '～先生／～女士' },
      explain: {
        en: 'Add さん to the given name or family name of the listener or another person to show respect. Never use it with your own name! For small children, ちゃん is used instead to show familiarity.',
        zh: '在听话人或第三者的名字或姓后面加さん，表示尊敬。绝对不能用在自己的名字后面！对小孩子用ちゃん代替さん，表示亲昵。'
      },
      notes: [
        { en: 'If you know the listener’s name, call them by their name + さん, not あなた.', zh: '知道对方名字时，一般用“名字＋さん”称呼，而不用あなた。' },
        { en: 'あなた is used with people you are very close to, such as a husband, wife or partner. In other situations it can sound impolite.', zh: 'あなた用于非常亲近的人，如丈夫、妻子或恋人。在其他场合可能显得不礼貌。' }
      ],
      examples: [
        { jp: 'あの {方|かた}は ミラーさんです。', en: 'That’s Mr. Miller.', zh: '那位是米勒先生。' },
        { jp: '{鈴木|すずき}：ミラーさんは {学生|がくせい}ですか。\nミラー：いいえ、{会社員|かいしゃいん}です。', en: 'Suzuki: Are you a student, Mr. Miller?\nMiller: No, I work for a company.', zh: '铃木：米勒先生是学生吗？\n米勒：不，我是公司职员。' }
      ]
    }
  ],

  // Left empty: the vocab quiz is generated from the word list above.
  vocabQuiz: [],

  // Story practice: "Day 1 in Minna Town". Built from 練習A, 練習B, 練習C and 問題,
  // reworked so partner exercises become conversations with the town's characters.
  grammarQuiz: [
    {
      type: 'scene', who: 'neko',
      title: { en: 'Day 1 · Arrival', zh: '第1天 · 抵达' },
      lines: [
        { en: '{name}! You made it. Welcome to Minna Town!', zh: '{name}！你终于到啦。欢迎来到大家町！' },
        { en: 'It’s your first day, and the whole town wants to meet you. In Japan, a good first impression starts with a good self-introduction.', zh: '今天是你的第一天，镇上的大家都想认识你。在日本，好的第一印象从自我介绍开始。' },
        { en: 'Kitsune-san will warm you up at the shrine first. If you slip up, don’t worry: she’ll bring the question back so you can try again.', zh: '狐狸小姐会先在神社帮你热身。答错了也别担心，她会把题目再拿出来让你重试。' }
      ]
    },

    // ----- Part 1: warm-up at the shrine (練習A, 問題5) -----
    {
      prompt: { en: 'Kitsune-san points at the は in this sentence. How do you read it?', zh: '狐狸小姐指着句中的は。它怎么读？' },
      jp: 'わたしは マイク・ミラーです。',
      choices: ['wa', 'ha', 'o', 'a'],
      answer: 'wa',
      explanation: { en: 'As a particle, は is always read わ (wa). Inside a word, like はい or はじめまして, it’s read “ha”.', zh: 'は作助词时一律读作わ（wa）。在单词里，如はい、はじめまして，才读作“ha”。' },
      why: {
        'ha': { en: '“ha” is the usual sound of this kana, but the topic particle は is read “wa”.', zh: '“ha”是这个假名的一般读音，但表示主题的助词は读作“wa”。' }
      }
    },
    {
      type: 'order',
      translation: { en: 'Ms. Lee is not a student.', zh: '李女士不是学生。' },
      pieces: ['イーさんは', 'がくせい', 'じゃ', 'ありません。'],
      explanation: { en: 'A negative sentence keeps the shape of N₁ は N₂ です. Just swap です for じゃ ありません.', zh: '否定句的结构和N₁はN₂です一样，只要把です换成じゃ ありません。' }
    },
    {
      prompt: { en: 'Two blanks this time! Choose the pair that fits.', zh: '这次有两个空！请选择合适的一组。' },
      jp: 'カリナさん（　）先生です（　）。\n……いいえ、先生じゃ ありません。',
      choices: ['は … か', 'も … か', 'か … は', 'の … か'],
      answer: 'は … か',
      explanation: { en: 'The reply starts with いいえ, so the first line must be a question: は marks the topic and か at the end makes it a question.', zh: '回答以いいえ开头，所以前一句一定是疑问句：は表示主题，句尾的か表示疑问。' },
      why: {
        'も … か': { en: 'も means “also”, but nobody else was mentioned before Karina.', zh: 'も表示“也”，但前面没有提到别人。' },
        'か … は': { en: 'か belongs at the end of the sentence, and は goes right after the topic.', zh: 'か要放在句尾，は要紧跟在主题后面。' },
        'の … か': { en: 'の joins two nouns. It can’t mark Karina as the topic.', zh: 'の连接两个名词，不能表示主题。' }
      }
    },
    {
      prompt: { en: 'Work backwards from the answer. Which question word fits?', zh: '根据回答倒推。应该用哪个疑问词？' },
      jp: 'テレーザちゃんは（　）ですか。\n……9さいです。',
      choices: ['なんさい', 'だれ', 'どなた', 'がくせい'],
      answer: 'なんさい',
      explanation: { en: 'The answer is an age (9さい), so the question asks なんさい (how old).', zh: '回答是年龄（9岁），所以问句要用なんさい（几岁）。' },
      why: {
        'だれ': { en: 'だれ asks “who”. The answer would be a name, not an age.', zh: 'だれ问的是“谁”，回答应该是名字，而不是年龄。' },
        'どなた': { en: 'どなた is the polite “who”. It still asks for a person, not an age.', zh: 'どなた是礼貌地问“谁”，问的仍然是人，不是年龄。' },
        'がくせい': { en: 'がくせいですか asks “Is she a student?”. The reply would start with はい or いいえ.', zh: 'がくせいですか是问“她是学生吗？”，应该用はい或いいえ回答。' }
      }
    },
    {
      prompt: { en: 'At the shrine you meet an elderly priest. You want to ask his age politely. What do you say?', zh: '你在神社遇到一位年长的神官，想礼貌地问他的年龄。该怎么说？' },
      choices: ['おいくつですか。', 'なんさいですか。', 'だれですか。', '9さいですか。'],
      answer: 'おいくつですか。',
      explanation: { en: 'おいくつ is the polite equivalent of なんさい. Use it with adults, especially older people.', zh: 'おいくつ是なんさい的礼貌说法。对成年人，特别是长辈，要用おいくつ。' },
      why: {
        'なんさいですか。': { en: 'Not wrong Japanese, but なんさい is casual. It suits children, like テレーザちゃん.', zh: '没有语法错误，但なんさい比较随便，适合问小孩，比如テレーザちゃん。' },
        'だれですか。': { en: 'だれですか asks “Who are you?”, and it’s blunt too.', zh: 'だれですか是问“你是谁？”，而且语气生硬。' },
        '9さいですか。': { en: 'This asks “Are you 9?”. Probably not, for an elderly priest!', zh: '这是在问“您9岁吗？”，年长的神官可不是9岁！' }
      }
    },

    {
      type: 'scene', who: 'tanuki',
      title: { en: 'Part 2 · The town noticeboard', zh: '第2部分 · 小镇布告栏' },
      lines: [
        { en: 'Ah, you must be {name}! I’m Tanuki-sensei. I look after the noticeboard by the vending machines.', zh: '啊，你一定就是{name}吧！我是狸猫老师，负责管理自动贩卖机旁边的布告栏。' },
        { en: 'Everyone in town has pinned up their name card. Read each card carefully. I’ll ask you about them!', zh: '镇上每个人都把名片贴在了布告栏上。仔细看名片，我会考考你哦！' }
      ]
    },

    // ----- Part 2: name cards (練習B, 問題3, 問題4) -----
    {
      card: CARDS.watt,
      prompt: { en: 'Read the card. Which sentence is correct?', zh: '看名片。哪个句子是正确的？' },
      choices: ['ワットさんは イギリス人です。', 'ワットさんは アメリカ人です。', 'ワットさんは イギリスです。', 'ワットさんは イギリス人さんです。'],
      answer: 'ワットさんは イギリス人です。',
      explanation: { en: 'Country + 人 (じん) = a person from that country. Mr. Watt is from the U.K., so he is イギリス人.', zh: '国名＋人（じん）＝该国的人。瓦特先生来自英国，所以是イギリス人。' },
      why: {
        'ワットさんは アメリカ人です。': { en: 'Check the card again: Mr. Watt is from イギリス (the U.K.).', zh: '再看看名片：瓦特先生来自イギリス（英国）。' },
        'ワットさんは イギリスです。': { en: 'This says “Mr. Watt is the U.K.” Add 人 to say he is British.', zh: '这句话的意思是“瓦特先生是英国”。要加上人才是“英国人”。' },
        'ワットさんは イギリス人さんです。': { en: 'さん goes after a person’s name, not after 〜人.', zh: 'さん接在人名后面，不接在〜人后面。' }
      }
    },
    {
      card: CARDS.thawaphon,
      type: 'input',
      prompt: { en: 'Mr. Thawaphon is a student, not a teacher. Make the sentence negative.', zh: '塔瓦朋先生是学生，不是老师。请改成否定句。' },
      jp: 'タワポンさんは 先生（　）。',
      answers: ['じゃありません', 'ではありません'],
      explanation: { en: 'じゃ ありません is the negative of です. では ありません is the formal version.', zh: 'じゃ ありません是です的否定形式，では ありません是正式的说法。' },
      why: {
        'じゃないです': { en: 'じゃないです is casual speech. Lesson 1 teaches じゃ ありません.', zh: 'じゃないです是口语说法，第1课学的是じゃ ありません。' },
        'ですじゃありません': { en: 'じゃ ありません replaces です. Don’t keep です in front of it.', zh: 'じゃ ありません是替换です的，前面不要再加です。' },
        'ありません': { en: 'You need じゃ (or では) before ありません.', zh: 'ありません前面要加じゃ（或では）。' }
      }
    },
    {
      card: CARDS.yamada,
      prompt: { en: 'You ask Ms. Yamada about her job. Read her card: how does she reply?', zh: '你问山田女士的职业。看她的名片：她会怎么回答？' },
      talk: [{ who: 'you', jp: '山田さんは 銀行員ですか。' }, { who: '山田', jp: '（　）' }],
      choices: ['はい、銀行員です。', 'はい、銀行員じゃ ありません。', 'いいえ、銀行員です。', 'はい、山田さんです。'],
      answer: 'はい、銀行員です。',
      explanation: { en: 'Her card says 銀行員, so she agrees: はい + the same noun + です.', zh: '名片上写着銀行員，所以她表示肯定：はい＋同一个名词＋です。' },
      why: {
        'はい、銀行員じゃ ありません。': { en: 'はい means “yes”, but じゃ ありません means “is not”. They contradict each other.', zh: 'はい表示“是”，じゃ ありません表示“不是”，前后矛盾。' },
        'いいえ、銀行員です。': { en: 'いいえ means “no”, but then she says she IS a bank employee. Mixed signals!', zh: 'いいえ表示“不是”，后面却说自己是银行职员，前后矛盾。' },
        'はい、山田さんです。': { en: 'Two mistakes: you asked about her job, not her name, and nobody puts さん on their own name.', zh: '两处错误：问的是职业而不是名字；而且不能在自己的名字后面加さん。' }
      }
    },
    {
      card: CARDS.gupta,
      prompt: { en: 'A tricky one! Mr. Miller is American. What’s the right answer about Mr. Gupta?', zh: '这题有点难！米勒先生是美国人。关于古普塔先生，正确的回答是哪个？' },
      talk: [{ who: 'you', jp: 'ミラーさんは アメリカ人です。\nグプタさんも アメリカ人ですか。' }, { who: 'tanuki', jp: '（　）' }],
      choices: ['いいえ、グプタさんは アメリカ人じゃ ありません。', 'いいえ、グプタさんも アメリカ人じゃ ありません。', 'はい、グプタさんも アメリカ人です。', 'いいえ、グプタさんは インドじゃ ありません。'],
      answer: 'いいえ、グプタさんは アメリカ人じゃ ありません。',
      explanation: { en: 'In a “no” answer, switch も back to は. Mr. Gupta is not American, unlike Mr. Miller.', zh: '否定回答时要把も换回は。古普塔先生和米勒先生不同，不是美国人。' },
      why: {
        'いいえ、グプタさんも アメリカ人じゃ ありません。': { en: 'も says “ALSO not American”, as if Mr. Miller weren’t American either. But he is! Use は.', zh: 'も的意思是“也不是美国人”，好像米勒先生也不是美国人一样。但他是！要用は。' },
        'はい、グプタさんも アメリカ人です。': { en: 'Check the card: Mr. Gupta is from インド (India).', zh: '看名片：古普塔先生来自インド（印度）。' },
        'いいえ、グプタさんは インドじゃ ありません。': { en: 'He IS from India, and nationality needs 人: インド人.', zh: '他就是印度人，而且说国籍要加人：インド人。' }
      }
    },
    {
      card: CARDS.wang,
      prompt: { en: 'You spot someone you don’t know. Ask Tanuki-sensei politely who it is.', zh: '你看到一个不认识的人。礼貌地问狸猫老师那是谁。' },
      talk: [{ who: 'you', jp: 'あの 方は（　）ですか。' }, { who: 'tanuki', jp: 'ワンさんです。' }],
      choices: ['どなた', 'だれさん', 'なんさい', 'いしゃ'],
      answer: 'どなた',
      explanation: { en: 'To ask “who” politely, use どなた. だれ is the casual version.', zh: '礼貌地问“谁”用どなた，だれ是普通的说法。' },
      why: {
        'だれさん': { en: 'さん goes after people’s names, never after だれ.', zh: 'さん接在人名后面，不能接在だれ后面。' },
        'なんさい': { en: 'The answer is a name, so the question can’t be about age.', zh: '回答是名字，所以问的不是年龄。' },
        'いしゃ': { en: 'あの方は いしゃですか asks “Is that person a doctor?”. The answer would be はい or いいえ.', zh: 'あの方は いしゃですか是问“那位是医生吗？”，应该用はい或いいえ回答。' }
      }
    },
    {
      card: CARDS.wang,
      type: 'order',
      prompt: { en: 'Tanuki-sensei adds what Mr. Wang does. Build his sentence.', zh: '狸猫老师补充说明王先生的工作。请组成他的句子。' },
      translation: { en: 'He’s a doctor at Kobe Hospital.', zh: '他是神户医院的医生。' },
      pieces: ['神戸病院', 'の', '医者', 'です。'],
      explanation: { en: 'In N₁ の N₂, the organisation (N₁) comes first and the role (N₂) comes after: 神戸病院の 医者.', zh: '在N₁のN₂中，组织（N₁）在前，身份（N₂）在后：神戸病院の 医者。' }
    },
    {
      card: CARDS.lee,
      prompt: { en: 'Is this sentence about the card correct?', zh: '关于这张名片，这句话正确吗？' },
      jp: 'イーさんは 研究者の AKCです。',
      choices: TF, fixedOrder: true, answer: 1,
      explanation: { en: 'Word order around の matters! The organisation comes first: AKCの 研究者 (a researcher at AKC). 研究者の AKC means “the researcher’s AKC”.', zh: 'の前后的语序很重要！组织在前：AKCの 研究者（AKC的研究人员）。研究者の AKC的意思是“研究人员的AKC”。' },
      why: { 0: { en: 'Look closely at the order around の. It’s backwards.', zh: '仔细看の前后的顺序，正好颠倒了。' } }
    },
    {
      card: CARDS.karina,
      type: 'input',
      prompt: { en: 'Read the card and fill in the blank.', zh: '看名片并填空。' },
      jp: 'カリナさんは（　）の 学生です。',
      answers: ['ふじだいがく', '富士大学'],
      explanation: { en: 'Karina studies at 富士大学 (ふじだいがく): 富士大学の 学生.', zh: '卡丽娜在富士大学（ふじだいがく）上学：富士大学の 学生。' },
      why: {
        'さくらだいがく': { en: 'Close! That’s the other university. Karina’s card says 富士大学 (ふじだいがく).', zh: '差一点！那是另一所大学。卡丽娜的名片上写的是富士大学（ふじだいがく）。' },
        'さくら大学': { en: 'Close! That’s the other university. Karina’s card says 富士大学 (ふじだいがく).', zh: '差一点！那是另一所大学。卡丽娜的名片上写的是富士大学（ふじだいがく）。' },
        'インドネシア': { en: 'That’s her country. The blank is the school she belongs to.', zh: '那是她的国家。这里要填她所属的学校。' }
      }
    },

    {
      type: 'scene', who: 'kitsune',
      title: { en: 'Part 3 · The IMC office', zh: '第3部分 · IMC公司' },
      lines: [
        { en: 'Welcome to the IMC office, {name}! I work at reception.', zh: '{name}，欢迎来到IMC公司！我在前台工作。' },
        { en: 'Lots of people are meeting for the first time today, and names keep getting mixed up. Can you help keep every conversation polite?', zh: '今天有很多人第一次见面，名字老是被弄错。你能帮忙让每段对话都保持礼貌吗？' }
      ]
    },

    // ----- Part 3: conversations (練習C) -----
    {
      prompt: { en: 'A visitor arrives. You don’t know her name yet. What do you say?', zh: '来了一位访客，你还不知道她的名字。你该说什么？' },
      talk: [{ who: 'you', jp: '（　）' }, { who: 'イー', jp: 'イーです。' }],
      choices: ['失礼ですが、お名前は？', 'あなたは だれですか。', 'お名前は、失礼ですが？', '失礼ですが、だれですか。'],
      answer: '失礼ですが、お名前は？',
      explanation: { en: '失礼ですが (“Excuse me, but…”) softens a personal question. Then お名前は？ politely asks for her name.', zh: '失礼ですが（“不好意思，请问……”）能让询问个人信息变得委婉，然后用お名前は？礼貌地问名字。' },
      why: {
        'あなたは だれですか。': { en: 'Grammatically fine, but あなた plus だれ sounds blunt, even rude, to a stranger.', zh: '语法没错，但对陌生人说あなた加上だれ，听起来很生硬，甚至不礼貌。' },
        'お名前は、失礼ですが？': { en: '失礼ですが always comes first, before the question.', zh: '失礼ですが要放在问题前面。' },
        '失礼ですが、だれですか。': { en: 'Better, but だれ is casual. お名前は？ is the polite way.', zh: '好一些，但だれ比较随便。お名前は？才是礼貌的说法。' }
      }
    },
    {
      prompt: { en: 'Oops, you misheard her name. How does she correct you?', zh: '糟糕，你听错了她的名字。她会怎么纠正你？' },
      talk: [{ who: 'イー', jp: 'イーです。' }, { who: 'you', jp: 'リーさんですか。' }, { who: 'イー', jp: '（　）' }],
      choices: ['いいえ、イーです。', 'いいえ、イーさんです。', 'はい、イーです。', 'いいえ、イーじゃ ありません。'],
      answer: 'いいえ、イーです。',
      explanation: { en: 'She says いいえ (no), then her real name, without さん, because it’s her own name.', zh: '她先说いいえ（不是），再说出自己的真名，不加さん，因为是自己的名字。' },
      why: {
        'いいえ、イーさんです。': { en: 'Never use さん with your own name, even when correcting someone.', zh: '即使是纠正别人，也不能在自己的名字后面加さん。' },
        'はい、イーです。': { en: 'はい agrees that she’s “Lee”, but her name is イー (Yi).', zh: 'はい表示同意自己是“リー”，但她叫イー。' },
        'いいえ、イーじゃ ありません。': { en: 'This says “I’m not Yi”, but she IS イー!', zh: '这句话的意思是“我不是イー”，但她就是イー！' }
      }
    },
    {
      prompt: { en: 'Kitsune-san introduces Mr. Miller to Mr. Tanaka. What does she say?', zh: '狐狸小姐向田中先生介绍米勒先生。她会说什么？' },
      talk: [{ who: 'kitsune', jp: '田中さん、おはよう ございます。' }, { who: '田中', jp: 'おはよう ございます。' }, { who: 'kitsune', jp: '（　）' }],
      choices: ['こちらは ミラーさんです。', 'こちらは ミラーです。', 'わたしは ミラーさんです。', 'ミラーさんは こちらです。'],
      answer: 'こちらは ミラーさんです。',
      explanation: { en: 'こちらは 〜さんです is how you introduce someone else. It’s another person’s name, so add さん.', zh: 'こちらは 〜さんです用于介绍别人。因为是别人的名字，所以要加さん。' },
      why: {
        'こちらは ミラーです。': { en: 'When you introduce someone else, add さん to show respect.', zh: '介绍别人时，要加さん表示尊敬。' },
        'わたしは ミラーさんです。': { en: 'わたしは means “I am…”. Kitsune-san isn’t Mr. Miller!', zh: 'わたしは是“我是……”的意思，狐狸小姐可不是米勒先生！' },
        'ミラーさんは こちらです。': { en: 'This means “Mr. Miller is this way”, which gives directions, not an introduction.', zh: '这句话的意思是“米勒先生在这边”，是指路，不是介绍。' }
      }
    },
    {
      type: 'order',
      prompt: { en: 'Now Mr. Miller introduces himself. Put his words in order.', zh: '现在米勒先生做自我介绍。请排列他说的话。' },
      translation: { en: 'How do you do? I’m Miller. I work for IMC. Pleased to meet you.', zh: '初次见面。我是米勒，是IMC公司的职员。请多关照。' },
      pieces: ['初めまして。', 'ミラーです。', 'IMCの', '社員です。', 'どうぞ よろしく お願いします。'],
      answers: [
        ['初めまして。', 'ミラーです。', 'IMCの', '社員です。', 'どうぞ よろしく お願いします。'],
        ['初めまして。', 'IMCの', '社員です。', 'ミラーです。', 'どうぞ よろしく お願いします。']
      ],
      explanation: { en: 'A self-introduction has a set shape: 初めまして → your name → your company or school → どうぞ よろしく お願いします.', zh: '自我介绍有固定的结构：初めまして→名字→公司或学校→どうぞ よろしく お願いします。' }
    },

    {
      type: 'scene', who: 'neko',
      title: { en: 'Part 4 · The welcome party', zh: '第4部分 · 欢迎会' },
      lines: [
        { en: '{name}! You’ve met almost everyone. The neighbours are throwing you a welcome party under the lanterns!', zh: '{name}！你几乎见过所有人了。邻居们在灯笼下为你办了一场欢迎会！' },
        { en: 'Everyone is curious about you. Answer their questions, then give your very own self-introduction. 頑張って (ganbatte)!', zh: '大家都对你很好奇。回答他们的问题，然后做一个属于你自己的自我介绍。加油（頑張って）！' }
      ]
    },

    // ----- Part 4: about you (問題1, 問題6) -----
    {
      prompt: { en: 'Imagine you’re a teacher. Which reply is right?', zh: '假设你是老师。哪个回答是对的？' },
      talk: [{ who: 'tanuki', jp: '{name}さんは 学生ですか。' }, { who: 'you', jp: '（　）' }],
      choices: ['いいえ、教師です。', 'いいえ、先生です。', 'はい、教師です。', 'いいえ、教師さんです。'],
      answer: 'いいえ、教師です。',
      explanation: { en: 'For your own job, say 教師 (きょうし). 先生 is a title of respect for OTHER people.', zh: '说自己的职业用教師（きょうし）。先生是对别人的尊称。' },
      why: {
        'いいえ、先生です。': { en: 'Careful! 先生 shows respect, so you don’t use it about yourself. Say 教師.', zh: '注意！先生带有尊敬之意，不能用来说自己，要说教師。' },
        'はい、教師です。': { en: 'He asked “Are you a student?”. You’re a teacher, so start with いいえ.', zh: '他问的是“你是学生吗？”。你是老师，所以要用いいえ回答。' },
        'いいえ、教師さんです。': { en: 'さん is for people’s names, not jobs, and never for yourself.', zh: 'さん用于人名，不用于职业，更不能用于自己。' }
      }
    },
    {
      prompt: { en: 'Your turn! Start your self-introduction.', zh: '轮到你了！开始你的自我介绍。' },
      jp: '初めまして。わたしは（　）です。',
      choices: ['{name}', '{name}さん', '{name}ちゃん', 'あなた'],
      answer: '{name}',
      explanation: { en: 'Just your name. さん and ちゃん are for other people, never for yourself.', zh: '只说名字。さん和ちゃん用于别人，绝对不能用于自己。' },
      why: {
        '{name}さん': { en: 'The classic mistake! Never add さん to your own name.', zh: '最常见的错误！不能在自己的名字后面加さん。' },
        '{name}ちゃん': { en: 'ちゃん is for children’s names, and never for yourself.', zh: 'ちゃん用于小孩的名字，而且不能用于自己。' },
        'あなた': { en: 'あなた means “you”. This says “I am you”!', zh: 'あなた是“你”的意思。这句话变成了“我是你”！' }
      }
    },
    {
      type: 'order',
      prompt: { en: 'The big moment. Put your whole self-introduction together!', zh: '关键时刻！把你的完整自我介绍组合起来！' },
      translation: { en: 'How do you do? I’m {name}. Pleased to meet you.', zh: '初次见面。我是{name}。请多关照。' },
      pieces: ['初めまして。', 'わたしは', '{name}', 'です。', 'どうぞ', 'よろしく。'],
      explanation: { en: '初めまして opens, your name goes in the middle with わたしは 〜です, and どうぞ よろしく closes. You just introduced yourself in Japanese!', zh: '用初めまして开头，中间用わたしは 〜です说名字，最后用どうぞ よろしく结束。你刚刚用日语完成了自我介绍！' }
    },

    {
      type: 'scene', who: 'neko',
      title: { en: 'Epilogue', zh: '尾声' },
      lines: [
        { en: 'Everyone is clapping, {name}! You’re officially part of Minna Town now.', zh: '{name}，大家都在为你鼓掌！你现在正式成为大家町的一员了。' },
        { en: 'Let’s see how you did today.', zh: '来看看你今天的表现吧。' }
      ]
    }
  ]
});
})();
