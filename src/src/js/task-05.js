const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

//const getInputValue = (event) => {
  //return event.currentTarget.value !== ""
  //  ? (output.textContent = event.currentTarget.value)
    //: (output.textContent = "Anonymous");

  //if (event.currentTarget.value !== "") {
  //output.textContent = event.currentTarget.value;
  //} else {
  // output.textContent = "Anonymous";
  // }
//};
//textInput.addEventListener("input", getInputValue)

textInput.addEventListener("input", (event) => {
  return event.currentTarget.value !== ""
    ? (output.textContent = event.currentTarget.value)
    : (output.textContent = "Anonymous")
});
