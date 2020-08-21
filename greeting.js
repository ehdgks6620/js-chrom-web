const form = document.querySelector(".js-greetForm");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");
const USER_LS = "currentUser";

function saveUser(text) {
  localStorage.setItem(USER_LS, text);
}
function paintGreeting(text) {
  greeting.innerText = `Hello ${text}`;
  greeting.classList.add("showing");
  form.classList.remove("showing");
}

function handleSubmit(e) {
  e.preventDefault();
  console.log(input.value);
  saveUser(input.value);
}

function askForName() {
  form.classList.add("showing");
  form.addEventListener("submit", handleSubmit);
}

function init() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

init();
