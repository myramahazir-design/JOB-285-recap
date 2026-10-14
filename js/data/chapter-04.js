// Lesson 4, from the textbook's Vocabulary, Useful Words and Grammar Notes pages.
// Set phrases (練習C / 会話) are kept in the Conversation section, not Vocabulary.
// The story quiz will come from the practice pages (練習A/B/C, 問題).
MNN.registerChapter({
  id: 4,
  title: { jp: 'そちらは何時から何時までですか', en: "What are your opening hours?", zh: '你们那里从几点到几点？' },

  vocab: [
    // ----- Verbs -----
    { group: 'words', jp: 'おきます', kanji: '起きます', en: 'get up, wake up', zh: '起床' },
    { group: 'words', jp: 'ねます', kanji: '寝ます', en: 'sleep, go to bed', zh: '睡觉' },
    { group: 'words', jp: 'はたらきます', kanji: '働きます', en: 'work', zh: '工作' },
    { group: 'words', jp: 'やすみます', kanji: '休みます', en: 'take a rest, take a holiday', zh: '休息，请假' },
    { group: 'words', jp: 'べんきょうします', kanji: '勉強します', en: 'study', zh: '学习',
      note: { en: 'Careful if you read Chinese: 勉強 here simply means “study”.', zh: '注意：日语的「勉強」意思是“学习”，不是中文“勉强”的意思。' } },
    { group: 'words', jp: 'おわります', kanji: '終わります', en: 'finish', zh: '结束' },

    // ----- Places -----
    { group: 'words', jp: 'デパート', en: 'department store', zh: '百货商店' },
    { group: 'words', jp: 'ぎんこう', kanji: '銀行', en: 'bank', zh: '银行' },
    { group: 'words', jp: 'ゆうびんきょく', kanji: '郵便局', en: 'post office', zh: '邮局' },
    { group: 'words', jp: 'としょかん', kanji: '図書館', en: 'library', zh: '图书馆' },
    { group: 'words', jp: 'びじゅつかん', kanji: '美術館', en: 'art gallery, art museum', zh: '美术馆' },

    // ----- Time -----
    { group: 'words', jp: 'いま', kanji: '今', en: 'now', zh: '现在' },
    { group: 'words', jp: '〜じ', kanji: '〜時', en: '— o’clock', zh: '～点' },
    { group: 'words', jp: '〜ふん（〜ぷん）', kanji: '〜分', en: '— minute(s)', zh: '～分',
      note: { en: 'After 1, 3, 4, 6, 8 and 10 it becomes ぷん: いっぷん, さんぷん, よんぷん, ろっぷん, はっぷん, じゅっぷん.', zh: '在1、3、4、6、8、10后面读ぷん：いっぷん、さんぷん、よんぷん、ろっぷん、はっぷん、じゅっぷん。' } },
    { group: 'words', jp: 'はん', kanji: '半', en: 'half (past)', zh: '半' },
    { group: 'words', jp: 'なんじ', kanji: '何時', en: 'what time', zh: '几点' },
    { group: 'words', jp: 'なんぷん', kanji: '何分', en: 'what minute', zh: '几分' },
    { group: 'words', jp: 'ごぜん', kanji: '午前', en: 'a.m., morning', zh: '上午' },
    { group: 'words', jp: 'ごご', kanji: '午後', en: 'p.m., afternoon', zh: '下午' },
    { group: 'words', jp: 'あさ', kanji: '朝', en: 'morning', zh: '早上' },
    { group: 'words', jp: 'ひる', kanji: '昼', en: 'daytime, noon', zh: '白天，中午' },
    { group: 'words', jp: 'ばん（よる）', kanji: '晩（夜）', en: 'night, evening', zh: '晚上' },
    { group: 'words', jp: 'おととい', en: 'the day before yesterday', zh: '前天' },
    { group: 'words', jp: 'きのう', en: 'yesterday', zh: '昨天' },
    { group: 'words', jp: 'きょう', en: 'today', zh: '今天' },
    { group: 'words', jp: 'あした', en: 'tomorrow', zh: '明天' },
    { group: 'words', jp: 'あさって', en: 'the day after tomorrow', zh: '后天' },
    { group: 'words', jp: 'けさ', en: 'this morning', zh: '今天早上' },
    { group: 'words', jp: 'こんばん', kanji: '今晩', en: 'this evening, tonight', zh: '今天晚上' },
    { group: 'words', jp: 'やすみ', kanji: '休み', en: 'rest, a holiday, a day off', zh: '休息，休假' },
    { group: 'words', jp: 'ひるやすみ', kanji: '昼休み', en: 'lunchtime', zh: '午休' },
    { group: 'words', jp: 'しけん', kanji: '試験', en: 'examination, test', zh: '考试',
      note: { en: 'In Japanese 試験 is an exam you sit.', zh: '注意：日语的「試験」是“考试”，不是中文“试验”的意思。' } },
    { group: 'words', jp: 'かいぎ', kanji: '会議', en: 'meeting, conference', zh: '会议',
      note: { en: 'かいぎを します: hold a meeting.', zh: 'かいぎを します：开会。' } },
    { group: 'words', jp: 'えいが', kanji: '映画', en: 'film, movie', zh: '电影' },
    { group: 'words', jp: 'まいあさ', kanji: '毎朝', en: 'every morning', zh: '每天早上' },
    { group: 'words', jp: 'まいばん', kanji: '毎晩', en: 'every night', zh: '每天晚上' },
    { group: 'words', jp: 'まいにち', kanji: '毎日', en: 'every day', zh: '每天' },

    // ----- Days of the week -----
    { group: 'words', jp: 'げつようび', kanji: '月曜日', en: 'Monday', zh: '星期一' },
    { group: 'words', jp: 'かようび', kanji: '火曜日', en: 'Tuesday', zh: '星期二' },
    { group: 'words', jp: 'すいようび', kanji: '水曜日', en: 'Wednesday', zh: '星期三' },
    { group: 'words', jp: 'もくようび', kanji: '木曜日', en: 'Thursday', zh: '星期四' },
    { group: 'words', jp: 'きんようび', kanji: '金曜日', en: 'Friday', zh: '星期五' },
    { group: 'words', jp: 'どようび', kanji: '土曜日', en: 'Saturday', zh: '星期六' },
    { group: 'words', jp: 'にちようび', kanji: '日曜日', en: 'Sunday', zh: '星期日' },
    { group: 'words', jp: 'なんようび', kanji: '何曜日', en: 'what day of the week', zh: '星期几' },

    // ----- Words from the conversation -----
    { group: 'words', jp: 'ばんごう', kanji: '番号', en: 'number', zh: '号码' },
    { group: 'words', jp: 'なんばん', kanji: '何番', en: 'what number', zh: '几号' },
    { group: 'words', jp: 'そちら', en: 'your place', zh: '您那里，贵处' },

    // ----- Particles -----
    { group: 'words', jp: '〜から', en: 'from —', zh: '从～' },
    { group: 'words', jp: '〜まで', en: 'up to —, until —', zh: '到～' },
    { group: 'words', jp: '〜と 〜', en: '— and — (joining nouns)', zh: '～和～（连接名词）' },

    // ----- Practice C phrases -----
    { group: 'expressions', jp: 'たいへんですね。', kanji: '大変ですね。', en: 'That’s tough, isn’t it?', zh: '真辛苦啊。／够呛啊。',
      note: { en: 'Say it to show sympathy when someone tells you they work or study very long hours.', zh: '别人说自己工作或学习很辛苦时，用来表示同情。' } },

    // ----- Conversation phrases -----
    { group: 'conversation', jp: 'そちらは なんじから なんじまでですか。', kanji: 'そちらは 何時から 何時までですか。', en: 'What are your opening hours?', zh: '你们那里从几点到几点？',
      note: { en: 'Ask a shop, museum or bank (often on the phone) when they open and close. そちら means “your place”.', zh: '问商店、美术馆或银行（常在电话里）几点开门、几点关门。そちら是“您那里”。' } },
    { group: 'conversation', jp: 'やすみは なんようびですか。', kanji: '休みは 何曜日ですか。', en: 'What day are you closed?', zh: '休息日是星期几？',
      note: { en: 'Ask which day of the week a place is closed, or which day someone has off.', zh: '问某个地方星期几休息，或者别人星期几休假。' } },
    { group: 'conversation', jp: 'どうも ありがとう ございました。', en: 'Thank you very much.', zh: '非常感谢。',
      note: { en: 'The past form thanks someone for something they have already done, for example at the end of a phone call.', zh: '过去式，用来感谢对方已经为你做的事，比如电话结束时。' } },

    // ----- Places -----
    { group: 'places', jp: 'ニューヨーク', en: 'New York', zh: '纽约' },
    { group: 'places', jp: 'ペキン', kanji: '北京', en: 'Beijing', zh: '北京' },
    { group: 'places', jp: 'ロサンゼルス', en: 'Los Angeles', zh: '洛杉矶' },
    { group: 'places', jp: 'ロンドン', en: 'London', zh: '伦敦' },

    // ----- Names -----
    { group: 'names', jp: 'あすか', en: 'a fictitious Japanese restaurant', zh: '虚构的日本餐厅名' },
    { group: 'names', jp: 'アップルぎんこう', kanji: 'アップル銀行', en: 'a fictitious bank', zh: '虚构的银行名' },
    { group: 'names', jp: 'みどりとしょかん', kanji: 'みどり図書館', en: 'a fictitious library', zh: '虚构的图书馆名' },
    { group: 'names', jp: 'やまとびじゅつかん', kanji: 'やまと美術館', en: 'a fictitious art museum', zh: '虚构的美术馆名' }
  ],

  grammar: [
    {
      pattern: '今 〜時〜分です',
      title: { en: 'Telling the time', zh: '说时间' },
      explain: {
        en: 'Put a number in front of 時 for the hour and 分 for the minutes. Some numbers change their sound, so learn the table below. Ask the time with 何時 and 何分.',
        zh: '在「時」前加数字表示几点，在「分」前加数字表示几分。有些数字的读音会变化，请记住下面的表。问时间用「何時」和「何分」。'
      },
      notes: [
        { en: 'Watch for よじ (4 o’clock), しちじ (7 o’clock) and くじ (9 o’clock).', zh: '注意：よじ（4点）、しちじ（7点）、くじ（9点）。' }
      ],
      table: {
        head: ['〜分', '〜時'],
        rows: [
          { label: '1', cells: ['いっぷん', 'いちじ'] },
          { label: '2', cells: ['にふん', 'にじ'] },
          { label: '3', cells: ['さんぷん', 'さんじ'] },
          { label: '4', cells: ['よんぷん', 'よじ'] },
          { label: '5', cells: ['ごふん', 'ごじ'] },
          { label: '6', cells: ['ろっぷん', 'ろくじ'] },
          { label: '7', cells: ['ななふん', 'しちじ'] },
          { label: '8', cells: ['はっぷん', 'はちじ'] },
          { label: '9', cells: ['きゅうふん', 'くじ'] },
          { label: '10', cells: ['じゅっぷん（じっぷん）', 'じゅうじ'] }
        ]
      },
      examples: [
        { jp: '今 何時ですか。\n……7時10分です。', en: 'What time is it now?\n……It’s ten past seven.', zh: '现在几点？\n……7点10分。' }
      ]
    },
    {
      pattern: 'Vます／Vません／Vました／Vませんでした',
      title: { en: 'Polite verbs: now, future and past', zh: '动词的礼貌形：现在、将来和过去' },
      explain: {
        en: 'Vます is used for habits, facts and things you will do. Change the ending to say you don’t, you did, or you didn’t.',
        zh: 'Vます表示习惯、事实或将要做的事。改变词尾就可以表示“不做”、“做了”、“没做”。'
      },
      notes: [
        { en: 'Add か to make a question. Answer by repeating the verb: はい、おきます／いいえ、おきません.', zh: '加か就变成疑问句。回答时重复动词：はい、おきます／いいえ、おきません。' },
        { en: 'そうです and 違います can’t be used to answer a question with a verb.', zh: '回答动词疑问句时不能用そうです或違います。' }
      ],
      table: {
        head: [{ en: 'Affirmative', zh: '肯定' }, { en: 'Negative', zh: '否定' }],
        rows: [
          { label: { en: 'Non-past', zh: '非过去' }, cells: ['おきます', 'おきません'] },
          { label: { en: 'Past', zh: '过去' }, cells: ['おきました', 'おきませんでした'] }
        ]
      },
      examples: [
        { jp: '毎朝 6時に 起きます。', en: 'I get up at six every morning.', zh: '我每天早上6点起床。' },
        { jp: 'あした 6時に 起きます。', en: 'I’ll get up at six tomorrow.', zh: '我明天6点起床。' },
        { jp: 'けさ 6時に 起きました。', en: 'I got up at six this morning.', zh: '我今天早上6点起床了。' },
        { jp: 'きのう 勉強しましたか。\n……いいえ、勉強しませんでした。', en: 'Did you study yesterday?\n……No, I didn’t.', zh: '你昨天学习了吗？\n……没有，没学习。' },
        { jp: '毎晩 何時に 寝ますか。\n……11時に 寝ます。', en: 'What time do you go to bed every night?\n……At eleven.', zh: '你每天晚上几点睡觉？\n……11点睡。' },
        { jp: '土曜日 働きますか。\n……いいえ、働きません。', en: 'Do you work on Saturdays?\n……No, I don’t.', zh: '你星期六工作吗？\n……不，不工作。' }
      ]
    },
    {
      pattern: 'N(time)に V',
      title: { en: 'Doing something at a time', zh: '在某个时间做某事' },
      explain: {
        en: 'Put に after a time with a number in it (7時, 7月2日) to say when you do something.',
        zh: '在带数字的时间（7時、7月2日）后面加に，表示做某事的时间。'
      },
      notes: [
        { en: 'No に after: きょう, あした, あさって, きのう, おととい, けさ, こんばん, いま, まいあさ, まいばん, まいにち.', zh: '以下词后面不加に：きょう、あした、あさって、きのう、おととい、けさ、こんばん、いま、まいあさ、まいばん、まいにち。' },
        { en: 'に is optional after 〜ようび, あさ, ひる, ばん and よる.', zh: '〜ようび、あさ、ひる、ばん、よる后面的に可加可不加。' }
      ],
      examples: [
        { jp: '6時半に 起きます。', en: 'I get up at half past six.', zh: '我6点半起床。' },
        { jp: '{7月|しちがつ}{2日|ふつか}に 日本へ 来ました。', en: 'I came to Japan on 2 July.', zh: '我7月2日来到了日本。' },
        { jp: '日曜日［に］ 奈良へ 行きます。', en: 'I’ll go to Nara on Sunday.', zh: '我星期天去奈良。' },
        { jp: 'きのう 勉強しました。', en: 'I studied yesterday.', zh: '我昨天学习了。' }
      ]
    },
    {
      pattern: 'N₁から N₂まで',
      title: { en: 'From … until …', zh: '从……到……' },
      explain: {
        en: 'から marks where a time or place starts, and まで marks where it ends. You can use them together or on their own, and you can put です straight after them.',
        zh: 'から表示时间或地点的起点，まで表示终点。两者可以一起用，也可以单独用，后面还可以直接接です。'
      },
      examples: [
        { jp: '9時から 5時まで 働きます。', en: 'I work from nine to five.', zh: '我从9点工作到5点。' },
        { jp: '大阪から 東京まで 3時間 かかります。', en: 'It takes three hours from Osaka to Tokyo.', zh: '从大阪到东京要3个小时。' },
        { jp: '9時から 働きます。', en: 'I start work at nine.', zh: '我从9点开始工作。' },
        { jp: '銀行は 9時から 3時までです。', en: 'The bank is open from nine to three.', zh: '银行从9点开到3点。' },
        { jp: '昼休みは 12時からです。', en: 'Lunchtime starts at twelve.', zh: '午休从12点开始。' }
      ]
    },
    {
      pattern: 'N₁と N₂',
      title: { en: 'A and B', zh: 'A和B' },
      explain: {
        en: 'と joins two nouns, like “and”. It can only join nouns, not sentences.',
        zh: 'と连接两个名词，相当于“和”。它只能连接名词，不能连接句子。'
      },
      examples: [
        { jp: '銀行の 休みは 土曜日と 日曜日です。', en: 'The bank is closed on Saturdays and Sundays.', zh: '银行星期六和星期天休息。' }
      ]
    },
    {
      pattern: '〜ね',
      title: { en: '…, isn’t it? / …, right?', zh: '……吧／……啊' },
      explain: {
        en: 'Put ね at the end of a sentence to show sympathy, to agree, or to check something you heard.',
        zh: '句尾加ね，表示同情、同意，或者确认听到的内容。'
      },
      examples: [
        { jp: '毎日 10時まで 勉強します。\n……大変ですね。', en: 'I study until ten every day.\n……That’s tough, isn’t it?', zh: '我每天学习到10点。\n……真辛苦啊。' },
        { jp: '山田さんの 電話番号は 871の 6813です。\n……871の 6813ですね。', en: 'Mr. Yamada’s phone number is 871-6813.\n……871-6813, right?', zh: '山田先生的电话号码是871-6813。\n……是871-6813吧。' }
      ]
    }
  ],

  vocabQuiz: [],
  grammarQuiz: []
});
