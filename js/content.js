/*
 * Chapter registry. Each file in js/data/ calls MNN.registerChapter({...}).
 * See README.md for the full content format.
 */
window.MNN = {
  chapters: {},
  registerChapter: function (ch) {
    ch.vocab = ch.vocab || [];
    ch.grammar = ch.grammar || [];
    ch.vocabQuiz = ch.vocabQuiz || [];
    ch.grammarQuiz = ch.grammarQuiz || [];
    this.chapters[ch.id] = ch;
  }
};
