import {
  ISize,
  IPosition,
  Sprite,
  IGameObject,
} from './types'

export class GameObject implements IGameObject {
  sprite: Sprite = ''

  position: IPosition = {
    x: 0,
    y: 0,
  }

  boundries: IPosition = {
    x: 0,
    y: 0,
  }

  size: ISize = {
    width: 1,
    height: 1,
  }

  setSprite(sprite: Sprite) {
    this.sprite = sprite
    return this
  }

  setX(x: number) {
    if (
      this.boundries.x === 0 ||
      (x >= 0 && x + this.size.width <= this.boundries.x)
    ) {
      this.position.x = x
    }

    return this
  }

  setY(y: number) {
    if (
      this.boundries.y === 0 ||
      (y >= 0 && y + this.size.height <= this.boundries.y)
    ) {
      this.position.y = y
    }

    return this
  }

  setPosition(x: number, y: number) {
    this.setX(x)
    this.setY(y)
    return this
  }

  setWidth(width: number) {
    this.size.width = width
    return this
  }

  setHeight(height: number) {
    this.size.height = height
    return this
  }

  setSize(width: number, height: number) {
    this.setWidth(width)
    this.setHeight(height)
    return this
  }

  setBoundries(x: number, y: number) {
    this.boundries.x = x
    this.boundries.y = y
    return this
  }
}
