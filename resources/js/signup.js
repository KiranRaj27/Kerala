// ***************** Get the item and store it in a variable*****************

var name = document.getElementById("name");
var username = document.getElementById("username");
var email = document.getElementById("email");
var number = document.getElementById("mob");
var password = document.getElementById("pass");
var rePassword = document.getElementById("pass2");

// ************** regular expressions **************
let regExpMobile = /^([0-9]{3})([.-\s])?([0-9]{3})([.-\s])?([0-9]{4})$/;
let nameExp = /^([A-Za-z]{3})$/;
let emailExp =
  /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\.]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

function validateSignup() {
  valid = true;

  const name = document.getElementById("name");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const number = document.getElementById("mob");
  const password = document.getElementById("pass");
  const rePassword = document.getElementById("pass2");

  let regExpWeak1 = /[a-zA-Z]/;
  let regExpMedium2 = /\d+/;
  let regExpStrong3 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
  let regExpMobile = /^([0-9]{3})([.-\s])?([0-9]{3})([.-\s])?([0-9]{4})$/;
  let nameExp = /^([A-Za-z]{3})$/;
  let emailExp =
    /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\.]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;

  if (name.value.trim() === "") {
    setErrorFor(name, "Name cannot be blank");
    valid = false;
  } else if (!checkFirst(name.value.trim())) {
    setErrorFor(name, "Need atleast 3 charector");
    valid = false;
  } else {
    setSuccessFor(name, "");
  }

  if (username.value.trim() === "") {
    valid = false;
    setErrorFor(username, "Username cannot be blank");
  } else if (!checkUser(username.value.trim())) {
    setErrorFor(username, "Need atleast 3 charector whitespace not allowed");
    valid = false;
  } else {
    setSuccessFor(username, " ");
  }

  if (email.value.trim() === "") {
    valid = false;
    setErrorFor(email, "Email cannot be blank");
  } else if (!checkEmail(email.value.trim())) {
    setErrorFor(email, "Not a valid email");
    valid = false;
  } else {
    setSuccessFor(email, " ");
    valid = true;
  }

  if (number.value.trim() === "") {
    valid = false;
    setErrorFor(number, "Phone number cannot be blank");
  } else if (number.value.trim().match(regExpMobile)) {
    setSuccessFor(number, "");
  } else {
    setErrorFor(number, "Invalid number");
    valid = false;
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
    setErrorFor(password, " ");
    valid = false;
  }

  if (rePassword.value.trim() === "") {
    setErrorFor(rePassword, "Password cannot be blank");
    valid = false;
  } else if (password.value !== rePassword.value) {
    setErrorFor(rePassword, "Passwords does not match");
    valid = false;
  } else {
    setSuccessFor(rePassword, "");
  }
  return valid;
}

function trigger() {
  const indicator = document.querySelector(".indicator");
  const s = document.getElementById("pass");
  const weak = document.querySelector(".weak");
  const medium = document.querySelector(".medium");
  const strong = document.querySelector(".strong");
  const text = document.querySelector(".text");
  let regExpWeak = /[a-z]/;
  let regExpMedium = /\d+/;
  let regExpStrong = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

  if (s.value != "") {
    indicator.style.display = "block";
    indicator.style.display = "flex";
    if (
      s.value.length <= 3 &&
      (s.value.match(regExpWeak) ||
        s.value.match(regExpMedium) ||
        s.value.match(regExpStrong))
    )
      no = 1;
    if (
      s.value.length >= 6 &&
      ((s.value.match(regExpWeak) && s.value.match(regExpMedium)) ||
        (s.value.match(regExpMedium) && s.value.match(regExpStrong)) ||
        (s.value.match(regExpWeak) && s.value.match(regExpStrong)))
    )
      no = 2;
    if (
      s.value.length >= 8 &&
      s.value.match(regExpWeak) &&
      s.value.match(regExpMedium) &&
      s.value.match(regExpStrong)
    )
      no = 3;
    if (no == 1) {
      weak.classList.add("active");
      text.style.display = "block";
      text.textContent = "Need atleast one uppercase ,lowercase and numeric";
      text.classList.add("weak");
    }
    if (no == 2) {
      medium.classList.add("active");
      text.textContent =
        "Medium atleast one uppercase,lowercase and number must include";
      text.classList.add("medium");
    } else {
      medium.classList.remove("active");
      text.classList.remove("medium");
    }
    if (no == 3) {
      weak.classList.add("active");
      medium.classList.add("active");
      strong.classList.add("active");
      text.textContent = "Your password is strong";
      text.classList.add("strong");
    } else {
      strong.classList.remove("active");
      text.classList.remove("strong");
    }
  } else {
    indicator.style.display = "none";
    text.style.display = "none";
  }
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

function checkEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function checkUser(username) {
  return /^[a-z0-9_-]{3,15}$/.test(username);
}

function checkFirst(name) {
  return /^[a-z0-9_-\s]{3,15}$/.test(name);
}

// function checkPass(password) {
//   return /^[a-z0-9_-\s]{3,15}$/.test(password);
// }
