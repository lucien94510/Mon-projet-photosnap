import "../assets/javascripts/topbars.js";
import "../assets/styles/style.scss";
import "../pricing/pricing.scss";

const navLinkElts = document.querySelectorAll(".nav_link");
const windowPathname = window.location.pathname;
const interruptor = document.querySelector(".interruptor");
const rewind = document.querySelector(".rewind");
const yearly = document.querySelector(".yearly");
const perYear = document.querySelectorAll(".peryear");
const basicPrice = document.querySelector(".basic");
const proPrice = document.querySelector(".pro");
const businessPrice = document.querySelector(".business");
const smallViewportPrice = window.matchMedia("(max-width: 480px)");
const mediumViewportPrice = window.matchMedia(
  "(min-width: 768px) and (max-width: 1024px)"
);
const priceImg1 = document.getElementById("pricing-img1");
const smallImgPrice = new Image();
smallImgPrice.src = "../assets/pricing/mobile/hero.jpg";
const mediumImgPrice = new Image();
mediumImgPrice.src = "../assets/pricing/tablet/hero.jpg";

navLinkElts.forEach((navLinkElt) => {
  const navLinkPathname = new URL(navLinkElt.href).pathname;

  if (windowPathname === navLinkPathname) {
    navLinkElt.classList.add("pageActive");
  }
});

interruptor.addEventListener("click", () => {
  rewind.classList.toggle("rewind");
  yearly.classList.toggle("yearly");
  if (yearly.classList.contains("yearly")) {
    for (let i = 0; i < perYear.length; i++) {
      perYear[i].innerHTML = "peryear";
    }
  } else {
    for (let i = 0; i < perYear.length; i++) {
      perYear[i].innerHTML = "permonth";
    }
  }

  if (yearly.classList.contains("yearly")) {
    basicPrice.innerHTML = "$ 190.00";
  } else {
    basicPrice.innerHTML = "$ 19.00";
  }

  if (yearly.classList.contains("yearly")) {
    proPrice.innerHTML = "$ 390.00";
  } else {
    proPrice.innerHTML = "$ 39.00";
  }

  if (yearly.classList.contains("yearly")) {
    businessPrice.innerHTML = "$ 990.00";
  } else {
    businessPrice.innerHTML = "$ 99.00";
  }
});

smallViewportPrice.addEventListener("change", () => {
  if (smallViewportPrice.matches) {
    priceImg1.src = smallImgPrice.src;
  }
});

mediumViewportPrice.addEventListener("change", () => {
  if (mediumViewportPrice.matches) {
    priceImg1.src = mediumImgPrice.src;
  }
});

console.log(interruptor);
