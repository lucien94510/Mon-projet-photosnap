// import { SassMap } from "sass";
import "../src/assets/styles/style.scss";
import "./assets/javascripts/topbars.js";
import "./index.scss";

const smallViewport = window.matchMedia("(max-width: 480px)");
const mediumViewport = window.matchMedia(
  "(min-width: 768px) and (max-width: 1024px)"
);
const largeViewport = window.matchMedia("(max-width: 1200px)");
const homeImg1 = document.getElementById("home-img1");
const homeImg2 = document.getElementById("home-img2");
const homeImg3 = document.getElementById("home-img3");
const smallImg1 = new Image();
smallImg1.src = "./assets/home/mobile/create-and-share.jpg";
const mediumImg1 = new Image();
mediumImg1.src = "./assets/home/tablet/create-and-share.jpg";
const largeImg1 = new Image();
largeImg1.src = "./assets/home/desktop/create-and-share.jpg";
const smallImg2 = new Image();
smallImg2.src = "./assets/home/mobile/beautiful-stories.jpg";
const mediumImg2 = new Image();
mediumImg2.src = "./assets/home/tablet/beautiful-stories.jpg";
const largeImg2 = new Image();
largeImg2.src = "./assets/home/desktop/beautiful-stories.jpg";
const smallImg3 = new Image();
smallImg3.src = "./assets/home/mobile/designed-for-everyone.jpg";
const mediumImg3 = new Image();
mediumImg3.src = "./assets/home/tablet/designed-for-everyone.jpg";
const largeImg3 = new Image();
largeImg3.src = "./assets/home/desktop/designed-for-everyone.jpg";

smallViewport.addEventListener("change", () => {
  if (smallViewport.matches) {
    homeImg1.src = smallImg1.src;
    homeImg2.src = smallImg2.src;
    homeImg3.src = smallImg3.src;
  }
});

mediumViewport.addEventListener("change", () => {
  if (mediumViewport.matches) {
    homeImg1.src = mediumImg1.src;
    homeImg2.src = mediumImg2.src;
    homeImg3.src = mediumImg3.src;
  }
  if (largeViewport.matches) {
    homeImg1.src = largeImg1.src;
    homeImg2.src = largeImg2.src;
    homeImg3.src = largeImg3.src;
  }
});
