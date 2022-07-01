import { GameObject } from './GameObject'
import { keyboard } from './Keyboard'

export class Player extends GameObject {
  constructor() {
    super()
    this.initMovement()
  }

  private initMovement() {
    keyboard.onKeyPress((key) => {
      if (key === 'up') this.setTop(this.top - 1)
      else if (key === 'down') this.setTop(this.top + 1)
      else if (key === 'left') this.setLeft(this.left - 1)
      else if (key === 'right') this.setLeft(this.left + 1)
    })
  }
}
