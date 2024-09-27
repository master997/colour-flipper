const redBtn = document.querySelector(".red");
const greenBtn = document.querySelector(".green");
const blueBtn = document.querySelector(".blue");
const randomBtn = document.querySelector(".random");

const body = document.querySelector("body");

const setColour = function (name) {
  body.style.backgroundColor = name;
};
const randomColour = function () {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  const random = `rgb(${red},${green},${blue})`;
  body.style.backgroundColor = random;
};

redBtn.addEventListener("click", function () {
  setColour("red");
});
greenBtn.addEventListener("click", function () {
  setColour("green");
});
blueBtn.addEventListener("click", function () {
  setColour("blue");
});
randomBtn.addEventListener("click", function () {
  randomColour();
});
