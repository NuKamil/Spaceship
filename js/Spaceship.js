export class Spaceship {

    #modifier = 10;

    constructor(element) {
        this.element = element;
    };

    init() {
        this.#setPosition();
        this.#eventListeners();
    }

    #setPosition() {
        this.element.style.button = '0px';
        this.element.style.left = `${window.innerWidth / 2 - this.element.offsetLeft - this.element.offsetWidth / 2}px`
    }

    #eventListeners() {
        window.addEventListener('keydown', ({keyCode}) => {
            switch (keyCode) {
                case 37:
                    this.element.style.left = `${parseInt(this.element.style.left, 10) - this.#modifier}px`;
                    break;
                case 39:
                    this.element.style.left = `${parseInt(this.element.style.left, 10) + this.#modifier}px`;
                    break;
            }
        })
    }
}