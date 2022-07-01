import { Canvas } from './Canvas'
import { GameObject } from './GameObject'
import { Player } from './Player'

const canvas = new Canvas({
  width: 30,
  height: 20,
})

const player = new Player()
  .setColor('#70ADB5')
  .setPosition(0, 0)
  .setSize(1, 1)

const zombie = new GameObject()
  .setColor('#17B978')
  .setPosition(5, 5)
  .setSize(1, 1)
  .follow(player)

canvas.insertObject(player).insertObject(zombie).render()
