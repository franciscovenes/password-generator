const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let pwdOneEl = document.getElementById("password-one");
let pwdTwoEl = document.getElementById("password-two");

let pwdLengthEl = document.getElementById("pwd-length-input");

let noNumbersEl = document.getElementById("no-numbers");
let noSymbolsEl = document.getElementById("no-symbols");

let toggleModeEl = document.getElementById("toggle-mode");

let mode = true;

function getPasswords() {
  pwdOneEl.textContent = generatePassword();
  pwdTwoEl.textContent = generatePassword();
}

function generatePassword() {
  let pwd = "";
  for (let i = 0; i < pwdLengthEl.value; i++) {
    pwd += getRandomCharacter();
  }
  return pwd;
}

function getRandomCharacter() {
  let arr = [];

  if (noNumbersEl.checked && noSymbolsEl.checked) {
    arr = characters.filter((char) => /[A-Za-z]/.test(char));
  } else if (noNumbersEl.checked && !noSymbolsEl.checked) {
    arr = characters.filter((char) => /[^0-9]/.test(char));
  } else if (!noNumbersEl.checked && noSymbolsEl.checked) {
    arr = characters.filter((char) => /[A-Za-z0-9]/.test(char));
  } else {
    arr = characters;
  }

  return arr[Math.floor(Math.random() * arr.length)];
}

function copyPassword(num) {
  if (num === 1) {
    navigator.clipboard.writeText(pwdOneEl.textContent);
  } else {
    navigator.clipboard.writeText(pwdTwoEl.textContent);
  }
}

function toggleMode() {
  document.querySelector(".container").classList.toggle("light-mode");
  document.querySelector(".highlight").classList.toggle("highlight-light");
  document.querySelector(".mode-btn").classList.toggle("light-mode-btn");
  let allCopyImg = document.querySelectorAll(".copy-img-btn");
  for (let i = 0; i < allCopyImg.length; i++) {
    allCopyImg[i].classList.toggle("copy-img-btn-light");
  }
}
