"use strict";
const guessNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".number").textContent = guessNumber;
document.querySelector(".check").addEventListener("click", function () {
  const inp = Number(document.querySelector(".guess").value);
  let hscore = document.querySelector(".label-highscore").textContent;
  // let score =
  if (!inp) {
    document.querySelector(".message").textContent =
      "🛑 Error: Please enter a number";
    document.querySelector("body").style.backgroundColor = "red";
  } else if (inp === guessNumber) {
    document.querySelector(".message").textContent = "🎉You Win!";
    document.querySelector("body").style.backgroundColor = "green";
    if (score > hscore) {
      hscore = score;
      score = 20;
    }
    document.querySelector(".highscore").textContent = score;
  } else if (inp > guessNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "🥵Too Close! and Large!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
      "Oh!😭 You Lose...";
      document.querySelector(".score").textContent = 0;
    }
  } else if (inp < guessNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "⚡Too Close! and Small!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "Oh!😭 You Lose...";
      document.querySelector(".score").textContent = 0;
    }
  }
});
// const msg = document.querySelector(".message").textContent;
// }else if(inp === guessNumber)
// {
//   msg =
// }

// if (inp < guessNumber) {
//   msg = "Too Small and Close!";
//   score--;
// } else if (inp > guessNumber) {
//   msg = "Too Big and Close!";
//   score--;
// } else {
//   msg = "Congrats You Win!";
//   if (hscore < score) hscore = score;
//   score = 0;
//   document.querySelector("body").style.backgroundColor = "green";
// }
