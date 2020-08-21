const body = document.querySelector("body");
const IMG_NUMBER = 2;

function handleImgLoad() {
  console.log("finish");
}

function paintImage(imgNumber) {
  const image = new Image();
  image.classList.add("bgName");
  image.src = `image/${imgNumber + 1}.jpg`;
  body.appendChild(image);
  image.addEventListener("loadend", handleImgLoad);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
