let counterValue = 0;
const value = document.querySelector("#value");
const btnDec = document.querySelector('[data-action="decrement"]');
const btnInc = document.querySelector('[data-action="increment"]');

const onClickBtnDec = (event) => {
  counterValue -= 1;
  value.textContent = counterValue;
  console.log(event);
  console.log(value.textContent);
};

const onClickBtnInc = (event) => {
  counterValue += 1;
  value.textContent = counterValue;
  console.log(event);
  console.log(value.textContent);
};

btnDec.addEventListener("click", onClickBtnDec);
btnInc.addEventListener("click", onClickBtnInc);
