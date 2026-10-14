// Lesson 1, from the textbook's Vocabulary (I) and Grammar Notes (IV) pages.
// The grammar quiz is still a placeholder set until the practice questions are added.
MNN.registerChapter({
  id: 1,
  title: { jp: 'はじめまして', en: 'Nice to meet you', zh: '初次见面' },
  sampleQuiz: true,

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
    { group: 'expressions', jp: '〜から きました。', kanji: '〜から 来ました。', en: 'I’m from 〜 (country).', zh: '我来自～（国家）。' },
    { group: 'expressions', jp: '［どうぞ］ よろしく ［おねがいします］。', kanji: '［どうぞ］ よろしく ［お願いします］。', en: 'Pleased to meet you.', zh: '请多关照。',
      note: { en: 'Literally “Please be nice to me.” Usually said at the end of a self-introduction. The words in [ ] can be left out.', zh: '字面意思是“请多多关照我”。通常在自我介绍的最后说。［ ］里的部分可以省略。' } },
    { group: 'expressions', jp: 'しつれいですが', kanji: '失礼ですが', en: 'Excuse me, but…', zh: '不好意思，请问……',
      note: { en: 'Used when asking someone for personal information, such as their name or address.', zh: '询问对方姓名、住址等个人信息时使用。' } },
    { group: 'expressions', jp: 'おなまえは？', kanji: 'お名前は？', en: 'May I have your name?', zh: '请问您叫什么名字？' },
    { group: 'expressions', jp: 'こちらは 〜さんです。', en: 'This is Mr./Ms. 〜.', zh: '这位是～先生／女士。' },

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

  // Placeholder questions until the textbook practice questions are added.
  grammarQuiz: [
    {
      prompt: { en: 'Choose the correct particle.', zh: '请选择正确的助词。' },
      jp: 'わたし（　）マイク・ミラーです。',
      choices: ['は', 'も', 'の', 'か'],
      answer: 'は',
      explanation: { en: 'は marks “I” as the topic: “As for me, I am Mike Miller.”', zh: 'は表示主题“我”：“我是麦克·米勒。”' },
      why: {
        'も': { en: 'も means “also”. Nobody else was mentioned before, so there is nothing to be “also”.', zh: 'も表示“也”。前面没有提到别人，所以不能用“也”。' },
        'の': { en: 'の joins two nouns (N₁ の N₂), as in IMCの 社員. It can’t mark the topic.', zh: 'の连接两个名词（N₁のN₂），如IMCの 社員，不能表示主题。' },
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
        'は': { en: 'は is grammatical, but it loses the meaning “also”. The first sentence already said Mr. Miller is a company employee.', zh: 'は在语法上可以，但失去了“也”的意思。前一句已经说过米勒先生是公司职员。' }
      }
    },
    {
      prompt: { en: 'Choose the correct particle.', zh: '请选择正确的助词。' },
      jp: 'ミラーさんは IMC（　）社員です。',
      choices: ['は', 'も', 'の', 'か'],
      answer: 'の',
      explanation: { en: 'IMCの 社員 = “an employee of IMC”. の links the organisation to the person who belongs to it.', zh: 'IMCの社員＝“IMC公司的职员”。の把组织和所属的人连接起来。' }
    },
    {
      prompt: { en: 'Choose the most natural word.', zh: '请选择最自然的说法。' },
      jp: 'わたしは （　）です。',
      translation: { en: '(Talking about your own job) I’m a teacher.', zh: '（说自己的职业）我是老师。' },
      choices: ['きょうし', 'せんせい', 'がくせい', 'いしゃ'],
      answer: 'きょうし',
      explanation: { en: 'For your own job, say きょうし. せんせい is a title of respect, so it isn’t used about yourself.', zh: '说自己的职业时用きょうし。せんせい是尊称，不用于自己。' },
      why: {
        'せんせい': { en: 'せんせい shows respect, so it’s only used for other people, never about your own job.', zh: 'せんせい带有尊敬的意思，只用于别人，不能说自己。' }
      }
    },
    {
      type: 'input',
      prompt: { en: 'Make the sentence negative. Fill in the blank.', zh: '请改成否定句并填空。' },
      jp: 'わたしは 学生です。→ わたしは 学生（　）。',
      answers: ['じゃありません', 'ではありません'],
      explanation: { en: 'The negative of です is じゃ ありません (or the more formal では ありません).', zh: 'です的否定形式是じゃ ありません（或更正式的では ありません）。' },
      why: {
        'じゃないです': { en: 'じゃないです is used in casual speech, but Lesson 1 teaches じゃ ありません.', zh: 'じゃないです是口语说法，第1课学的是じゃ ありません。' },
        'ですじゃありません': { en: 'じゃ ありません replaces です. Don’t keep です in front of it.', zh: 'じゃ ありません是替换です的，前面不要再加です。' }
      }
    },
    {
      type: 'order',
      translation: { en: 'Mr. Miller is an IMC employee.', zh: '米勒先生是IMC公司的职员。' },
      pieces: ['ミラーさんは', 'IMCの', '社員', 'です。'],
      explanation: { en: 'The topic with は comes first. の joins IMC to 社員 (IMC’s employee), and です ends the sentence.', zh: '带は的主题放在最前面。の把IMC和社員连接起来（IMC的职员），です放在句尾。' }
    },
    {
      type: 'order',
      translation: { en: 'Who is that person? (polite)', zh: '那位是谁？（礼貌）' },
      pieces: ['あの', '方は', 'どなた', 'ですか。'],
      explanation: { en: 'あの comes right before the noun it points to (方). The question word どなた takes the place of the answer, and か ends the question.', zh: 'あの放在所指的名词（方）前面。疑问词どなた放在答案的位置上，句尾加か。' }
    }
  ]
});
