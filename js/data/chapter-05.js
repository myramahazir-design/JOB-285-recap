// Lesson 5, from the textbook's Vocabulary and Grammar Notes pages.
// Dates, months and last/this/next words have their own Calendar section.
// The story quiz will come from the practice pages (練習A/B/C, 問題).
MNN.registerChapter({
  id: 5,
  title: { jp: 'この電車は甲子園へ行きますか', en: 'Does this train go to Koshien?', zh: '这趟电车去甲子园吗？' },

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
  grammarQuiz: []
});
