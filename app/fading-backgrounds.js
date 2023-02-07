class fadingBackgrounds {
  constructor(element, imageUrls, type) {
    this.main = { element: element };
    this.main.images = [];
    this.main.element.style.isolation = "isolate";
    this.imageInitializing(imageUrls);
    this.imageFading();
  }
  imageInitializing(imageUrls) {
    for (let i = 0; i < imageUrls.length; i++) {
      this.main.images[i] = document.createElement("div");
      this.main.images[i].style.background = `url('${imageUrls[i]}') no-repeat center center / cover`;
      this.main.images[i].style.height = "200px";
      this.main.images[i].style.width = "200px";
      this.main.images[i].style.position = "absolute";
      this.main.images[i].style.zIndex = "-1";
      this.main.images[i].style.opacity = "0";
      this.main.images[i].style.transition = "opacity 300ms ease-in-out";
      this.main.element.appendChild(this.main.images[i]);
    }
  }
  imageFading() {
    let showingImage = 0;
    let hidingImage = 0;
    setInterval(() => {
      if (showingImage < this.main.images.length) {
        const randX = Math.floor(Math.random() * (this.main.element.clientWidth - 100));
        const randY = Math.floor(Math.random() * (this.main.element.clientHeight - 100));
        this.main.images[showingImage].style.top = `${randY}px`;
        this.main.images[showingImage].style.left = `${randX}px`;
        this.main.images[showingImage].style.opacity = "1";
        showingImage++;
      } else {
        showingImage = 0;
        const randX = Math.floor(Math.random() * (this.main.element.clientWidth - 100));
        const randY = Math.floor(Math.random() * (this.main.element.clientHeight - 100));
        this.main.images[showingImage].style.top = `${randY}px`;
        this.main.images[showingImage].style.left = `${randX}px`;
        this.main.images[showingImage].style.opacity = "1";
        showingImage = 1;
      }
    }, 1000);
    setTimeout(() => {
      setInterval(() => {
        if (hidingImage < this.main.images.length) {
          this.main.images[hidingImage].style.opacity = "0";
          hidingImage++;
        } else {
          hidingImage = 0;
          this.main.images[hidingImage].style.opacity = "0";
          hidingImage = 1;
        }
      }, 1000);
    }, 3000);
  }
}

export default fadingBackgrounds;
