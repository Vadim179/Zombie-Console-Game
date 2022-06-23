"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Canvas_1 = require("./Canvas");
const GameObject_1 = require("./GameObject");
const Keyboard_1 = require("./Keyboard");
const canvas = new Canvas_1.Canvas({
    width: 30,
    height: 20,
});
const player = new GameObject_1.GameObject()
    .setPosition(0, 0)
    .setSize(1, 1)
    .setSprite('⬜');
const zombie = new GameObject_1.GameObject()
    .setPosition(5, 10)
    .setSize(1, 1)
    .setSprite('🟩');
canvas.addObject(player).addObject(zombie);
canvas.render();
new Keyboard_1.Keyboard().onKeyPress((keyName) => {
    if (keyName === 'up')
        player.setY(player.position.y - 1);
    else if (keyName === 'down')
        player.setY(player.position.y + 1);
    else if (keyName === 'left')
        player.setX(player.position.x - 1);
    else if (keyName === 'right')
        player.setX(player.position.x + 1);
});
setInterval(() => {
    const IS_X_PRIORITY = Math.abs(zombie.position.x - player.position.x) >
        Math.abs(zombie.position.y - player.position.y);
    if (IS_X_PRIORITY) {
        if (player.position.x + 1 < zombie.position.x) {
            zombie.setX(zombie.position.x - 1);
        }
        else if (player.position.x - 1 > zombie.position.x) {
            zombie.setX(zombie.position.x + 1);
        }
    }
    else {
        if (player.position.y + 1 < zombie.position.y) {
            zombie.setY(zombie.position.y - 1);
        }
        else if (player.position.y - 1 > zombie.position.y) {
            zombie.setY(zombie.position.y + 1);
        }
    }
}, 1000 / 5);
//# sourceMappingURL=index.js.map