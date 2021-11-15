const email = document.getElementById("email");
const password = document.getElementById("pass");

let regExpStrong3 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validateLogin() {
  valid = true;

  const email = document.getElementById("email");
  const password = document.getElementById("pass");

  let regExpWeak1 = /[a-zA-Z]/;
  let regExpMedium2 = /\d+/;
  let regExpStrong3 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

  if (email.value.trim() === "") {
    valid = false;
    setErrorFor(email, "Email cannot be blank");
  } else if (!checkMail(email.value.trim())) {
    setErrorFor(email, "Not a valid email");
    valid = false;
  } else {
    setSuccessFor(email, " ");
  }

  if (password.value.trim() === "") {
    setErrorFor(password, "Password cannot be blank");
    valid = false;
  } else if (
    password.value.trim().length >= 8 &&
    password.value.match(regExpWeak1) &&
    password.value.match(regExpMedium2) &&
    password.value.match(regExpStrong3)
  ) {
    setSuccessFor(password, " ");
  } else {
    setErrorFor(password, " Password is not in correct format");
    valid = false;
  }
  return valid;
}

function myfn() {
  const x = document.getElementById("pass");
  const y = document.getElementById("hide1");
  const z = document.getElementById("hide2");

  if (x.type == "password") {
    x.type = "text";
    y.style.display = "block";
    z.style.display = "none";
  } else {
    x.type = "password";
    y.style.display = "none";
    z.style.display = "block";
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "box error";
  small.innerText = message;
}

function setSuccessFor(input, message) {
  const formControl = input.parentElement;

  const small = formControl.querySelector("small");
  formControl.className = "box success";

  small.innerText = message;
}

function checkMail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
