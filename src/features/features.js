import "../assets/javascripts/topbars.js";
import "../assets/styles/style.scss";
import "../features/features.scss";

const navLinkElts = document.querySelectorAll(".nav_link");
const windowPathname = window.location.pathname;
const smallViewportFeat = window.matchMedia("(max-width: 480px)");
const mediumViewportFeat = window.matchMedia(
  "(min-width: 768px) and (max-width: 1024px)"
);
const featuresImg1 = document.getElementById("features-img1");
const smallImgFeat = new Image();
smallImgFeat.src = "../assets/features/mobile/hero.jpg";
const mediumImgFeat = new Image();
mediumImgFeat.src = "../assets/features/tablet/hero.jpg";

navLinkElts.forEach((navLinkElt) => {
  const navLinkPathname = new URL(navLinkElt.href).pathname;

  if (windowPathname === navLinkPathname) {
    navLinkElt.classList.add("pageActive");
  }
});

smallViewportFeat.addEventListener("change", () => {
  if (smallViewportFeat.matches) {
    featuresImg1.src = smallImgFeat.src;
  }
});

mediumViewportFeat.addEventListener("change", () => {
  if (mediumViewportFeat.matches) {
    featuresImg1.src = mediumImgFeat.src;
  }
});

console.log(mediumImgFeat.src);
