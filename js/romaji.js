/*
 * Katakana -> romaji (Hepburn), used for the small reading shown above katakana words.
 * ー lengthens the previous vowel (ミラー -> mirā), ッ doubles the next consonant
 * (ワット -> watto), and ・ becomes a space (マイク・ミラー -> maiku mirā).
 */
window.MNN_ROMAJI = (function () {
  'use strict';

  var SINGLE = {
    'ア': 'a', 'イ': 'i', 'ウ': 'u', 'エ': 'e', 'オ': 'o',
    'カ': 'ka', 'キ': 'ki', 'ク': 'ku', 'ケ': 'ke', 'コ': 'ko',
    'ガ': 'ga', 'ギ': 'gi', 'グ': 'gu', 'ゲ': 'ge', 'ゴ': 'go',
    'サ': 'sa', 'シ': 'shi', 'ス': 'su', 'セ': 'se', 'ソ': 'so',
    'ザ': 'za', 'ジ': 'ji', 'ズ': 'zu', 'ゼ': 'ze', 'ゾ': 'zo',
    'タ': 'ta', 'チ': 'chi', 'ツ': 'tsu', 'テ': 'te', 'ト': 'to',
    'ダ': 'da', 'ヂ': 'ji', 'ヅ': 'zu', 'デ': 'de', 'ド': 'do',
    'ナ': 'na', 'ニ': 'ni', 'ヌ': 'nu', 'ネ': 'ne', 'ノ': 'no',
    'ハ': 'ha', 'ヒ': 'hi', 'フ': 'fu', 'ヘ': 'he', 'ホ': 'ho',
    'バ': 'ba', 'ビ': 'bi', 'ブ': 'bu', 'ベ': 'be', 'ボ': 'bo',
    'パ': 'pa', 'ピ': 'pi', 'プ': 'pu', 'ペ': 'pe', 'ポ': 'po',
    'マ': 'ma', 'ミ': 'mi', 'ム': 'mu', 'メ': 'me', 'モ': 'mo',
    'ヤ': 'ya', 'ユ': 'yu', 'ヨ': 'yo',
    'ラ': 'ra', 'リ': 'ri', 'ル': 'ru', 'レ': 're', 'ロ': 'ro',
    'ワ': 'wa', 'ヰ': 'i', 'ヱ': 'e', 'ヲ': 'o', 'ン': 'n', 'ヴ': 'vu',
    'ァ': 'a', 'ィ': 'i', 'ゥ': 'u', 'ェ': 'e', 'ォ': 'o',
    'ャ': 'ya', 'ュ': 'yu', 'ョ': 'yo', 'ヮ': 'wa', 'ヵ': 'ka', 'ヶ': 'ke'
  };

  var DOUBLE = {
    'キャ': 'kya', 'キュ': 'kyu', 'キョ': 'kyo', 'ギャ': 'gya', 'ギュ': 'gyu', 'ギョ': 'gyo',
    'シャ': 'sha', 'シュ': 'shu', 'ショ': 'sho', 'シェ': 'she',
    'ジャ': 'ja', 'ジュ': 'ju', 'ジョ': 'jo', 'ジェ': 'je',
    'チャ': 'cha', 'チュ': 'chu', 'チョ': 'cho', 'チェ': 'che',
    'ニャ': 'nya', 'ニュ': 'nyu', 'ニョ': 'nyo', 'ヒャ': 'hya', 'ヒュ': 'hyu', 'ヒョ': 'hyo',
    'ビャ': 'bya', 'ビュ': 'byu', 'ビョ': 'byo', 'ピャ': 'pya', 'ピュ': 'pyu', 'ピョ': 'pyo',
    'ミャ': 'mya', 'ミュ': 'myu', 'ミョ': 'myo', 'リャ': 'rya', 'リュ': 'ryu', 'リョ': 'ryo',
    'ティ': 'ti', 'ディ': 'di', 'デュ': 'dyu', 'トゥ': 'tu', 'ドゥ': 'du', 'ツァ': 'tsa',
    'ファ': 'fa', 'フィ': 'fi', 'フェ': 'fe', 'フォ': 'fo', 'フュ': 'fyu',
    'ウィ': 'wi', 'ウェ': 'we', 'ウォ': 'wo', 'イェ': 'ye',
    'ヴァ': 'va', 'ヴィ': 'vi', 'ヴェ': 've', 'ヴォ': 'vo'
  };

  var LONG = { a: 'ā', i: 'ī', u: 'ū', e: 'ē', o: 'ō' };

  return function toRomaji(kata) {
    var out = '';
    var doubleNext = false;
    for (var i = 0; i < kata.length; i++) {
      var ch = kata[i];
      if (ch === '・') { out += ' '; continue; }
      if (ch === 'ッ') { doubleNext = true; continue; }
      if (ch === 'ー') {
        var last = out.slice(-1);
        if (LONG[last]) out = out.slice(0, -1) + LONG[last];
        continue;
      }
      var syl = DOUBLE[ch + (kata[i + 1] || '')];
      if (syl) i++;
      else syl = SINGLE[ch] || ch;
      if (doubleNext) {
        syl = (syl.indexOf('ch') === 0 ? 't' : syl.charAt(0)) + syl;
        doubleNext = false;
      }
      out += syl;
    }
    return out;
  };
})();
