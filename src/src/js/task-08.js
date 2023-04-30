const form = document.querySelector('.login-form')
form.addEventListener('submit', submitForm)
const data = {}

function submitForm(event) {
  event.preventDefault();

  const email = event.target.elements.email;
  const password = event.target.elements.password;

  if (email.value === "" || password.value === "") {
    alert("Please enter login or password");
  } else {
    data.email = email.value;
    data.password = password.value;
    console.log(data);
  }
  event.target.reset();
}

  