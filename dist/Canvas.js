"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Canvas = void 0;
const Colors_1 = require("./Colors");
class Canvas {
    width;
    height;
    color;
    colorMatrix = [];
    objects = [];
    constructor(width, height, color = '#071A52') {
        this.width = width;
        this.height = height;
        this.color = color;
        this.create();
    }
    insertObject(object) {
        object.setBoundries(this.width, this.height);
        this.objects.push(object);
        return this;
    }
    create() {
        const colorMatrix = [];
        for (let x = 0; x < this.height; x++) {
            colorMatrix.push([]);
            for (let y = 0; y < this.width; y++) {
                const color = typeof this.color === 'function'
                    ? this.color(x, y)
                    : this.color;
                colorMatrix[x].push(color);
            }
        }
        this.colorMatrix = colorMatrix;
    }
    render(frameRate = 30) {
        setInterval(() => {
            this.create();
            console.clear();
            for (const object of this.objects) {
                for (let y = object.top; y < object.bottom; y++) {
                    for (let x = object.left; x < object.right; x++) {
                        this.colorMatrix[y][x] = object.color;
                    }
                }
            }
            for (let x = 0; x < this.colorMatrix.length; x++) {
                let row = '';
                for (let y = 0; y < this.colorMatrix[x].length; y++) {
                    row += Colors_1.Colors.hex(this.colorMatrix[x][y])('██');
                }
                console.log(row);
            }
        }, 1000 / frameRate);
    }
}
exports.Canvas = Canvas;
//# sourceMappingURL=Canvas.js.map