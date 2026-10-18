// ポスターの一覧
// correct: true  … まちがいのないポスター（進むが正解）
// correct: false … まちがいのあるポスター（引き返すが正解）
// errors         … 解説に出す「誤」と「正」の組（いくつでも書けます）

const POSTERS = [
  //*****ゴルフ*****
  {
    id: "golf_ok_01",
    image: "images/golf_ok_01.png",
    correct: true
  },
  {
    id: "golf_ng_01",
    image: "images/golf_ng_01.png",
    correct: false,
    errors: [
      { wrong: "登緑", right: "登録" },
      { wrong: "お問い会わせ", right: "お問い合わせ" }
    ]
  },
  {
    id: "golf_ng_02",
    image: "images/golf_ng_02.png",
    correct: false,
    errors: [
      { wrong: "登緑", right: "登録" }
    ]
  },
  //*****サッカー*****
  {
    id: "soccer_ok_01",
    image: "images/soccer_ok_01.png",
    correct: true
  },
  {
    id: "soccer_ng_01",
    image: "images/soccer_ng_01.png",
    correct: false,
    errors: [
      { wrong: "体みの日", right: "休みの日" }
    ]
  }, 
  {
    id: "soccer_ng_02",
    image: "images/soccer_ng_02.png",
    correct: false,
    errors: [
      { wrong: "大くの", right: "多くの" }
    ]
  },
    {
    id: "soccer_ng_03",
    image: "images/soccer_ng_03.png",
    correct: false,
    errors: [
      { wrong: "無科", right: "無料" }
    ]
  },
    {
    id: "soccer_ng_04",
    image: "images/soccer_ng_04.png",
    correct: false,
    errors: [
      { wrong: "ﾛｶ", right: "ｶﾛ" }
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
