"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameObject = void 0;
class GameObject {
    constructor() {
        this.sprite = '';
        this.position = {
            x: 0,
            y: 0,
        };
        this.boundries = {
            x: 0,
            y: 0,
        };
        this.size = {
            width: 1,
            height: 1,
        };
    }
    setSprite(sprite) {
        this.sprite = sprite;
        return this;
    }
    setX(x) {
        if (this.boundries.x === 0 ||
            (x >= 0 && x + this.size.width <= this.boundries.x)) {
            this.position.x = x;
        }
        return this;
    }
    setY(y) {
        if (this.boundries.y === 0 ||
            (y >= 0 && y + this.size.height <= this.boundries.y)) {
            this.position.y = y;
        }
        return this;
    }
    setPosition(x, y) {
        this.setX(x);
        this.setY(y);
        return this;
    }
    setWidth(width) {
        this.size.width = width;
        return this;
    }
    setHeight(height) {
        this.size.height = height;
        return this;
    }
    setSize(width, height) {
        this.setWidth(width);
        this.setHeight(height);
        return this;
    }
    setBoundries(x, y) {
        this.boundries.x = x;
        this.boundries.y = y;
        return this;
    }
}
exports.GameObject = GameObject;
//# sourceMappingURL=GameObject.js.map