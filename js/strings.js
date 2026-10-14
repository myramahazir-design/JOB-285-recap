/*
 * Interface text in English and Simplified Chinese.
 * Values can be strings or functions that take arguments.
 */
window.MNN_STRINGS = {
  en: {
    appTitle: 'Minna no Nihongo Recap',
    appSub: 'Lessons 1–8',
    langLabel: 'Language',
    chooseChapter: 'Choose a lesson',
    lessonN: function (n) { return 'Lesson ' + n; },
    allLessons: 'All lessons',
    backToLesson: 'Back to lesson',
    comingSoon: 'Coming soon',
    sampleTag: 'sample questions',
    noteLabel: 'Note',
    groups: {
      words: 'Words',
      expressions: 'Practice C phrases',
      countries: 'Countries',
      names: 'Names in the textbook'
    },
    orderPrompt: 'Put the words in the right order.',
    orderHint: 'Tap the words below in order',
    modes: {
      vocab: 'Vocabulary',
      grammar: 'Grammar',
      'vocab-quiz': 'Vocab Quiz',
      'grammar-quiz': 'Grammar Quiz'
    },
    modeDesc: {
      vocab: 'Review the words',
      grammar: 'Review the patterns',
      'vocab-quiz': 'Test your words',
      'grammar-quiz': 'Textbook-style exercises'
    },
    itemsCount: function (n) { return n + (n === 1 ? ' item' : ' items'); },
    questionsCount: function (n) { return n + (n === 1 ? ' question' : ' questions'); },

    homeGreeting: 'Irasshaimase! Which lesson shall we review today?',
    chapterGreeting: 'What would you like to practise?',
    vocabIntro: 'Let’s go through the words together. Tap the speaker to hear each one!',
    vocabTip: 'Say it out loud a few times before moving on.',
    emptyContent: 'This part of the lesson hasn’t been added yet. Check back soon!',

    prev: 'Back',
    next: 'Next',
    finish: 'Finish',
    listen: 'Listen',
    examples: 'Examples',

    lessonDoneTitle: 'Otsukaresama!',
    lessonDoneBody: 'You finished the review. Want to test yourself with the quiz now?',
    goQuiz: 'Take the quiz',
    later: 'Maybe later',

    question: function (i, n) { return 'Question ' + i + ' of ' + n; },
    check: 'Check',
    typePlaceholder: 'Type your answer in Japanese',
    correctLines: ['Sugoi! That’s right!', 'Correct! よくできました!', 'Perfect!', 'Nice one!'],
    wrongTitle: 'Not quite…',
    yourAnswer: 'Your answer',
    correctAnswer: 'Correct answer',
    whyWrong: 'What went wrong',
    explanation: 'Explanation',
    gotIt: 'Got it!',
    emptyAnswer: '(no answer)',

    resultsTitle: 'Quiz complete!',
    score: function (s, n) { return s + ' / ' + n + ' correct'; },
    resultsGreat: 'Subarashii! You really know this lesson.',
    resultsGood: 'Good work! A little more practice and it’s perfect.',
    resultsTry: 'Ganbatte! Review the lesson and try again.',
    retryMistakes: 'Retry mistakes',
    retryAll: 'Try again',
    reviewLesson: 'Review the lesson',

    // Auto-generated vocabulary questions
    vqMeaning: 'What does this word mean?',
    vqWord: function (m) { return 'Which word means “' + m + '”?'; },
    vqExplain: function (jp, m) { return '「' + jp + '」 means “' + m + '”.'; },
    vqWhyMeaning: function (m, jp) { return '“' + m + '” is 「' + jp + '」, a different word.'; },
    vqWhyWord: function (jp, m) { return '「' + jp + '」 means “' + m + '”.'; }
  },

  zh: {
    appTitle: '大家的日语 复习',
    appSub: '第1–8课',
    langLabel: '语言',
    chooseChapter: '选择课程',
    lessonN: function (n) { return '第' + n + '课'; },
    allLessons: '所有课程',
    backToLesson: '返回本课',
    comingSoon: '即将推出',
    sampleTag: '示例题',
    noteLabel: '注意',
    groups: {
      words: '单词',
      expressions: '练习C 用语',
      countries: '国家',
      names: '课文中的名称'
    },
    orderPrompt: '请把词语排成正确的顺序。',
    orderHint: '按顺序点击下面的词语',
    modes: {
      vocab: '词汇',
      grammar: '语法',
      'vocab-quiz': '词汇测验',
      'grammar-quiz': '语法测验'
    },
    modeDesc: {
      vocab: '复习单词',
      grammar: '复习句型',
      'vocab-quiz': '测试单词',
      'grammar-quiz': '课本练习题'
    },
    itemsCount: function (n) { return n + ' 项'; },
    questionsCount: function (n) { return n + ' 题'; },

    homeGreeting: '欢迎光临！今天要复习哪一课呢？',
    chapterGreeting: '想练习什么呢？',
    vocabIntro: '我们一起来复习单词吧。点喇叭可以听发音哦！',
    vocabTip: '继续之前，先大声念几遍吧。',
    emptyContent: '这部分内容还没有添加，请稍后再来！',

    prev: '上一个',
    next: '下一个',
    finish: '完成',
    listen: '发音',
    examples: '例句',

    lessonDoneTitle: '辛苦了！',
    lessonDoneBody: '复习完成了。要不要现在做个测验？',
    goQuiz: '去做测验',
    later: '稍后再说',

    question: function (i, n) { return '第 ' + i + ' 题 / 共 ' + n + ' 题'; },
    check: '确认',
    typePlaceholder: '请用日语输入答案',
    correctLines: ['厉害！答对了！', '正确！よくできました！', '完美！', '好棒！'],
    wrongTitle: '差一点…',
    yourAnswer: '你的答案',
    correctAnswer: '正确答案',
    whyWrong: '错在哪里',
    explanation: '解说',
    gotIt: '明白了！',
    emptyAnswer: '（未作答）',

    resultsTitle: '测验完成！',
    score: function (s, n) { return '答对 ' + s + ' / ' + n; },
    resultsGreat: '太棒了！这一课你已经掌握了。',
    resultsGood: '不错！再练习一下就完美了。',
    resultsTry: '加油！复习一下再试一次吧。',
    retryMistakes: '重做错题',
    retryAll: '再试一次',
    reviewLesson: '复习本课',

    vqMeaning: '这个词是什么意思？',
    vqWord: function (m) { return '哪个词的意思是“' + m + '”？'; },
    vqExplain: function (jp, m) { return '「' + jp + '」的意思是“' + m + '”。'; },
    vqWhyMeaning: function (m, jp) { return '“' + m + '”是「' + jp + '」，是另一个词。'; },
    vqWhyWord: function (jp, m) { return '「' + jp + '」的意思是“' + m + '”。'; }
  }
};
