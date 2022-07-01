import { IGameObject, Color } from './types'
import { Colors } from './Colors'

export class Canvas {
  colorMatrix: string[][] = []
  objects: IGameObject[] = []

  constructor(
    public readonly width: number,
    public readonly height: number,
    private readonly color:
      | Color
      | ((
          x: number,
          y: number,
          width: number,
          height: number
        ) => Color) = '#071A52'
  ) {
    this.create()
  }

  public insertObject(object: IGameObject) {
    object.setBoundries(this.width, this.height)
    this.objects.push(object)
    return this
  }

  private create() {
    const colorMatrix: string[][] = []

    for (let x = 0; x < this.height; x++) {
      colorMatrix.push([])
      for (let y = 0; y < this.width; y++) {
        const color =
          typeof this.color === 'function'
            ? this.color(x, y, this.width, this.height)
            : this.color
        colorMatrix[x].push(color)
      }
    }

    this.colorMatrix = colorMatrix
  }

  public render(frameRate: number = 30) {
    setInterval(() => {
      this.create()
      console.clear()

      for (const object of this.objects) {
        for (let y = object.top; y < object.bottom; y++) {
          for (let x = object.left; x < object.right; x++) {
            this.colorMatrix[y][x] = object.color
          }
        }
      }

      for (let x = 0; x < this.colorMatrix.length; x++) {
        let row = ''
        for (
          let y = 0;
          y < this.colorMatrix[x].length;
          y++
        ) {
          row += Colors.hex(this.colorMatrix[x][y])('██')
        }
        console.log(row)
      }
    }, 1000 / frameRate)
  }
}
