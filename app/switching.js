const switching = {
    section: document.querySelector(".js-section"),
    buttonOne: document.querySelector(".js-button-one"),
    buttonTwo: document.querySelector(".js-button-two"),

    init: function () {
        this.switching();
    },

    switching: function () {
        this.buttonOne.addEventListener("click", () => {
            this.section.classList.remove('section--slide');
            this.buttonTwo.classList.remove('bottom__button--active');
            this.buttonOne.classList.add('bottom__button--active');
        })
        this.buttonTwo.addEventListener("click", () => {
            this.section.classList.add("section--slide");
            this.buttonOne.classList.remove("bottom__button--active");
            this.buttonTwo.classList.add("bottom__button--active");
        });
    },
};

export default switching;
