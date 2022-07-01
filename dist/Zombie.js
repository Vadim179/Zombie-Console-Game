'use strict'
Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.Zombie = void 0
const GameObject_1 = require('./GameObject')
class Zombie extends GameObject_1.GameObject {
  constructor() {
    super()
    this.setSprite('🟩')
  }
  follow(object) {
    setInterval(() => {
      const IS_X_PRIORITY =
        Math.abs(this.left - object.left) >
        Math.abs(this.top - object.top)
      if (IS_X_PRIORITY) {
        if (object.left + 1 < this.left) {
          this.setLeft(this.left - 1)
        } else if (object.left - 1 > this.left) {
          this.setLeft(this.left + 1)
        }
      } else {
        if (object.top + 1 < this.top) {
          this.setTop(this.top - 1)
        } else if (object.top - 1 > this.top) {
          this.setTop(this.top + 1)
        }
      }
    }, 1000 / 5)
    return this
  }
}
exports.Zombie = Zombie
//# sourceMappingURL=Zombie.js.map
