export type Sprite = string

export interface ISize {
  width: number
  height: number
}

export interface IPosition {
  x: number
  y: number
}

export interface IGameObject {
  size: ISize
  sprite: Sprite
  position: IPosition
  boundries: IPosition
  setBoundries(x: number, y: number): IGameObject
}

export interface IKeyboardSpecialKeys {
  [key: string]: () => any
}
