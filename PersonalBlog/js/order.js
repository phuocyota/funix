const form = document.getElementById("form");
const cake = document.getElementById("cake");
const nameTxt = document.getElementById("nameTxt");
const messageTxt = document.getElementById("messageTxt");
const include = document.getElementById("include");
const deliverDate = document.getElementById("deliverDate");
const deliverTo = document.getElementById("deliverTo");
const cbdChoice = document.getElementById("cbdChoice");
let check = true;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const valid = validateInputs();
  if (valid) window.location = "/index.html";
});

cake.addEventListener("change", (e) => {
  e.preventDefault();
  validCake(e.target.value.trim());
});

nameTxt.addEventListener("change", (e) => {
  e.preventDefault();
  validName(e.target.value.trim());
});

messageTxt.addEventListener("change", (e) => {
  e.preventDefault();
  validMessage(e.target.value.trim());
});

deliverDate.addEventListener("change", (e) => {
  e.preventDefault();
  validDeliverDate(e.target.value.trim());
});

deliverTo.addEventListener("change", (e) => {
  e.preventDefault();
  validDeliverTo(e.target.value.trim());
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

const validCake = (cakeValue) => {
  if (cakeValue === "cake0") {
    setError(cake, "Please select our product.");
  } else setSuccess(cake);
};

const validName = (nameValue) => {
  if (!nameValue) {
    setError(nameTxt, "Please fill out your name.");
  } else if (nameValue > 100) {
    setError(nameTxt, "Your name should not exceed 100 characters.");
  } else setSuccess(nameTxt);
};

const validMessage = (messageValue) => {
  if (messageValue.length > 30) {
    setError(messageTxt, "Your name should not exceed 30 characters.");
  } else setSuccess(messageTxt);
};

const validDeliverDate = (deliverDateValue) => {
  if (!deliverDateValue) {
    setError(deliverDate, "Please fill out the deliver date.");
  } else setSuccess(deliverDate);
};

const validDeliverTo = (deliverToValue) => {
  if (!deliverToValue) {
    setError(deliverTo, "Please fill out the address.");
  } else if (deliverToValue.length > 500) {
    setError(deliverTo, "Address should not exceed 500 characters.");
  } else setSuccess(deliverTo);
};

const validateInputs = () => {
  validCake(cake.value);
  validName(nameTxt.value.trim());
  validMessage(messageTxt.value.trim());
  validDeliverDate(deliverDate.value.trim());
  validDeliverTo(deliverTo.value.trim());
  return check;
};
