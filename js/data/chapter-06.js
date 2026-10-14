// Lesson 6, from the textbook's Vocabulary, Grammar Notes, 文型・例文, 会話 and practice pages.
// Grammar quiz: story practice built from the practice pages (練習A/B/C, 問題).
MNN.registerChapter({
  id: 6,
  title: { jp: 'いっしょに行きませんか', en: 'Won’t you come with me?', zh: '要不要一起去？' },

  // The lesson's 会話, shown first in the Conversation section.
  dialogue: {
    title: 'いっしょに 行きませんか',
    parts: [[
      { who: '佐藤', jp: 'ミラーさん。', en: 'Mr. Miller.', zh: '米勒先生。' },
      { who: 'ミラー', jp: '何ですか。', en: 'Yes?', zh: '什么事？' },
      { who: '佐藤', jp: 'あした 友達と お花見を します。\nミラーさんも いっしょに 行きませんか。', en: 'I’m going cherry-blossom viewing with some friends tomorrow.\nWould you like to come with us?', zh: '明天我和朋友去赏樱花。\n米勒先生也一起去吗？' },
      { who: 'ミラー', jp: 'いいですね。 どこへ 行きますか。', en: 'That sounds nice. Where are you going?', zh: '好啊。去哪里？' },
      { who: '佐藤', jp: '大阪城です。', en: 'Osaka Castle.', zh: '大阪城。' },
      { who: 'ミラー', jp: '何時に 行きますか。', en: 'What time are you going?', zh: '几点去？' },
      { who: '佐藤', jp: '10時に 大阪駅で 会いましょう。', en: 'Let’s meet at Osaka Station at ten.', zh: '10点在大阪站见面吧。' },
      { who: 'ミラー', jp: 'わかりました。', en: 'All right.', zh: '好的。' },
      { who: '佐藤', jp: 'じゃ、また あした。', en: 'See you tomorrow, then.', zh: '那么，明天见。' }
    ]]
  },

  vocab: [
    // ----- Verbs -----
    { group: 'words', jp: 'たべます', kanji: '食べます', en: 'eat', zh: '吃' },
    { group: 'words', jp: 'のみます', kanji: '飲みます', en: 'drink', zh: '喝' },
    { group: 'words', jp: 'すいます［たばこを〜］', kanji: '吸います［たばこを〜］', en: 'smoke [a cigarette]', zh: '吸［烟］' },
    { group: 'words', jp: 'みます', kanji: '見ます', en: 'see, look at, watch', zh: '看' },
    { group: 'words', jp: 'ききます', kanji: '聞きます', en: 'hear, listen', zh: '听' },
    { group: 'words', jp: 'よみます', kanji: '読みます', en: 'read', zh: '读，看（书）' },
    { group: 'words', jp: 'かきます', kanji: '書きます', en: 'write', zh: '写',
      note: { en: 'かきます can also mean draw or paint; then the textbook writes it in hiragana.', zh: 'かきます也可以表示“画”，这时课本用平假名书写。' } },
    { group: 'words', jp: 'かいます', kanji: '買います', en: 'buy', zh: '买' },
    { group: 'words', jp: 'とります［しゃしんを〜］', kanji: '撮ります［写真を〜］', en: 'take [a photograph]', zh: '拍［照片］' },
    { group: 'words', jp: 'します', en: 'do, play', zh: '做，玩' },
    { group: 'words', jp: 'あいます［ともだちに〜］', kanji: '会います［友達に〜］', en: 'meet [a friend]', zh: '见［朋友］',
      note: { en: 'The person you meet takes に, not を: 友達に 会います.', zh: '见的人用に，不用を：友達に 会います。' } },

    // ----- Food and drink -----
    { group: 'words', jp: 'ごはん', en: 'a meal, cooked rice', zh: '饭，米饭' },
    { group: 'words', jp: 'あさごはん', kanji: '朝ごはん', en: 'breakfast', zh: '早饭' },
    { group: 'words', jp: 'ひるごはん', kanji: '昼ごはん', en: 'lunch', zh: '午饭' },
    { group: 'words', jp: 'ばんごはん', kanji: '晩ごはん', en: 'supper', zh: '晚饭' },
    { group: 'words', jp: 'パン', en: 'bread', zh: '面包' },
    { group: 'words', jp: 'たまご', kanji: '卵', en: 'egg', zh: '鸡蛋' },
    { group: 'words', jp: 'にく', kanji: '肉', en: 'meat', zh: '肉' },
    { group: 'words', jp: 'さかな', kanji: '魚', en: 'fish', zh: '鱼' },
    { group: 'words', jp: 'やさい', kanji: '野菜', en: 'vegetable', zh: '蔬菜' },
    { group: 'words', jp: 'くだもの', kanji: '果物', en: 'fruit', zh: '水果' },
    { group: 'words', jp: 'みず', kanji: '水', en: 'water', zh: '水' },
    { group: 'words', jp: 'おちゃ', kanji: 'お茶', en: 'tea, green tea', zh: '茶，绿茶' },
    { group: 'words', jp: 'こうちゃ', kanji: '紅茶', en: 'black tea', zh: '红茶' },
    { group: 'words', jp: 'ぎゅうにゅう（ミルク）', kanji: '牛乳（ミルク）', en: 'milk', zh: '牛奶' },
    { group: 'words', jp: 'ジュース', en: 'juice', zh: '果汁' },
    { group: 'words', jp: 'ビール', en: 'beer', zh: '啤酒' },
    { group: 'words', jp: '［お］さけ', kanji: '［お］酒', en: 'alcohol, Japanese rice wine', zh: '酒，日本酒' },
    { group: 'words', jp: 'たばこ', en: 'tobacco, cigarette', zh: '烟，香烟' },

    // ----- Things and places -----
    { group: 'words', jp: 'てがみ', kanji: '手紙', en: 'letter', zh: '信',
      note: { en: 'Careful if you read Chinese: 手紙 is a letter, not toilet paper!', zh: '注意：日语的「手紙」是“信”，不是“手纸”！' } },
    { group: 'words', jp: 'レポート', en: 'report', zh: '报告' },
    { group: 'words', jp: 'しゃしん', kanji: '写真', en: 'photograph', zh: '照片' },
    { group: 'words', jp: 'ビデオ', en: 'video [tape], video deck', zh: '录像（带），录像机' },
    { group: 'words', jp: 'みせ', kanji: '店', en: 'shop, store', zh: '商店' },
    { group: 'words', jp: 'にわ', kanji: '庭', en: 'garden', zh: '院子，庭院' },

    // ----- Activities -----
    { group: 'words', jp: 'しゅくだい', kanji: '宿題', en: 'homework', zh: '作业',
      note: { en: 'しゅくだいを します: do homework.', zh: 'しゅくだいを します：做作业。' } },
    { group: 'words', jp: 'テニス', en: 'tennis', zh: '网球',
      note: { en: 'テニスを します: play tennis.', zh: 'テニスを します：打网球。' } },
    { group: 'words', jp: 'サッカー', en: 'soccer, football', zh: '足球',
      note: { en: 'サッカーを します: play soccer.', zh: 'サッカーを します：踢足球。' } },
    { group: 'words', jp: '［お］はなみ', kanji: '［お］花見', en: 'cherry-blossom viewing', zh: '赏樱花',
      note: { en: 'おはなみを します: view the cherry blossoms.', zh: 'おはなみを します：赏樱花。' } },

    // ----- Other words -----
    { group: 'words', jp: 'なに', kanji: '何', en: 'what', zh: '什么' },
    { group: 'words', jp: 'いっしょに', en: 'together', zh: '一起' },
    { group: 'words', jp: 'ちょっと', en: 'a little while, a little bit', zh: '一会儿，一点儿' },
    { group: 'words', jp: 'いつも', en: 'always, usually', zh: '总是，经常' },
    { group: 'words', jp: 'ときどき', kanji: '時々', en: 'sometimes', zh: '有时' },
    { group: 'words', jp: 'それから', en: 'after that, and then', zh: '然后' },
    { group: 'words', jp: 'ええ', en: 'yes', zh: '嗯，是' },

    // ----- Practice C phrases -----
    { group: 'expressions', jp: 'いいですね。', en: 'That’s good. / That sounds nice.', zh: '好啊。／不错啊。',
      note: { en: 'Say it when you like someone’s idea, for example when they invite you somewhere.', zh: '赞同对方的想法时说，比如别人邀请你去某地时。' } },
    { group: 'expressions', jp: 'わかりました。', en: 'I see. / All right.', zh: '知道了。／明白了。',
      note: { en: 'Say it to show you’ve understood and accept a plan, like a meeting time.', zh: '表示明白并接受安排，比如见面的时间。' } },

    // ----- Conversation phrases -----
    { group: 'conversation', jp: 'なんですか。', kanji: '何ですか。', en: 'Yes? (lit. What is it?)', zh: '什么事？',
      note: { en: 'The reply when someone calls your name to get your attention.', zh: '有人叫你名字引起你注意时的回答。' } },
    { group: 'conversation', jp: 'いっしょに 〜ませんか。', en: 'Would you like to … with me?', zh: '要不要一起……？',
      note: { en: 'Invite someone politely. It leaves them free to say no.', zh: '礼貌地邀请别人，给对方留有拒绝的余地。' } },
    { group: 'conversation', jp: 'じゃ、また ［あした］。', en: 'See you [tomorrow].', zh: '那么，［明天］见。',
      note: { en: 'A casual goodbye when you’ll see the person again soon.', zh: '和很快会再见的人道别时的随意说法。' } },

    // ----- Countries -----
    { group: 'countries', jp: 'メキシコ', en: 'Mexico', zh: '墨西哥' },

    // ----- Names -----
    { group: 'names', jp: 'おおさかデパート', kanji: '大阪デパート', en: 'a fictitious department store', zh: '虚构的百货商店名' },
    { group: 'names', jp: 'つるや', en: 'a fictitious restaurant', zh: '虚构的餐厅名' },
    { group: 'names', jp: 'フランスや', kanji: 'フランス屋', en: 'a fictitious supermarket', zh: '虚构的超市名' },
    { group: 'names', jp: 'まいにちや', kanji: '毎日屋', en: 'a fictitious supermarket', zh: '虚构的超市名' }
  ],

  grammar: [
    {
      pattern: 'N を V(transitive)',
      title: { en: 'The object of a verb', zh: '动词的宾语' },
      explain: {
        en: 'を marks the thing the action is done to: the juice you drink, the book you read.',
        zh: 'を表示动作的对象：喝的果汁、读的书。'
      },
      notes: [
        { en: 'The particle を is pronounced お. The character を is only used for this particle.', zh: '助词を读作お。を这个字只用来写这个助词。' }
      ],
      examples: [
        { jp: 'ジュースを 飲みます。', en: 'I drink juice.', zh: '我喝果汁。' },
        { jp: 'わたしは 本を 読みます。', en: 'I read books.', zh: '我看书。' }
      ]
    },
    {
      pattern: 'N を します',
      title: { en: 'Doing an activity with します', zh: '用します表示做某事' },
      explain: {
        en: 'Lots of nouns can go before を します to mean doing that activity: sports and games, events, and everyday tasks.',
        zh: '很多名词可以放在を します前面，表示做那件事：运动和游戏、活动、日常事务。'
      },
      table: {
        head: [{ en: 'Example', zh: '例子' }],
        rows: [
          { label: { en: 'Sports, games', zh: '运动，游戏' }, cells: ['サッカーを します'] },
          { label: { en: '', zh: '' }, cells: ['トランプを します'] },
          { label: { en: 'Events', zh: '活动' }, cells: ['パーティーを します'] },
          { label: { en: '', zh: '' }, cells: ['会議を します'] },
          { label: { en: 'Tasks', zh: '事务' }, cells: ['宿題を します'] },
          { label: { en: '', zh: '' }, cells: ['仕事を します'] },
          { label: { en: '', zh: '' }, cells: ['電話を します'] }
        ]
      },
      examples: [
        { jp: 'あした テニスを します。', en: 'I’m playing tennis tomorrow.', zh: '我明天打网球。' }
      ]
    },
    {
      pattern: '何を しますか',
      title: { en: 'What will you do?', zh: '做什么？' },
      explain: {
        en: 'Ask what someone does, will do or did with 何を しますか／しましたか.',
        zh: '用何を しますか／しましたか问别人做什么、将做什么或做了什么。'
      },
      examples: [
        { jp: '月曜日 何を しますか。\n……京都へ 行きます。', en: 'What are you doing on Monday?\n……I’m going to Kyoto.', zh: '你星期一做什么？\n……去京都。' },
        { jp: 'きのう 何を しましたか。\n……サッカーを しました。', en: 'What did you do yesterday?\n……I played soccer.', zh: '你昨天做了什么？\n……踢了足球。' }
      ]
    },
    {
      pattern: 'なん と なに',
      title: { en: 'Two ways to read “what”', zh: '“什么”的两种读法' },
      explain: {
        en: 'Both なん and なに mean “what”. Use なん before a sound in the た, だ or な rows, and before a counter. Use なに everywhere else.',
        zh: 'なん和なに都是“什么”的意思。在た行、だ行、な行的音前面以及量词前面读なん，其他情况读なに。'
      },
      table: {
        head: [{ en: 'Reading', zh: '读法' }],
        rows: [
          { label: { en: 'Before です', zh: 'です前' }, cells: ['{何|なん}ですか'] },
          { label: { en: 'Before の', zh: 'の前' }, cells: ['{何|なん}の 本'] },
          { label: { en: 'Before で', zh: 'で前' }, cells: ['{何|なん}で 行きますか'] },
          { label: { en: 'Counter', zh: '量词' }, cells: ['{何歳|なんさい}'] },
          { label: { en: 'Before を', zh: 'を前' }, cells: ['{何|なに}を 買いますか'] }
        ]
      },
      notes: [
        { en: 'なんで can also mean “why?”. Say なにで to make it clear you mean “how?”.', zh: 'なんで也可以表示“为什么”。想明确表示“怎么去”时可以说なにで。' }
      ],
      examples: [
        { jp: 'それは 何ですか。', en: 'What’s that?', zh: '那是什么？' },
        { jp: '何で 東京へ 行きますか。\n……新幹線で 行きます。', en: 'How are you getting to Tokyo?\n……By Shinkansen.', zh: '你怎么去东京？\n……坐新干线去。' },
        { jp: 'テレーザちゃんは 何歳ですか。', en: 'How old is Teresa?', zh: '特蕾莎几岁了？' },
        { jp: '何を 買いますか。', en: 'What are you going to buy?', zh: '你要买什么？' }
      ]
    },
    {
      pattern: 'N(place)で V',
      title: { en: 'Where an action happens', zh: '动作发生的地点' },
      explain: {
        en: 'で after a place shows where the action happens. Compare へ, which shows where you’re going.',
        zh: '地点后面加で，表示动作发生的场所。注意和表示去向的へ区分。'
      },
      examples: [
        { jp: '駅で 新聞を 買います。', en: 'I’m going to buy a paper at the station.', zh: '我在车站买报纸。' },
        { jp: 'どこで その かばんを 買いましたか。\n……メキシコで 買いました。', en: 'Where did you buy that bag?\n……In Mexico.', zh: '你在哪里买的那个包？\n……在墨西哥买的。' }
      ]
    },
    {
      pattern: 'Vませんか',
      title: { en: 'Inviting: won’t you …?', zh: '邀请：要不要……？' },
      explain: {
        en: 'Use Vませんか to invite someone to do something with you.',
        zh: '用Vませんか邀请别人和你一起做某事。'
      },
      examples: [
        { jp: 'いっしょに 京都へ 行きませんか。\n……ええ、いいですね。', en: 'Would you like to come to Kyoto with us?\n……Yes, that’s a nice idea.', zh: '要不要一起去京都？\n……好啊。' },
        { jp: 'あした テニスを しませんか。\n……ええ、いいですね。', en: 'Shall we play tennis tomorrow?\n……Yes, that sounds good.', zh: '明天要不要打网球？\n……好啊。' }
      ]
    },
    {
      pattern: 'Vましょう',
      title: { en: 'Let’s …', zh: '……吧' },
      explain: {
        en: 'Vましょう actively invites someone to do something with you. It’s also how you say yes to an invitation.',
        zh: 'Vましょう积极地邀请对方一起做某事，也可以用来答应别人的邀请。'
      },
      notes: [
        { en: 'Vませんか is softer: it thinks more about what the listener might want than Vましょう does.', zh: 'Vませんか语气更委婉，比Vましょう更顾及对方的意愿。' }
      ],
      examples: [
        { jp: 'ちょっと 休みましょう。', en: 'Let’s take a break.', zh: '休息一下吧。' },
        { jp: 'いっしょに 昼ごはんを 食べませんか。\n……ええ、食べましょう。', en: 'Shall we have lunch together?\n……Yes, let’s.', zh: '要不要一起吃午饭？\n……好，一起吃吧。' },
        { jp: 'あした 10時に 駅で 会いましょう。\n……わかりました。', en: 'Let’s meet at the station at ten tomorrow.\n……All right.', zh: '明天10点在车站见吧。\n……好的。' }
      ]
    },
    {
      pattern: '〜か',
      title: { en: 'Oh, …? (taking in news)', zh: '……啊（接受新信息）' },
      explain: {
        en: 'か can show you’ve just heard and taken in some news, the same か as in そうですか.',
        zh: 'か可以表示刚听到并接受了新的信息，和そうですか里的か一样。'
      },
      examples: [
        { jp: '日曜日 京都へ 行きました。\n……京都ですか。 いいですね。', en: 'I went to Kyoto on Sunday.\n……Kyoto, eh? Great!', zh: '我星期天去了京都。\n……京都啊，真不错。' }
      ]
    }
  ],

  vocabQuiz: [],

  grammarQuiz: [
    {
      type: 'scene', who: 'neko',
      title: { en: 'Day 6 · Plans with friends', zh: '第6天 · 和朋友的约定' },
      lines: [
        { en: 'The cherry blossoms are out in Minna Town, {name}! Everyone is making plans.', zh: '{name}，大家町的樱花开了！大家都在做计划。' },
        { en: 'First, let’s talk about what you eat, drink and do every day.', zh: '先来说说你每天吃什么、喝什么、做什么吧。' }
      ]
    },

    // ----- Part 1: を and everyday verbs (練習A 1–2, 練習B 1–2, 問題5) -----
    {
      prompt: { en: 'You always have bread for breakfast. Fill the gap.', zh: '你早饭总是吃面包。请填空。' },
      jp: 'わたしは パン（　）食べます。',
      choices: ['を', 'で', 'へ', 'に'],
      answer: 'を',
      explanation: { en: 'を marks what you eat: パンを 食べます.', zh: 'を表示吃的东西：パンを 食べます。' },
      why: {
        'で': { en: 'で marks a place or a means, not the thing you eat.', zh: 'で表示场所或方式，不表示吃的东西。' },
        'へ': { en: 'へ marks where you’re going.', zh: 'へ表示去的方向。' },
        'に': { en: 'に marks a time or the person you meet, not the food.', zh: 'に表示时间或见的人，不表示食物。' }
      }
    },
    {
      prompt: { en: 'Neko-chan is drinking a bottle of water. What is she doing?', zh: '小猫在喝一瓶水。她在做什么？' },
      jp: '水を（　）。',
      choices: ['飲みます', '食べます', '吸います', '見ます'],
      answer: '飲みます',
      explanation: { en: 'For drinks, the verb is 飲みます.', zh: '喝东西用飲みます。' },
      why: {
        '食べます': { en: '食べます is for food you eat, not drinks.', zh: '食べます用于吃的东西，不用于饮料。' },
        '吸います': { en: '吸います is for smoking a cigarette.', zh: '吸います用于吸烟。' },
        '見ます': { en: '見ます means look at or watch.', zh: '見ます的意思是看。' }
      }
    },
    {
      prompt: { en: 'You’re holding up your camera in the garden.', zh: '你在院子里举起了相机。' },
      jp: '庭で 写真を（　）。',
      choices: ['撮ります', '書きます', '見ます', 'します'],
      answer: '撮ります',
      explanation: { en: 'Taking a photo is 写真を 撮ります.', zh: '拍照说写真を 撮ります。' },
      why: {
        '書きます': { en: '書きます is for writing letters and reports.', zh: '書きます用于写信、写报告。' },
        '見ます': { en: '写真を 見ます means looking at photos, not taking them.', zh: '写真を 見ます是看照片，不是拍照片。' },
        'します': { en: 'Photos don’t take します. The verb is 撮ります.', zh: '照片不用します，要用撮ります。' }
      }
    },
    {
      prompt: { en: 'Which word goes with を します?', zh: '哪个词可以和を します搭配？' },
      jp: '日曜日 （　）を します。',
      choices: ['テニス', '手紙', 'パン', '新聞'],
      answer: 'テニス',
      explanation: { en: 'Sports and games take を します: テニスを します (play tennis).', zh: '运动和游戏用を します：テニスを します（打网球）。' },
      why: {
        '手紙': { en: 'A letter takes 書きます: 手紙を 書きます.', zh: '信要用書きます：手紙を 書きます。' },
        'パン': { en: 'Bread takes 食べます or 買います.', zh: '面包要用食べます或買います。' },
        '新聞': { en: 'A newspaper takes 読みます.', zh: '报纸要用読みます。' }
      }
    },
    {
      prompt: { en: 'Neko-chan asks about your mornings. Choose the right question.', zh: '小猫问你早上的习惯。选择正确的问句。' },
      talk: [{ who: 'neko', jp: '毎朝 新聞を（　）。' }, { who: 'you', jp: 'いいえ、読みません。' }],
      choices: ['読みますか', '読みましたか', '読みませんか'],
      answer: '読みますか',
      explanation: { en: '毎朝 is a habit, so the question is 読みますか, and the answer 読みません matches it.', zh: '毎朝表示习惯，所以问読みますか，回答読みません与之对应。' },
      why: {
        '読みましたか': { en: 'ました is the past. 毎朝 is a habit, and the answer is 読みません, not 読みませんでした.', zh: 'ました是过去式。毎朝表示习惯，回答是読みません，不是読みませんでした。' },
        '読みませんか': { en: 'ませんか is an invitation: “won’t you read the paper (with me)?”', zh: 'ませんか是邀请：“要不要（一起）看报纸？”' }
      }
    },

    {
      type: 'scene', who: 'kitsune',
      title: { en: 'Part 2 · What and where', zh: '第2部分 · 做什么，在哪里' },
      lines: [
        { en: 'How was your weekend, {name}? Tell me what you did, and where.', zh: '{name}，周末过得怎么样？告诉我你做了什么，在哪里做的。' }
      ]
    },

    // ----- Part 2: 何を, なに／なん, で (練習A 1–3, 練習B 3–6, 練習C 1–2, 問題4) -----
    {
      prompt: { en: 'Kitsune-san asks about your Saturday. Choose the question.', zh: '狐狸先生问你星期六做了什么。选择问句。' },
      talk: [{ who: 'kitsune', jp: '土曜日（　）しましたか。' }, { who: 'you', jp: '日本語を 勉強しました。' }],
      choices: ['何を', '何で', 'どこで', 'だれと'],
      answer: '何を',
      explanation: { en: '何を しましたか asks what someone did.', zh: '何を しましたか问别人做了什么。' },
      why: {
        '何で': { en: '何で asks how (by what means).', zh: '何で问的是用什么方式。' },
        'どこで': { en: 'どこで asks where. The answer is what you did.', zh: 'どこで问的是在哪里，而回答是做了什么。' },
        'だれと': { en: 'だれと asks who with.', zh: 'だれと问的是和谁一起。' }
      }
    },
    {
      prompt: { en: 'How is 何 read in this question?', zh: '这句话里的何怎么读？' },
      jp: '{何|　}を 買いますか。',
      choices: ['なに', 'なん'],
      fixedOrder: true,
      answer: 'なに',
      explanation: { en: 'Before を, 何 is read なに: なにを 買いますか.', zh: '在を前面，何读なに：なにを 買いますか。' },
      why: {
        'なん': { en: 'なん is only used before た, だ or な-row sounds (です, の, で) or counters. Before を it’s なに.', zh: 'なん只用在た行、だ行、な行的音（です、の、で）或量词前面。を前面读なに。' }
      }
    },
    {
      prompt: { en: 'You bought the paper at the station. Fill the gap.', zh: '你在车站买了报纸。请填空。' },
      jp: '駅（　）新聞を 買いました。',
      choices: ['で', 'へ', 'を', 'に'],
      answer: 'で',
      explanation: { en: 'で after a place shows where the action happens: 駅で 買いました.', zh: '地点后面加で表示动作发生的场所：駅で 買いました。' },
      why: {
        'へ': { en: 'へ is for movement towards a place. Buying happens AT the station: で.', zh: 'へ表示朝某地移动。买东西是在车站发生的：用で。' },
        'を': { en: 'を is already after 新聞, the thing you bought.', zh: '新聞后面已经有を了，表示买的东西。' },
        'に': { en: 'For where an action happens, use で.', zh: '表示动作发生的场所要用で。' }
      }
    },
    {
      prompt: { en: 'Read the answer, then choose the question.', zh: '先看回答，再选择问句。' },
      jp: '（　）その カメラを 買いましたか。\n……大阪デパートで 買いました。',
      choices: ['どこで', 'どこへ', 'いつ', '何で'],
      answer: 'どこで',
      explanation: { en: 'The answer gives the place where you bought it (〜で), so ask どこで.', zh: '回答说的是在哪里买的（〜で），所以问どこで。' },
      why: {
        'どこへ': { en: 'どこへ asks where you’re going, not where something happened.', zh: 'どこへ问去哪里，不问在哪里做。' },
        'いつ': { en: 'いつ asks when.', zh: 'いつ问什么时候。' },
        '何で': { en: '何で asks how, like by train or by bus.', zh: '何で问怎么去，比如坐电车还是坐公交车。' }
      }
    },
    {
      prompt: { en: 'You skipped breakfast this morning. Choose the question Kitsune-san asked.', zh: '你今天早上没吃早饭。选择狐狸先生问的问题。' },
      talk: [{ who: 'kitsune', jp: 'けさ（　）食べましたか。' }, { who: 'you', jp: '何も 食べませんでした。' }],
      choices: ['何を', '何で', 'どこで'],
      answer: '何を',
      explanation: { en: '何を 食べましたか asks what you ate. 何も + negative means “nothing”.', zh: '何を 食べましたか问吃了什么。何も＋否定表示“什么也没”。' },
      why: {
        '何で': { en: '何で asks how, not what.', zh: '何で问的是方式，不是什么东西。' },
        'どこで': { en: 'どこで asks where. The answer says what (nothing!).', zh: 'どこで问在哪里，而回答说的是吃了什么（什么也没吃！）。' }
      }
    },
    {
      type: 'order',
      prompt: { en: 'Tell Kitsune-san what you did on Sunday, in order.', zh: '按顺序告诉狐狸先生你星期天做了什么。' },
      translation: { en: 'On Sunday I read a book. After that, I watched a video.', zh: '星期天我看了书。然后看了录像。' },
      pieces: ['日曜日', '本を', '読みました。', 'それから', 'ビデオを', '見ました。'],
      explanation: { en: 'それから (after that) links two actions in the order they happened.', zh: 'それから（然后）按发生的顺序连接两个动作。' }
    },

    {
      type: 'scene', who: 'tanuki',
      title: { en: 'Part 3 · Invitations', zh: '第3部分 · 邀请' },
      lines: [
        { en: '{name}! I have a plan for tomorrow. Will you join me?', zh: '{name}！我明天有个计划，你要一起来吗？' }
      ]
    },

    // ----- Part 3: ませんか, ましょう and the conversation (練習A 4–5, 練習B 7, 練習C 3, 会話, 問題5) -----
    {
      prompt: { en: 'Tanuki-sensei calls your name. How do you answer?', zh: '狸猫老师叫你的名字。你怎么回答？' },
      talk: [{ who: 'tanuki', jp: '{name}さん。' }, { who: 'you', jp: '（　）' }],
      choices: ['何ですか。', 'どなたですか。', 'こちらこそ。', 'そうですね。'],
      answer: '何ですか。',
      explanation: { en: '何ですか (Yes? What is it?) is the reply when someone calls you.', zh: '有人叫你时，回答何ですか（什么事？）。' },
      why: {
        'どなたですか。': { en: 'どなたですか asks who someone is. You can see it’s Tanuki-sensei.', zh: 'どなたですか问对方是谁，而你知道是狸猫老师。' },
        'こちらこそ。': { en: 'こちらこそ replies to よろしく or a thank-you.', zh: 'こちらこそ用来回应よろしく或道谢。' },
        'そうですね。': { en: 'そうですね agrees with something he said. He hasn’t said anything yet!', zh: 'そうですね表示同意对方的话，而他还什么都没说！' }
      }
    },
    {
      prompt: { en: 'Tanuki-sensei invites you to play tennis tomorrow.', zh: '狸猫老师邀请你明天去打网球。' },
      talk: [{ who: 'tanuki', jp: 'あした いっしょに テニスを（　）。' }, { who: 'you', jp: 'ええ、いいですね。' }],
      choices: ['しませんか', 'しません', 'しませんでしたか'],
      answer: 'しませんか',
      explanation: { en: 'Vませんか is a polite invitation: “Won’t you play tennis with me?”', zh: 'Vませんか是礼貌的邀请：“要不要一起打网球？”' },
      why: {
        'しません': { en: 'しません just says “I won’t play”. That’s not an invitation!', zh: 'しません只是说“我不打”，不是邀请！' },
        'しませんでしたか': { en: 'That asks “didn’t you play?” about the past. Tomorrow is the future.', zh: '这是问过去“你没打吗？”，而明天是将来。' }
      }
    },
    {
      prompt: { en: 'Tanuki-sensei invites you to lunch. Say yes, let’s!', zh: '狸猫老师邀请你吃午饭。回答：好，一起吃吧！' },
      talk: [{ who: 'tanuki', jp: 'いっしょに 昼ごはんを 食べませんか。' }, { who: 'you', jp: 'ええ、（　）。' }],
      choices: ['食べましょう', '食べません', '食べませんか', '食べました'],
      answer: '食べましょう',
      explanation: { en: 'Answer an invitation positively with Vましょう: ええ、食べましょう.', zh: '用Vましょう积极地答应邀请：ええ、食べましょう。' },
      why: {
        '食べません': { en: 'ええ + 食べません says yes and no at once! It means “I won’t eat”.', zh: 'ええ＋食べません既答应又拒绝！意思是“我不吃”。' },
        '食べませんか': { en: 'That repeats his invitation back to him.', zh: '这是把他的邀请又问回去了。' },
        '食べました': { en: '食べました means you already ate.', zh: '食べました是说你已经吃过了。' }
      }
    },
    {
      prompt: { en: 'You’ve been studying for two hours. Suggest a break.', zh: '你已经学习了两个小时。提议休息一下。' },
      jp: 'ちょっと（　）。',
      choices: ['休みましょう', '休みました', '休みません', '休みますか'],
      answer: '休みましょう',
      explanation: { en: 'Vましょう suggests doing something together: ちょっと 休みましょう (Let’s take a break).', zh: 'Vましょう提议一起做某事：ちょっと 休みましょう（休息一下吧）。' },
      why: {
        '休みました': { en: '休みました means you already rested.', zh: '休みました是说已经休息过了。' },
        '休みません': { en: '休みません means “I won’t rest”.', zh: '休みません的意思是“不休息”。' },
        '休みますか': { en: 'That asks “will you rest?”. It’s not a suggestion.', zh: '这是问“你休息吗？”，不是提议。' }
      }
    },
    {
      prompt: { en: 'Choose the particle for the person you meet.', zh: '选择表示见面对象的助词。' },
      jp: 'あした 友達（　）会います。',
      choices: ['に', 'を', 'で', 'へ'],
      answer: 'に',
      explanation: { en: '会います takes に for the person you meet: 友達に 会います.', zh: '会います的对象用に：友達に 会います。' },
      why: {
        'を': { en: 'This is a common mistake! 会います takes に, not を.', zh: '这是常见错误！会います用に，不用を。' },
        'で': { en: 'で marks the place where you meet: 駅で 会います.', zh: 'で表示见面的地点：駅で 会います。' },
        'へ': { en: 'へ marks where you’re going.', zh: 'へ表示去的方向。' }
      }
    },
    {
      prompt: { en: 'Like Ms. Sato in the conversation, suggest where to meet.', zh: '像会话中的佐藤女士一样，提议见面地点。' },
      talk: [{ who: 'you', jp: '何時に 行きますか。' }, { who: 'tanuki', jp: '10時に 大阪駅（　）会いましょう。' }],
      choices: ['で', 'に', 'へ', 'を'],
      answer: 'で',
      explanation: { en: 'The station is where the meeting happens, so it takes で.', zh: '车站是见面发生的地点，所以用で。' },
      why: {
        'に': { en: 'に is for the person you meet (友達に). The place takes で.', zh: 'に用于见面的人（友達に），地点用で。' },
        'へ': { en: 'へ shows direction. You’re saying where to meet.', zh: 'へ表示方向，而这里说的是在哪里见面。' },
        'を': { en: 'を isn’t used with the place you meet.', zh: '见面的地点不用を。' }
      }
    },
    {
      prompt: { en: 'Tanuki-sensei sets the meeting time. Accept the plan.', zh: '狸猫老师定了见面时间。接受这个安排。' },
      talk: [{ who: 'tanuki', jp: 'じゃ、11時に 駅で 会いましょう。' }, { who: 'you', jp: '（　）' }],
      choices: ['わかりました。', 'どう いたしまして。', 'いらっしゃいませ。', '何ですか。'],
      answer: 'わかりました。',
      explanation: { en: 'わかりました (All right / Got it) accepts the plan.', zh: 'わかりました（好的／知道了）表示接受安排。' },
      why: {
        'どう いたしまして。': { en: 'That replies to a thank-you.', zh: '这是回应道谢的话。' },
        'いらっしゃいませ。': { en: 'That’s what shop staff say.', zh: '这是店员说的话。' },
        '何ですか。': { en: 'That’s the reply when someone calls your name.', zh: '这是有人叫你名字时的回答。' }
      }
    },
    {
      prompt: { en: 'Kitsune-san tells you some news. React like the textbook.', zh: '狐狸先生告诉你一个消息。像课本那样回应。' },
      talk: [{ who: 'kitsune', jp: '日曜日 京都へ 行きました。' }, { who: 'you', jp: '京都（　）。 いいですね。' }],
      choices: ['ですか', 'ですね', 'ですよ'],
      answer: 'ですか',
      explanation: { en: 'This か shows you’ve just taken in the news: “Kyoto, eh? Great!”', zh: '这里的か表示刚接受新信息：“京都啊，真不错！”' },
      why: {
        'ですね': { en: 'ね checks something you already knew. This is news to you.', zh: 'ね用来确认你已经知道的事，而这对你来说是新消息。' },
        'ですよ': { en: 'よ tells HIM something new. He’s the one who went!', zh: 'よ是告诉对方新信息，而去京都的是他！' }
      }
    },
    {
      prompt: { en: 'Read about Mr. Miller’s day. Is the last sentence true (○) or false (×)?', zh: '阅读米勒先生的一天。最后一句话是对（○）还是错（×）？' },
      jp: 'ミラーさんは 毎朝 7時に 起きます。 朝ごはんは いつも パンと コーヒーです。 電車で 会社へ 行きます。\n\n→ ミラーさんは 朝ごはんを 食べません。',
      choices: ['○', '×'],
      fixedOrder: true,
      answer: '×',
      explanation: { en: 'False: he always has bread and coffee for breakfast (いつも パンと コーヒー).', zh: '错：他早饭总是吃面包、喝咖啡（いつも パンと コーヒー）。' },
      why: {
        '○': { en: 'Look again: 朝ごはんは いつも パンと コーヒーです. He does eat breakfast.', zh: '再看一遍：朝ごはんは いつも パンと コーヒーです。他是吃早饭的。' }
      }
    },

    {
      type: 'scene', who: 'neko',
      title: { en: 'Epilogue', zh: '尾声' },
      lines: [
        { en: 'Tomorrow at 10, under the cherry blossoms at Osaka Castle. Don’t be late, {name}!', zh: '明天10点，大阪城的樱花树下见。{name}，别迟到哦！' },
        { en: 'Let’s see how you did today.', zh: '来看看你今天的表现吧。' }
      ]
    }
  ]
});
