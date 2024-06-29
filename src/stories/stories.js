import "../assets/javascripts/topbars.js";
import "../assets/styles/style.scss";
import "../stories/stories.scss";

const navLinkElts = document.querySelectorAll(".nav_link");
const windowPathname = window.location.pathname;

navLinkElts.forEach((navLinkElt) => {
  const navLinkPathname = new URL(navLinkElt.href).pathname;

  if (windowPathname === navLinkPathname) {
    navLinkElt.classList.add("pageActive");
  }
});

console.log(windowPathname);
