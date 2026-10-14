// Lesson 7, from the textbook's Vocabulary, Grammar Notes, 文型・例文, 会話 and practice pages.
// Grammar quiz: story practice built from the practice pages (練習A/B/C, 問題).
MNN.registerChapter({
  id: 7,
  title: { jp: 'いらっしゃい', en: 'How nice of you to come', zh: '欢迎光临（欢迎来家里）' },

  // The lesson's 会話, shown first in the Conversation section.
  dialogue: {
    title: 'いらっしゃい',
    parts: [
      [
        { who: '山田一郎', jp: 'はい。', en: 'Yes?', zh: '来了。' },
        { who: 'ジョゼ・サントス', jp: 'サントスです。', en: 'It’s Santos.', zh: '我是桑托斯。' }
      ],
      [
        { who: '山田一郎', jp: 'いらっしゃい。 どうぞ お{上|あ}がり ください。', en: 'How nice of you to come. Do come in.', zh: '欢迎欢迎。请进。' },
        { who: 'ジョゼ・サントス', jp: '失礼します。', en: 'Thank you. (lit. Excuse me.)', zh: '打扰了。' }
      ],
      [
        { who: '山田友子', jp: 'コーヒーは いかがですか。', en: 'Would you like some coffee?', zh: '要喝咖啡吗？' },
        { who: 'マリア・サントス', jp: 'ありがとう ございます。', en: 'Thank you.', zh: '谢谢。' }
      ],
      [
        { who: '山田友子', jp: 'どうぞ。', en: 'Here you are.', zh: '请用。' },
        { who: 'マリア・サントス', jp: 'いただきます。\nこの スプーン、すてきですね。', en: 'Thank you. (said before drinking)\nWhat a lovely spoon!', zh: '我开动了。\n这个勺子真漂亮啊。' },
        { who: '山田友子', jp: 'ええ。 会社の 人に もらいました。\nメキシコの お土産です。', en: 'Yes. Someone at work gave it to me.\nIt’s a souvenir from Mexico.', zh: '是啊。是公司的人送给我的。\n是墨西哥的特产。' }
      ]
    ]
  },

  vocab: [
    // ----- Verbs -----
    { group: 'words', jp: 'きります', kanji: '切ります', en: 'cut, slice', zh: '切，剪' },
    { group: 'words', jp: 'おくります', kanji: '送ります', en: 'send', zh: '寄，送' },
    { group: 'words', jp: 'あげます', en: 'give', zh: '给' },
    { group: 'words', jp: 'もらいます', en: 'receive', zh: '收到，得到' },
    { group: 'words', jp: 'かします', kanji: '貸します', en: 'lend', zh: '借（出），借给' },
    { group: 'words', jp: 'かります', kanji: '借ります', en: 'borrow', zh: '借（入），借来' },
    { group: 'words', jp: 'おしえます', kanji: '教えます', en: 'teach', zh: '教' },
    { group: 'words', jp: 'ならいます', kanji: '習います', en: 'learn', zh: '学习（跟人学）' },
    { group: 'words', jp: 'かけます［でんわを〜］', kanji: 'かけます［電話を〜］', en: 'make [a telephone call]', zh: '打［电话］' },

    // ----- Tools and things -----
    { group: 'words', jp: 'て', kanji: '手', en: 'hand, arm', zh: '手' },
    { group: 'words', jp: 'はし', en: 'chopsticks', zh: '筷子' },
    { group: 'words', jp: 'スプーン', en: 'spoon', zh: '勺子' },
    { group: 'words', jp: 'ナイフ', en: 'knife', zh: '刀' },
    { group: 'words', jp: 'フォーク', en: 'fork', zh: '叉子' },
    { group: 'words', jp: 'はさみ', en: 'scissors', zh: '剪刀' },
    { group: 'words', jp: 'パソコン', en: 'personal computer', zh: '个人电脑' },
    { group: 'words', jp: 'ケータイ', en: 'mobile phone, cell phone', zh: '手机' },
    { group: 'words', jp: 'メール', en: 'e-mail', zh: '电子邮件' },
    { group: 'words', jp: 'ねんがじょう', kanji: '年賀状', en: 'New Year’s greeting card', zh: '贺年卡' },
    { group: 'words', jp: 'パンチ', en: 'punch', zh: '打孔机' },
    { group: 'words', jp: 'ホッチキス', en: 'stapler', zh: '订书机' },
    { group: 'words', jp: 'セロテープ', en: 'Sellotape, Scotch tape, clear adhesive tape', zh: '透明胶带' },
    { group: 'words', jp: 'けしゴム', kanji: '消しゴム', en: 'rubber, eraser', zh: '橡皮' },
    { group: 'words', jp: 'かみ', kanji: '紙', en: 'paper', zh: '纸' },
    { group: 'words', jp: 'はな', kanji: '花', en: 'flower, blossom', zh: '花' },
    { group: 'words', jp: 'シャツ', en: 'shirt', zh: '衬衫' },
    { group: 'words', jp: 'プレゼント', en: 'present, gift', zh: '礼物' },
    { group: 'words', jp: 'にもつ', kanji: '荷物', en: 'luggage, baggage, parcel', zh: '行李，包裹' },
    { group: 'words', jp: 'おかね', kanji: 'お金', en: 'money', zh: '钱' },
    { group: 'words', jp: 'きっぷ', kanji: '切符', en: 'ticket', zh: '票' },
    { group: 'words', jp: 'クリスマス', en: 'Christmas', zh: '圣诞节' },

    // ----- Family -----
    { group: 'words', jp: 'ちち', kanji: '父', en: '(my) father', zh: '（我的）父亲' ,
      note: { en: 'Use 父 for your own father when talking to others.', zh: '跟别人说起自己的父亲时用父。' } },
    { group: 'words', jp: 'はは', kanji: '母', en: '(my) mother', zh: '（我的）母亲',
      note: { en: 'Use 母 for your own mother when talking to others.', zh: '跟别人说起自己的母亲时用母。' } },
    { group: 'words', jp: 'おとうさん', kanji: 'お父さん', en: '(someone else’s) father', zh: '（别人的）父亲',
      note: { en: 'Also used to call your own father directly.', zh: '直接称呼自己的父亲时也用。' } },
    { group: 'words', jp: 'おかあさん', kanji: 'お母さん', en: '(someone else’s) mother', zh: '（别人的）母亲',
      note: { en: 'Also used to call your own mother directly.', zh: '直接称呼自己的母亲时也用。' } },

    // ----- Adverbs -----
    { group: 'words', jp: 'もう', en: 'already', zh: '已经' },
    { group: 'words', jp: 'まだ', en: 'not yet', zh: '还（没）' },
    { group: 'words', jp: 'これから', en: 'from now on, soon', zh: '从现在起，马上' },

    // ----- Practice C phrases -----
    { group: 'expressions', jp: '［〜、］ すてきですね。', en: 'What a nice [〜]!', zh: '［～］真漂亮啊！',
      note: { en: 'Compliment something someone has, like their watch or a lovely spoon.', zh: '称赞别人的东西，比如手表或漂亮的勺子。' } },

    // ----- Conversation phrases -----
    { group: 'conversation', jp: 'いらっしゃい。', en: 'How nice of you to come. (lit. Welcome.)', zh: '欢迎（来家里）。',
      note: { en: 'Said by the host when a guest arrives at their home.', zh: '客人到家里时主人说的话。' } },
    { group: 'conversation', jp: 'どうぞ おあがり ください。', kanji: 'どうぞ お{上|あ}がり ください。', en: 'Do come in.', zh: '请进。',
      note: { en: 'The host invites the guest to step up into the house from the entrance.', zh: '主人请客人从玄关进到屋里。' } },
    { group: 'conversation', jp: 'しつれいします。', kanji: '失礼します。', en: 'May I? (lit. I commit an incivility.)', zh: '打扰了。',
      note: { en: 'Said when you enter someone’s home or room.', zh: '进入别人家或房间时说。' } },
    { group: 'conversation', jp: '［〜は］ いかがですか。', en: 'Would you like [〜]?', zh: '要不要来点［～］？',
      note: { en: 'Politely offer something, like a drink to a guest.', zh: '礼貌地给别人提供东西，比如给客人倒饮料。' } },
    { group: 'conversation', jp: 'いただきます。', en: 'Thank you. / I accept. (said before eating or drinking)', zh: '我开动了。',
      note: { en: 'Always said before you start to eat or drink.', zh: '开始吃喝之前一定要说。' } },
    { group: 'conversation', jp: 'ごちそうさま［でした］。', en: 'That was delicious. (said after eating or drinking)', zh: '我吃饱了，谢谢款待。',
      note: { en: 'Said when you finish eating or drinking, to thank the host or cook.', zh: '吃喝完后说，向主人或做饭的人表示感谢。' } },

    // ----- Countries -----
    { group: 'countries', jp: 'スペイン', en: 'Spain', zh: '西班牙' }
  ],

  grammar: [
    {
      pattern: 'N(tool/means)で V',
      title: { en: 'Doing something with a tool or means', zh: '用工具或手段做某事' },
      explain: {
        en: 'で marks the tool or means you use for an action: chopsticks, a computer, a language.',
        zh: 'で表示做某事所用的工具或手段：筷子、电脑、语言等。'
      },
      examples: [
        { jp: 'はしで 食べます。', en: 'I eat with chopsticks.', zh: '我用筷子吃饭。' },
        { jp: '日本語で レポートを 書きます。', en: 'I’m going to write the report in Japanese.', zh: '我用日语写报告。' },
        { jp: 'わたしは パソコンで 映画を 見ます。', en: 'I watch films on my computer.', zh: '我用电脑看电影。' }
      ]
    },
    {
      pattern: '“Word/Sentence” は 〜語で 何ですか',
      title: { en: 'How do you say … in another language?', zh: '……用某种语言怎么说？' },
      explain: {
        en: 'Use this question to ask how to say a word or sentence in another language.',
        zh: '用这个问句询问某个词或句子用另一种语言怎么说。'
      },
      examples: [
        { jp: '「ありがとう」は 英語で 何ですか。\n……「Thank you」です。', en: 'What’s “Arigato” in English?\n……It’s “thank you”.', zh: '“ありがとう”用英语怎么说？\n……是“Thank you”。' },
        { jp: '「Thank you」は 日本語で 何ですか。\n……「ありがとう」です。', en: 'What’s “thank you” in Japanese?\n……It’s “Arigato”.', zh: '“Thank you”用日语怎么说？\n……是“ありがとう”。' }
      ]
    },
    {
      pattern: 'N₁(person)に N₂を あげます, etc.',
      title: { en: 'Giving, lending, teaching', zh: '给、借出、教' },
      explain: {
        en: 'Verbs like あげます, 貸します and 教えます pass something to someone. Mark the person who receives it with に.',
        zh: 'あげます、貸します、教えます等动词表示把东西或知识给别人。接受的人用に表示。'
      },
      examples: [
        { jp: '［わたしは］ 木村さんに 花を あげました。', en: 'I gave Ms. Kimura some flowers.', zh: '我送了木村小姐花。' },
        { jp: '［わたしは］ イーさんに 本を 貸しました。', en: 'I lent Ms. Lee a book.', zh: '我借给了李小姐一本书。' },
        { jp: '［わたしは］ 山田さんに 英語を 教えます。', en: 'I teach Mr. Yamada English.', zh: '我教山田先生英语。' }
      ]
    },
    {
      pattern: 'N₁(person)に N₂を もらいます, etc.',
      title: { en: 'Receiving, borrowing, learning', zh: '收到、借入、学习' },
      explain: {
        en: 'Verbs like もらいます, 借ります and 習います mean getting something from someone. Mark the person you get it from with に (or から).',
        zh: 'もらいます、借ります、習います等动词表示从别人那里得到东西或知识。给出的人用に（或から）表示。'
      },
      notes: [
        { en: 'If you get something from an organisation, like a bank or a school, always use から.', zh: '从银行、学校等机构得到东西时，一定要用から。' }
      ],
      table: {
        head: [{ en: 'Give (に = to)', zh: '给出（に＝给）' }, { en: 'Get (に = from)', zh: '得到（に＝从）' }],
        rows: [
          { label: { en: 'Things', zh: '东西' }, cells: ['あげます', 'もらいます'] },
          { label: { en: 'Lend', zh: '借' }, cells: ['貸します', '借ります'] },
          { label: { en: 'Knowledge', zh: '知识' }, cells: ['教えます', '習います'] }
        ]
      },
      examples: [
        { jp: '［わたしは］ 山田さんに 花を もらいました。', en: 'I received some flowers from Mr. Yamada.', zh: '我收到了山田先生送的花。' },
        { jp: '［わたしは］ カリナさんに CDを 借りました。', en: 'I borrowed a CD from Karina.', zh: '我向卡丽娜借了CD。' },
        { jp: '［わたしは］ ワンさんに 中国語を 習います。', en: 'I’m learning Chinese from Mr. Wang.', zh: '我跟王先生学中文。' },
        { jp: '銀行から お金を 借りました。', en: 'I borrowed some money from the bank.', zh: '我向银行借了钱。' }
      ]
    },
    {
      pattern: 'もう Vました',
      title: { en: 'Already / not yet', zh: '已经／还没' },
      explain: {
        en: 'もう means “already” and goes with Vました to show something is done. To say it isn’t done yet, answer いいえ、まだです.',
        zh: 'もう表示“已经”，与Vました一起用，表示动作已经完成。如果还没做，回答いいえ、まだです。'
      },
      notes: [
        { en: 'Don’t answer with いいえ、Vませんでした. That means you didn’t do it in the past, not that it isn’t done yet.', zh: '不要回答いいえ、Vませんでした。那表示过去没做，而不是现在还没完成。' }
      ],
      examples: [
        { jp: 'もう 荷物を 送りましたか。\n……はい、［もう］ 送りました。\n……いいえ、まだです。', en: 'Have you sent the baggage yet?\n……Yes, I have.\n……No, not yet.', zh: '行李已经寄了吗？\n……是的，已经寄了。\n……不，还没有。' },
        { jp: 'もう 昼ごはんを 食べましたか。\n……いいえ、まだです。 これから 食べます。', en: 'Have you had lunch yet?\n……No, not yet. I’m going to have it now.', zh: '已经吃午饭了吗？\n……不，还没有。现在去吃。' }
      ]
    },
    {
      pattern: 'Omission of particles',
      title: { en: 'Dropping particles in casual speech', zh: '口语中省略助词' },
      explain: {
        en: 'In casual speech, particles are often dropped when the meaning is obvious.',
        zh: '在口语中，意思清楚时常常省略助词。'
      },
      examples: [
        { jp: 'この スプーン［は］、すてきですね。', en: 'This is a lovely spoon, isn’t it?', zh: '这个勺子真漂亮啊。' },
        { jp: 'コーヒー［を］、もう 一杯 いかがですか。', en: 'Would you like another cup of coffee? (See Lesson 8.)', zh: '再来一杯咖啡吗？（见第8课）' }
      ]
    }
  ],

  vocabQuiz: [],

  grammarQuiz: [
    {
      type: 'scene', who: 'neko',
      title: { en: 'Day 7 · Gifts and favours', zh: '第7天 · 礼物和帮忙' },
      lines: [
        { en: 'It’s a busy day in Minna Town, {name}. People are giving presents, lending things and visiting each other.', zh: '{name}，今天的大家町很热闹。大家互相送礼物、借东西、串门。' },
        { en: 'First, let’s talk about the things we use.', zh: '先来说说我们用的东西吧。' }
      ]
    },

    // ----- Part 1: tools and languages (練習A 1–3, 練習B 1–2, 練習C 1, 問題6) -----
    {
      prompt: { en: 'At dinner, you eat rice the Japanese way. Fill the gap.', zh: '吃晚饭时，你用日本的方式吃米饭。请填空。' },
      jp: 'わたしは はし（　）ごはんを 食べます。',
      choices: ['で', 'を', 'に', 'と'],
      answer: 'で',
      explanation: { en: 'で marks the tool you use: はしで (with chopsticks).', zh: 'で表示使用的工具：はしで（用筷子）。' },
      why: {
        'を': { en: 'を is already after ごはん, the thing you eat. The tool takes で.', zh: 'ごはん后面已经有を了，表示吃的东西。工具用で。' },
        'に': { en: 'に marks a time or a person, not a tool.', zh: 'に表示时间或人，不表示工具。' },
        'と': { en: 'はしと would mean “with chopsticks” as if they were a friend eating with you!', zh: 'はしと是“和筷子一起”，好像筷子是一起吃饭的朋友！' }
      }
    },
    {
      prompt: { en: 'Neko-chan is holding scissors over a sheet of paper. What is she doing?', zh: '小猫拿着剪刀对着一张纸。她在做什么？' },
      jp: 'はさみで 紙を（　）。',
      choices: ['切ります', '書きます', '送ります', '貸します'],
      answer: '切ります',
      explanation: { en: 'With scissors, you cut: 紙を 切ります.', zh: '用剪刀是剪：紙を 切ります。' },
      why: {
        '書きます': { en: '書きます is writing, with a pen.', zh: '書きます是用笔写字。' },
        '送ります': { en: '送ります is sending, like a letter or e-mail.', zh: '送ります是寄送，比如信或邮件。' },
        '貸します': { en: '貸します is lending something to someone.', zh: '貸します是把东西借给别人。' }
      }
    },
    {
      prompt: { en: 'Ask how to say “Goodbye” in English. Fill the gap.', zh: '问“さようなら”用英语怎么说。请填空。' },
      jp: '「さようなら」は 英語（　）何ですか。',
      choices: ['で', 'に', 'の', 'を'],
      answer: 'で',
      explanation: { en: 'A language is a means, so it takes で: 英語で 何ですか (What is it in English?).', zh: '语言是一种手段，所以用で：英語で 何ですか（用英语怎么说？）。' },
      why: {
        'に': { en: 'に isn’t used for a language. Say 英語で.', zh: '语言不用に，要说英語で。' },
        'の': { en: '英語の 何 would mean “what of English”.', zh: '英語の 何是“英语的什么”。' },
        'を': { en: 'を marks an object. A language you say something in takes で.', zh: 'を表示宾语。用某种语言说时要用で。' }
      }
    },
    {
      prompt: { en: 'Tanuki-sensei holds up the thing that clips papers together. What is it in Japanese?', zh: '狸猫老师举起一个能把纸订在一起的东西。日语叫什么？' },
      talk: [{ who: 'you', jp: 'これは 日本語で 何ですか。' }, { who: 'tanuki', jp: '「（　）」です。' }],
      choices: ['ホッチキス', 'パンチ', 'セロテープ', 'はさみ'],
      answer: 'ホッチキス',
      explanation: { en: 'A stapler is ホッチキス.', zh: '订书机是ホッチキス。' },
      why: {
        'パンチ': { en: 'パンチ is a hole punch.', zh: 'パンチ是打孔机。' },
        'セロテープ': { en: 'セロテープ is sticky tape.', zh: 'セロテープ是透明胶带。' },
        'はさみ': { en: 'はさみ are scissors.', zh: 'はさみ是剪刀。' }
      }
    },

    {
      type: 'scene', who: 'tanuki',
      title: { en: 'Part 2 · Giving and getting', zh: '第2部分 · 给出和得到' },
      lines: [
        { en: 'Now the tricky part, {name}: who gives what to whom? Watch which way things move!', zh: '{name}，现在是难点：谁把什么给了谁？注意东西是往哪个方向移动的！' }
      ]
    },

    // ----- Part 2: あげます／もらいます etc. (練習A 4–5, 練習B 3–6, 練習C 2, 問題4, 問題6) -----
    {
      prompt: { en: 'You gave Ms. Kimura some flowers. Fill the gap.', zh: '你送了木村小姐花。请填空。' },
      jp: 'わたしは 木村さん（　）花を あげました。',
      choices: ['に', 'を', 'から', 'で'],
      answer: 'に',
      explanation: { en: 'With あげます, the person who receives takes に: 木村さんに あげました.', zh: '用あげます时，接受的人用に：木村さんに あげました。' },
      why: {
        'を': { en: 'を is for the thing you give (花を), not the person.', zh: 'を用于给出的东西（花を），不用于人。' },
        'から': { en: 'から means “from”. You gave the flowers TO her.', zh: 'から表示“从”，而你是把花送给她。' },
        'で': { en: 'で marks a place or a tool.', zh: 'で表示场所或工具。' }
      }
    },
    {
      prompt: { en: 'On Valentine’s Day, Karina gave YOU chocolate. Choose the verb.', zh: '情人节那天，卡丽娜送了你巧克力。选择动词。' },
      jp: 'わたしは カリナさんに チョコレートを（　）。',
      choices: ['もらいました', 'あげました', '貸しました', '教えました'],
      answer: 'もらいました',
      explanation: { en: 'You received it, so it’s もらいました. Here に means “from”.', zh: '你是收到的一方，所以用もらいました。这里的に表示“从”。' },
      why: {
        'あげました': { en: 'わたしは … あげました would mean YOU gave Karina chocolate.', zh: 'わたしは……あげました是说你送了卡丽娜巧克力。' },
        '貸しました': { en: '貸しました means you lent it, and you’ll want it back!', zh: '貸しました是借出，还要还回来的！' },
        '教えました': { en: '教えました is for teaching.', zh: '教えました是教。' }
      }
    },
    {
      prompt: { en: 'You needed a book, so Ms. Lee lent you hers. Choose the verb.', zh: '你需要一本书，李小姐把她的借给了你。选择动词。' },
      jp: 'わたしは イーさんに 本を（　）。',
      choices: ['借りました', '貸しました', 'あげました'],
      answer: '借りました',
      explanation: { en: 'You are the one borrowing: 借ります. She lends (貸します).', zh: '你是借入的一方：借ります。她是借出（貸します）。' },
      why: {
        '貸しました': { en: 'わたしは … 貸しました means YOU lent the book to her.', zh: 'わたしは……貸しました是说你把书借给了她。' },
        'あげました': { en: 'あげました means you gave it to her to keep.', zh: 'あげました是说你把书送给了她。' }
      }
    },
    {
      prompt: { en: 'Mr. Watt is your English teacher. Choose the verb.', zh: '瓦特先生是你的英语老师。选择动词。' },
      jp: 'わたしは ワットさんに 英語を（　）。',
      choices: ['習います', '教えます', 'かけます'],
      answer: '習います',
      explanation: { en: 'You learn from him: 習います. He teaches you: 教えます.', zh: '你跟他学：習います。他教你：教えます。' },
      why: {
        '教えます': { en: 'わたしは … 教えます would mean YOU teach Mr. Watt English.', zh: 'わたしは……教えます是说你教瓦特先生英语。' },
        'かけます': { en: 'かけます is for making a phone call.', zh: 'かけます用于打电话。' }
      }
    },
    {
      prompt: { en: 'You borrowed money from the bank. Fill the gap.', zh: '你向银行借了钱。请填空。' },
      jp: '銀行（　）お金を 借りました。',
      choices: ['から', 'に', 'を', 'で'],
      answer: 'から',
      explanation: { en: 'For an organisation like a bank or school, always use から.', zh: '对银行、学校等机构，一定要用から。' },
      why: {
        'に': { en: 'に works for people, but for an organisation like a bank, use から.', zh: '对人可以用に，但对银行这样的机构要用から。' },
        'を': { en: 'を is already after お金.', zh: 'お金后面已经有を了。' },
        'で': { en: '銀行で would mean you borrowed it while at the bank, from someone else.', zh: '銀行で是“在银行里”借的，不知道向谁借的。' }
      }
    },
    {
      prompt: { en: 'Choose the pair that fits both gaps.', zh: '选择适合两个空的一组。' },
      jp: 'わたしは 友達（　）お土産（　）もらいました。',
      choices: ['に … を', 'を … に', 'で … を', 'と … を'],
      answer: 'に … を',
      explanation: { en: 'The person you got it from takes に, and the thing you got takes を.', zh: '给你东西的人用に，得到的东西用を。' },
      why: {
        'を … に': { en: 'That swaps them: the friend would be the thing you received!', zh: '这样就调换了：朋友变成了收到的东西！' },
        'で … を': { en: 'で marks a place or tool, not a person.', zh: 'で表示场所或工具，不表示人。' },
        'と … を': { en: '友達と means “together with my friend”, not “from my friend”.', zh: '友達と是“和朋友一起”，不是“从朋友那里”。' }
      }
    },
    {
      prompt: { en: 'Read the answer, then choose the question word.', zh: '先看回答，再选择疑问词。' },
      jp: '（　）に 年賀状を 書きますか。\n……先生と 友達に 書きます。',
      choices: ['だれ', '何', 'どこ', 'いつ'],
      answer: 'だれ',
      explanation: { en: 'The answer gives people, so ask だれに (to whom?).', zh: '回答是人，所以问だれに（给谁）。' },
      why: {
        '何': { en: '何に asks “to what?”. The answer is people.', zh: '何に问“给什么”，而回答是人。' },
        'どこ': { en: 'どこに asks where.', zh: 'どこに问哪里。' },
        'いつ': { en: 'いつ never takes に, and asks when.', zh: 'いつ后面不加に，问的是什么时候。' }
      }
    },
    {
      type: 'order',
      prompt: { en: 'Tell Tanuki-sensei where your new shirt came from.', zh: '告诉狸猫老师你的新衬衫是哪里来的。' },
      translation: { en: 'I got a shirt from my father for my birthday.', zh: '生日时我收到了父亲送的衬衫。' },
      pieces: ['誕生日に', '父に', 'シャツを', 'もらいました。'],
      answers: [
        ['誕生日に', '父に', 'シャツを', 'もらいました。'],
        ['父に', '誕生日に', 'シャツを', 'もらいました。']
      ],
      explanation: { en: 'When, from whom (に), what (を), then もらいました at the end.', zh: '什么时候、从谁那里（に）、什么东西（を），最后是もらいました。' }
    },
    {
      prompt: { en: 'Kitsune-san admires your watch. It was a gift from your own dad.', zh: '狐狸先生称赞你的手表。那是你爸爸送的。' },
      talk: [{ who: 'kitsune', jp: 'その 時計、すてきですね。' }, { who: 'you', jp: 'ありがとう ございます。 （　）に もらいました。' }],
      choices: ['父', 'お父さん', 'ちちさん'],
      answer: '父',
      explanation: { en: 'Talking about your own father to someone else, say 父 (ちち).', zh: '跟别人说起自己的父亲时，说父（ちち）。' },
      why: {
        'お父さん': { en: 'お父さん is for someone else’s father, or calling your own dad directly.', zh: 'お父さん用于别人的父亲，或直接称呼自己的父亲。' },
        'ちちさん': { en: 'Never add さん to your own family members.', zh: '自己的家人后面不能加さん。' }
      }
    },

    {
      type: 'scene', who: 'kitsune',
      title: { en: 'Part 3 · A visit', zh: '第3部分 · 串门' },
      lines: [
        { en: 'The Yamadas have invited you over, {name}! But first, have you finished your errands?', zh: '{name}，山田一家邀请你去做客！不过先问问，你的事办完了吗？' }
      ]
    },

    // ----- Part 3: もう／まだ and visiting (練習A 6, 練習B 7, 練習C 3, 会話, 問題5, 問題7) -----
    {
      prompt: { en: 'You haven’t sent the parcel yet. How do you answer?', zh: '你还没寄包裹。怎么回答？' },
      talk: [{ who: 'kitsune', jp: 'もう 荷物を 送りましたか。' }, { who: 'you', jp: 'いいえ、（　）。' }],
      choices: ['まだです', '送りませんでした', 'もう 送りました', '送りません'],
      answer: 'まだです',
      explanation: { en: 'For “not yet”, answer いいえ、まだです.', zh: '表示“还没”时，回答いいえ、まだです。' },
      why: {
        '送りませんでした': { en: 'That means you didn’t send it at some time in the past. The textbook says don’t use it for “not yet”.', zh: '这表示过去某时没寄。课本说明“还没”不能用这个说法。' },
        'もう 送りました': { en: 'いいえ + “I already sent it” contradicts itself.', zh: 'いいえ＋“已经寄了”自相矛盾。' },
        '送りません': { en: '送りません means “I won’t send it”. You plan to, just not yet.', zh: '送りません是“我不寄”。你打算寄，只是还没寄。' }
      }
    },
    {
      prompt: { en: 'You’ve already had lunch. Answer Kitsune-san.', zh: '你已经吃过午饭了。回答狐狸先生。' },
      talk: [{ who: 'kitsune', jp: 'もう 昼ごはんを 食べましたか。' }, { who: 'you', jp: 'はい、（　）。' }],
      choices: ['もう 食べました', 'まだです', '食べません'],
      answer: 'もう 食べました',
      explanation: { en: 'はい、［もう］ 食べました: Yes, I’ve already eaten.', zh: 'はい、［もう］ 食べました：是的，已经吃了。' },
      why: {
        'まだです': { en: 'はい + まだです doesn’t fit. まだです goes with いいえ.', zh: 'はい＋まだです不对。まだです要和いいえ一起用。' },
        '食べません': { en: '食べません means “I don’t eat”.', zh: '食べません是“不吃”。' }
      }
    },
    {
      prompt: { en: 'You arrive at the Yamadas’ home. Mr. Yamada invites you in. What do you say as you step inside?', zh: '你到了山田家。山田先生请你进去。你进门时说什么？' },
      talk: [{ who: '山田', jp: 'いらっしゃい。 どうぞ お{上|あ}がり ください。' }, { who: 'you', jp: '（　）' }],
      choices: ['失礼します。', 'いらっしゃいませ。', 'いただきます。', 'ごちそうさまでした。'],
      answer: '失礼します。',
      explanation: { en: '失礼します is said as you enter someone’s home or room.', zh: '进入别人家或房间时说失礼します。' },
      why: {
        'いらっしゃいませ。': { en: 'That’s what shop staff say to customers.', zh: '这是店员对顾客说的话。' },
        'いただきます。': { en: 'That’s said before eating or drinking.', zh: '这是吃喝之前说的话。' },
        'ごちそうさまでした。': { en: 'That’s said after eating. You’ve only just arrived!', zh: '这是吃完后说的话，而你才刚到！' }
      }
    },
    {
      prompt: { en: 'Mrs. Yamada offers you some coffee. Fill the gap.', zh: '山田太太请你喝咖啡。请填空。' },
      jp: 'コーヒーは（　）。',
      choices: ['いかがですか', 'いくらですか', '何ですか', 'どなたですか'],
      answer: 'いかがですか',
      explanation: { en: '〜は いかがですか politely offers something: Would you like some coffee?', zh: '〜は いかがですか礼貌地请对方用东西：要喝咖啡吗？' },
      why: {
        'いくらですか': { en: 'That asks the price. She’s not selling it!', zh: '这是问价格。她可不是在卖咖啡！' },
        '何ですか': { en: 'That asks “what is it?”.', zh: '这是问“是什么？”。' },
        'どなたですか': { en: 'That asks “who is it?”.', zh: '这是问“是哪位？”。' }
      }
    },
    {
      prompt: { en: 'The coffee arrives. What do you say before you drink?', zh: '咖啡端上来了。喝之前说什么？' },
      talk: [{ who: '山田', jp: 'どうぞ。' }, { who: 'you', jp: '（　）' }],
      choices: ['いただきます。', 'ごちそうさまでした。', '失礼します。', 'どう いたしまして。'],
      answer: 'いただきます。',
      explanation: { en: 'いただきます is said just before you eat or drink.', zh: '开始吃喝之前说いただきます。' },
      why: {
        'ごちそうさまでした。': { en: 'That’s for after you finish.', zh: '这是吃完之后说的。' },
        '失礼します。': { en: 'That’s for entering a room or home.', zh: '这是进门时说的。' },
        'どう いたしまして。': { en: 'That replies to a thank-you.', zh: '这是回应道谢的话。' }
      }
    },
    {
      prompt: { en: 'You notice the lovely spoon on your saucer. Compliment it.', zh: '你注意到茶碟上漂亮的勺子。称赞一下。' },
      jp: 'この スプーン、（　）。',
      choices: ['すてきですね', 'すてきですか', 'いただきます'],
      answer: 'すてきですね',
      explanation: { en: '〜、すてきですね compliments something. The particle は is dropped in casual speech.', zh: '〜、すてきですね用来称赞东西。口语中省略了助词は。' },
      why: {
        'すてきですか': { en: 'That asks “is it nice?”, which sounds like you doubt it.', zh: '这是问“漂亮吗？”，听起来像在怀疑。' },
        'いただきます': { en: 'That’s said before eating or drinking, not a compliment.', zh: '这是吃喝前说的，不是称赞。' }
      }
    },
    {
      prompt: { en: 'Read Mr. Miller’s weekend. Is the last sentence true (○) or false (×)?', zh: '阅读米勒先生的周末。最后一句话是对（○）还是错（×）？' },
      jp: 'けさ 図書館へ 行きました。 図書館で 太郎ちゃんに 会いました。 わたしは 旅行の 本を 借りました。\n\n→ ミラーさんは 図書館で 旅行の 本を 読みました。',
      choices: ['○', '×'],
      fixedOrder: true,
      answer: '×',
      explanation: { en: 'False: he BORROWED the travel book (借りました). He’ll read it tomorrow morning.', zh: '错：他是借了旅行的书（借りました），明天早上才看。' },
      why: {
        '○': { en: 'Look again: 旅行の 本を 借りました. He borrowed it, he didn’t read it there.', zh: '再看一遍：旅行の 本を 借りました。他是借书，不是在那里看书。' }
      }
    },

    {
      type: 'scene', who: 'neko',
      title: { en: 'Epilogue', zh: '尾声' },
      lines: [
        { en: 'ごちそうさまでした! What a lovely visit, {name}.', zh: 'ごちそうさまでした！{name}，这次做客真愉快。' },
        { en: 'Let’s see how you did today.', zh: '来看看你今天的表现吧。' }
      ]
    }
  ]
});
