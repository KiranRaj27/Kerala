var email = document.getElementById("email");
var password = document.getElementById("password");
var form = document.getElementById("form");
var emailText = document.getElementById("emailtext");
var passText = document.getElementById("passtext");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  validateEmail();
  validatePassword();
}

function validateEmail() {
  email.innerText = "";
  let exp1 = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\.]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
  if (email.value === "") {
    emailText.innerText = "cannot be blank";
  } else if (email.value != exp1) {
    emailText.innerText = "Invalid formate";
  } else if (email.value == exp1) {
    emailText.innerText = "";
    return true;
  } else {
    email.innerText = "";
  }
}

function validatePassword() {
  let exp2 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!]).{8,32}$/;
  if (password.value === "") {
    passText.innerText = "Password cannot blank";
  } else if (passText.value != exp2) {
    passText.innerText =
      "minimum 8 charector, atleast one uppercase,lowercase and number";
  } else {
    return true;
  }
}
