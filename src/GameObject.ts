import { Color, IGameObject } from './types'

export class GameObject implements IGameObject {
  color: Color = '#ffffff'

  left = 0
  top = 0
  width = 0
  height = 0

  private leftBoundry = 0
  private topBoundry = 0

  get right() {
    return this.left + this.width
  }

  get bottom() {
    return this.top + this.height
  }

  setColor(color: Color) {
    this.color = color
    return this
  }

  setLeft(left: number) {
    if (
      this.leftBoundry === 0 ||
      (left >= 0 && left + this.width <= this.leftBoundry)
    ) {
      this.left = left
    }

    return this
  }

  setTop(top: number) {
    if (
      this.topBoundry === 0 ||
      (top >= 0 && top + this.height <= this.topBoundry)
    ) {
      this.top = top
    }

    return this
  }

  setPosition(left: number, top: number) {
    this.setLeft(left)
    this.setTop(top)
    return this
  }

  setWidth(width: number) {
    this.width = width
    return this
  }

  setHeight(height: number) {
    this.height = height
    return this
  }

  setSize(width: number, height: number) {
    this.setWidth(width)
    this.setHeight(height)
    return this
  }

  setBoundries(left: number, top: number) {
    this.leftBoundry = left
    this.topBoundry = top
    return this
  }

  /**
   * @param target Object to follow
   * @param speed Tiles per second
   */
  follow(target: IGameObject, speed = 5) {
    setInterval(() => {
      const IS_X_PRIORITY =
        Math.abs(this.left - target.left) >
        Math.abs(this.top - target.top)

      if (IS_X_PRIORITY) {
        if (target.left + 1 < this.left) {
          this.setLeft(this.left - 1)
        } else if (target.left - 1 > this.left) {
          this.setLeft(this.left + 1)
        }
      } else {
        if (target.top + 1 < this.top) {
          this.setTop(this.top - 1)
        } else if (target.top - 1 > this.top) {
          this.setTop(this.top + 1)
        }
      }
    }, 1000 / speed)
    return this
  }
}
