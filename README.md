# Fading Backgrounds
A UI JavaScript library which allows you to add fading images with random positions in the back of an HTML element.

## Demo
Check out the demo of this project right [here](https://vanjazeli.github.io/fading-backgrounds/). 

## Usage

### Initialization
 - Add fading-backgrounds.js file from this repo to your project.
 - Import the fadingBackgrounds class from fading-backgrounds.js file into the file where you would like to initialize the animation.
 - Initialize an animation by passing the element, imageUrls and properties arguements into the fadingBackgrounds class with `new fadingBackgrounds(element, imageUrl, properties)`.

### Example
Keep in mind that this is the most basic example. You can find the initialization of demo examples in main.js file in this repo.

```JavaScript
import fadingBackgrounds from "./fading-backgrounds";

const element = document.querySelector(".my-element");
const imageUrls = [
  "./images/my-image-1.png",
  "./images/my-image-2.png",
  "./images/my-image-3.png"
  "./images/my-image-4.png"
  "./images/my-image-5.png"
  "./images/my-image-6.png"
 ];
const properties = {
  height: "200px",
  width: "200px",
  animation: {
    transitionTime: 500,
    moving: false,
  },
  cycle: {
    duration: 400,
    numberOfImages: 3
  }
}

new fadingBackgrounds(element, imageUrl, animationType);
```

### Arguements
The `fadingBackgrounds(element, imageUrl, animationType)` class takes in three arguements: element, imageUrl and properties.

| Arguement | Type | Description |
|:----------|:-----|:------------|
| `element` | object | Defines the object from the dom to which we would like to add the desired effect. |
| `imageUrl` | array | Defines a paths to all the images that we would like to display in the back of the desired element. |
| `properties` | object | Defines the behaviour of the effect. This argument is optional. |

### Properties object
This is the structure of the properties object with an explaination of each of the properties as well as their default values. Each of the properties is optional.

```JavaScript
const properties = {
  height: "200px",    // defines the height of each image
  width: "200px",   // defines the width of each image
  animation: {
    transitionTime: 300,    // defines the transition time on each image in ms
    moving: false,    // defines whether the images will move or not
  },
  cycle: {
    duration: 1000,  // defines for how long each of the images will be shown in ms
    numberOfImages: 3   // defines the numberof images that will be shown at once
  }
}
```

## Credits
 - [Unsplash](https://unsplash.com/)

## Licence
Completely  free for use in all types of commercial or personal projects. Mentions are required when uploading or reposting any of original or modified code from this project.
