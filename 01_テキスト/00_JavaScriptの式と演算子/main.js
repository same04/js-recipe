// TRY: 練習問題１
//114106
//"114106"

// TRY: 練習問題２
// x = 5

// TRY: 練習問題３
let happiness = 34 // 0 から 100 までの数値を代入してください
let sleepiness = 91 // 0 から 100 までの数値を代入してください

const isHappy = happiness > 90
const isSleepy = sleepiness > 90

const isNotHappyAndSleepy = !isHappy && isSleepy
// 0 <= ishappy <= 90
// 90 < isSleepy <= 100

// 以下のコメントアウトを外して確認してみましょう
console.log(
  "isNotHappyAndSleepy" + "は" + true + "ですか？",
  isNotHappyAndSleepy,
)
console.log("isHappy", isHappy)
console.log("isSleepy", isSleepy)

// TRY: 練習問題4
//const isHappyAndNotSleepy = isHappy && !isSleepy
//ギーク太郎くんの考えは間違い.
