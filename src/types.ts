export type Color = string

export interface ISize {
  width: number
  height: number
}

export interface IPosition {
  x: number
  y: number
}

export interface IGameObject {
  color: Color
  left: number
  top: number
  right: number
  bottom: number
  width: number
  height: number
  setColor(color: Color): IGameObject
  setTop(top: number): IGameObject
  setLeft(left: number): IGameObject
  setPosition(left: number, top: number): IGameObject
  setWidth(width: number): IGameObject
  setHeight(height: number): IGameObject
  setSize(width: number, height: number): IGameObject
  setBoundries(left: number, top: number): IGameObject
  follow(object: IGameObject, speed: number): IGameObject
}

export interface IKeyboardSpecialKeys {
  [key: string]: () => any
}
