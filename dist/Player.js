"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const GameObject_1 = require("./GameObject");
const Keyboard_1 = require("./Keyboard");
class Player extends GameObject_1.GameObject {
    constructor() {
        super();
        this.initMovement();
    }
    initMovement() {
        Keyboard_1.keyboard.onKeyPress((key) => {
            if (key === 'up')
                this.setTop(this.top - 1);
            else if (key === 'down')
                this.setTop(this.top + 1);
            else if (key === 'left')
                this.setLeft(this.left - 1);
            else if (key === 'right')
                this.setLeft(this.left + 1);
        });
    }
}
exports.Player = Player;
//# sourceMappingURL=Player.js.map