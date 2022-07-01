"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameObject = void 0;
class GameObject {
    color = '#ffffff';
    left = 0;
    top = 0;
    width = 0;
    height = 0;
    leftBoundry = 0;
    topBoundry = 0;
    get right() {
        return this.left + this.width;
    }
    get bottom() {
        return this.top + this.height;
    }
    setColor(color) {
        this.color = color;
        return this;
    }
    setLeft(left) {
        if (this.leftBoundry === 0 ||
            (left >= 0 && left + this.width <= this.leftBoundry)) {
            this.left = left;
        }
        return this;
    }
    setTop(top) {
        if (this.topBoundry === 0 ||
            (top >= 0 && top + this.height <= this.topBoundry)) {
            this.top = top;
        }
        return this;
    }
    setPosition(left, top) {
        this.setLeft(left);
        this.setTop(top);
        return this;
    }
    setWidth(width) {
        this.width = width;
        return this;
    }
    setHeight(height) {
        this.height = height;
        return this;
    }
    setSize(width, height) {
        this.setWidth(width);
        this.setHeight(height);
        return this;
    }
    setBoundries(left, top) {
        this.leftBoundry = left;
        this.topBoundry = top;
        return this;
    }
    follow(target, speed = 5) {
        setInterval(() => {
            const IS_X_PRIORITY = Math.abs(this.left - target.left) >
                Math.abs(this.top - target.top);
            if (IS_X_PRIORITY) {
                if (target.left + 1 < this.left) {
                    this.setLeft(this.left - 1);
                }
                else if (target.left - 1 > this.left) {
                    this.setLeft(this.left + 1);
                }
            }
            else {
                if (target.top + 1 < this.top) {
                    this.setTop(this.top - 1);
                }
                else if (target.top - 1 > this.top) {
                    this.setTop(this.top + 1);
                }
            }
        }, 1000 / speed);
        return this;
    }
}
exports.GameObject = GameObject;
//# sourceMappingURL=GameObject.js.map