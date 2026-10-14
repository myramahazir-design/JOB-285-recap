/*
 * Pixel-art sprites, drawn as SVG from text grids.
 * Each character in a row is a pixel; "." is transparent and every other
 * letter is looked up in the sprite's palette.
 */
window.MNN_SPRITES = (function () {
  'use strict';

  var INK = '#2a1a12';

  var SPRITES = {
    // Tanuki-sensei: vocabulary guide, wears an indigo happi coat.
    tanuki: {
      pal: { k: INK, b: '#9a6a3f', d: '#4e3424', c: '#f3dfb8', w: '#ffffff', p: '#f2a3a0',
             n: '#1b1b1b', i: '#2f4a7a', t: '#f4f1e6', o: '#d24a3a' },
      rows: [
        '..kk........kk..',
        '.kddk......kddk.',
        '.kdbbkkkkkkbbdk.',
        'kbbbbbbbbbbbbbbk',
        'kbbbbbbbbbbbbbbk',
        'kbddddbbbbddddbk',
        'kddwkddbbddwkddk',
        'kddkkddbbddkkddk',
        'kbddddccccddddbk',
        'kbpbcccnncccbpbk',
        '.kbbccckkcccbbk.',
        '..kkbbbbbbbbkk..',
        '...kittccttik...',
        '..kiiitcctiiik..',
        '.kbiiiittiiiibk.',
        '.kboooooooooobk.',
        '..kiiitiitiiik..',
        '..kiiiiiiiiiik..',
        '...kbbk..kbbk...',
        '...kkkk..kkkk...'
      ]
    },

    // Kitsune-san: grammar guide, dressed as a shrine maiden (miko).
    kitsune: {
      pal: { k: INK, b: '#e0812f', c: '#fff4e0', p: '#f2a3a0', w: '#ffffff', n: '#1b1b1b',
             t: '#f6f3ec', r: '#c73b33', y: '#f2c14e' },
      rows: [
        '.k............k.',
        '.kk..........kk.',
        '.kbk........kbk.',
        '.kpbk......kbpk.',
        '.kpbbkkkkkkbbpk.',
        'kbbbbbbbbbbbbbbk',
        'kbbbbbbbbbbbbbbk',
        'kbbwkbbbbbbwkbbk',
        'kbbkkbbbbbbkkbbk',
        'kcccbbbbbbbbccck',
        '.kcccccnnccccck.',
        '..kkcccccccckk..',
        '...ktttrrtttk...',
        '..kttttrrttttk..',
        '.kcttttttttttck.',
        '.krrrryyyyrrrrk.',
        '..krrrrrrrrrrk..',
        '..krrrrkkrrrrk..',
        '..krrrk..krrrk..',
        '..kkkkk..kkkkk..'
      ]
    },

    // Neko-chan: host and quiz-results cat, in a pink yukata.
    neko: {
      pal: { k: INK, b: '#a9aeb8', d: '#6b7180', c: '#f4f1ea', p: '#f2a3a0', w: '#ffffff',
             y: '#e98aa6', t: '#fff6fa', o: '#f2c14e' },
      rows: [
        '................',
        '.kk..........kk.',
        '.kbk........kbk.',
        '.kpbk......kbpk.',
        '.kbbbkkkkkkbbbk.',
        'kbbbbbdbbdbbbbbk',
        'kbbbbbdbbdbbbbbk',
        'kbbwkbbbbbbwkbbk',
        'kbbkkbbbbbbkkbbk',
        'kbpcccbppbcccpbk',
        '.kbcccckkccccbk.',
        '..kkbbbbbbbbkk..',
        '...kyyccccyyk...',
        '..kytyyccyytyk..',
        '.kcyyyyyyyyyyck.',
        '.kooooooooooook.',
        '..kyyytyyyyyyk..',
        '..kyyyyyytyyyk..',
        '...kbbk..kbbk...',
        '...kkkk..kkkk...'
      ]
    },

    torii: {
      pal: { d: '#3b2a24', r: '#d24a3a', y: '#f2c14e' },
      rows: [
        'dddddddddddddddddddddddd',
        '.rrrrrrrrrrrrrrrrrrrrrr.',
        '....rr.....dd.....rr....',
        '....rr.....yy.....rr....',
        '..rrrrrrrrrrrrrrrrrrrr..',
        '....rr............rr....',
        '....rr............rr....',
        '....rr............rr....',
        '....rr............rr....',
        '....rr............rr....',
        '....rr............rr....',
        '....rr............rr....',
        '....rr............rr....',
        '....rr............rr....',
        '....rr............rr....',
        '...dddd..........dddd...'
      ]
    },

    vending: {
      pal: { k: INK, v: '#3a7bd5', w: '#eaf6ff', a: '#e74c3c', g: '#2ecc71', y: '#f1c40f',
             o: '#f39c12', s: '#9aa3ad', l: '#7fd3ff' },
      rows: [
        'kkkkkkkkkkkk',
        'kvvvvvvvvvvk',
        'kwwwwwwwwwwk',
        'kwaawggwyywk',
        'kwaawggwyywk',
        'kwwwwwwwwwwk',
        'kwoowyywaawk',
        'kwoowyywaawk',
        'kwwwwwwwwwwk',
        'kvvvvvvvvvvk',
        'kvllvvvvvssk',
        'kvllvvvvvssk',
        'kvvvvvvvvvvk',
        'kvvvvvvvvvvk',
        'kvkkkkkkkkvk',
        'kvkkkkkkkkvk',
        'kvvvvvvvvvvk',
        'kkkkkkkkkkkk'
      ]
    },

    vendingRed: {
      pal: { k: INK, v: '#d24a3a', w: '#fff4ec', a: '#3a7bd5', g: '#2ecc71', y: '#f1c40f',
             o: '#f39c12', s: '#9aa3ad', l: '#ffe08a' },
      rows: null // filled below from the vending grid
    },

    lantern: {
      pal: { k: INK, r: '#d24a3a', d: '#8f2a20', y: '#f2c14e' },
      rows: [
        '...kk...',
        '..kkkk..',
        '.rrrrrr.',
        'rrrrrrrr',
        'rddddddr',
        'rrrrrrrr',
        'rddddddr',
        'rrrrrrrr',
        '.rrrrrr.',
        '..kkkk..',
        '...yy...'
      ]
    },

    // Vertical shop signboard (kanban).
    sign: {
      pal: { k: INK, y: '#fff2b3', r: '#d24a3a', p: '#e86a92' },
      rows: [
        'kkkkkk',
        'kyyyyk',
        'kyrryk',
        'kyrryk',
        'kyyyyk',
        'kyrryk',
        'kyryyk',
        'kyrryk',
        'kyyyyk',
        'kyprpk',
        'kyrryk',
        'kyyyyk',
        'kkkkkk',
        '..kk..',
        '..kk..',
        '..kk..',
        '..kk..',
        '..kk..'
      ]
    },

    stoneLantern: {
      pal: { s: '#9aa3ad', d: '#6b7180', y: '#f2c14e' },
      rows: [
        '...ss...',
        '.dddddd.',
        'dddddddd',
        '.ssssss.',
        '.syyyys.',
        '.ssssss.',
        '..ssss..',
        '...ss...',
        '...ss...',
        '..ssss..',
        '.dddddd.'
      ]
    }
  };

  SPRITES.vendingRed.rows = SPRITES.vending.rows;

  var CHARACTERS = {
    tanuki: { en: 'Tanuki-sensei', zh: '狸猫老师', jp: 'たぬき先生' },
    kitsune: { en: 'Kitsune-san', zh: '狐狸小姐', jp: 'きつねさん' },
    neko: { en: 'Neko-chan', zh: '小猫', jp: 'ねこちゃん' }
  };

  // Merge horizontal runs of the same colour into one rect each.
  function rects(sprite) {
    var out = '';
    sprite.rows.forEach(function (row, y) {
      var x = 0;
      while (x < row.length) {
        var ch = row[x];
        var len = 1;
        while (x + len < row.length && row[x + len] === ch) len++;
        if (ch !== '.') {
          out += '<rect x="' + x + '" y="' + y + '" width="' + len + '" height="1" fill="' + sprite.pal[ch] + '"/>';
        }
        x += len;
      }
    });
    return out;
  }

  function svg(name, cls) {
    var s = SPRITES[name];
    var w = s.rows[0].length;
    var h = s.rows.length;
    return '<svg class="sprite sprite--' + name + (cls ? ' ' + cls : '') + '" viewBox="0 0 ' + w + ' ' + h +
      '" shape-rendering="crispEdges" aria-hidden="true" focusable="false">' + rects(s) + '</svg>';
  }

  // The street strip shown at the bottom of every screen.
  function scene() {
    var W = 160, H = 26, ground = 26;
    var items = [
      ['torii', 4, ground - 16],
      ['stoneLantern', 31, ground - 11],
      ['sign', 43, ground - 18],
      ['vending', 51, ground - 18],
      ['vendingRed', 64, ground - 18],
      ['lantern', 86, 2],
      ['lantern', 100, 2],
      ['sign', 116, ground - 18],
      ['stoneLantern', 124, ground - 11],
      ['torii', 134, ground - 16]
    ];
    var g = '';
    items.forEach(function (it) {
      g += '<g transform="translate(' + it[1] + ' ' + it[2] + ')">' + rects(SPRITES[it[0]]) + '</g>';
    });
    // Rope the lanterns hang from, then a stone path.
    g += '<rect x="80" y="1" width="34" height="1" fill="' + INK + '"/>';
    // The stone path is drawn in CSS so it can span the full window width.
    return '<svg class="scene" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="xMidYMax meet" shape-rendering="crispEdges" aria-hidden="true" focusable="false">' + g + '</svg>';
  }

  return { svg: svg, scene: scene, CHARACTERS: CHARACTERS };
})();
