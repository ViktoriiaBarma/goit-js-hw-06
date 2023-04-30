const input = document.getElementById("font-size-control");
const text = document.getElementById("text");

function fontSizeControl(event) {
  text.style.fontSize = event.currentTarget.value + "px";
  console.log(event.currentTarget.value);
}
input.addEventListener("input", fontSizeControl);
