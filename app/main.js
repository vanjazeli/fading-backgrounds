import "../sass/style.scss";
import switching from "./switching";
import fadingBackgrounds from "./fading-backgrounds";

switching.init();

const element = document.querySelector(".section");
const imageUrls = [
  "public/fading-backgrounds-1.jpg",
  "public/fading-backgrounds-2.jpg",
  "public/fading-backgrounds-3.jpg",
  "public/fading-backgrounds-4.jpg",
  "public/fading-backgrounds-5.jpg",
  "public/fading-backgrounds-6.jpg",
  "public/fading-backgrounds-7.jpg",
  "public/fading-backgrounds-8.jpg",
  "public/fading-backgrounds-9.jpg",
  "public/fading-backgrounds-10.jpg",
];
const type = "still";

new fadingBackgrounds(element, imageUrls, type);
