class fadingBackgrounds {
  constructor(element, imageUrls, properties) {
    this.main = { element: element };
    this.main.images = [];
    this.main.element.style.isolation = "isolate";
    this.properties = properties;
    this.imageInitializing(imageUrls);
    this.imageFading();
  }
  imageInitializing(imageUrls) {
    for (let i = 0; i < imageUrls.length; i++) {
      this.main.images[i] = document.createElement("div");
      this.main.images[i].style.background = `url('${imageUrls[i]}') no-repeat center center / cover`;
      if (this.properties && this.properties.height) {
        this.main.images[i].style.height = `${this.properties.height}px`;
      } else {
        this.main.images[i].style.height = `200px`;
      }
      if (this.properties && this.properties.width) {
        this.main.images[i].style.width = `${this.properties.width}px`;
      } else {
        this.main.images[i].style.width = "200px";
      }
      this.main.images[i].style.position = "absolute";
      this.main.images[i].style.zIndex = "-1";
      this.main.images[i].style.opacity = "0";
      if (this.properties && this.properties.transitionTime) {
        this.main.images[i].style.transition = `opacity ${this.properties.transitionTime}ms ease-in-out`;
      } else {
        this.main.images[i].style.transition = "opacity 300ms ease-in-out";
      }
      this.main.element.appendChild(this.main.images[i]);
    }
  }
  imageFading() {
    let showingImage = 0;
    let hidingImage = 0;
    setInterval(
      () => {
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
      },
      this.properties && this.properties.cycle ? this.properties.cycle.duration : 1000
    );
    setTimeout(
      () => {
        setInterval(
          () => {
            if (hidingImage < this.main.images.length) {
              this.main.images[hidingImage].style.opacity = "0";
              hidingImage++;
            } else {
              hidingImage = 0;
              this.main.images[hidingImage].style.opacity = "0";
              hidingImage = 1;
            }
          },
          this.properties && this.properties.cycle ? this.properties.cycle.duration : 1000
        );
      },
      this.properties && this.properties.cycle
        ? this.properties.cycle.duration * this.properties.cycle.numberOfImages
        : 3000
    );
  }
}

export default fadingBackgrounds;
