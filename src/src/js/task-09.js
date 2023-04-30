function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const textColor = document.querySelector(".color");
const body = document.body;

const changeColor = () => {
  textColor.textContent = getRandomHexColor();
  body.style.backgroundColor = textColor.textContent;
  console.log(textColor.textContent)
};

changeColorBtn.addEventListener("click", changeColor);
