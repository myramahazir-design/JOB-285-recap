// Lesson 3, from the textbook's Vocabulary, Useful Words and Grammar Notes pages.
// Grammar quiz: story practice built from the practice pages (練習A/B/C, 問題).
MNN.registerChapter({
  id: 3,
  title: { jp: 'これをください', en: "I'll take this, please", zh: '请给我这个' },

  // The lesson's 会話, shown first in the Conversation section.
  dialogue: {
    title: 'これを ください',
    parts: [
      [
        { who: '店員A', jp: 'いらっしゃいませ。', en: 'Welcome.', zh: '欢迎光临。' },
        { who: 'マリア', jp: 'すみません。 ワイン売り場は どこですか。', en: 'Excuse me. Where is the wine section?', zh: '请问，葡萄酒柜台在哪里？' },
        { who: '店員A', jp: '地下1階です。', en: 'It’s on the first basement floor.', zh: '在地下一层。' },
        { who: 'マリア', jp: 'どうも。', en: 'Thanks.', zh: '谢谢。' }
      ],
      [
        { who: 'マリア', jp: 'すみません。 その ワインを 見せて ください。', en: 'Excuse me. Please show me that wine.', zh: '请问，请给我看看那瓶葡萄酒。' },
        { who: '店員B', jp: 'はい、どうぞ。', en: 'Yes, here you are.', zh: '好的，请看。' },
        { who: 'マリア', jp: 'これは どこの ワインですか。', en: 'Where is this wine from?', zh: '这是哪里产的葡萄酒？' },
        { who: '店員B', jp: '日本のです。', en: 'It’s Japanese.', zh: '是日本的。' },
        { who: 'マリア', jp: 'いくらですか。', en: 'How much is it?', zh: '多少钱？' },
        { who: '店員B', jp: '2,500円です。', en: 'It’s 2,500 yen.', zh: '2500日元。' },
        { who: 'マリア', jp: 'じゃ、これを ください。', en: 'Then I’ll take this, please.', zh: '那么，请给我这个。' }
      ]
    ]
  },

  vocab: [
    // ----- Words -----
    { group: 'words', jp: 'ここ', en: 'here, this place', zh: '这里' },
    { group: 'words', jp: 'そこ', en: 'there, that place near the listener', zh: '那里（听话人附近）' },
    { group: 'words', jp: 'あそこ', en: 'that place over there', zh: '那里（离双方都远）' },
    { group: 'words', jp: 'どこ', en: 'where, what place', zh: '哪里' },
    { group: 'words', jp: 'こちら', en: 'this way, this place (polite ここ)', zh: '这边，这里（ここ的礼貌说法）' },
    { group: 'words', jp: 'そちら', en: 'that way, that place near the listener (polite そこ)', zh: '那边（そこ的礼貌说法）' },
    { group: 'words', jp: 'あちら', en: 'that way, that place over there (polite あそこ)', zh: '那边（あそこ的礼貌说法）' },
    { group: 'words', jp: 'どちら', en: 'which way, where (polite どこ)', zh: '哪边，哪里（どこ的礼貌说法）' },
    { group: 'words', jp: 'きょうしつ', kanji: '教室', en: 'classroom', zh: '教室' },
    { group: 'words', jp: 'しょくどう', kanji: '食堂', en: 'dining hall, canteen', zh: '食堂' },
    { group: 'words', jp: 'じむしょ', kanji: '事務所', en: 'office', zh: '办公室' },
    { group: 'words', jp: 'かいぎしつ', kanji: '会議室', en: 'conference room, meeting room', zh: '会议室' },
    { group: 'words', jp: 'うけつけ', kanji: '受付', en: 'reception desk', zh: '接待处，前台' },
    { group: 'words', jp: 'ロビー', en: 'lobby', zh: '大厅' },
    { group: 'words', jp: 'へや', kanji: '部屋', en: 'room', zh: '房间' },
    { group: 'words', jp: 'トイレ（おてあらい）', kanji: 'トイレ（お手洗い）', en: 'toilet, rest room', zh: '厕所，洗手间',
      note: { en: 'おてあらい (お手洗い) is the more polite word.', zh: 'おてあらい（お手洗い）是更礼貌的说法。' } },
    { group: 'words', jp: 'かいだん', kanji: '階段', en: 'staircase', zh: '楼梯' },
    { group: 'words', jp: 'エレベーター', en: 'lift, elevator', zh: '电梯' },
    { group: 'words', jp: 'エスカレーター', en: 'escalator', zh: '自动扶梯' },
    { group: 'words', jp: 'じどうはんばいき', kanji: '自動販売機', en: 'vending machine', zh: '自动售货机' },
    { group: 'words', jp: 'でんわ', kanji: '電話', en: 'telephone handset, telephone call', zh: '电话' },
    { group: 'words', jp: '［お］くに', kanji: '［お］国', en: 'country', zh: '国家',
      note: { en: 'Add お when asking about someone else’s country: おくには どちらですか。', zh: '问别人的国家时加お：おくには どちらですか。' } },
    { group: 'words', jp: 'かいしゃ', kanji: '会社', en: 'company', zh: '公司' },
    { group: 'words', jp: 'うち', en: 'house, home', zh: '家' },
    { group: 'words', jp: 'くつ', kanji: '靴', en: 'shoes', zh: '鞋' },
    { group: 'words', jp: 'ネクタイ', en: 'tie, necktie', zh: '领带' },
    { group: 'words', jp: 'ワイン', en: 'wine', zh: '葡萄酒' },
    { group: 'words', jp: 'うりば', kanji: '売り場', en: 'department, counter (in a department store, etc.)', zh: '柜台，卖场' },
    { group: 'words', jp: 'ちか', kanji: '地下', en: 'basement', zh: '地下' },
    { group: 'words', jp: '〜かい（〜がい）', kanji: '〜階', en: '—th floor', zh: '第～层',
      note: { en: 'Some floors change sound: さんがい (3rd floor), and なんがい (what floor).', zh: '有些楼层读音会变：さんがい（三楼）、なんがい（几楼）。' } },
    { group: 'words', jp: 'なんがい', kanji: '何階', en: 'what floor', zh: '几楼' },
    { group: 'words', jp: '〜えん', kanji: '〜円', en: '— yen', zh: '～日元' },
    { group: 'words', jp: 'いくら', en: 'how much', zh: '多少钱' },
    { group: 'words', jp: 'ひゃく', kanji: '百', en: 'hundred', zh: '百' },
    { group: 'words', jp: 'せん', kanji: '千', en: 'thousand', zh: '千' },
    { group: 'words', jp: 'まん', kanji: '万', en: 'ten thousand', zh: '万',
      note: { en: 'Japanese counts big numbers in units of 10,000 (万), just like Chinese. 10,000 = いちまん.', zh: '日语和汉语一样以“万”为单位数大数字。10,000＝いちまん。' } },

    // ----- Practice C phrases -----
    { group: 'expressions', jp: 'すみません。', en: 'Excuse me.', zh: '不好意思。／劳驾。',
      note: { en: 'Use it to get attention, for example when asking a shop assistant or a stranger something.', zh: '想引起别人注意时用，比如问店员或陌生人问题时。' } },
    { group: 'expressions', jp: 'どうも。', en: 'Thanks.', zh: '谢谢。',
      note: { en: 'A short, casual thank-you, for example after someone gives you directions.', zh: '简短随意的“谢谢”，比如别人给你指路之后。' } },

    // ----- Conversation phrases -----
    { group: 'conversation', jp: '〜うりばは どこですか。', kanji: '〜売り場は どこですか。', en: 'Where is the 〜 section?', zh: '～柜台在哪里？',
      note: { en: 'Ask staff in a department store where to find a section, like ワイン売り場 or くつ売り場.', zh: '在百货商店问店员某个柜台在哪里，比如ワイン売り場、くつ売り場。' } },
    { group: 'conversation', jp: 'これは どこの 〜ですか。', en: 'Where is this 〜 from?', zh: '这是哪里产的～？',
      note: { en: 'Ask which country or company made a product. The answer can drop the noun: 日本のです.', zh: '问商品是哪个国家或公司生产的。回答时可以省略名词：日本のです。' } },
    { group: 'conversation', jp: 'いくらですか。', en: 'How much is it?', zh: '多少钱？',
      note: { en: 'Ask the price of something in a shop.', zh: '在商店里问东西的价格。' } },
    { group: 'conversation', jp: 'いらっしゃいませ。', en: 'Welcome. / May I help you?', zh: '欢迎光临。',
      note: { en: 'Said by shop staff to a customer or guest coming in.', zh: '店员对进店的顾客或客人说的话。' } },
    { group: 'conversation', jp: '［〜を］ みせて ください。', kanji: '［〜を］ 見せて ください。', en: 'Please show me [〜].', zh: '请给我看看［～］。',
      note: { en: 'Ask a shop assistant to show you an item before you decide.', zh: '决定之前请店员拿东西给你看。' } },
    { group: 'conversation', jp: 'じゃ', en: 'well, then, in that case', zh: '那么，那样的话',
      note: { en: 'Use it when you’ve made a decision: じゃ、これを ください。', zh: '做出决定时用：じゃ、これを ください。' } },
    { group: 'conversation', jp: '［〜を］ ください。', en: 'Give me [〜], please.', zh: '请给我［～］。',
      note: { en: 'Use it in a shop to say what you’d like to buy: これを ください。', zh: '在商店里说要买什么：これを ください。' } },

    // ----- Countries and places -----
    { group: 'countries', jp: 'イタリア', en: 'Italy', zh: '意大利' },
    { group: 'countries', jp: 'スイス', en: 'Switzerland', zh: '瑞士' },
    { group: 'countries', jp: 'フランス', en: 'France', zh: '法国' },
    { group: 'places', jp: 'ジャカルタ', en: 'Jakarta', zh: '雅加达' },
    { group: 'places', jp: 'バンコク', en: 'Bangkok', zh: '曼谷' },
    { group: 'places', jp: 'ベルリン', en: 'Berlin', zh: '柏林' },
    { group: 'names', jp: 'しんおおさか', kanji: '新大阪', en: 'name of a station in Osaka', zh: '新大阪（大阪的车站名）' },

    // ----- Useful words: the department store -----
    { group: 'store', jp: 'デパート', en: 'department store', zh: '百货商店' },
    { group: 'store', jp: 'おくじょう', kanji: '屋上', en: 'rooftop', zh: '屋顶' },
    { group: 'store', jp: 'ゆうえんち', kanji: '遊園地', en: 'amusement area', zh: '游乐场' },
    { group: 'store', jp: 'レストラン', en: 'restaurant', zh: '餐厅' },
    { group: 'store', jp: 'もよおしものかいじょう', kanji: '催し物会場', en: 'event hall', zh: '活动会场' },
    { group: 'store', jp: 'めがね', kanji: '眼鏡', en: 'spectacles, glasses', zh: '眼镜' },
    { group: 'store', jp: 'スポーツようひん', kanji: 'スポーツ用品', en: 'sporting goods', zh: '运动用品' },
    { group: 'store', jp: 'りょこうようひん', kanji: '旅行用品', en: 'travel goods', zh: '旅行用品' },
    { group: 'store', jp: 'こどもふく', kanji: '子ども服', en: 'children’s clothes', zh: '童装' },
    { group: 'store', jp: 'おもちゃ', en: 'toys', zh: '玩具' },
    { group: 'store', jp: 'ぶんぼうぐ', kanji: '文房具', en: 'stationery', zh: '文具' },
    { group: 'store', jp: 'かぐ', kanji: '家具', en: 'furniture', zh: '家具' },
    { group: 'store', jp: 'しょっき', kanji: '食器', en: 'kitchenware, tableware', zh: '餐具' },
    { group: 'store', jp: 'でんかせいひん', kanji: '電化製品', en: 'electrical appliances', zh: '电器' },
    { group: 'store', jp: 'しんしふく', kanji: '紳士服', en: 'men’s wear', zh: '男装' },
    { group: 'store', jp: 'ふじんふく', kanji: '婦人服', en: 'ladies’ wear', zh: '女装' },
    { group: 'store', jp: 'アクセサリー', en: 'accessories', zh: '饰品' },
    { group: 'store', jp: 'けしょうひん', kanji: '化粧品', en: 'cosmetics', zh: '化妆品' },
    { group: 'store', jp: 'しょくひん', kanji: '食品', en: 'food', zh: '食品' },
    { group: 'store', jp: 'ちゅうしゃじょう', kanji: '駐車場', en: 'car park, parking lot', zh: '停车场' }
  ],

  grammar: [
    {
      pattern: 'ここ／そこ／あそこ\nこちら／そちら／あちら',
      title: { en: 'Here / there (places)', zh: '这里／那里（场所）' },
      explain: {
        en: 'ここ, そこ and あそこ point at places. ここ is where the speaker is, そこ is where the listener is, and あそこ is somewhere away from both. こちら, そちら and あちら point at directions, and are also the polite way to say ここ, そこ and あそこ.',
        zh: 'ここ、そこ、あそこ指场所。ここ是说话人所在的地方，そこ是听话人所在的地方，あそこ是离两个人都远的地方。こちら、そちら、あちら指方向，也是ここ、そこ、あそこ的礼貌说法。'
      },
      notes: [
        { en: 'When you and the listener stand together, the place you share is ここ. Then そこ is a little way off, and あそこ is even further away.', zh: '当说话人和听话人站在一起时，两人所在的地方是ここ，稍远的地方是そこ，更远的地方是あそこ。' }
      ],
      examples: []
    },
    {
      pattern: 'N は ［place］ です',
      title: { en: 'Saying where something is', zh: '说明某物在哪里' },
      explain: {
        en: 'Use this pattern to say where a place, thing or person is.',
        zh: '用这个句型说明场所、东西或人在哪里。'
      },
      examples: [
        { jp: 'お{手洗|てあら}いは あそこです。', en: 'The toilet is over there.', zh: '洗手间在那里。' },
        { jp: '{電話|でんわ}は ２{階|かい}です。', en: 'The telephone is on the second floor.', zh: '电话在二楼。' },
        { jp: '{山田|やまだ}さんは {事務所|じむしょ}です。', en: 'Mr. Yamada is in his office.', zh: '山田先生在办公室。' }
      ]
    },
    {
      pattern: 'どこ／どちら',
      title: { en: 'Where? / Which way?', zh: '哪里？／哪边？' },
      explain: {
        en: 'どこ asks “where?” and どちら asks “which direction?”. どちら can also mean “where?”, and then it is politer than どこ. Both are also used to ask which country, company or school someone belongs to. なん can’t be used for this.',
        zh: 'どこ问“哪里？”，どちら问“哪个方向？”。どちら也可以表示“哪里？”，比どこ更礼貌。两者还可以用来询问对方所属的国家、公司或学校，这时不能用なん。'
      },
      notes: [
        { en: '✕ 会社は なんですか。 ○ 会社は どちらですか。', zh: '✕ 会社は なんですか。 ○ 会社は どちらですか。' }
      ],
      examples: [
        { jp: 'お{手洗|てあら}いは どこですか。\n……あそこです。', en: 'Where’s the toilet?\n……It’s over there.', zh: '洗手间在哪里？\n……在那里。' },
        { jp: 'エレベーターは どちらですか。\n……あちらです。', en: 'Where’s the lift?\n……It’s in that direction (over there).', zh: '电梯在哪边？\n……在那边。' },
        { jp: '{学校|がっこう}は どこですか。', en: 'What school do you go to?', zh: '你在哪个学校上学？' },
        { jp: '{会社|かいしゃ}は どちらですか。', en: 'What company do you work for?', zh: '您在哪家公司工作？' }
      ]
    },
    {
      pattern: 'N₁ の N₂',
      title: { en: 'Made in / made by', zh: '产地／制造商' },
      explain: {
        en: 'When N₁ is a country and N₂ is a product, N₂ was made in that country. When N₁ is a company, N₂ was made by that company. To ask, use どこの.',
        zh: '当N₁是国名、N₂是产品时，表示N₂是在该国生产的；当N₁是公司名时，表示N₂是该公司生产的。询问时用どこの。'
      },
      examples: [
        { jp: 'これは どこの コンピューターですか。\n……{日本|にほん}の コンピューターです。\n……パワー{電気|でんき}の コンピューターです。', en: 'Where is this computer made? / Which company made it?\n……It’s made in Japan.\n……It’s made by Power Electric.', zh: '这是哪里（哪家公司）的电脑？\n……是日本的电脑。\n……是Power电气公司的电脑。' }
      ]
    },
    {
      pattern: 'こ／そ／あ／ど',
      title: { en: 'The こ／そ／あ／ど system', zh: 'こ／そ／あ／ど体系' },
      explain: {
        en: 'Japanese pointing words come in sets of four. こ is near me, そ is near you, あ is away from both of us, and ど asks “which?”.',
        zh: '日语的指示词以四个为一组。こ指靠近我的，そ指靠近你的，あ指离我们都远的，ど用来问“哪个？”。'
      },
      table: {
        head: ['こ', 'そ', 'あ', 'ど'],
        rows: [
          { label: { en: 'Thing', zh: '东西' }, cells: ['これ', 'それ', 'あれ', 'どれ*'] },
          { label: { en: 'Thing / person', zh: '东西／人' }, cells: ['この N', 'その N', 'あの N', 'どの N*'] },
          { label: { en: 'Place', zh: '场所' }, cells: ['ここ', 'そこ', 'あそこ', 'どこ'] },
          { label: { en: 'Direction / place (polite)', zh: '方向／场所（礼貌）' }, cells: ['こちら', 'そちら', 'あちら', 'どちら'] }
        ]
      },
      notes: [
        { en: '* どれ and どの N come in Lesson 16.', zh: '* どれ和どの N在第16课学习。' }
      ],
      examples: []
    },
    {
      pattern: 'お〜',
      title: { en: 'お to show respect', zh: '表示尊敬的お' },
      explain: {
        en: 'The prefix お is added to things that belong to the listener or someone else, to show respect toward that person.',
        zh: '在属于听话人或第三者的事物前加上前缀お，表示对那个人的尊敬。'
      },
      notes: [
        { en: 'Use お for the other person’s things, not your own.', zh: 'お用于对方的事物，不用于自己的。' }
      ],
      examples: [
        { jp: '［お］{国|くに}は どちらですか。', en: 'What country are you from?', zh: '您是哪国人？' }
      ]
    }
  ],

  // Left empty: the vocab quiz is generated from the word list above.
  vocabQuiz: [],

  // Story practice: "Day 3 · The department store". Built from 練習A, 練習B, 練習C and 問題,
  // with the partner exercises turned into conversations with the town's characters.
  grammarQuiz: [
    {
      type: 'scene', who: 'neko',
      title: { en: 'Day 3 · The department store', zh: '第3天 · 百货商店' },
      lines: [
        { en: '{name}! Today we’re going shopping at the big Minna Department Store.', zh: '{name}！今天我们去大家町的大百货商店购物吧。' },
        { en: 'It has eight floors, so you’ll need to ask where things are. Let’s start by finding our way around!', zh: '那里有八层楼，所以你得问清楚东西在哪里。我们先来熟悉一下路吧！' }
      ]
    },

    // ----- Part 1: finding your way (練習A 1–4, 練習B 1–4, 問題3, 問題4, 問題5) -----
    {
      prompt: { en: 'You and Neko-chan are standing inside the canteen, with people eating all around you. What do you say?', zh: '你和小猫正站在食堂里，周围都是吃饭的人。你该怎么说？' },
      jp: '（　）は 食堂です。',
      choices: ['ここ', 'そこ', 'あそこ', 'これ'],
      answer: 'ここ',
      explanation: { en: 'You’re both IN the canteen, so it’s ここ (this place, where we are).', zh: '你们俩就在食堂里，所以用ここ（这里，我们所在的地方）。' },
      why: {
        'そこ': { en: 'そこ is the place where the listener is, or a little way away. You’re standing right in it.', zh: 'そこ指听话人所在的地方或稍远处，而你们就站在这里。' },
        'あそこ': { en: 'あそこ is a place far from both of you.', zh: 'あそこ指离你们俩都远的地方。' },
        'これ': { en: 'これ points at a thing. For a place, use ここ.', zh: 'これ指东西。说场所要用ここ。' }
      }
    },
    {
      prompt: { en: 'Tanuki-sensei asks where the toilet is. It’s far down the corridor, away from both of you.', zh: '狸猫老师问厕所在哪里。厕所在走廊尽头，离你们俩都很远。' },
      talk: [{ who: 'tanuki', jp: 'トイレは どこですか。' }, { who: 'you', jp: '（　）です。' }],
      choices: ['あそこ', 'あれ', 'あの', 'どこ'],
      answer: 'あそこ',
      explanation: { en: 'A place far from both of you is あそこ.', zh: '离你们俩都远的场所用あそこ。' },
      why: {
        'あれ': { en: 'あれ points at a thing, not a place. Places use ここ／そこ／あそこ.', zh: 'あれ指东西，不指场所。场所要用ここ／そこ／あそこ。' },
        'あの': { en: 'あの needs a noun after it, like あの 部屋.', zh: 'あの后面要接名词，比如あの 部屋。' },
        'どこ': { en: 'どこ is the question word “where?”. You’re answering, not asking.', zh: 'どこ是疑问词“哪里？”。你是在回答，不是在提问。' }
      }
    },
    {
      prompt: { en: 'You’re pointing at a car right next to you in the showroom.', zh: '你在展厅里指着身边的一辆车。' },
      jp: '（　）は ドイツの {車|くるま}です。',
      choices: ['これ', 'この', 'ここ'],
      answer: 'これ',
      explanation: { en: 'The car is a thing near you, and it stands alone before は, so it’s これ.', zh: '车是你身边的东西，而且单独放在は前面，所以用これ。' },
      why: {
        'この': { en: 'この needs a noun after it: この 車は…', zh: 'この后面要接名词：この 車は……' },
        'ここ': { en: 'ここ is a place. “This place is a German car” doesn’t make sense.', zh: 'ここ指场所。“这里是德国车”说不通。' }
      }
    },
    {
      prompt: { en: 'Neko-chan is holding up a bag. Tell her it’s yours. Choose the pair that fits both blanks.', zh: '小猫举着一个包。告诉她那是你的。请选择适合两个空的一组。' },
      jp: '（　）かばんは（　）です。',
      choices: ['その … わたしの', 'それ … わたしの', 'その … わたし', 'そこ … わたしの'],
      answer: 'その … わたしの',
      explanation: { en: 'その + noun (the bag near the listener), and わたしの = mine.', zh: 'その＋名词（听话人附近的包），わたしの＝我的。' },
      why: {
        'それ … わたしの': { en: 'それ can’t come directly before a noun. Use その かばん.', zh: 'それ不能直接放在名词前面，要说その かばん。' },
        'その … わたし': { en: 'かばんは わたしです means “The bag is me”. You need わたしの (mine).', zh: 'かばんは わたしです的意思是“包是我”。要用わたしの（我的）。' },
        'そこ … わたしの': { en: 'そこ is a place. To point at a thing with a noun, use その.', zh: 'そこ指场所。指着东西并接名词时要用その。' }
      }
    },
    {
      prompt: { en: 'You need to make a phone call. Ask a shop assistant.', zh: '你需要打电话。问问店员。' },
      jp: 'すみません。{電話|でんわ}は（　）ですか。',
      choices: ['どこ', 'だれ', '何'],
      answer: 'どこ',
      explanation: { en: 'You’re asking where the phone is, so use どこ.', zh: '你问的是电话在哪里，所以用どこ。' },
      why: {
        'だれ': { en: 'だれ asks “who?”. A phone isn’t a person.', zh: 'だれ问的是“谁？”。电话不是人。' },
        '何': { en: '何ですか asks “what is it?”. You already know it’s a phone.', zh: '何ですか问“是什么？”。你已经知道是电话了。' }
      }
    },
    {
      prompt: { en: 'You ask a staff member politely where the lift is. She points that way. What does she say?', zh: '你礼貌地问店员电梯在哪里。她指着那边。她会怎么说？' },
      talk: [{ who: 'you', jp: 'すみません。エレベーターは どちらですか。' }, { who: 'kitsune', jp: '（　）' }],
      choices: ['あちらです。', 'あれです。', 'あそこですか。', 'どちらです。'],
      answer: 'あちらです。',
      explanation: { en: 'どちら asks “which way?” politely, and あちら answers it: “over there, that way”.', zh: 'どちら礼貌地问“哪边？”，用あちら回答：“在那边”。' },
      why: {
        'あれです。': { en: 'あれ points at a thing, not a direction or place.', zh: 'あれ指东西，不指方向或场所。' },
        'あそこですか。': { en: 'That turns it into a question. She’s answering yours.', zh: '这变成了问句，但她是在回答你的问题。' },
        'どちらです。': { en: 'どちら is the question word. The answer is あちら (or こちら／そちら).', zh: 'どちら是疑问词。回答要用あちら（或こちら／そちら）。' }
      }
    },
    {
      type: 'input',
      prompt: { en: 'Read the answer, then type the question word.', zh: '先看回答，再输入疑问词。' },
      jp: 'カメラ{売|う}り{場|ば}は（　）ですか。\n……５{階|かい}です。',
      answers: ['なんがい', '何階', 'どこ', 'どちら'],
      explanation: { en: 'Ask the floor with 何階 (なんがい), or simply どこ／どちら (where).', zh: '问楼层可以用何階（なんがい），也可以用どこ／どちら（哪里）。' },
      why: {
        'なんかい': { en: 'Close! After 何, 階 is read がい: なんがい.', zh: '差一点！何后面的階读作がい：なんがい。' },
        'なに': { en: '何ですか would ask “what is it?”. The answer is a floor, so ask なんがい or どこ.', zh: '何ですか问的是“是什么？”。回答是楼层，所以要问なんがい或どこ。' },
        'だれ': { en: 'だれ asks “who?”. The answer is a floor.', zh: 'だれ问的是“谁？”。回答是楼层。' }
      }
    },
    {
      type: 'order',
      prompt: { en: 'You need the key to the meeting room. Ask where it is.', zh: '你需要会议室的钥匙。问问在哪里。' },
      translation: { en: 'Where is the key to the meeting room?', zh: '会议室的钥匙在哪里？' },
      pieces: ['会議室', 'の', 'かぎ', 'は', 'どこ', 'ですか。'],
      explanation: { en: '会議室の かぎ (the meeting room’s key) is the topic, then どこですか asks where.', zh: '会議室の かぎ（会议室的钥匙）是主题，然后用どこですか问在哪里。' }
    },

    {
      type: 'scene', who: 'tanuki',
      title: { en: 'Part 2 · The café on the 8th floor', zh: '第2部分 · 八楼的咖啡厅' },
      lines: [
        { en: 'Ah, {name}! Come and sit with us. Some of my friends are shopping here today.', zh: '啊，{name}！过来一起坐吧。我的几个朋友今天也在这里购物。' },
        { en: 'Ask them about themselves, and remember to be polite!', zh: '问问他们的情况吧，记得要礼貌哦！' }
      ]
    },

    // ----- Part 2: getting to know people (練習B 5–6, 練習C 2, 問題5) -----
    {
      card: { name: 'サントス', country: 'ブラジル', job: '{会社員|かいしゃいん}', org: 'ブラジルエアー' },
      prompt: { en: 'Ask Mr. Santos politely which country he’s from.', zh: '礼貌地问桑托斯先生是哪国人。' },
      jp: 'サントスさんの お{国|くに}は（　）ですか。',
      choices: ['どちら', '何', 'だれ', 'どなた'],
      answer: 'どちら',
      explanation: { en: 'To ask which country, company or school someone is from, use どちら (polite) or どこ. お国 also shows respect.', zh: '问对方的国家、公司或学校时用どちら（礼貌）或どこ。お国也表示尊敬。' },
      why: {
        '何': { en: 'The textbook says なん can’t be used to ask someone’s country, company or school.', zh: '课本说明过：问国家、公司或学校时不能用なん。' },
        'だれ': { en: 'だれ asks “who?”, but a country isn’t a person.', zh: 'だれ问的是“谁？”，但国家不是人。' },
        'どなた': { en: 'どなた is the polite “who?”. You’re asking about a country.', zh: 'どなた是礼貌地问“谁？”，而你问的是国家。' }
      }
    },
    {
      prompt: { en: 'Mr. Schmidt is from Germany, and his home is in Berlin. How does he answer your second question?', zh: '施密特先生来自德国，家在柏林。他会怎么回答你的第二个问题？' },
      talk: [
        { who: 'you', jp: 'お国は どちらですか。' },
        { who: 'シュミット', jp: 'ドイツです。' },
        { who: 'you', jp: 'うちは どちらですか。' },
        { who: 'シュミット', jp: '（　）' }
      ],
      choices: ['ベルリンです。', 'ドイツです。', 'わたしの うちです。', 'どちらですか。'],
      answer: 'ベルリンです。',
      explanation: { en: 'うちは どちらですか asks where someone’s home is, so he names the city: ベルリンです.', zh: 'うちは どちらですか问的是家在哪里，所以他说出城市名：ベルリンです。' },
      why: {
        'ドイツです。': { en: 'He already said his country. うち asks about his home, so give the city.', zh: '他已经说过国家了。うち问的是家，要说城市。' },
        'わたしの うちです。': { en: 'That means “It’s my home”, which doesn’t answer where it is.', zh: '这句话的意思是“是我的家”，没有回答家在哪里。' },
        'どちらですか。': { en: 'That repeats the question instead of answering it.', zh: '这是重复问题，而不是回答。' }
      }
    },
    {
      card: { name: 'ワット', country: 'イギリス', job: '{先生|せんせい}', org: 'さくら{大学|だいがく}' },
      prompt: { en: 'Read the card. Which word fits the question?', zh: '看名片。哪个词适合这个问题？' },
      jp: 'ワットさんの（　）は どちらですか。\n……さくら{大学|だいがく}です。',
      choices: ['大学', '会社', 'お国', 'うち'],
      answer: '大学',
      explanation: { en: 'The answer is さくら大学, a university, so the question asks which university: 大学は どちらですか.', zh: '回答是さくら大学，是一所大学，所以问的是哪所大学：大学は どちらですか。' },
      why: {
        '会社': { en: 'さくら大学 is a university, not a company.', zh: 'さくら大学是大学，不是公司。' },
        'お国': { en: 'The answer would be a country, like イギリス.', zh: '那样的话回答应该是国家，比如イギリス。' },
        'うち': { en: 'The answer would be the place he lives, like a city.', zh: '那样的话回答应该是他住的地方，比如城市名。' }
      }
    },
    {
      prompt: { en: 'Read the answer carefully. What kind of company is Power Electric?', zh: '仔细看回答。Power电气是什么公司？' },
      jp: 'パワー{電気|でんき}は（　）の {会社|かいしゃ}ですか。\n……コンピューターの {会社|かいしゃ}です。',
      choices: ['何', 'どこ', 'どちら', 'だれ'],
      answer: '何',
      explanation: { en: '何の 会社 asks what kind of company it is (what it makes). The answer: コンピューターの 会社 (a computer company).', zh: '何の 会社问的是什么样的公司（做什么的）。回答：コンピューターの 会社（电脑公司）。' },
      why: {
        'どこ': { en: 'どこの 会社 would ask which country the company is from, like 日本の 会社.', zh: 'どこの 会社问的是哪个国家的公司，比如日本の 会社。' },
        'どちら': { en: 'どちら asks where or which. The answer tells you what kind of company it is.', zh: 'どちら问的是哪里或哪个，而回答说明的是公司的种类。' },
        'だれ': { en: 'だれの 会社 would ask who owns the company.', zh: 'だれの 会社问的是公司是谁的。' }
      }
    },

    {
      type: 'scene', who: 'kitsune',
      title: { en: 'Part 3 · Shopping time', zh: '第3部分 · 购物时间' },
      lines: [
        { en: '{name}! You found my counter on the 1st floor.', zh: '{name}！你找到我在一楼的柜台啦。' },
        { en: 'Let’s see if you can ask where things come from and how much they cost, then buy something nice!', zh: '看看你能不能问清楚东西的产地和价格，然后买点好东西吧！' }
      ]
    },

    // ----- Part 3: shopping (会話, 練習A 6–7, 練習B 7–8, 練習C 3, 問題5) -----
    {
      prompt: { en: 'You walk into Kitsune-san’s shop. What does she say first?', zh: '你走进狐狸小姐的店。她会先说什么？' },
      talk: [{ who: 'kitsune', jp: '（　）' }],
      choices: ['いらっしゃいませ。', 'すみません。', 'どうも。', 'お世話に なります。'],
      answer: 'いらっしゃいませ。',
      explanation: { en: 'いらっしゃいませ (Welcome!) is what shop staff say when a customer comes in.', zh: 'いらっしゃいませ（欢迎光临！）是顾客进店时店员说的话。' },
      why: {
        'すみません。': { en: 'すみません (Excuse me) is what a customer says to get attention.', zh: 'すみません（不好意思）是顾客想引起注意时说的。' },
        'どうも。': { en: 'どうも is a casual “thanks”.', zh: 'どうも是随意的“谢谢”。' },
        'お世話に なります。': { en: 'That’s for when you start relying on someone, like a new neighbour.', zh: '这是开始受人照顾时说的，比如对新邻居。' }
      }
    },
    {
      prompt: { en: 'The bag was made in Korea. How does Kitsune-san answer?', zh: '这个包是韩国制造的。狐狸小姐会怎么回答？' },
      talk: [{ who: 'you', jp: 'これは どこの かばんですか。' }, { who: 'kitsune', jp: '（　）' }],
      choices: ['韓国の かばんです。', '韓国人の かばんです。', 'はい、韓国の かばんです。', 'どこの 韓国ですか。'],
      answer: '韓国の かばんです。',
      explanation: { en: 'Country + の + product = made in that country: 韓国の かばん.', zh: '国名＋の＋产品＝该国制造：韓国の かばん。' },
      why: {
        '韓国人の かばんです。': { en: 'This means “a Korean person’s bag”, which is about the owner, not where it was made.', zh: '这句话的意思是“韩国人的包”，说的是所有者，不是产地。' },
        'はい、韓国の かばんです。': { en: 'どこ isn’t a yes/no question, so no はい.', zh: 'どこ的问句不是是非疑问句，不用はい。' },
        'どこの 韓国ですか。': { en: 'That’s a strange question, not an answer.', zh: '这是一个奇怪的问题，而不是回答。' }
      }
    },
    {
      type: 'input',
      prompt: { en: 'Read the answer and type the question word.', zh: '看回答，输入疑问词。' },
      jp: 'これは（　）の ワインですか。\n……イタリアの ワインです。',
      answers: ['どこ'],
      explanation: { en: 'To ask which country (or company) something comes from, use どこの.', zh: '问东西的产地（国家或公司）时用どこの。' },
      why: {
        'なん': { en: '何の ワイン asks what kind of wine it is. For the country it’s from, use どこの.', zh: '何の ワイン问的是什么种类的酒。问产地要用どこの。' },
        '何': { en: '何の ワイン asks what kind of wine it is. For the country it’s from, use どこの.', zh: '何の ワイン问的是什么种类的酒。问产地要用どこの。' },
        'どちら': { en: 'Close, but for where a product is made, the textbook uses どこの.', zh: '很接近，但问产品产地时课本用どこの。' }
      }
    },
    {
      prompt: { en: 'The tie costs ¥1,500. How do you say the price?', zh: '这条领带1,500日元。价格怎么说？' },
      talk: [{ who: 'you', jp: 'この ネクタイは いくらですか。' }, { who: 'kitsune', jp: '（　）' }],
      choices: ['せんごひゃくえんです。', 'いっせんごひゃくえんです。', 'じゅうごひゃくえんです。', 'せんごじゅうえんです。'],
      answer: 'せんごひゃくえんです。',
      explanation: { en: '1,000 is just せん (no いち), and 500 is ごひゃく: せんごひゃくえん.', zh: '1,000就是せん（不加いち），500是ごひゃく：せんごひゃくえん。' },
      why: {
        'いっせんごひゃくえんです。': { en: '1,000 is just せん. You don’t add いち in front.', zh: '1,000就是せん，前面不加いち。' },
        'じゅうごひゃくえんです。': { en: 'Japanese doesn’t say “fifteen hundred”. It’s 1,000 + 500 = せんごひゃく.', zh: '日语不说“十五百”，而是1,000＋500＝せんごひゃく。' },
        'せんごじゅうえんです。': { en: 'That’s ¥1,050. 500 is ごひゃく, not ごじゅう (50).', zh: '那是1,050日元。500是ごひゃく，不是ごじゅう（50）。' }
      }
    },
    {
      prompt: { en: 'Tricky one! The watch costs ¥13,000. How do you say it?', zh: '这题有点难！手表13,000日元。怎么说？' },
      choices: ['いちまんさんぜんえん', 'じゅうさんせんえん', 'いちまんさんせんえん', 'まんさんぜんえん'],
      answer: 'いちまんさんぜんえん',
      explanation: { en: 'Big numbers go in units of 万 (10,000), like Chinese: 1万 3千 = いちまん さんぜん. Note 3,000 changes sound to さんぜん.', zh: '和汉语一样，大数字以“万”为单位：1万3千＝いちまん さんぜん。注意3,000要读成さんぜん。' },
      why: {
        'じゅうさんせんえん': { en: 'Japanese doesn’t count “thirteen thousand”. Above 9,999 you use 万: いちまんさんぜん.', zh: '日语不说“十三千”。超过9,999要用万：いちまんさんぜん。' },
        'いちまんさんせんえん': { en: 'So close! 3,000 changes to さんぜん (ぜ, not せ).', zh: '非常接近！3,000要读成さんぜん（是ぜ不是せ）。' },
        'まんさんぜんえん': { en: '10,000 needs いち: いちまん. (Only 1,000 drops it: せん.)', zh: '10,000要加いち：いちまん。（只有1,000不加：せん。）' }
      }
    },
    {
      prompt: { en: 'You want to know the price of the wine. Which word fits?', zh: '你想知道这瓶酒的价格。用哪个词？' },
      talk: [{ who: 'you', jp: 'すみません。この ワインは（　）ですか。' }, { who: 'kitsune', jp: '２,８００{円|えん}です。' }],
      choices: ['いくら', '何', 'どこ', 'どちら'],
      answer: 'いくら',
      explanation: { en: 'いくらですか asks “how much is it?”.', zh: 'いくらですか问的是“多少钱？”。' },
      why: {
        '何': { en: '何ですか asks what it is. You know it’s wine; you want the price.', zh: '何ですか问的是“是什么”。你知道是酒，想问的是价格。' },
        'どこ': { en: 'どこですか asks where it is.', zh: 'どこですか问的是在哪里。' },
        'どちら': { en: 'どちらですか asks which way or where.', zh: 'どちらですか问的是哪边或哪里。' }
      }
    },
    {
      type: 'order',
      prompt: { en: 'Ask where this coffee comes from.', zh: '问问这咖啡是哪里产的。' },
      translation: { en: 'Where is this coffee from?', zh: '这是哪里产的咖啡？' },
      pieces: ['これ', 'は', 'どこ', 'の', 'コーヒー', 'ですか。'],
      explanation: { en: 'どこの + product asks where it was made: これは どこの コーヒーですか.', zh: 'どこの＋产品问产地：これは どこの コーヒーですか。' }
    },
    {
      prompt: { en: 'You’ve looked at the wine and decided to buy it. What do you say?', zh: '你看了这瓶酒，决定买下。你该说什么？' },
      jp: 'じゃ、（　）。',
      choices: ['これを ください', 'これを 見せて ください', 'これは いくらですか', 'いらっしゃいませ'],
      answer: 'これを ください',
      explanation: { en: 'じゃ、これを ください = “Then I’ll take this, please.” That’s the title of this lesson!', zh: 'じゃ、これを ください＝“那么，请给我这个。”这正是本课的标题！' },
      why: {
        'これを 見せて ください': { en: '見せて ください means “please show me”. You’ve already seen it; now you want to buy it.', zh: '見せて ください的意思是“请给我看看”。你已经看过了，现在要买。' },
        'これは いくらですか': { en: 'That asks the price again. You’ve already decided to buy.', zh: '这是再问一次价格，而你已经决定要买了。' },
        'いらっしゃいませ': { en: 'That’s what the shop staff says, not the customer.', zh: '这是店员说的话，不是顾客说的。' }
      }
    },

    {
      type: 'scene', who: 'neko',
      title: { en: 'Epilogue', zh: '尾声' },
      lines: [
        { en: 'Look at all your shopping bags, {name}! You found your way around all eight floors.', zh: '{name}，看你买了这么多东西！八层楼你都逛明白了。' },
        { en: 'Let’s see how you did today.', zh: '来看看你今天的表现吧。' }
      ]
    }
  ]
});
