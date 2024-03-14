import "virtual:svg-icons-register";
import "../scss/style.scss";
import home from "./home";
import modals from "./modals";
import menu from "./menu";
import project from "./project";
import smoothScrolling from "./smoothScrolling";

document.addEventListener("DOMContentLoaded", () => {
  smoothScrolling();
  home();
  modals();
  menu();
  project();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
