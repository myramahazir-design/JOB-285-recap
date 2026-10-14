// Lesson 1. Vocabulary is from the textbook word list; grammar quiz items are
// placeholders until the textbook exercises are added.
MNN.registerChapter({
  id: 1,
  title: { jp: 'はじめまして', en: 'Nice to meet you', zh: '初次见面' },
  sample: true,

  vocab: [
    { jp: 'わたし', kanji: '私', en: 'I', zh: '我' },
    { jp: 'わたしたち', en: 'we', zh: '我们' },
    { jp: 'あなた', en: 'you', zh: '你' },
    { jp: 'あのひと', kanji: 'あの人', en: 'that person, he, she', zh: '那个人，他，她',
      note: { en: 'あのかた (あの方) is the polite form.', zh: 'あのかた（あの方）是更礼貌的说法。' } },
    { jp: '〜さん', en: 'Mr. / Ms. (title of respect)', zh: '～先生 / ～女士（敬称）',
      note: { en: 'Never use さん with your own name!', zh: '不能在自己的名字后面加さん！' } },
    { jp: '〜ちゃん', en: 'suffix for children’s names', zh: '接在小孩名字后的称呼' },
    { jp: '〜じん', kanji: '〜人', en: 'a person of (country)', zh: '～人（国籍）' },
    { jp: 'せんせい', kanji: '先生', en: 'teacher, instructor', zh: '老师',
      note: { en: 'Not used for your own job. Use きょうし instead.', zh: '不用于说自己的职业，那时用きょうし。' } },
    { jp: 'きょうし', kanji: '教師', en: 'teacher, instructor', zh: '教师' },
    { jp: 'がくせい', kanji: '学生', en: 'student', zh: '学生' },
    { jp: 'かいしゃいん', kanji: '会社員', en: 'company employee', zh: '公司职员' },
    { jp: 'しゃいん', kanji: '社員', en: 'employee of (company)', zh: '～公司的职员' },
    { jp: 'ぎんこういん', kanji: '銀行員', en: 'bank employee', zh: '银行职员' },
    { jp: 'いしゃ', kanji: '医者', en: 'doctor', zh: '医生' },
    { jp: 'けんきゅうしゃ', kanji: '研究者', en: 'researcher', zh: '研究人员' },
    { jp: 'だいがく', kanji: '大学', en: 'university', zh: '大学' },
    { jp: 'びょういん', kanji: '病院', en: 'hospital', zh: '医院' },
    { jp: 'だれ', en: 'who', zh: '谁',
      note: { en: 'どなた is the polite form.', zh: 'どなた是更礼貌的说法。' } },
    { jp: '〜さい', kanji: '〜歳', en: '— years old', zh: '～岁' },
    { jp: 'なんさい', kanji: '何歳', en: 'how old', zh: '几岁',
      note: { en: 'おいくつ is the polite form.', zh: 'おいくつ是更礼貌的说法。' } },
    { jp: 'はい', en: 'yes', zh: '是' },
    { jp: 'いいえ', en: 'no', zh: '不是' },
    { jp: 'はじめまして', en: 'How do you do?', zh: '初次见面' },
    { jp: 'どうぞよろしく', en: 'Pleased to meet you.', zh: '请多关照' }
  ],

  grammar: [
    {
      pattern: 'N₁ は N₂ です',
      title: { en: 'N₁ is N₂', zh: 'N₁ 是 N₂' },
      explain: {
        en: 'は marks the topic of the sentence. Careful: as a particle it is read “wa”, not “ha”! です ends the sentence politely.',
        zh: 'は表示句子的主题。注意：作助词时读作“wa”，不是“ha”！です使句子显得礼貌。'
      },
      examples: [
        { jp: 'わたしは マイク・ミラーです。', en: 'I am Mike Miller.', zh: '我是麦克·米勒。' }
      ]
    },
    {
      pattern: 'N₁ は N₂ じゃ（では）ありません',
      title: { en: 'N₁ is not N₂', zh: 'N₁ 不是 N₂' },
      explain: {
        en: 'じゃありません is the negative of です. ではありません means the same but is more formal, often used in writing.',
        zh: 'じゃありません是です的否定形式。ではありません意思相同，但更正式，多用于书面。'
      },
      examples: [
        { jp: 'サントスさんは 学生じゃ ありません。', en: 'Mr. Santos is not a student.', zh: '桑托斯先生不是学生。' }
      ]
    },
    {
      pattern: 'S か',
      title: { en: 'Making a question', zh: '疑问句' },
      explain: {
        en: 'Put か at the end of a sentence to turn it into a question. The word order does not change.',
        zh: '在句尾加上か就变成疑问句，语序不变。'
      },
      examples: [
        { jp: 'ミラーさんは アメリカ人ですか。', en: 'Is Mr. Miller American?', zh: '米勒先生是美国人吗？' },
        { jp: '…はい、アメリカ人です。', en: '…Yes, he is American.', zh: '……是的，他是美国人。' }
      ]
    },
    {
      pattern: 'N も',
      title: { en: 'N also / too', zh: 'N 也' },
      explain: {
        en: 'も replaces は when the same thing is true for another person or thing.',
        zh: '当同样的情况也适用于另一个人或事物时，用も代替は。'
      },
      examples: [
        { jp: 'ミラーさんは 会社員です。グプタさんも 会社員です。', en: 'Mr. Miller is a company employee. Mr. Gupta is also a company employee.', zh: '米勒先生是公司职员。古普塔先生也是公司职员。' }
      ]
    },
    {
      pattern: 'N₁ の N₂',
      title: { en: 'N₂ of / belonging to N₁', zh: 'N₁ 的 N₂' },
      explain: {
        en: 'の connects two nouns. N₁ tells you more about N₂, such as which company or school it belongs to.',
        zh: 'の连接两个名词，N₁修饰N₂，例如说明所属的公司或学校。'
      },
      examples: [
        { jp: 'ミラーさんは IMCの 社員です。', en: 'Mr. Miller is an employee of IMC.', zh: '米勒先生是IMC公司的职员。' }
      ]
    }
  ],

  // Left empty: the vocab quiz is generated from the word list above.
  vocabQuiz: [],

  grammarQuiz: [
    {
      prompt: { en: 'Choose the correct particle.', zh: '请选择正确的助词。' },
      jp: 'わたし（　）マイク・ミラーです。',
      choices: ['は', 'も', 'の', 'か'],
      answer: 'は',
      explanation: { en: 'は marks “I” as the topic: “As for me, I am Mike Miller.”', zh: 'は表示主题“我”：“我是麦克·米勒。”' },
      why: {
        'も': { en: 'も means “also”. Nobody else was mentioned before, so there is nothing to be “also”.', zh: 'も表示“也”。前面没有提到别人，所以不能用“也”。' },
        'の': { en: 'の joins two nouns (N₁ の N₂). It can’t connect a noun to a whole sentence like this.', zh: 'の用来连接两个名词（N₁のN₂），不能这样用。' },
        'か': { en: 'か goes at the end of a sentence to make a question, not after the topic.', zh: 'か放在句尾表示疑问，不能放在主题后面。' }
      }
    },
    {
      prompt: { en: 'Choose the correct particle.', zh: '请选择正确的助词。' },
      jp: 'ミラーさんは 会社員です。グプタさん（　）会社員です。',
      choices: ['は', 'も', 'の', 'か'],
      answer: 'も',
      explanation: { en: 'Mr. Gupta is ALSO a company employee, so use も.', zh: '古普塔先生“也”是公司职员，所以用も。' },
      why: {
        'は': { en: 'は is grammatical, but it loses the meaning “also”. The first sentence already said someone is a company employee.', zh: 'は在语法上可以，但失去了“也”的意思。前一句已经说过有人是公司职员。' }
      }
    },
    {
      prompt: { en: 'Choose the correct particle.', zh: '请选择正确的助词。' },
      jp: 'ミラーさんは IMC（　）社員です。',
      choices: ['は', 'も', 'の', 'か'],
      answer: 'の',
      explanation: { en: 'IMC の 社員 = “an employee OF IMC”. の links the two nouns.', zh: 'IMCの社員＝“IMC公司的职员”。の连接两个名词。' }
    },
    {
      type: 'input',
      prompt: { en: 'Make the sentence negative. Fill in the blank.', zh: '请改成否定句并填空。' },
      jp: 'わたしは 学生です。→ わたしは 学生（　）。',
      answers: ['じゃありません', 'ではありません'],
      explanation: { en: 'The negative of です is じゃありません (or the more formal ではありません).', zh: 'です的否定形式是じゃありません（或更正式的ではありません）。' },
      why: {
        'じゃないです': { en: 'じゃないです is used in casual speech, but Lesson 1 teaches じゃありません.', zh: 'じゃないです是口语说法，第1课学的是じゃありません。' }
      }
    }
  ]
});
