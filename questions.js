// ポスターの一覧
// correct: true  … まちがいのないポスター（進むが正解）
// correct: false … まちがいのあるポスター（引き返すが正解）
// errors         … 解説に出す「誤」と「正」の組（いくつでも書けます）
// spots          … まちがいの場所 [左, 上, 横はば, たての長さ]（画像全体を1としたときの割合）
//                   引き返したあと、児童がこの場所をタップできたら正解になります。
//                   tools/spots.html を開くと、正しいポスターと見比べて自動で求められます。
//                   spots を書かないポスターは、引き返すだけで正解になります。
// easy: true     … やさしいモードでも出すポスター（大きく見やすい字のまちがい）
//                   書かないポスターは、ふつうモードだけで出ます。
// ポスターの種類は id の先頭（golf_ / map_ など）で見分けます。
//   同じ種類の正しいポスターは「種類_ok_01」という id にしてください。

const POSTERS = [
  //*****ゴルフ*****
  {
    id: "golf_ok_01",
    image: "images/golf_ok_01.jpg",
    correct: true
  },
  {
    id: "golf_ng_01",
    image: "images/golf_ng_01.jpg",
    correct: false,
    spots: [[0.3536, 0.7490, 0.0290, 0.0145]],
    errors: [
      { wrong: "お問い会わせ", right: "お問い合わせ" }
    ]
  },
  {
    id: "golf_ng_02",
    image: "images/golf_ng_02.jpg",
    correct: false,
    spots: [[0.5163, 0.6305, 0.0262, 0.0300]],
    easy: true,
    errors: [
      { wrong: "登緑", right: "登録" }
    ]
  },
  {
    id: "golf_ng_03",
    image: "images/golf_ng_03.jpg",
    correct: false,
    spots: [[0.5446, 0.2310, 0.0417, 0.0250]],
    easy: true,
    errors: [
      { wrong: "薬しもう", right: "楽しもう" }
    ]
  },
  //*****サッカー*****
  {
    id: "soccer_ok_01",
    image: "images/soccer_ok_01.jpg",
    correct: true
  },
  {
    id: "soccer_ng_01",
    image: "images/soccer_ng_01.jpg",
    correct: false,
    spots: [[0.0559, 0.8490, 0.0332, 0.0175]],
    easy: true,
    errors: [
      { wrong: "体みの日", right: "休みの日" }
    ]
  }, 
  {
    id: "soccer_ng_02",
    image: "images/soccer_ng_02.jpg",
    correct: false,
    spots: [[0.1931, 0.8435, 0.0361, 0.0250]],
    easy: true,
    errors: [
      { wrong: "大くの", right: "多くの" }
    ]
  },
    {
    id: "soccer_ng_03",
    image: "images/soccer_ng_03.jpg",
    correct: false,
    spots: [[0.8168, 0.6260, 0.0297, 0.0280]],
    easy: true,
    errors: [
      { wrong: "無科", right: "無料" }
    ]
  },
    {
    id: "soccer_ng_04",
    image: "images/soccer_ng_04.jpg",
    correct: false,
    spots: [[0.2058, 0.6330, 0.1337, 0.0935]],
    easy: true,
    errors: [
      { wrong: "「加」の左右が逆", right: "参加" }
    ]
  },
    //*****ペットショップ*****
  {
    id: "pet_ok_01",
    image: "images/pet_ok_01.jpg",
    correct: true
  },
  {
    id: "pet_ng_01",
    image: "images/pet_ng_01.jpg",
    correct: false,
    spots: [[0.1436, 0.3535, 0.1924, 0.0715]],
    easy: true,
    errors: [
      { wrong: "回転", right: "開店" }
    ]
  }, 
  {
    id: "pet_ng_02",
    image: "images/pet_ng_02.jpg",
    correct: false,
    spots: [[0.1782, 0.6015, 0.0552, 0.0240]],
    easy: true,
    errors: [
      { wrong: "短かい", right: "短い" }
    ]
  },
    {
    id: "pet_ng_03",
    image: "images/pet_ng_03.jpg",
    correct: false,
    spots: [[0.7001, 0.1000, 0.0226, 0.0165]],
    errors: [
      { wrong: "「初」の部首", right: "初回" }
    ]
  },
    {
    id: "pet_ng_04",
    image: "images/pet_ng_04.jpg",
    correct: false,
    spots: [[0.2893, 0.0490, 0.0325, 0.0155]],
    errors: [
      { wrong: "「達」の書き方", right: "ワンちゃん達" }
    ]
  },
    {
    id: "pet_ng_05",
    image: "images/pet_ng_05.jpg",
    correct: false,
    spots: [[0.2115, 0.9655, 0.0396, 0.0290]],
    easy: true,
    errors: [
      { wrong: "感心がある", right: "関心がある" }
    ]
  },
    {
    id: "pet_ng_06",
    image: "images/pet_ng_06.jpg",
    correct: false,
    spots: [[0.6655, 0.6975, 0.0156, 0.0115]],
    errors: [
      { wrong: "「械」の右上に点がない", right: "機械" }
    ]
  },
    {
    id: "pet_ng_07",
    image: "images/pet_ng_07.jpg",
    correct: false,
    spots: [[0.2687, 0.5415, 0.0219, 0.0200]],
    errors: [
      { wrong: "「印」の右側", right: "印象" }
    ]
  },
    {
    id: "pet_ng_08",
    image: "images/pet_ng_08.jpg",
    correct: false,
    spots: [[0.4972, 0.5490, 0.0233, 0.0135]],
    errors: [
      { wrong: "「固」の中は吉ではない", right: "固い" }
    ]
  },

    //*****お祭り*****
  {
    id: "fes_ok_01",
    image: "images/fes_ok_01.jpg",
    correct: true
  },
  {
    id: "fes_ng_01",
    image: "images/fes_ng_01.jpg",
    correct: false,
    spots: [[0.6400, 0.5160, 0.0530, 0.0375]],
    easy: true,
    errors: [
      { wrong: "厚さ", right: "暑さ" }
    ]
  }, 
  {
    id: "fes_ng_02",
    image: "images/fes_ng_02.jpg",
    correct: false,
    spots: [[0.9342, 0.9230, 0.0332, 0.0205]],
    easy: true,
    errors: [
      { wrong: "出登", right: "出発" }
    ]
  },
  {
    id: "fes_ng_03",
    image: "images/fes_ng_03.jpg",
    correct: false,
    spots: [[0.3190, 0.5715, 0.0198, 0.0130]],
    errors: [
      { wrong: "「博」の右上の点がない", right: "博物館" }
    ]
  },
    {
    id: "fes_ng_04",
    image: "images/fes_ng_04.jpg",
    correct: false,
    spots: [[0.8317, 0.5295, 0.0304, 0.0120]],
    errors: [
      { wrong: "「飛」がつきぬけていない", right: "飛ばす" }
    ]
  }, 
  {
    id: "fes_ng_05",
    image: "images/fes_ng_05.jpg",
    correct: false,
    spots: [[0.5347, 0.5875, 0.0184, 0.0155]],
    errors: [
      { wrong: "「通」がつきぬけていない", right: "大通り" }
    ]
  },

  //*****ごみ*****
  {
    id: "garbage_ok_01",
    image: "images/garbage_ok_01.jpg",
    correct: true
  },
  {
    id: "garbage_ng_01",
    image: "images/garbage_ng_01.jpg",
    correct: false,
    spots: [[0.2023, 0.3235, 0.0453, 0.0375]],
    easy: true,
    errors: [
      { wrong: "拾てて", right: "捨てて" }
    ]
  },
  {
    id: "garbage_ng_02",
    image: "images/garbage_ng_02.jpg",
    correct: false,
    spots: [[0.0997, 0.4135, 0.0382, 0.0210]],
    errors: [
      { wrong: "士曜日", right: "土曜日" }
    ]
  },
  {
    id: "garbage_ng_03",
    image: "images/garbage_ng_03.jpg",
    correct: false,
    spots: [[0.2504, 0.8010, 0.0382, 0.0275]],
    easy: true,
    errors: [
      { wrong: "意外", right: "以外" }
    ]
  },
  {
    id: "garbage_ng_04",
    image: "images/garbage_ng_04.jpg",
    correct: false,
    spots: [[0.0983, 0.9140, 0.0516, 0.0215]],
    easy: true,
    errors: [
      { wrong: "末来", right: "未来" }
    ]
  },
  {
    id: "garbage_ng_05",
    image: "images/garbage_ng_05.jpg",
    correct: false,
    spots: [[0.1761, 0.3800, 0.0368, 0.0185]],
    easy: true,
    errors: [
      { wrong: "羊透明", right: "半透明" }
    ]
  },
  {
    id: "garbage_ng_06",
    image: "images/garbage_ng_06.jpg",
    correct: false,
    spots: [[0.3303, 0.2920, 0.0212, 0.0165]],
    easy: true,
    errors: [
      { wrong: "「朝」の左が「車」になっている", right: "朝" }
    ]
  },
  {
    id: "garbage_ng_07",
    image: "images/garbage_ng_07.jpg",
    correct: false,
    spots: [[0.2645, 0.9205, 0.0198, 0.0140]],
    errors: [
      { wrong: "「然」の形", right: "自然" }
    ]
  },
  {
    id: "garbage_ng_08",
    image: "images/garbage_ng_08.jpg",
    correct: false,
    spots: [[0.5269, 0.9190, 0.0375, 0.0290]],
    errors: [
      { wrong: "「協」の「力」がはねていない", right: "協力" }
    ]
  },
  {
    id: "garbage_ng_09",
    image: "images/garbage_ng_09.jpg",
    correct: false,
    spots: [[0.2843, 0.8330, 0.0212, 0.0095]],
    errors: [
      { wrong: "「置」の形", right: "放置" }
    ]
  },

  //*****地図*****
  {
    id: "map_ok_01",
    image: "images/map_ok_01.jpg",
    correct: true
  },
  {
    id: "map_ng_01",
    image: "images/map_ng_01.jpg",
    correct: false,
    spots: [[0.3967, 0.3350, 0.0248, 0.0245]],
    easy: true,
    errors: [
      { wrong: "大坂", right: "大阪" }
    ]
  },
  {
    id: "map_ng_02",
    image: "images/map_ng_02.jpg",
    correct: false,
    spots: [[0.1033, 0.3675, 0.0325, 0.0160]],
    errors: [
      { wrong: "鳥根", right: "島根" }
    ]
  },
  {
    id: "map_ng_03",
    image: "images/map_ng_03.jpg",
    correct: false,
    spots: [[0.3607, 0.9060, 0.0396, 0.0285]],
    easy: true,
    errors: [
      { wrong: "宮木", right: "宮城" }
    ]
  },
  {
    id: "map_ng_04",
    image: "images/map_ng_04.jpg",
    correct: false,
    spots: [[0.1018, 0.3870, 0.0629, 0.0245]],
    easy: true,
    errors: [
      { wrong: "取鳥", right: "鳥取" }
    ]
  },
  {
    id: "map_ng_05",
    image: "images/map_ng_05.jpg",
    correct: false,
    spots: [[0.7192, 0.9065, 0.0403, 0.0280]],
    easy: true,
    errors: [
      { wrong: "鹿子島", right: "鹿児島" }
    ]
  },
  {
    id: "map_ng_06",
    image: "images/map_ng_06.jpg",
    correct: false,
    spots: [[0.7638, 0.6005, 0.0262, 0.0230]],
    easy: true,
    errors: [
      { wrong: "崎玉", right: "埼玉" }
    ]
  },
  {
    id: "map_ng_07",
    image: "images/map_ng_07.jpg",
    correct: false,
    spots: [[0.7709, 0.7060, 0.0283, 0.0250]],
    easy: true,
    errors: [
      { wrong: "郡馬", right: "群馬" }
    ]
  },
  {
    id: "map_ng_08",
    image: "images/map_ng_08.jpg",
    correct: false,
    spots: [[0.1061, 0.5300, 0.0311, 0.0220]],
    easy: true,
    errors: [
      { wrong: "能本", right: "熊本" }
    ]
  }
  // 文字だけのポスターも追加できます（画像は不要）
  // ,{
  //   id: "text_ng_01",
  //   text: "雨が振ってきた。",
  //   correct: false,
  //   errors: [ { wrong: "振って", right: "降って" } ]
  // }
];

// 正しいポスターが出る割合（0.5 = 半々）
const OK_RATE = 0.5;

// ----- ふつうモード -----
// 何回連続で正解したらクリアか
const GOAL = 8;
// ヒントを使える回数（0番出口からやりなおすと元にもどる）
const HINTS = 2;
// まちがいの場所をタップできる回数
const FIND_TRIES = 2;

// ----- やさしいモード -----
// 何番出口でクリアか
const EASY_GOAL = 4;
// ヒントを使える回数（-1 = 何回でも）
const EASY_HINTS = -1;
// まちがいの場所をタップできる回数
const EASY_FIND_TRIES = 3;
