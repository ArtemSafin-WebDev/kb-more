import "virtual:svg-icons-register";
import "../scss/style.scss";
import intro from "./intro";
import modals from "./modals";
import menu from "./menu";

document.addEventListener("DOMContentLoaded", () => {
  intro();
  modals();
  menu();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
