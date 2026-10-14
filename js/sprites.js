/*
 * Pixel-art sprites, drawn as SVG from text grids.
 * Each character in a row is a pixel; "." is transparent and every other
 * letter is looked up in the sprite's palette.
 */
window.MNN_SPRITES = (function () {
  'use strict';

  var INK = '#4a3b33'; // soft cocoa outline

  var SPRITES = {
    // Tanuki-sensei: vocabulary guide, wears a matcha happi coat.
    tanuki: {
      pal: { k: INK, b: '#9a6a3f', d: '#4e3424', c: '#f3dfb8', w: '#ffffff', p: '#f2a3a0',
             n: '#2e2620', i: '#557d33', t: '#fffaf4', o: '#e07a93' },
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
             t: '#fffaf4', r: '#e07a93', y: '#9bb86a' },
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
             y: '#ef9db1', t: '#fff6fa', o: '#9bb86a' },
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
      pal: { d: '#4e6e34', r: '#e07a93', y: '#fbe3e9' },
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

    // Wooden machiya townhouse: tiled roof, plaster upper floor, lattice front, noren curtain.
    house: {
      pal: { k: INK, t: '#6f8f4e', T: '#97b46f', W: '#8a6248', w: '#b98d6a', p: '#fff4f2',
             l: '#6e4a36', n: '#e07a93', N: '#fff6f0', d: '#4a3428', s: '#d4c5b9' },
      rows: [
        '.....tttttttttttttt.....',
        '...tTttTttTttTttTttTt...',
        '.tttttttttttttttttttttt.',
        'kkkkkkkkkkkkkkkkkkkkkkkk',
        '.WppplplplplplplplppppW.',
        '.WppplplplplplplplppppW.',
        '.WppppppppppppppppppppW.',
        'tTttTttTttTttTttTttTttTt',
        'kkkkkkkkkkkkkkkkkkkkkkkk',
        '.WlwlwlwlwWnnnnnnnWlwlW.',
        '.WlwlwlwlwWnnnnnnnWlwlW.',
        '.WlwlwlwlwWnnnNnnnWlwlW.',
        '.WlwlwlwlwWnnndnnnWlwlW.',
        '.WlwlwlwlwWdddddddWlwlW.',
        '.WlwlwlwlwWdddddddWlwlW.',
        '.WlwlwlwlwWdddddddWlwlW.',
        '.WlwlwlwlwWdddddddWlwlW.',
        '.WlwlwlwlwWdddddddWlwlW.',
        '.WWWWWWWWWWWWWWWWWWWWWW.',
        'ssssssssssssssssssssssss'
      ]
    },

    housePink: {
      pal: { k: INK, t: '#d9849b', T: '#efa9bb', W: '#8a6248', w: '#b98d6a', p: '#fff4f2',
             l: '#6e4a36', n: '#7fa04f', N: '#fff6f0', d: '#4a3428', s: '#d4c5b9' },
      rows: null // filled below from the house grid
    },

    // Wooden shrine: green copper roof with crossed chigi beams, shimenawa rope with paper
    // streamers, lattice doors and an offering box.
    shrine: {
      pal: { k: INK, c: '#8a6248', g: '#7fa04f', G: '#a5c27a', y: '#f7c6d2', r: '#f0dcae',
             W: '#7a5540', w: '#b08463', p: '#fffaf4', l: '#5e4030', d: '#3e2c22', b: '#d98fa3', s: '#d4c5b9' },
      rows: [
        '.c....................c.',
        '..c..................c..',
        '...gggggggggggggggggg...',
        '..gGggGggGggGggGggGggG..',
        '.ggggggggggyyggggggggggg',
        'gggggggggggggggggggggggg',
        'kkkkkkkkkkkkkkkkkkkkkkkk',
        '.WrrrrrrrrrrrrrrrrrrrrW.',
        '.WwwpwwwwpwwwwpwwwwpwwW.',
        '.WwwpwwwwpwwwwpwwwwpwwW.',
        '.WlwlwlwlWddddWlwlwlwlW.',
        '.WlwlwlwlWddddWlwlwlwlW.',
        '.WlwlwlwlWddddWlwlwlwlW.',
        '.WlwlwlwlWddddWlwlwlwlW.',
        '.WlwlwlwlWbbbbWlwlwlwlW.',
        '.WlwlwlwlWbbbbWlwlwlwlW.',
        '.WWWWWWWWWWWWWWWWWWWWWW.',
        '..ssssssssssssssssssss..',
        '.ssssssssssssssssssssss.',
        'ssssssssssssssssssssssss'
      ]
    },

    shrinePink: {
      pal: { k: INK, c: '#8a6248', g: '#e48aa2', G: '#f4b6c5', y: '#e3ebcc', r: '#f0dcae',
             W: '#7a5540', w: '#b08463', p: '#fffaf4', l: '#5e4030', d: '#3e2c22', b: '#9bb86a', s: '#d4c5b9' },
      rows: null // filled below from the shrine grid
    },

    lantern: {
      pal: { k: INK, r: '#ef9db1', d: '#d4708b', y: '#9bb86a' },
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
      pal: { k: INK, y: '#fff6f8', r: '#d9637f', p: '#9bb86a' },
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
      pal: { s: '#b9b3a8', d: '#958d82', y: '#f7c6d2' },
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

  SPRITES.housePink.rows = SPRITES.house.rows;
  SPRITES.shrinePink.rows = SPRITES.shrine.rows;

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
    var W = 184, H = 26, ground = 26;
    var items = [
      ['shrinePink', 2, ground - 20],
      ['stoneLantern', 28, ground - 11],
      ['torii', 38, ground - 16],
      ['house', 66, ground - 20],
      ['sign', 92, ground - 18],
      ['housePink', 100, ground - 20],
      ['lantern', 128, 2],
      ['lantern', 146, 2],
      ['stoneLantern', 136, ground - 11],
      ['shrine', 158, ground - 20]
    ];
    var g = '';
    items.forEach(function (it) {
      g += '<g transform="translate(' + it[1] + ' ' + it[2] + ')">' + rects(SPRITES[it[0]]) + '</g>';
    });
    // Rope the lanterns hang from, then a stone path.
    g += '<rect x="124" y="1" width="34" height="1" fill="' + INK + '"/>';
    // The stone path is drawn in CSS so it can span the full window width.
    return '<svg class="scene" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="xMidYMax meet" shape-rendering="crispEdges" aria-hidden="true" focusable="false">' + g + '</svg>';
  }

  return { svg: svg, scene: scene, CHARACTERS: CHARACTERS };
})();
