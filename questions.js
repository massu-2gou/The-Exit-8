// ポスターの一覧
// correct: true  … まちがいのないポスター（進むが正解）
// correct: false … まちがいのあるポスター（引き返すが正解）
// errors         … 解説に出す「誤」と「正」の組（いくつでも書けます）

const POSTERS = [
  {
    id: "golf_ok_01",
    image: "posters/golf_ok_01.jpg",
    correct: true
  },
  {
    id: "golf_ng_01",
    image: "posters/golf_ng_01.jpg",
    correct: false,
    errors: [
      { wrong: "お問い会わせ", right: "お問い合わせ" }
    ]
  },
  {
    id: "golf_ng_02",
    image: "posters/golf_ng_02.jpg",
    correct: false,
    errors: [
      { wrong: "登緑", right: "登録" }
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

// 何回連続で正解したらクリアか
const GOAL = 8;
