// Lesson 5, from the textbook's Vocabulary and Grammar Notes pages.
// Dates, months and last/this/next words have their own Calendar section.
// Grammar quiz: story practice built from the practice pages (練習A/B/C, 問題).
MNN.registerChapter({
  id: 5,
  title: { jp: 'この電車は甲子園へ行きますか', en: 'Does this train go to Koshien?', zh: '这趟电车去甲子园吗？' },

  // The lesson's 会話, shown first in the Conversation section.
  dialogue: {
    title: 'この 電車は 甲子園へ 行きますか',
    parts: [
      [
        { who: 'サントス', jp: 'すみません。 甲子園まで いくらですか。', en: 'Excuse me. How much is it to Koshien?', zh: '请问，到甲子园多少钱？' },
        { who: '女の人', jp: '350円です。', en: 'It’s 350 yen.', zh: '350日元。' },
        { who: 'サントス', jp: '350円ですね。 ありがとう ございました。', en: '350 yen, right? Thank you very much.', zh: '350日元是吧。非常感谢。' },
        { who: '女の人', jp: 'どう いたしまして。', en: 'You’re welcome.', zh: '不客气。' }
      ],
      [
        { who: 'サントス', jp: 'すみません。 甲子園は 何番線ですか。', en: 'Excuse me. Which platform is it for Koshien?', zh: '请问，去甲子园在几号站台？' },
        { who: '駅員', jp: '5番線です。', en: 'Platform 5.', zh: '5号站台。' },
        { who: 'サントス', jp: 'どうも。', en: 'Thanks.', zh: '谢谢。' }
      ],
      [
        { who: 'サントス', jp: 'あのう、この 電車は 甲子園へ 行きますか。', en: 'Er, does this train go to Koshien?', zh: '那个，这趟电车去甲子园吗？' },
        { who: '男の人', jp: 'いいえ。 次の 「普通」ですよ。', en: 'No. You need the next local train.', zh: '不去。是下一趟“普通车”哦。' },
        { who: 'サントス', jp: 'そうですか。 どうも。', en: 'I see. Thanks.', zh: '是吗。谢谢。' }
      ]
    ]
  },

  vocab: [
    // ----- Verbs -----
    { group: 'words', jp: 'いきます', kanji: '行きます', en: 'go', zh: '去' },
    { group: 'words', jp: 'きます', kanji: '来ます', en: 'come', zh: '来' },
    { group: 'words', jp: 'かえります', kanji: '帰ります', en: 'go home, return', zh: '回去，回家' },

    // ----- Places -----
    { group: 'words', jp: 'がっこう', kanji: '学校', en: 'school', zh: '学校' },
    { group: 'words', jp: 'スーパー', en: 'supermarket', zh: '超市' },
    { group: 'words', jp: 'えき', kanji: '駅', en: 'station', zh: '车站' },

    // ----- Getting around -----
    { group: 'words', jp: 'ひこうき', kanji: '飛行機', en: 'aeroplane, airplane', zh: '飞机' },
    { group: 'words', jp: 'ふね', kanji: '船', en: 'ship', zh: '船' },
    { group: 'words', jp: 'でんしゃ', kanji: '電車', en: 'electric train', zh: '电车' },
    { group: 'words', jp: 'ちかてつ', kanji: '地下鉄', en: 'underground, subway', zh: '地铁' },
    { group: 'words', jp: 'しんかんせん', kanji: '新幹線', en: 'the Shinkansen, the bullet train', zh: '新干线' },
    { group: 'words', jp: 'バス', en: 'bus', zh: '公共汽车' },
    { group: 'words', jp: 'タクシー', en: 'taxi', zh: '出租车' },
    { group: 'words', jp: 'じてんしゃ', kanji: '自転車', en: 'bicycle', zh: '自行车' },
    { group: 'words', jp: 'あるいて', kanji: '歩いて', en: 'on foot', zh: '步行' ,
      note: { en: 'No で after あるいて: 歩いて 帰ります (I walk home).', zh: 'あるいて后面不加で：歩いて 帰ります（走回家）。' } },

    // ----- People -----
    { group: 'words', jp: 'ひと', kanji: '人', en: 'person, people', zh: '人' },
    { group: 'words', jp: 'ともだち', kanji: '友達', en: 'friend', zh: '朋友' },
    { group: 'words', jp: 'かれ', kanji: '彼', en: 'he, boyfriend, lover', zh: '他，男朋友' },
    { group: 'words', jp: 'かのじょ', kanji: '彼女', en: 'she, girlfriend, lover', zh: '她，女朋友' },
    { group: 'words', jp: 'かぞく', kanji: '家族', en: 'family', zh: '家人，家庭' },
    { group: 'words', jp: 'ひとりで', kanji: '一人で', en: 'alone, by oneself', zh: '一个人' },

    // ----- Words from the conversation -----
    { group: 'words', jp: '〜ばんせん', kanji: '〜番線', en: 'platform —, —th platform', zh: '～号站台' },
    { group: 'words', jp: 'つぎの', kanji: '次の', en: 'next', zh: '下一个' },
    { group: 'words', jp: 'ふつう', kanji: '普通', en: 'local (train)', zh: '普通车（站站停）' },
    { group: 'words', jp: 'きゅうこう', kanji: '急行', en: 'rapid', zh: '快车' },
    { group: 'words', jp: 'とっきゅう', kanji: '特急', en: 'express', zh: '特快' },

    // ----- Calendar: last / this / next -----
    { group: 'calendar', jp: 'せんしゅう', kanji: '先週', en: 'last week', zh: '上周' },
    { group: 'calendar', jp: 'こんしゅう', kanji: '今週', en: 'this week', zh: '这周' },
    { group: 'calendar', jp: 'らいしゅう', kanji: '来週', en: 'next week', zh: '下周' },
    { group: 'calendar', jp: 'せんげつ', kanji: '先月', en: 'last month', zh: '上个月' },
    { group: 'calendar', jp: 'こんげつ', kanji: '今月', en: 'this month', zh: '这个月' },
    { group: 'calendar', jp: 'らいげつ', kanji: '来月', en: 'next month', zh: '下个月' },
    { group: 'calendar', jp: 'きょねん', kanji: '去年', en: 'last year', zh: '去年' },
    { group: 'calendar', jp: 'ことし', kanji: '今年', en: 'this year', zh: '今年' },
    { group: 'calendar', jp: 'らいねん', kanji: '来年', en: 'next year', zh: '明年' },

    // ----- Calendar: years, months, days -----
    { group: 'calendar', jp: '〜ねん', kanji: '〜年', en: '— year', zh: '～年' },
    { group: 'calendar', jp: 'なんねん', kanji: '何年', en: 'what year', zh: '哪一年' },
    { group: 'calendar', jp: '〜がつ', kanji: '〜月', en: '—th month of the year', zh: '～月' },
    { group: 'calendar', jp: 'なんがつ', kanji: '何月', en: 'what month', zh: '几月' },
    { group: 'calendar', jp: 'ついたち', kanji: '1日', en: 'first day of the month', zh: '1号' ,
      note: { en: '“One day” (a length of time) is いちにち, not ついたち.', zh: '表示“一天”（时间长度）时读いちにち，不读ついたち。' } },
    { group: 'calendar', jp: 'ふつか', kanji: '2日', en: 'second, two days', zh: '2号，两天' },
    { group: 'calendar', jp: 'みっか', kanji: '3日', en: 'third, three days', zh: '3号，三天' },
    { group: 'calendar', jp: 'よっか', kanji: '4日', en: 'fourth, four days', zh: '4号，四天' },
    { group: 'calendar', jp: 'いつか', kanji: '5日', en: 'fifth, five days', zh: '5号，五天' },
    { group: 'calendar', jp: 'むいか', kanji: '6日', en: 'sixth, six days', zh: '6号，六天' },
    { group: 'calendar', jp: 'なのか', kanji: '7日', en: 'seventh, seven days', zh: '7号，七天' },
    { group: 'calendar', jp: 'ようか', kanji: '8日', en: 'eighth, eight days', zh: '8号，八天' },
    { group: 'calendar', jp: 'ここのか', kanji: '9日', en: 'ninth, nine days', zh: '9号，九天' },
    { group: 'calendar', jp: 'とおか', kanji: '10日', en: 'tenth, ten days', zh: '10号，十天' },
    { group: 'calendar', jp: 'じゅうよっか', kanji: '14日', en: 'fourteenth, fourteen days', zh: '14号，十四天' },
    { group: 'calendar', jp: 'はつか', kanji: '20日', en: 'twentieth, twenty days', zh: '20号，二十天' },
    { group: 'calendar', jp: 'にじゅうよっか', kanji: '24日', en: 'twenty-fourth, twenty-four days', zh: '24号，二十四天' },
    { group: 'calendar', jp: '〜にち', kanji: '〜日', en: '—th day of the month, — day(s)', zh: '～号，～天' },
    { group: 'calendar', jp: 'なんにち', kanji: '何日', en: 'which day of the month, how many days', zh: '几号，几天' },
    { group: 'calendar', jp: 'いつ', en: 'when', zh: '什么时候',
      note: { en: 'いつ never takes に: いつ 日本へ 来ましたか。', zh: 'いつ后面不加に：いつ 日本へ 来ましたか。' } },
    { group: 'calendar', jp: 'たんじょうび', kanji: '誕生日', en: 'birthday', zh: '生日' },

    // ----- Practice C phrases -----
    { group: 'expressions', jp: 'そうですね。', en: 'Yes, it is. / That’s right.', zh: '是啊。／对呀。',
      note: { en: 'Agree with something you already thought or knew. For news you’ve just learned, say そうですか instead.', zh: '同意对方说的、你本来就知道或这样认为的事。如果是刚得知的新信息，要说そうですか。' } },

    // ----- Conversation phrases -----
    { group: 'conversation', jp: 'すみません。 〜まで いくらですか。', en: 'Excuse me. How much is it to 〜?', zh: '请问，到～多少钱？',
      note: { en: 'Ask the fare to a station, for example at the ticket machine.', zh: '问到某站的车费，比如在售票机前。' } },
    { group: 'conversation', jp: '〜は なんばんせんですか。', kanji: '〜は 何番線ですか。', en: 'Which platform is it for 〜?', zh: '去～在几号站台？',
      note: { en: 'Ask station staff which platform your train leaves from.', zh: '问站务员你要坐的车在几号站台。' } },
    { group: 'conversation', jp: 'この でんしゃは 〜へ いきますか。', kanji: 'この 電車は 〜へ 行きますか。', en: 'Does this train go to 〜?', zh: '这趟电车去～吗？',
      note: { en: 'Check with someone on the platform before you get on.', zh: '上车前向站台上的人确认一下。' } },
    { group: 'conversation', jp: '［どうも］ ありがとう ございました。', en: 'Thank you very much.', zh: '非常感谢。',
      note: { en: 'The past form: thank someone for help they have just given you, like directions on a platform.', zh: '过去式：感谢别人刚刚给你的帮助，比如在站台上给你指路。' } },
    { group: 'conversation', jp: 'どう いたしまして。', en: 'You’re welcome. / Don’t mention it.', zh: '不客气。',
      note: { en: 'The reply when someone thanks you.', zh: '别人向你道谢时的回答。' } },

    // ----- Names -----
    { group: 'names', jp: 'こうしえん', kanji: '甲子園', en: 'name of a town near Osaka', zh: '甲子园（大阪附近的地名）' },
    { group: 'names', jp: 'おおさかじょう', kanji: '大阪城', en: 'Osaka Castle, a famous castle in Osaka', zh: '大阪城（大阪的著名城堡）' }
  ],

  // Calendar section: table cards, shown like grammar notes.
  calendar: [
    {
      pattern: '{先|せん}〜／{今|こん}〜／{来|らい}〜',
      title: { en: 'Last, this and next', zh: '上、这、下' },
      explain: {
        en: '先 means last, 今 means this and 来 means next. Put them in front of 週 (week) and 月 (month). Years are irregular, so learn them on their own!',
        zh: '先表示“上”，今表示“这”，来表示“下”。把它们放在週（周）和月（月）前面。年的说法不规则，要单独记！'
      },
      notes: [
        { en: 'Years: きょねん (去年), ことし (今年), らいねん (来年).', zh: '年：きょねん（去年）、ことし（今年）、らいねん（来年）。' },
        { en: 'Like きのう and あした, these words never take に: 来週 行きます.', zh: '和きのう、あした一样，这些词后面不加に：来週 行きます。' }
      ],
      table: {
        head: [{ en: 'Last', zh: '上' }, { en: 'This', zh: '这' }, { en: 'Next', zh: '下' }],
        rows: [
          { label: { en: 'Week', zh: '周' }, cells: ['先週', '今週', '来週'] },
          { label: { en: 'Month', zh: '月' }, cells: ['先月', '今月', '来月'] },
          { label: { en: 'Year', zh: '年' }, cells: ['去年', '今年', '来年'] }
        ]
      },
      examples: [
        { jp: '来週 京都へ 行きます。', en: 'I’m going to Kyoto next week.', zh: '我下周去京都。' },
        { jp: '先月 日本へ 来ました。', en: 'I came to Japan last month.', zh: '我上个月来到了日本。' },
        { jp: '去年 国へ 帰りました。', en: 'I went back to my country last year.', zh: '我去年回国了。' }
      ]
    },
    {
      pattern: 'おととい・きのう・きょう・あした・あさって',
      title: { en: 'Days around today (from Lesson 4)', zh: '今天前后的日子（第4课）' },
      explain: {
        en: 'A quick review from Lesson 4, so the whole calendar is in one place.',
        zh: '复习第4课的内容，把日历相关的词都放在一起。'
      },
      table: {
        head: [{ en: 'Word', zh: '词' }],
        rows: [
          { label: { en: '2 days ago', zh: '前天' }, cells: ['おととい'] },
          { label: { en: 'Yesterday', zh: '昨天' }, cells: ['きのう'] },
          { label: { en: 'Today', zh: '今天' }, cells: ['きょう'] },
          { label: { en: 'Tomorrow', zh: '明天' }, cells: ['あした'] },
          { label: { en: 'In 2 days', zh: '后天' }, cells: ['あさって'] },
          { label: { en: 'This morning', zh: '今天早上' }, cells: ['けさ'] },
          { label: { en: 'Tonight', zh: '今天晚上' }, cells: ['こんばん'] }
        ]
      }
    },
    {
      pattern: '〜月',
      title: { en: 'Months of the year', zh: '月份' },
      explain: {
        en: 'Months are simply number + 月 (がつ). Just watch 4, 7 and 9!',
        zh: '月份就是数字＋月（がつ）。只要注意4月、7月和9月！'
      },
      notes: [
        { en: '4月 is しがつ, 7月 is しちがつ and 9月 is くがつ.', zh: '4月读しがつ，7月读しちがつ，9月读くがつ。' },
        { en: 'Ask the month with 何月 (なんがつ).', zh: '问月份用何月（なんがつ）。' }
      ],
      table: {
        head: [{ en: 'Month', zh: '月份' }, { en: 'Month', zh: '月份' }],
        rows: [
          { label: { en: '1–2', zh: '1–2' }, cells: ['1月', '2月'] },
          { label: { en: '3–4', zh: '3–4' }, cells: ['3月', '4月'] },
          { label: { en: '5–6', zh: '5–6' }, cells: ['5月', '6月'] },
          { label: { en: '7–8', zh: '7–8' }, cells: ['7月', '8月'] },
          { label: { en: '9–10', zh: '9–10' }, cells: ['9月', '10月'] },
          { label: { en: '11–12', zh: '11–12' }, cells: ['11月', '12月'] }
        ]
      }
    },
    {
      pattern: 'ついたち〜とおか',
      title: { en: 'Days of the month: 1st to 10th', zh: '日期：1号到10号' },
      explain: {
        en: 'The first ten days have their own special readings. Learn them by heart. They also count days: ふつか is “the 2nd” and “two days”.',
        zh: '前十天的读法很特别，要背下来。它们也可以表示天数：ふつか是“2号”，也是“两天”。'
      },
      notes: [
        { en: 'The exception is the 1st: ついたち is a date, but “one day” is いちにち.', zh: '例外是1号：ついたち是日期，“一天”要说いちにち。' }
      ],
      table: {
        head: [{ en: 'Date', zh: '日期' }, { en: 'Date', zh: '日期' }],
        rows: [
          { label: '', cells: ['1日', '2日'] },
          { label: '', cells: ['3日', '4日'] },
          { label: '', cells: ['5日', '6日'] },
          { label: '', cells: ['7日', '8日'] },
          { label: '', cells: ['9日', '10日'] }
        ]
      }
    },
    {
      pattern: '〜日（にち）',
      title: { en: 'Days of the month: 11th to 31st', zh: '日期：11号到31号' },
      explain: {
        en: 'From the 11th on, it’s just number + にち. Only the 14th, 20th and 24th are special.',
        zh: '从11号开始，就是数字＋にち。只有14号、20号和24号读法特别。'
      },
      notes: [
        { en: 'Special: じゅうよっか (14日), はつか (20日), にじゅうよっか (24日).', zh: '特殊读法：じゅうよっか（14日）、はつか（20日）、にじゅうよっか（24日）。' },
        { en: 'Watch 7 and 9: じゅうしちにち (17日), じゅうくにち (19日).', zh: '注意7和9：じゅうしちにち（17日）、じゅうくにち（19日）。' },
        { en: 'Ask the date with 何日 (なんにち).', zh: '问日期用何日（なんにち）。' }
      ],
      table: {
        head: [{ en: 'Date', zh: '日期' }, { en: 'Date', zh: '日期' }],
        rows: [
          { label: '', cells: ['11日', '14日'] },
          { label: '', cells: ['17日', '19日'] },
          { label: '', cells: ['20日', '24日'] },
          { label: '', cells: ['25日', '30日'] }
        ]
      }
    },
    {
      pattern: '何月何日／いつ',
      title: { en: 'Asking “when?”', zh: '问“什么时候？”' },
      explain: {
        en: 'Ask the date with 何月何日, or ask “when?” with いつ. いつ never takes に, but a date with a number does.',
        zh: '问日期用何月何日，问“什么时候”用いつ。いつ后面不加に，但带数字的日期要加に。'
      },
      examples: [
        { jp: '誕生日は いつですか。\n……6月13日です。', en: 'When is your birthday?\n……It’s 13 June.', zh: '你的生日是什么时候？\n……6月13号。' },
        { jp: 'きょうは 何日ですか。\n……20日です。', en: 'What’s the date today?\n……It’s the 20th.', zh: '今天几号？\n……20号。' },
        { jp: 'いつ 日本へ 来ましたか。\n……3月25日に 来ました。', en: 'When did you come to Japan?\n……On 25 March.', zh: '你什么时候来日本的？\n……3月25号来的。' }
      ]
    }
  ],

  grammar: [
    {
      pattern: 'N(place)へ 行きます／来ます／帰ります',
      title: { en: 'Going to a place', zh: '去某地' },
      explain: {
        en: 'With verbs of movement, put へ after the place to show the direction you’re going.',
        zh: '使用表示移动的动词时，在地点后面加へ，表示移动的方向。'
      },
      notes: [
        { en: 'The particle へ is read え.', zh: '助词へ读作え。' }
      ],
      examples: [
        { jp: '京都へ 行きます。', en: 'I’m going to Kyoto.', zh: '我去京都。' },
        { jp: '日本へ 来ました。', en: 'I came to Japan.', zh: '我来到了日本。' },
        { jp: 'うちへ 帰ります。', en: 'I’m going home.', zh: '我回家。' }
      ]
    },
    {
      pattern: 'どこ［へ］も 行きません／行きませんでした',
      title: { en: 'Not going anywhere', zh: '哪儿也不去' },
      explain: {
        en: 'To deny everything a question word covers, add も to the question word and use a negative verb.',
        zh: '要否定疑问词所涵盖的全部范围，在疑问词后面加も，动词用否定形。'
      },
      notes: [
        { en: 'どこも = nowhere, だれも = nobody, なにも = nothing. The verb must be negative.', zh: 'どこも＝哪儿都（不），だれも＝谁都（不），なにも＝什么都（不）。动词必须是否定形。' }
      ],
      examples: [
        { jp: 'どこ［へ］も 行きません。', en: 'I’m not going anywhere.', zh: '我哪儿也不去。' },
        { jp: '{何|なに}も 食べません。', en: 'I’m not going to eat anything. (See Lesson 6.)', zh: '我什么也不吃。（见第6课）' },
        { jp: 'だれも 来ませんでした。', en: 'Nobody came.', zh: '谁也没来。' }
      ]
    },
    {
      pattern: 'N(vehicle)で 行きます／来ます／帰ります',
      title: { en: 'Going by train, bus…', zh: '乘坐交通工具去' },
      explain: {
        en: 'で after a vehicle shows how you travel. When you walk, say 歩いて with no で.',
        zh: '交通工具后面加で，表示出行方式。走路时说歩いて，不加で。'
      },
      examples: [
        { jp: '電車で 行きます。', en: 'I’m going by train.', zh: '我坐电车去。' },
        { jp: 'タクシーで 来ました。', en: 'I came by taxi.', zh: '我是坐出租车来的。' },
        { jp: '駅から 歩いて 帰りました。', en: 'I walked home from the station.', zh: '我从车站走回家了。' }
      ]
    },
    {
      pattern: 'N(person/animal)と V',
      title: { en: 'Doing something with someone', zh: '和某人一起做某事' },
      explain: {
        en: 'Mark the person (or animal) you do something with with と. If you do it alone, say 一人で with no と.',
        zh: '和某人（或动物）一起做某事时，用と表示那个人。一个人做时说一人で，不用と。'
      },
      examples: [
        { jp: '家族と 日本へ 来ました。', en: 'I came to Japan with my family.', zh: '我和家人一起来到了日本。' },
        { jp: '一人で 東京へ 行きます。', en: 'I’m going to Tokyo on my own.', zh: '我一个人去东京。' }
      ]
    },
    {
      pattern: 'いつ',
      title: { en: 'When?', zh: '什么时候？' },
      explain: {
        en: 'Besides 何時, 何曜日 and 何月何日, you can ask “when?” with いつ. いつ does not take に.',
        zh: '除了何時、何曜日、何月何日，还可以用いつ问“什么时候”。いつ后面不加に。'
      },
      examples: [
        { jp: 'いつ 日本へ 来ましたか。\n……3月25日に 来ました。', en: 'When did you come to Japan?\n……On 25 March.', zh: '你什么时候来日本的？\n……3月25号来的。' },
        { jp: 'いつ 広島へ 行きますか。\n……来週 行きます。', en: 'When are you going to Hiroshima?\n……Next week.', zh: '你什么时候去广岛？\n……下周去。' }
      ]
    },
    {
      pattern: '〜よ',
      title: { en: '…, you know!', zh: '……哦！' },
      explain: {
        en: 'Put よ at the end of a sentence to tell someone something they don’t know, or to state your view firmly.',
        zh: '句尾加よ，告诉对方不知道的信息，或者坚定地表达自己的看法。'
      },
      examples: [
        { jp: 'この 電車は 甲子園へ 行きますか。\n……いいえ、行きません。次の 「普通」ですよ。', en: 'Does this train go to Koshien?\n……No, it doesn’t. You need the next local train.', zh: '这趟电车去甲子园吗？\n……不去。是下一趟“普通车”哦。' },
        { jp: '北海道に 馬が たくさん いますよ。', en: 'There are a lot of horses in Hokkaido, you know. (See Lesson 18.)', zh: '北海道有很多马哦。（见第18课）' },
        { jp: 'マリアさん、この アイスクリーム、おいしいですよ。', en: 'Maria, this ice cream is very nice, you know. (See Lesson 19.)', zh: '玛丽亚，这个冰淇淋很好吃哦。（见第19课）' }
      ]
    },
    {
      pattern: 'そうですね',
      title: { en: 'Agreeing: そうですね vs そうですか', zh: '表示同意：そうですね和そうですか' },
      explain: {
        en: 'そうですね shows you agree with something you already thought or knew. そうですか shows you’ve just learned something new.',
        zh: 'そうですね表示同意你本来就知道或这样认为的事。そうですか表示刚刚得知新的信息。'
      },
      examples: [
        { jp: 'あしたは 日曜日ですね。\n……あ、そうですね。', en: 'It’s Sunday tomorrow, isn’t it?\n……Oh, yes, so it is.', zh: '明天是星期天吧。\n……啊，是啊。' }
      ]
    }
  ],

  vocabQuiz: [],
  grammarQuiz: [
    {
      type: 'scene', who: 'neko',
      title: { en: 'Day 5 · A trip to Koshien', zh: '第5天 · 甲子园之旅' },
      lines: [
        { en: '{name}! It’s the weekend, and everyone in Minna Town is going somewhere.', zh: '{name}！周末到了，大家町的每个人都要出门。' },
        { en: 'Let’s talk about where we go, how we get there, who with, and when. Then we’ll catch a train to Koshien!', zh: '我们来聊聊去哪里、怎么去、和谁去、什么时候去。然后坐电车去甲子园吧！' }
      ]
    },

    // ----- Part 1: where to (練習A 1, 練習B 1–2, 練習C 1, 問題4–5) -----
    {
      prompt: { en: 'You’re heading out to buy groceries. Fill the gap.', zh: '你要出门买菜。请填空。' },
      jp: 'わたしは スーパー（　）行きます。',
      choices: ['へ', 'で', 'を', 'と'],
      answer: 'へ',
      explanation: { en: 'へ (read え) marks the place you’re going to: スーパーへ 行きます.', zh: 'へ（读作え）表示要去的地方：スーパーへ 行きます。' },
      why: {
        'で': { en: 'で marks how you go (バスで) or where something happens, not the destination.', zh: 'で表示交通方式（バスで）或动作发生的场所，不表示目的地。' },
        'を': { en: 'を marks the object of a verb. 行きます needs a direction: へ.', zh: 'を表示动作的对象。行きます要用表示方向的へ。' },
        'と': { en: 'と marks who you go with, not where.', zh: 'と表示和谁一起去，不表示去哪里。' }
      }
    },
    {
      prompt: { en: 'You went to the supermarket this morning. Answer Neko-chan.', zh: '你今天早上去了超市。回答小猫。' },
      talk: [{ who: 'neko', jp: 'けさ どこへ 行きましたか。' }, { who: 'you', jp: '（　）' }],
      choices: ['スーパーへ 行きました。', 'スーパーへ 行きます。', 'スーパーで 行きました。', 'スーパーです。'],
      answer: 'スーパーへ 行きました。',
      explanation: { en: 'けさ is in the past, so answer with the place + へ + 行きました.', zh: 'けさ是过去，所以回答：地点＋へ＋行きました。' },
      why: {
        'スーパーへ 行きます。': { en: '行きます is now or the future. This morning has already happened.', zh: '行きます表示现在或将来，而今天早上已经过去了。' },
        'スーパーで 行きました。': { en: 'で would mean you went by supermarket, like a vehicle! Use へ.', zh: '用で就变成了“乘超市去”，像交通工具一样！要用へ。' },
        'スーパーです。': { en: 'Answer a verb question with the verb: 行きました.', zh: '回答动词疑问句要用动词：行きました。' }
      }
    },
    {
      prompt: { en: 'You both know tomorrow is Sunday. Agree with Neko-chan.', zh: '你们都知道明天是星期天。表示同意。' },
      talk: [{ who: 'neko', jp: 'あしたは 日曜日ですね。' }, { who: 'you', jp: '（　）' }],
      choices: ['あ、そうですね。', 'あ、そうですか。', 'どう いたしまして。', '大変ですね。'],
      answer: 'あ、そうですね。',
      explanation: { en: 'そうですね agrees with something you already knew.', zh: 'そうですね表示同意你本来就知道的事。' },
      why: {
        'あ、そうですか。': { en: 'そうですか is for news you’ve just learned. You already knew it was Sunday tomorrow.', zh: 'そうですか用于刚得知的新信息，而你本来就知道明天是星期天。' },
        'どう いたしまして。': { en: 'That’s the reply to a thank-you.', zh: '这是回应别人道谢的话。' },
        '大変ですね。': { en: 'That shows sympathy for something hard. Sunday isn’t hard!', zh: '这是对辛苦的事表示同情。星期天可不辛苦！' }
      }
    },
    {
      prompt: { en: 'Neko-chan is going to Osaka Castle. You’re staying in to study.', zh: '小猫要去大阪城。你要待在家里学习。' },
      talk: [{ who: 'neko', jp: 'わたしは 大阪城へ 行きます。 {name}さんは？' }, { who: 'you', jp: 'どこ（　）行きません。 勉強します。' }],
      choices: ['も', 'へ', 'に', 'を'],
      answer: 'も',
      explanation: { en: 'Question word + も + negative verb means “not … any”: どこも 行きません (I’m not going anywhere).', zh: '疑问词＋も＋否定动词表示全部否定：どこも 行きません（哪儿也不去）。' },
      why: {
        'へ': { en: 'どこへ 行きません on its own doesn’t work. You need も: どこ［へ］も.', zh: '只说どこへ 行きません是不对的，要加も：どこ［へ］も。' },
        'に': { en: 'You need も to say “nowhere”: どこも.', zh: '表示“哪儿都不”要用も：どこも。' },
        'を': { en: 'を doesn’t go with どこ here. Use も.', zh: '这里どこ后面不能接を，要用も。' }
      }
    },
    {
      prompt: { en: 'You waited at the café, but nobody turned up. Fill the gap.', zh: '你在咖啡馆等着，可是谁也没来。请填空。' },
      jp: '（　）来ませんでした。',
      choices: ['だれも', 'だれが', 'だれと', 'どこも'],
      answer: 'だれも',
      explanation: { en: 'だれも + negative verb means “nobody”: だれも 来ませんでした.', zh: 'だれも＋否定动词表示“谁也没”：だれも 来ませんでした。' },
      why: {
        'だれが': { en: 'だれが 来ませんでしたか would ask “who didn’t come?”. You want “nobody”.', zh: 'だれが是在问“谁没来？”，而你想说“谁也没来”。' },
        'だれと': { en: 'だれと means “with whom”.', zh: 'だれと的意思是“和谁”。' },
        'どこも': { en: 'どこも means “nowhere”. For people, use だれも.', zh: 'どこも的意思是“哪儿都”。说人要用だれも。' }
      }
    },

    {
      type: 'scene', who: 'tanuki',
      title: { en: 'Part 2 · How and who with', zh: '第2部分 · 怎么去，和谁去' },
      lines: [
        { en: 'I’m planning a trip to Kyoto, {name}. Help me with the details!', zh: '{name}，我打算去京都旅行。帮我安排一下吧！' }
      ]
    },

    // ----- Part 2: で and と (練習A 2–3, 練習B 3–4, 練習C 2, 問題4–5) -----
    {
      prompt: { en: 'Tanuki-sensei is taking the train. Fill the gap.', zh: '狸猫老师要坐电车去。请填空。' },
      talk: [{ who: 'you', jp: '何で 京都へ 行きますか。' }, { who: 'tanuki', jp: '電車（　）行きます。' }],
      choices: ['で', 'へ', 'と', 'に'],
      answer: 'で',
      explanation: { en: 'で after a vehicle shows how you travel: 電車で (by train).', zh: '交通工具后面加で表示出行方式：電車で（坐电车）。' },
      why: {
        'へ': { en: 'へ would make the train your destination.', zh: '用へ的话，电车就变成目的地了。' },
        'と': { en: 'と is for people you go with, not vehicles.', zh: 'と用于一起去的人，不用于交通工具。' },
        'に': { en: 'に isn’t used for means of transport. Use で.', zh: '表示交通方式不用に，要用で。' }
      }
    },
    {
      prompt: { en: 'There was no bus, so you walked home from the station.', zh: '没有公交车，所以你从车站走回了家。' },
      jp: '駅から（　）帰りました。',
      choices: ['歩いて', '歩いてで', '足で'],
      answer: '歩いて',
      explanation: { en: 'For walking, say 歩いて, with no で.', zh: '走路说歩いて，不加で。' },
      why: {
        '歩いてで': { en: '歩いて already means “on foot”, so it never takes で.', zh: '歩いて本身就是“步行”的意思，后面不加で。' },
        '足で': { en: 'The textbook way to say “on foot” is 歩いて.', zh: '课本里“步行”的说法是歩いて。' }
      }
    },
    {
      prompt: { en: 'Read the answer, then choose the question word.', zh: '先看回答，再选择疑问词。' },
      jp: '（　）で 京都へ 行きますか。\n……電車で 行きます。',
      choices: ['何', 'だれ', 'どこ', 'いつ'],
      answer: '何',
      explanation: { en: 'The answer is a vehicle, so ask 何で (なんで, by what?).', zh: '回答是交通工具，所以问何で（なんで，坐什么）。' },
      why: {
        'だれ': { en: 'だれで doesn’t work. To ask who with, say だれと.', zh: '不能说だれで。问和谁一起要说だれと。' },
        'どこ': { en: 'どこで asks where something happens. The answer is a vehicle.', zh: 'どこで问在哪里做，而回答是交通工具。' },
        'いつ': { en: 'いつ asks when. The answer is a vehicle.', zh: 'いつ问什么时候，而回答是交通工具。' }
      }
    },
    {
      prompt: { en: 'Ask Tanuki-sensei who he’s going with.', zh: '问狸猫老师和谁一起去。' },
      talk: [{ who: 'you', jp: '（　）京都へ 行きますか。' }, { who: 'tanuki', jp: '友達と 行きます。' }],
      choices: ['だれと', 'だれが', 'だれで', '何で'],
      answer: 'だれと',
      explanation: { en: 'The answer uses と (友達と), so the question is だれと (with whom?).', zh: '回答用了と（友達と），所以问だれと（和谁）。' },
      why: {
        'だれが': { en: 'だれが asks who is doing it. Tanuki-sensei is the one going.', zh: 'だれが问的是谁去。去的人是狸猫老师。' },
        'だれで': { en: 'で is for vehicles, not people.', zh: 'で用于交通工具，不用于人。' },
        '何で': { en: '何で asks “by what?”. He answered with a person.', zh: '何で问“坐什么”，而他回答的是人。' }
      }
    },
    {
      prompt: { en: 'You’re going to Tokyo on your own. Fill the gap.', zh: '你一个人去东京。请填空。' },
      jp: '（　）東京へ 行きます。',
      choices: ['一人で', '一人と', '一人へ', '一人に'],
      answer: '一人で',
      explanation: { en: 'Alone is 一人で (ひとりで). Don’t use と, because there’s nobody with you.', zh: '一个人说一人で（ひとりで）。没有同伴，所以不用と。' },
      why: {
        '一人と': { en: 'と means “with someone”. Going alone is 一人で.', zh: 'と表示“和某人一起”。一个人去要说一人で。' },
        '一人へ': { en: 'へ marks a destination.', zh: 'へ表示目的地。' },
        '一人に': { en: 'The set expression is 一人で.', zh: '固定说法是一人で。' }
      }
    },
    {
      type: 'order',
      prompt: { en: 'Tell Neko-chan about last week’s trip.', zh: '告诉小猫上周的旅行。' },
      translation: { en: 'Last week I went to Tokyo by bus with a friend.', zh: '我上周和朋友坐公交车去了东京。' },
      pieces: ['先週', '友達と', 'バスで', '東京へ', '行きました。'],
      answers: [
        ['先週', '友達と', 'バスで', '東京へ', '行きました。'],
        ['先週', 'バスで', '友達と', '東京へ', '行きました。'],
        ['先週', '友達と', '東京へ', 'バスで', '行きました。'],
        ['先週', 'バスで', '東京へ', '友達と', '行きました。']
      ],
      explanation: { en: 'Time first, then who with, how and where, with the verb at the end. The middle parts can swap around.', zh: '先说时间，然后是和谁、怎么去、去哪里，动词放在最后。中间部分可以调换顺序。' }
    },

    {
      type: 'scene', who: 'kitsune',
      title: { en: 'Part 3 · When?', zh: '第3部分 · 什么时候？' },
      lines: [
        { en: 'Now let’s talk about dates, {name}. When did you come to Minna Town? When’s your birthday?', zh: '{name}，现在来聊聊日期吧。你什么时候来大家町的？你的生日是哪天？' }
      ]
    },

    // ----- Part 3: いつ and dates (練習A 4, 練習B 5–8, 練習C 3, 問題4–5) -----
    {
      prompt: { en: 'Kitsune-san asks when you arrived. Choose the question word.', zh: '狐狸先生问你什么时候来的。选择疑问词。' },
      talk: [{ who: 'kitsune', jp: '（　）日本へ 来ましたか。' }, { who: 'you', jp: '去年の 9月に 来ました。' }],
      choices: ['いつ', '何時', '何曜日', 'どこ'],
      answer: 'いつ',
      explanation: { en: 'いつ asks “when?” in general, so it fits a month and year.', zh: 'いつ泛泛地问“什么时候”，所以适合回答年份和月份。' },
      why: {
        '何時': { en: '何時 asks the clock time.', zh: '何時问的是几点。' },
        '何曜日': { en: '何曜日 asks the day of the week.', zh: '何曜日问的是星期几。' },
        'どこ': { en: 'どこ asks where.', zh: 'どこ问的是哪里。' }
      }
    },
    {
      prompt: { en: 'Choose what goes in the gap. × means nothing goes there.', zh: '选择填入空里的内容。×表示不填。' },
      jp: 'いつ（　）日本へ 来ましたか。',
      choices: ['×', 'に', 'で', 'へ'],
      answer: '×',
      explanation: { en: 'いつ never takes に.', zh: 'いつ后面不加に。' },
      why: {
        'に': { en: 'Dates with numbers take に, but いつ never does.', zh: '带数字的日期要加に，但いつ后面不加。' },
        'で': { en: 'で marks how you travel.', zh: 'で表示交通方式。' },
        'へ': { en: 'へ is already after 日本.', zh: '日本后面已经有へ了。' }
      }
    },
    {
      prompt: { en: 'Mr. Miller came from America in April this year. Choose the set that fits all three gaps.', zh: '米勒先生今年4月从美国来。选择适合三个空的一组。' },
      jp: 'ことし（　）4月（　）アメリカ（　）来ました。',
      choices: ['× … に … から', 'に … に … から', '× … に … へ', '× … × … から'],
      answer: '× … に … から',
      explanation: { en: 'ことし takes no に, 4月 (a number) takes に, and you came FROM America: から.', zh: 'ことし后面不加に，4月（带数字）要加に，从美国来用から。' },
      why: {
        'に … に … から': { en: 'ことし never takes に.', zh: 'ことし后面不加に。' },
        '× … に … へ': { en: 'アメリカへ 来ました would mean he came TO America. He came from there: から.', zh: 'アメリカへ 来ました是“来到美国”。他是从美国来的：から。' },
        '× … × … から': { en: '4月 has a number, so it takes に.', zh: '4月带数字，所以要加に。' }
      }
    },
    {
      type: 'input',
      prompt: { en: 'Maria’s birthday is 9月1日. Type how you read it in hiragana.', zh: '玛丽亚的生日是9月1日。用平假名输入读法。' },
      jp: '{9月1日|　}',
      answers: ['くがつついたち', 'くがつ ついたち'],
      explanation: { en: '9月 is くがつ and the 1st is ついたち: くがつ ついたち.', zh: '9月读くがつ，1号读ついたち：くがつ ついたち。' },
      why: {
        'きゅうがつついたち': { en: 'September is くがつ, not きゅうがつ.', zh: '9月读くがつ，不读きゅうがつ。' },
        'くがついちにち': { en: 'The 1st of the month is ついたち. いちにち means “one day”.', zh: '每月1号读ついたち。いちにち是“一天”的意思。' },
        'きゅうがついちにち': { en: 'Two traps! September is くがつ and the 1st is ついたち.', zh: '两个陷阱！9月读くがつ，1号读ついたち。' }
      }
    },
    {
      prompt: { en: 'Ask Kitsune-san the exact date of his birthday.', zh: '问狐狸先生生日的具体日期。' },
      talk: [{ who: 'you', jp: '誕生日は（　）（　）ですか。' }, { who: 'kitsune', jp: '10月6日です。' }],
      choices: ['何月 … 何日', '何日 … 何月', '何年 … 何月', 'いつ … 何日'],
      answer: '何月 … 何日',
      explanation: { en: 'Ask month then day, just like the answer: 何月何日ですか.', zh: '和回答一样，先问月再问日：何月何日ですか。' },
      why: {
        '何日 … 何月': { en: 'Japanese dates go month first, then day.', zh: '日语的日期是先说月，再说日。' },
        '何年 … 何月': { en: 'That asks the year and month. The answer gives a month and a day.', zh: '这是问年和月，而回答是月和日。' },
        'いつ … 何日': { en: 'いつ already means “when”. Pair 何月 with 何日 instead.', zh: 'いつ本身就是“什么时候”。要用何月和何日搭配。' }
      }
    },

    {
      type: 'scene', who: 'neko',
      title: { en: 'Part 4 · At the station', zh: '第4部分 · 在车站' },
      lines: [
        { en: 'Time to catch the train to Koshien, {name}! First we need a ticket, then the right platform.', zh: '{name}，我们去坐电车去甲子园吧！先买票，再找对站台。' }
      ]
    },

    // ----- Part 4: the conversation (会話, 問題4) -----
    {
      prompt: { en: 'You’re at the ticket machine. Ask a woman how much it costs to Koshien.', zh: '你在售票机前。问一位女士去甲子园要多少钱。' },
      talk: [{ who: 'you', jp: 'すみません。 甲子園（　）いくらですか。' }, { who: '女の人', jp: '350円です。' }],
      choices: ['まで', 'へ', 'に', 'で'],
      answer: 'まで',
      explanation: { en: 'まで (as far as) asks the fare to a place: 甲子園まで いくらですか.', zh: '用まで（到）问去某地的车费：甲子園まで いくらですか。' },
      why: {
        'へ': { en: 'へ goes with movement verbs like 行きます. For a fare, say まで.', zh: 'へ和行きます等移动动词一起用。问车费要说まで。' },
        'に': { en: 'For a fare, the textbook says まで: 甲子園まで いくらですか.', zh: '问车费时，课本用まで：甲子園まで いくらですか。' },
        'で': { en: 'で marks how you travel.', zh: 'で表示交通方式。' }
      }
    },
    {
      prompt: { en: 'The woman helped you. She replies to your thanks. What does she say?', zh: '那位女士帮了你。她回应你的道谢。她会说什么？' },
      talk: [{ who: 'you', jp: '350円ですね。 ありがとう ございました。' }, { who: '女の人', jp: '（　）' }],
      choices: ['どう いたしまして。', 'こちらこそ。', 'そうですね。', 'どうも。'],
      answer: 'どう いたしまして。',
      explanation: { en: 'どう いたしまして is the reply to a thank-you: “You’re welcome.”', zh: 'どう いたしまして是回应道谢的话：“不客气。”' },
      why: {
        'こちらこそ。': { en: 'こちらこそ means “me too”, as in replying to よろしく. She didn’t thank you.', zh: 'こちらこそ是“我才是”的意思，用来回应よろしく。她并没有向你道谢。' },
        'そうですね。': { en: 'そうですね agrees with something. It doesn’t answer a thank-you.', zh: 'そうですね表示同意，不能用来回应道谢。' },
        'どうも。': { en: 'どうも is a short thank-you. She’s replying to yours.', zh: 'どうも是简短的道谢，而她是在回应你的道谢。' }
      }
    },
    {
      prompt: { en: 'Ask the station staff which platform the train to Koshien leaves from.', zh: '问站务员去甲子园的电车在几号站台。' },
      talk: [{ who: 'you', jp: 'すみません。 甲子園は（　）ですか。' }, { who: '駅員', jp: '5番線です。' }],
      choices: ['何番線', '何番', '何時', '何曜日'],
      answer: '何番線',
      explanation: { en: '番線 means platform, so ask 何番線ですか (which platform?).', zh: '番線是站台，所以问何番線ですか（几号站台）。' },
      why: {
        '何番': { en: '何番 asks for a number, like a phone number. Platforms are 何番線.', zh: '何番问的是号码，比如电话号码。站台要说何番線。' },
        '何時': { en: '何時 asks the time the train leaves.', zh: '何時问的是几点出发。' },
        '何曜日': { en: '何曜日 asks the day of the week.', zh: '何曜日问的是星期几。' }
      }
    },
    {
      prompt: { en: 'This train doesn’t go to Koshien. A man tells you something you didn’t know.', zh: '这趟电车不去甲子园。一位男士告诉你一件你不知道的事。' },
      talk: [{ who: 'you', jp: 'この 電車は 甲子園へ 行きますか。' }, { who: '男の人', jp: 'いいえ。 次の 「普通」です（　）。' }],
      choices: ['よ', 'か', 'ね'],
      answer: 'よ',
      explanation: { en: 'よ tells the listener something new: “It’s the next local train, you know.”', zh: 'よ用来告诉对方新的信息：“是下一趟普通车哦。”' },
      why: {
        'か': { en: 'か would turn his answer into a question.', zh: '用か就把他的回答变成问句了。' },
        'ね': { en: 'ね checks something you both know. You didn’t know this, so he uses よ.', zh: 'ね用来确认双方都知道的事。你并不知道，所以他用よ。' }
      }
    },

    {
      type: 'scene', who: 'neko',
      title: { en: 'Epilogue', zh: '尾声' },
      lines: [
        { en: 'The local train pulls into Koshien. You made it, {name}!', zh: '普通车开进了甲子园站。{name}，你到啦！' },
        { en: 'Let’s see how you did today.', zh: '来看看你今天的表现吧。' }
      ]
    }
  ]
});
