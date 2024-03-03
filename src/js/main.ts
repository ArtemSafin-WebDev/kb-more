import "virtual:svg-icons-register";
import "../scss/style.scss";
import intro from "./intro";

document.addEventListener("DOMContentLoaded", () => {
  intro();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
