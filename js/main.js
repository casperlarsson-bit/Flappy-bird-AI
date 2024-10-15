const SPACING = 100

import { init } from './setup.js'
import { Game } from './game.js'

init()

const game = new Game()
game.startGameLoop()

export { SPACING }
