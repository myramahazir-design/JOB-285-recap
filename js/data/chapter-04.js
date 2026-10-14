// Lesson 4, from the textbook's Vocabulary, Useful Words and Grammar Notes pages.
// Set phrases (練習C / 会話) are kept in the Conversation section, not Vocabulary.
// Grammar quiz: story practice built from the practice pages (練習A/B/C, 問題).
MNN.registerChapter({
  id: 4,
  title: { jp: 'そちらは何時までですか', en: 'Until what time are you open?', zh: '你们那里开到几点？' },

  // The lesson's 会話, shown first in the Conversation section.
  dialogue: {
    title: 'そちらは 何時までですか',
    parts: [
      [
        { who: 'ミラー', jp: 'すみません、「あすか」の 電話番号は 何番ですか。', en: 'Excuse me, what’s the phone number for “Asuka”?', zh: '请问，“飞鸟”的电话号码是多少？' },
        { who: '佐藤', jp: '「あすか」ですか。 5275の 2725です。', en: '“Asuka”? It’s 5275-2725.', zh: '“飞鸟”吗？是5275-2725。' },
        { who: 'ミラー', jp: 'どうも ありがとう ございます。', en: 'Thank you very much.', zh: '非常感谢。' }
      ],
      [
        { who: '店の 人', jp: 'はい、「あすか」です。', en: 'Hello, Asuka.', zh: '您好，这里是“飞鸟”。' },
        { who: 'ミラー', jp: 'すみません。 そちらは 何時までですか。', en: 'Excuse me. Until what time are you open?', zh: '请问，你们那里开到几点？' },
        { who: '店の 人', jp: '10時までです。', en: 'Until ten.', zh: '开到10点。' },
        { who: 'ミラー', jp: '休みは 何曜日ですか。', en: 'Which day are you closed?', zh: '星期几休息？' },
        { who: '店の 人', jp: '日曜日です。', en: 'Sunday.', zh: '星期天。' },
        { who: 'ミラー', jp: 'そうですか。 どうも。', en: 'I see. Thanks.', zh: '是吗。谢谢。' }
      ]
    ]
  },

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
    { group: 'conversation', jp: 'すみません、〜の でんわばんごうは なんばんですか。', kanji: 'すみません、〜の 電話番号は 何番ですか。', en: 'Excuse me, what’s the phone number for 〜?', zh: '请问，～的电话号码是多少？',
      note: { en: 'Ask someone for a shop’s or person’s phone number. 何番 asks “what number?”.', zh: '向别人打听商店或某人的电话号码。何番是问“几号”。' } },
    { group: 'conversation', jp: 'そちらは なんじまでですか。', kanji: 'そちらは 何時までですか。', en: 'Until what time are you open?', zh: '你们那里开到几点？',
      note: { en: 'Ask a shop or restaurant, usually on the phone, what time they close. そちら means “your place”. Add 何時から to ask the opening time too.', zh: '问商店或餐厅（通常在电话里）几点关门。そちら是“您那里”。加上何時から还可以问几点开门。' } },
    { group: 'conversation', jp: 'やすみは なんようびですか。', kanji: '休みは 何曜日ですか。', en: 'Which day are you closed?', zh: '星期几休息？',
      note: { en: 'Ask which day of the week a place is closed, or which day someone has off.', zh: '问某个地方星期几休息，或者别人星期几休假。' } },
    { group: 'conversation', jp: 'そうですか。 どうも。', en: 'I see. Thanks.', zh: '是吗。谢谢。',
      note: { en: 'A light way to end a short exchange once you’ve got the information you asked for.', zh: '得到想要的信息后，轻松地结束简短对话。' } },

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
  grammarQuiz: [
    {
      type: 'scene', who: 'neko',
      title: { en: 'Day 4 · Clocks and calendars', zh: '第4天 · 时钟和日历' },
      lines: [
        { en: 'Good morning, {name}! It’s Tuesday, and you have a busy week ahead: a test, a meeting and a film.', zh: '早上好，{name}！今天是星期二，这周你很忙：有考试、会议，还有电影。' },
        { en: 'In Minna Town, everyone runs on time. Let’s start by reading the clocks!', zh: '在大家町，大家都很守时。我们先从看时钟开始吧！' }
      ]
    },

    // ----- Part 1: telling the time (練習A 1, 練習B 1–2, 問題2) -----
    {
      prompt: { en: 'The station clock shows 7:30. How do you read it?', zh: '车站的时钟显示7:30。怎么读？' },
      talk: [{ who: 'neko', jp: '今 何時ですか。' }, { who: 'you', jp: '（　）です。' }],
      choices: ['しちじ はん', 'ななじ はん', 'しちじ さんぷん', 'はん しちじ'],
      answer: 'しちじ はん',
      explanation: { en: '7 o’clock is しちじ, and half past is はん: しちじ はん (7時半).', zh: '7点读しちじ，半点是はん：しちじ はん（7時半）。' },
      why: {
        'ななじ はん': { en: 'なな is fine for counting, but 7 o’clock is always しちじ.', zh: '数数时可以说なな，但7点一定读しちじ。' },
        'しちじ さんぷん': { en: 'さんぷん is 3 minutes. Thirty minutes is はん (or さんじゅっぷん).', zh: 'さんぷん是3分钟。30分是はん（或さんじゅっぷん）。' },
        'はん しちじ': { en: 'はん comes after the hour: しちじ はん.', zh: 'はん要放在钟点后面：しちじ はん。' }
      }
    },
    {
      prompt: { en: 'Neko-chan’s watch says 4:10. Pick the right reading.', zh: '小猫的手表显示4:10。选择正确的读法。' },
      jp: '4時10分',
      choices: ['よじ じゅっぷん', 'よんじ じゅっぷん', 'よじ じゅうふん', 'しじ じゅっぷん'],
      answer: 'よじ じゅっぷん',
      explanation: { en: '4 o’clock is よじ, and 10 minutes is じゅっぷん (or じっぷん).', zh: '4点读よじ，10分读じゅっぷん（或じっぷん）。' },
      why: {
        'よんじ じゅっぷん': { en: 'よん is used for minutes (よんぷん), but 4 o’clock is よじ.', zh: '分钟用よん（よんぷん），但4点读よじ。' },
        'よじ じゅうふん': { en: 'After 10, 分 becomes ぷん and じゅう shortens: じゅっぷん.', zh: '10后面的分读ぷん，じゅう也变短：じゅっぷん。' },
        'しじ じゅっぷん': { en: 'し is avoided for 4 in times. It’s よじ.', zh: '说时间时4不读し，要读よじ。' }
      }
    },
    {
      type: 'input',
      prompt: { en: 'Your class starts at 9 o’clock. Type how you read 9時 in hiragana.', zh: '你的课9点开始。用平假名输入9時的读法。' },
      jp: '9時',
      answers: ['くじ'],
      explanation: { en: '9 o’clock is くじ, not きゅうじ.', zh: '9点读くじ，不读きゅうじ。' },
      why: {
        'きゅうじ': { en: 'Close, but 9 o’clock is the short form くじ.', zh: '差一点，9点要用短读法くじ。' }
      }
    },
    {
      prompt: { en: 'It’s 6 p.m. in Tokyo. Your friend in London calls, where it’s 9 in the morning. What does she say?', zh: '东京现在是下午6点。你在伦敦的朋友打来电话，那里是早上9点。她会怎么说？' },
      talk: [{ who: 'you', jp: 'ロンドンは 今 何時ですか。' }, { who: 'kitsune', jp: '（　）' }],
      choices: ['午前 9時です。', '午後 9時です。', '午前 9時ですか。', '9時からです。'],
      answer: '午前 9時です。',
      explanation: { en: 'Morning times take 午前 (a.m.), afternoon and evening times take 午後 (p.m.).', zh: '上午的时间用午前，下午和晚上的时间用午後。' },
      why: {
        '午後 9時です。': { en: '午後 is p.m. It’s morning in London.', zh: '午後是下午。伦敦现在是早上。' },
        '午前 9時ですか。': { en: 'か makes it a question. She’s answering yours.', zh: '加了か就变成问句了。她是在回答你的问题。' },
        '9時からです。': { en: 'から means “from”. You asked what time it is now.', zh: 'から表示“从”。你问的是现在几点。' }
      }
    },

    {
      type: 'scene', who: 'tanuki',
      title: { en: 'Part 2 · Phone calls', zh: '第2部分 · 打电话' },
      lines: [
        { en: '{name}, let’s visit the Yamato Art Museum this week. But first we need its phone number.', zh: '{name}，这周我们去大和美术馆吧。不过先得知道它的电话号码。' },
        { en: 'Then we’ll call and ask when it’s open, just like Mr. Miller does!', zh: '然后我们打电话问问开放时间，就像米勒先生那样！' }
      ]
    },

    // ----- Part 2: numbers, opening hours and days off (会話, 練習B 3–4, 練習C 1, 問題5–6) -----
    {
      prompt: { en: 'Ask Tanuki-sensei for Ms. Sato’s phone number.', zh: '问狸猫老师佐藤女士的电话号码。' },
      talk: [{ who: 'you', jp: '佐藤さんの 電話番号は（　）ですか。' }, { who: 'tanuki', jp: '020の 3333の 4367です。' }],
      choices: ['何番', '何時', '何曜日', 'どこ'],
      answer: '何番',
      explanation: { en: 'Ask for a number with 何番 (なんばん, what number).', zh: '问号码用何番（なんばん，几号）。' },
      why: {
        '何時': { en: '何時 asks the time. You want a phone number.', zh: '何時问的是时间。你要问的是电话号码。' },
        '何曜日': { en: '何曜日 asks the day of the week.', zh: '何曜日问的是星期几。' },
        'どこ': { en: 'どこ asks “where?”. A phone number isn’t a place.', zh: 'どこ问“哪里？”。电话号码不是地方。' }
      }
    },
    {
      prompt: { en: 'Tanuki-sensei reads out the museum’s number. Repeat it back to check you heard it right.', zh: '狸猫老师念出美术馆的电话号码。重复一遍，确认你没听错。' },
      talk: [{ who: 'tanuki', jp: '5275の 2725です。' }, { who: 'you', jp: '（　）' }],
      choices: ['5275の 2725ですね。', '5275の 2725ですか。', '5275から 2725までです。', '5275と 2725です。'],
      answer: '5275の 2725ですね。',
      explanation: { en: 'Adding ね checks something you’ve just heard: “5275-2725, right?”', zh: '加ね表示确认刚听到的内容：“是5275-2725吧？”' },
      why: {
        '5275の 2725ですか。': { en: 'ですか asks a fresh question, as if you doubt it. ね is how you check what you heard.', zh: 'ですか像是在重新提问。确认听到的内容要用ね。' },
        '5275から 2725までです。': { en: 'から〜まで means “from … to …”. A phone number isn’t a range.', zh: 'から〜まで表示“从……到……”。电话号码不是一个范围。' },
        '5275と 2725です。': { en: 'Phone number parts are joined with の, not と.', zh: '电话号码的各部分用の连接，不用と。' }
      }
    },
    {
      type: 'order',
      prompt: { en: 'You’re on the phone with the museum. Ask their opening hours.', zh: '你在给美术馆打电话。问问开放时间。' },
      translation: { en: 'What time is the Yamato Art Museum open from and until?', zh: '大和美术馆从几点开到几点？' },
      pieces: ['やまと美術館', 'は', '何時', 'から', '何時', 'まで', 'ですか。'],
      explanation: { en: 'N は 何時から 何時までですか asks for opening hours. You can put です straight after まで.', zh: 'N は 何時から 何時までですか用来问营业时间。まで后面可以直接接です。' }
    },
    {
      prompt: { en: 'Choose the pair that fits both blanks.', zh: '选择适合两个空的一组。' },
      jp: '美術館は 10時（　）4時（　）です。',
      choices: ['から … まで', 'まで … から', 'に … に', 'と … と'],
      answer: 'から … まで',
      explanation: { en: 'から marks the start and まで the end: 10時から 4時まで (from 10 until 4).', zh: 'から表示开始，まで表示结束：10時から 4時まで（从10点到4点）。' },
      why: {
        'まで … から': { en: 'That says “until 10, from 4”. The start comes with から.', zh: '这样意思变成“到10点，从4点”。开始时间要用から。' },
        'に … に': { en: 'に marks one point in time. Opening hours are a range.', zh: 'に表示一个时间点。营业时间是一个范围。' },
        'と … と': { en: 'と joins nouns (“10 and 4”). It doesn’t show a range.', zh: 'と连接名词（“10点和4点”），不能表示范围。' }
      }
    },
    {
      prompt: { en: 'Now ask which day the museum is closed.', zh: '再问问美术馆星期几休息。' },
      talk: [{ who: 'you', jp: '休みは（　）ですか。' }, { who: 'kitsune', jp: '月曜日です。' }],
      choices: ['何曜日', '何時', '何番', 'どちら'],
      answer: '何曜日',
      explanation: { en: 'The answer is a day of the week, so ask 何曜日 (なんようび).', zh: '回答是星期几，所以问何曜日（なんようび）。' },
      why: {
        '何時': { en: '何時 asks the time, but the answer 月曜日 is a day.', zh: '何時问时间，但回答月曜日是星期。' },
        '何番': { en: '何番 asks for a number.', zh: '何番问的是号码。' },
        'どちら': { en: 'どちら asks “where?” or “which way?”.', zh: 'どちら问的是“哪里”或“哪边”。' }
      }
    },
    {
      prompt: { en: 'The post office is closed on both Saturday and Sunday. Fill the gap.', zh: '邮局星期六和星期天都休息。请填空。' },
      jp: '郵便局の 休みは 土曜日（　）日曜日です。',
      choices: ['と', 'の', 'も', 'に'],
      answer: 'と',
      explanation: { en: 'と joins two nouns: 土曜日と 日曜日 (Saturday and Sunday).', zh: 'と连接两个名词：土曜日と 日曜日（星期六和星期天）。' },
      why: {
        'の': { en: '土曜日の 日曜日 would mean “Saturday’s Sunday”.', zh: '土曜日の 日曜日的意思是“星期六的星期天”。' },
        'も': { en: 'も means “also” and goes after the topic, not between two nouns.', zh: 'も表示“也”，放在主题后面，不能放在两个名词之间。' },
        'に': { en: 'に marks the time something happens. Here you’re listing two days.', zh: 'に表示做事的时间，这里是在列举两天。' }
      }
    },
    {
      prompt: { en: 'You thank the museum staff and hang up. Which reply fits the end of the call?', zh: '你向美术馆的工作人员道谢后挂电话。哪句话适合结束通话？' },
      talk: [{ who: 'kitsune', jp: '休みは 月曜日です。' }, { who: 'you', jp: '（　）' }],
      choices: ['そうですか。どうも。', 'いらっしゃいませ。', '大変ですね。', 'はじめまして。'],
      answer: 'そうですか。どうも。',
      explanation: { en: 'そうですか shows you’ve understood, and どうも is a short thank-you, just like Mr. Miller in the conversation.', zh: 'そうですか表示明白了，どうも是简短的道谢，和会话里的米勒先生一样。' },
      why: {
        'いらっしゃいませ。': { en: 'That’s what shop staff say to customers.', zh: '这是店员对顾客说的话。' },
        '大変ですね。': { en: 'That shows sympathy for something hard. A Monday closing isn’t hard!', zh: '这是对辛苦的事表示同情。周一休息并不辛苦！' },
        'はじめまして。': { en: 'That’s for meeting someone for the first time, not ending a call.', zh: '这是初次见面时说的，不是结束通话时说的。' }
      }
    },

    {
      type: 'scene', who: 'kitsune',
      title: { en: 'Part 3 · Your week', zh: '第3部分 · 你的一周' },
      lines: [
        { en: 'Now tell me about your own days, {name}. When do you get up? When do you study?', zh: '{name}，现在说说你自己的生活吧。你几点起床？几点学习？' },
        { en: 'Watch out for に, and for past and future!', zh: '注意に的用法，还有过去和将来！' }
      ]
    },

    // ----- Part 3: routines, に and verb tenses (練習A 4–7, 練習B 5–9, 練習C 2–3, 問題6–8) -----
    {
      prompt: { en: 'Choose the pair that fits both blanks. × means nothing goes there.', zh: '选择适合两个空的一组。×表示不填。' },
      jp: '毎朝（　）6時（　）起きます。',
      choices: ['× … に', 'に … に', 'に … ×', '× … ×'],
      answer: '× … に',
      explanation: { en: '6時 has a number, so it takes に. 毎朝 (every morning) never takes に.', zh: '6時带数字，所以要加に。毎朝（每天早上）后面不加に。' },
      why: {
        'に … に': { en: '毎朝 never takes に.', zh: '毎朝后面不加に。' },
        'に … ×': { en: 'It’s the other way round: no に after 毎朝, but に after 6時.', zh: '正好相反：毎朝后面不加に，6時后面要加に。' },
        '× … ×': { en: 'A time with a number, like 6時, needs に.', zh: '带数字的时间（如6時）要加に。' }
      }
    },
    {
      prompt: { en: 'Which word can go in the gap?', zh: '哪个词可以填进空里？' },
      jp: '（　）に 寝ました。',
      choices: ['11時', 'きのう', 'こんばん', 'けさ'],
      answer: '11時',
      explanation: { en: 'に goes after times with numbers, like 11時. Words like きのう, こんばん and けさ never take に.', zh: 'に用在带数字的时间后面，比如11時。きのう、こんばん、けさ等词后面不加に。' },
      why: {
        'きのう': { en: 'きのう never takes に: きのう 寝ました.', zh: 'きのう后面不加に：きのう 寝ました。' },
        'こんばん': { en: 'こんばん never takes に.', zh: 'こんばん后面不加に。' },
        'けさ': { en: 'けさ never takes に.', zh: 'けさ后面不加に。' }
      }
    },
    {
      prompt: { en: 'Last night you went to bed at 10. Pick the right verb.', zh: '昨晚你10点睡觉。选择正确的动词。' },
      jp: 'きのう 10時に（　）。',
      choices: ['寝ました', '寝ます', '寝ません'],
      answer: '寝ました',
      explanation: { en: 'きのう (yesterday) is the past, so use ました.', zh: 'きのう（昨天）是过去，所以用ました。' },
      why: {
        '寝ます': { en: 'ます is for now, habits and the future. Yesterday needs ました.', zh: 'ます用于现在、习惯和将来。昨天要用ました。' },
        '寝ません': { en: 'ません is negative and not past. You did go to bed, yesterday.', zh: 'ません是否定的非过去形。你昨天确实睡了。' }
      }
    },
    {
      prompt: { en: 'The day after tomorrow is Sunday, your day off. Pick the right verb.', zh: '后天是星期天，你休息。选择正确的动词。' },
      jp: 'あさっては 日曜日です。（　）。',
      choices: ['働きません', '働きませんでした', '働きました'],
      answer: '働きません',
      explanation: { en: 'あさって is in the future, and you won’t work: 働きません.', zh: 'あさって是将来，你不工作：働きません。' },
      why: {
        '働きませんでした': { en: 'ませんでした is the past. あさって hasn’t happened yet.', zh: 'ませんでした是过去式。后天还没到。' },
        '働きました': { en: 'ました is past and affirmative. It’s your day off, in the future.', zh: 'ました是过去肯定式。而那天是将来的休息日。' }
      }
    },
    {
      prompt: { en: 'You didn’t study yesterday. How do you answer?', zh: '你昨天没学习。怎么回答？' },
      talk: [{ who: 'kitsune', jp: 'きのう 勉強しましたか。' }, { who: 'you', jp: 'いいえ、（　）。' }],
      choices: ['勉強しませんでした', '勉強しません', '違います', 'そうじゃ ありません'],
      answer: '勉強しませんでした',
      explanation: { en: 'Answer a verb question by repeating the verb in the right form: past negative ませんでした.', zh: '回答动词疑问句要重复动词，并用正确的形式：过去否定ませんでした。' },
      why: {
        '勉強しません': { en: 'ません is not past. The question is about yesterday.', zh: 'ません不是过去式。问题问的是昨天。' },
        '違います': { en: '違います can’t answer a question with a verb. Repeat the verb instead.', zh: '回答动词疑问句不能用違います，要重复动词。' },
        'そうじゃ ありません': { en: 'そうじゃ ありません answers noun questions, not verb questions.', zh: 'そうじゃ ありません用来回答名词句，不能回答动词句。' }
      }
    },
    {
      type: 'input',
      prompt: { en: 'Kitsune-san asks about your evenings. You do study every night. Type your answer.', zh: '狐狸先生问你晚上做什么。你每天晚上都学习。输入你的回答。' },
      talk: [{ who: 'kitsune', jp: '毎晩 勉強しますか。' }, { who: 'you', jp: 'はい、（　）。' }],
      answers: ['勉強します', 'べんきょうします'],
      explanation: { en: 'Answer はい by repeating the verb: はい、勉強します.', zh: '用はい回答时重复动词：はい、勉強します。' },
      why: {
        'そうです': { en: 'そうです can’t answer a verb question. Repeat the verb: 勉強します.', zh: '动词疑问句不能用そうです回答。要重复动词：勉強します。' },
        'べんきょうしました': { en: '毎晩 is a habit, so use ます, not ました.', zh: '毎晩表示习惯，所以用ます，不用ました。' }
      }
    },
    {
      prompt: { en: 'Your test starts at 10 and ends at 12. Kitsune-san asks when it finishes.', zh: '你的考试10点开始，12点结束。狐狸先生问你几点结束。' },
      talk: [{ who: 'kitsune', jp: '何時に 終わりますか。' }, { who: 'you', jp: '12時に（　）。' }],
      choices: ['終わります', '終わりました', '起きます', '休みます'],
      answer: '終わります',
      explanation: { en: 'The test is in the future, so 終わります (it will finish).', zh: '考试在将来，所以用終わります（将会结束）。' },
      why: {
        '終わりました': { en: 'ました means it has already finished. The test hasn’t happened yet.', zh: 'ました表示已经结束了，而考试还没开始。' },
        '起きます': { en: '起きます means “get up”.', zh: '起きます的意思是“起床”。' },
        '休みます': { en: '休みます means “take a rest”.', zh: '休みます的意思是“休息”。' }
      }
    },
    {
      prompt: { en: 'Tanuki-sensei looks tired. Reply with sympathy.', zh: '狸猫老师看起来很累。表示一下同情吧。' },
      talk: [
        { who: 'tanuki', jp: 'きのう 2時まで 勉強しました。' },
        { who: 'you', jp: 'そうですか。何時に 寝ましたか。' },
        { who: 'tanuki', jp: '2時半に 寝ました。' },
        { who: 'you', jp: '（　）' }
      ],
      choices: ['大変ですね。', 'どうも。', 'いらっしゃいませ。', 'お願いします。'],
      answer: '大変ですね。',
      explanation: { en: '大変ですね (That’s tough, isn’t it?) shows sympathy. ね shares the feeling with him.', zh: '大変ですね（真辛苦啊）表示同情。ね表示与对方共鸣。' },
      why: {
        'どうも。': { en: 'どうも is a short thank-you. He hasn’t done anything for you.', zh: 'どうも是简短的道谢，而他并没有为你做什么。' },
        'いらっしゃいませ。': { en: 'That’s what shop staff say to customers.', zh: '这是店员对顾客说的话。' },
        'お願いします。': { en: 'That’s for asking for something.', zh: '这是请求别人时说的话。' }
      }
    },
    {
      type: 'order',
      prompt: { en: 'Tell Neko-chan your work hours.', zh: '告诉小猫你的工作时间。' },
      translation: { en: 'I work from 9:30 to 5:30 every day.', zh: '我每天从9点半工作到5点半。' },
      pieces: ['毎日', '9時半', 'から', '5時半', 'まで', '働きます。'],
      explanation: { en: 'Time word, then から〜まで, then the verb at the end: 毎日 9時半から 5時半まで 働きます.', zh: '先说时间词，然后是から〜まで，最后是动词：毎日 9時半から 5時半まで 働きます。' }
    },

    {
      type: 'scene', who: 'neko',
      title: { en: 'Epilogue', zh: '尾声' },
      lines: [
        { en: 'The clock tower chimes: it’s 5時半! Your week is all planned, {name}.', zh: '钟楼响了：5点半了！{name}，你这一周都安排好了。' },
        { en: 'Let’s see how you did today.', zh: '来看看你今天的表现吧。' }
      ]
    }
  ]
});
