const input = document.querySelector('#validation-input');
input.addEventListener('blur', onBlurBorderColor);

function onBlurBorderColor(event) {
  const inputDataLength = Number(input.dataset.length);
  const inputValueLength = Number(input.value.length);

  console.log(inputDataLength);
  console.log(inputValueLength);

  if (inputValueLength === inputDataLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}