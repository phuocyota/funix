const form = document.getElementById("form");
const nameTxt = document.getElementById("nameTxt");
const emailTxt = document.getElementById("emailTxt");
const subjectTxt = document.getElementById("subjectTxt");
const messageTxt = document.getElementById("messageTxt");
let check = true;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const valid = validateInputs();
  if (valid) window.location = "/index.html";
});

nameTxt.addEventListener("change", (e) => {
  e.preventDefault();
  validName(e.target.value.trim());
});

emailTxt.addEventListener("change", (e) => {
  e.preventDefault();
  validEmail(e.target.value.trim());
});

subjectTxt.addEventListener("change", (e) => {
  e.preventDefault();
  validSubject(e.target.value.trim());
});

messageTxt.addEventListener("change", (e) => {
  e.preventDefault();
  validMessage(e.target.value.trim());
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  check = false;
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  check = true;
  errorDisplay.innerText = "";
};

const validName = (nameValue) => {
  if (nameValue === "") {
    setError(nameTxt, "Please fill out your name.");
  } else if (nameValue.length > 100) {
    setError(nameTxt, "Your name should not exceed 100 characters.");
  } else setSuccess(nameTxt);
};

const validEmail = (emailValue) => {
  if (emailValue === "") {
    setError(emailTxt, "Please fill out your email.");
  } else if (emailValue.length > 100) {
    setError(emailTxt, "Your email should not exceed 100 characters.");
  } else if (
    emailValue.match(/^[a-z]+[a-zA-Z0-9]+@([a-z]+[.]{1}[a-z]+)+$/g) == null
  ) {
    setError(emailTxt, "Email is not validate");
  } else setSuccess(emailTxt);
};

const validSubject = (subjectValue) => {
  if (subjectValue === "") {
    setError(subjectTxt, "Please fill out the subject.");
  } else if (subjectValue.length < 50) {
    setError(subjectTxt, "Subject should not shorter than 50 characters.");
  } else if (subjectValue.length > 250) {
    setError(subjectTxt, "Subject should not exceed 250 characters.");
  } else setSuccess(subjectTxt);
};

const validMessage = (messageValue) => {
  if (messageValue === "") {
    setError(messageTxt, "Please fill out the message.");
  } else if (messageValue.length > 500) {
    setError(messageTxt, "Message should not exceed 500 characters.");
  } else setSuccess(messageTxt);
};

const validateInputs = () => {
  validName(nameTxt.value.trim());
  validEmail(emailTxt.value.trim());
  validSubject(subjectTxt.value.trim());
  validMessage(messageTxt.value.trim());
  return check;
};
