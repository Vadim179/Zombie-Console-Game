"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Canvas_1 = require("./Canvas");
const GameObject_1 = require("./GameObject");
const Player_1 = require("./Player");
const canvas = new Canvas_1.Canvas({
    width: 30,
    height: 20,
});
const player = new Player_1.Player()
    .setColor('#70ADB5')
    .setPosition(0, 0)
    .setSize(1, 1);
const zombie = new GameObject_1.GameObject()
    .setColor('#17B978')
    .setPosition(5, 5)
    .setSize(1, 1)
    .follow(player);
canvas.insertObject(player).insertObject(zombie).render();
//# sourceMappingURL=index.js.map