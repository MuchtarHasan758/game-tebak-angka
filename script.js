"use strict";

const submitGame = document.querySelector(".check");
const resetGame = document.querySelector(".reset");
const tebakan = document.querySelector("#tebakan");
let greetname = document.querySelector(".greeting-name");
let nomor = document.querySelector(".nomor");
nomor = Math.trunc(Math.random() * 40) + 1;
let score = 20;
let highScore = 0;
let waktuSekarang = new Date().getHours();
console.log(waktuSekarang);
let namaPrompt = prompt(`Isi nama/panggilan kamu (bebas)`);
let salam =
  waktuSekarang >= 5 && waktuSekarang < 10
    ? "Selamat pagi!"
    : waktuSekarang >= 10 && waktuSekarang < 15
    ? "Selamat siang!"
    : waktuSekarang >= 15 && waktuSekarang < 18
    ? "Selamat sore!"
    : "Selamat malam!";
if (namaPrompt != null) {
  greetname.textContent = `${salam} ${namaPrompt}`;
} else {
  greetname.textContent = `${salam} Pengunjung`;
}

const displayPesan = function (pesan) {
  document.querySelector(".pesan").textContent = pesan;
};
const displaySecretNumber = function (number) {
  document.querySelector(".nomor").textContent = number;
};
const displayScore = function (number) {
  document.querySelector(".score").textContent = number;
};
const displayHighScore = function (number) {
  document.querySelector(".highscore").textContent = number;
};
const displayResetBtn = function (value) {
  resetGame.style.display = value;
};

submitGame.addEventListener("click", function () {
  const valTebakan = parseInt(tebakan.value);
  if (!valTebakan) {
    displayPesan("Nomor nol/kosong");
  } else if (valTebakan < 0) {
    displayPesan("Jangan minus ⛔");
  } else if (valTebakan !== nomor) {
    if (score > 1) {
      displayPesan(
        valTebakan > nomor
          ? "Tebakan kamu kelebihan, turunkan lagi ⬇️"
          : "Tebakan kamu kurang, naikkan lagi ⬆️"
      );
      score--;
      displayScore(score);
    } else {
      displayPesan("Game over ☠️");
      displayScore(0);
      displayResetBtn("block");
    }
  } else if (valTebakan === nomor) {
    displayPesan("Yeah kamu menang 🎉, Selamat ya 🫰🗿");
    displaySecretNumber(valTebakan);
    displayResetBtn("block");
    if (score > highScore) {
      displayHighScore(score);
    }
  }
});

resetGame.addEventListener("click", function () {
  nomor = Math.trunc(Math.random() * 20) + 1;
  displaySecretNumber("?");
  displayPesan("Silahkan submit nomor...");
  score = 20;
  displayScore(20);
  tebakan.value = "";
  displayResetBtn("none");
});
/* let tebakanNomor = document.querySelector(".tebakan").textContent; */
