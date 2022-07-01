import { Canvas } from './Canvas'
import { GameObject } from './GameObject'
import { Player } from './Player'

const canvas = new Canvas(30, 20, (x, y) =>
  (x + y) % 2 === 0 ? '#261C2C' : '#3E2C41'
)

const player = new Player()
  .setColor('#70ADB5')
  .setSize(1, 1)

const zombie = new GameObject()
  .setColor('#17B978')
  .setPosition(12, 8)
  .setSize(1, 1)
  .follow(player)

canvas.insertObject(player).insertObject(zombie).render()
