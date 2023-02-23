import "../sass/style.scss";
import switching from "./switching";
import fadingBackgrounds from "./fading-backgrounds";

switching.init();

const imageUrls = [
  "./public/images/fading-backgrounds-1.jpg",
  "./public/images/fading-backgrounds-2.jpg",
  "./public/images/fading-backgrounds-3.jpg",
  "./public/images/fading-backgrounds-4.jpg",
  "./public/images/fading-backgrounds-5.jpg",
  "./public/images/fading-backgrounds-6.jpg",
  "./public/images/fading-backgrounds-7.jpg",
  "./public/images/fading-backgrounds-8.jpg",
  "./public/images/fading-backgrounds-9.jpg",
  "./public/images/fading-backgrounds-10.jpg",
];

const elementOne = document.querySelector(".js-section-one");
const propertiesOne = {
  height: "200px",
  width: "300px",
  animation: {
    transitionTime: 500,
    moving: false,
  },
  cycle: {
    duration: 1000,
    numberOfImages: 3,
  },
};
new fadingBackgrounds(elementOne, imageUrls, propertiesOne);

const elementTwo = document.querySelector(".js-section-two");
const propertiesTwo = {
  height: "200px",
  width: "300px",
  animation: {
    transitionTime: 1200,
    moving: true,
  },
  cycle: {
    duration: 400,
    numberOfImages: 3,
  },
};
new fadingBackgrounds(elementTwo, imageUrls, propertiesTwo);
