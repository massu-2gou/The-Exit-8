// ポスターの一覧
// correct: true  … まちがいのないポスター（進むが正解）
// correct: false … まちがいのあるポスター（引き返すが正解）
// errors         … 解説に出す「誤」と「正」の組（いくつでも書けます）

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
    errors: [
      { wrong: "お問い会わせ", right: "お問い合わせ" }
    ]
  },
  {
    id: "golf_ng_02",
    image: "images/golf_ng_02.jpg",
    correct: false,
    errors: [
      { wrong: "登緑", right: "登録" }
    ]
  },
  {
    id: "golf_ng_03",
    image: "images/golf_ng_03.jpg",
    correct: false,
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
    errors: [
      { wrong: "体みの日", right: "休みの日" }
    ]
  }, 
  {
    id: "soccer_ng_02",
    image: "images/soccer_ng_02.jpg",
    correct: false,
    errors: [
      { wrong: "大くの", right: "多くの" }
    ]
  },
    {
    id: "soccer_ng_03",
    image: "images/soccer_ng_03.jpg",
    correct: false,
    errors: [
      { wrong: "無科", right: "無料" }
    ]
  },
    {
    id: "soccer_ng_04",
    image: "images/soccer_ng_04.jpg",
    correct: false,
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
    errors: [
      { wrong: "回転", right: "開店" }
    ]
  }, 
  {
    id: "pet_ng_02",
    image: "images/pet_ng_02.jpg",
    correct: false,
    errors: [
      { wrong: "短かい", right: "短い" }
    ]
  },
    {
    id: "pet_ng_03",
    image: "images/pet_ng_03.jpg",
    correct: false,
    errors: [
      { wrong: "「初」の部首", right: "初回" }
    ]
  },
    {
    id: "pet_ng_04",
    image: "images/pet_ng_04.jpg",
    correct: false,
    errors: [
      { wrong: "「達」の書き方", right: "ワンちゃん達" }
    ]
  },
    {
    id: "pet_ng_05",
    image: "images/pet_ng_05.jpg",
    correct: false,
    errors: [
      { wrong: "感心がある", right: "関心がある" }
    ]
  },
    {
    id: "pet_ng_06",
    image: "images/pet_ng_06.jpg",
    correct: false,
    errors: [
      { wrong: "「械」の右上に点がない", right: "機械" }
    ]
  },
    {
    id: "pet_ng_07",
    image: "images/pet_ng_07.jpg",
    correct: false,
    errors: [
      { wrong: "「印」の右側", right: "印象" }
    ]
  },
    {
    id: "pet_ng_08",
    image: "images/pet_ng_08.jpg",
    correct: false,
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
    errors: [
      { wrong: "厚さ", right: "暑さ" }
    ]
  }, 
  {
    id: "fes_ng_02",
    image: "images/fes_ng_02.jpg",
    correct: false,
    errors: [
      { wrong: "出登", right: "出発" }
    ]
  },
  {
    id: "fes_ng_03",
    image: "images/fes_ng_03.jpg",
    correct: false,
    errors: [
      { wrong: "「博」の右上の点がない", right: "博物館" }
    ]
  },
    {
    id: "fes_ng_04",
    image: "images/fes_ng_04.jpg",
    correct: false,
    errors: [
      { wrong: "「飛」がつきぬけていない", right: "飛ばす" }
    ]
  }, 
  {
    id: "fes_ng_05",
    image: "images/fes_ng_05.jpg",
    correct: false,
    errors: [
      { wrong: "「通」がつきぬけていない", right: "大通り" }
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
const OK_RATE = 0.3;

// 何回連続で正解したらクリアか
const GOAL = 8;
