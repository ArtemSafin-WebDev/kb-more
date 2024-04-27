import "virtual:svg-icons-register";
import "../scss/style.scss";
import home from "./home";
import modals from "./modals";
import menu from "./menu";
import project from "./project";
import smoothScrolling from "./smoothScrolling";
import about from "./about";
import contactsBlock from "./contactsBlock";
import forms from "./forms";
import subjectsBtn from "./subjectsBtn";
import loadMore from "./loadMore";
import newsSingle from "./newsSingle";

document.addEventListener("DOMContentLoaded", () => {
  smoothScrolling();
  home();
  subjectsBtn();
  modals();
  menu();
  project();
  about();
  contactsBlock();
  forms();
  loadMore();
  newsSingle();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
