import "virtual:svg-icons-register";
import "../scss/style.scss";
import home from "./home";
import modals from "./modals";
import menu from "./menu";

document.addEventListener("DOMContentLoaded", () => {
  home();
  modals();
  menu();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
