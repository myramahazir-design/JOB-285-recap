# みんなの日本語 Recap

A review web app for *Minna no Nihongo* Lessons 1–8, styled as a cosy pixel-art Japanese street: shrines, vending machines and signboards.

- Pick a lesson, then choose **Vocabulary**, **Grammar**, **Vocab Quiz** or **Grammar Quiz**.
- After a vocab or grammar review, the app offers to take you to the matching quiz.
- Use the **EN / 中文** toggle in the top-right corner to switch language. The app remembers your choice.
- The app asks your name when you open it and uses it throughout. It forgets the name when the tab is closed.
- Lesson quizzes are played as short stories with the town's characters: conversations, name cards, rearranging sentences and fill-in-the-blank.
- If you get a quiz answer wrong, a pop-up shows your answer, the correct answer, what went wrong and an explanation, and the question comes back a few steps later for a second try.
- The guide characters are Tanuki-sensei (vocab), Kitsune-san (grammar) and Neko-chan (host).

## Running it

It's plain HTML, CSS and JavaScript, with no build step and no dependencies.

- **Locally:** open `index.html` in Chrome or Safari.
- **Online:** put the folder on any static host, such as GitHub Pages (Settings → Pages → deploy from this branch).

## Adding lesson content

Each lesson lives in its own file in `js/data/` (`chapter-01.js` to `chapter-08.js`). Lesson 1 has a full example.

```js
MNN.registerChapter({
  id: 2,
  title: { jp: 'ほんの気持ちです', en: "It's just a small token", zh: '一点儿心意' },

  vocab: [
    { jp: 'これ', en: 'this (thing)', zh: '这个',
      note: { en: 'Optional tip from Tanuki-sensei', zh: '可选提示' } },
    { jp: 'ほん', kanji: '本', en: 'book', zh: '书' }
  ],

  grammar: [
    {
      pattern: 'これ／それ／あれ は N です',
      title:   { en: 'This / that is N', zh: '这／那是N' },
      explain: { en: 'Kitsune-san says this in the speech bubble.', zh: '狐狸小姐在对话框里讲解。' },
      examples: [{ jp: 'これは 本です。', en: 'This is a book.', zh: '这是书。' }]
    }
  ],

  // Optional. If empty, a 10-question quiz is generated from the vocab list.
  vocabQuiz: [],

  grammarQuiz: [
    // Multiple choice. （　） in the sentence is shown as a blank.
    {
      prompt: { en: 'Choose the correct word.', zh: '请选择正确的词。' },
      jp: '（　）は 本です。',
      choices: ['これ', 'この', 'ここ'],
      answer: 'これ',
      explanation: { en: 'Shown on every wrong answer.', zh: '答错时显示。' },
      why: {   // optional: explanation for a specific wrong choice
        'この': { en: 'この must be followed by a noun.', zh: 'この后面必须接名词。' }
      }
    },
    // Typed answer. Any answer in `answers` counts as correct.
    {
      type: 'input',
      prompt: { en: 'Fill in the blank.', zh: '请填空。' },
      jp: 'それは だれ（　）かばんですか。',
      answers: ['の'],
      explanation: { en: '…', zh: '…' },
      why: { 'は': { en: 'Explanation for this common mistake', zh: '…' } }
    },
    // Rearrange the sentence. List the pieces in the correct order; they are shuffled for the learner.
    {
      type: 'order',
      translation: { en: 'This is a book.', zh: '这是书。' },
      pieces: ['これは', '本', 'です。'],
      answers: [['これは', '本', 'です。']],   // optional: other accepted orders
      explanation: { en: '…', zh: '…' }
    }
  ]
});
```

Notes on the format:

- Japanese text can use `{漢字|かんじ}` to show furigana.
- Vocab items can have a `group`: `words`, `expressions`, `countries` or `names`. Items in `names` (textbook company and school names) appear in the review but not in the quiz.
- Grammar items can have `notes`: a list of short points shown under the pattern.
- Any question can have a `translation`, shown under the Japanese.
- Any question can also have `talk` (a short chat: `[{ who: 'you' | 'neko' | 'tanuki' | 'kitsune' | 'ミラー', jp: '…' }]`) and `card` (a name card: `{ name, country, job, org, age }`).
- `{ type: 'scene', who, title, lines }` adds a story beat between questions. A quiz that contains scenes is played in its written order.
- `{name}` anywhere in the text is replaced with the learner's name, which the app asks for once per tab.
- Multiple choice: `fixedOrder: true` keeps the options in order (for ○ / × questions). `'は … か'` fills two blanks.
- Chinese text uses Simplified characters.
- Typed answers ignore spaces, full-width or half-width differences and trailing punctuation.

## Files

```
index.html          page shell
css/style.css       pixel theme
js/strings.js       interface text (EN / 中文)
js/sprites.js       pixel-art characters and street scene
js/content.js       lesson registry
js/data/            one file per lesson
js/app.js           screens, quizzes and the mistake pop-up
```
