import {Spaceship} from "./Spaceship.js";

class Game {
    ship = new Spaceship();
    init() {
        this.ship.init();
    }
}

window.onload = function () {
    const game = new Game();
    game.init();
}