import { Pipe } from './pipe.js'
import { ctx, canvas } from './background.js'
import { background } from './setup.js'

class Game {
	constructor() {
		this.animationFrameId = null
		this.isGameOver = false
	}

	startGameLoop() {
		const piece = new Pipe('images/pipe.png')
		const gameLoop = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height)
			background.draw(ctx)

			if (!this.isGameOver) {
				piece.draw(ctx)
				piece.move()
			}
			this.animationFrameId = requestAnimationFrame(gameLoop)
		}

		this.animationFrameId = requestAnimationFrame(gameLoop)
	}
}

export { Game }
