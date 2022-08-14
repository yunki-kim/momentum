const loginContainer = document.querySelector("#login-container");
const mainContainer = document.querySelector("#main-container");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const logoutButton = document.querySelector("#logout");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginInput.value = null;
  localStorage.setItem(USERNAME_KEY, username);
  paintMain(username);
}

function onLogoutSubmit(event) {
  event.preventDefault();
  localStorage.removeItem(USERNAME_KEY);
  localStorage.removeItem("todos");
  document.querySelector("#todo-form input").value = "";
  document.querySelector("#todo-list").textContent = "";
  document.querySelector("#pause") = true;
  mainContainer.classList.add(HIDDEN_CLASSNAME);
  loginContainer.classList.remove(HIDDEN_CLASSNAME);
}

function paintMain(username) {
  greeting.innerText = `Hello, ${username}`;
  loginContainer.classList.add(HIDDEN_CLASSNAME);
  mainContainer.classList.remove(HIDDEN_CLASSNAME);
}

logoutButton.addEventListener("click", onLogoutSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintMain(savedUsername);
}
