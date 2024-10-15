// import { WIDTH, HEIGHT } from './background.js'
import { SPACING } from './main.js'

const HEIGHT = 504

class Pipe {
	constructor(imagePath) {
		// this.top = 300 // Temporary value for the height of the top pipe
		this.top = getRandomInt(HEIGHT / 10, (7 / 10) * HEIGHT)
		this.bottom = HEIGHT - (this.top + SPACING)
		this.x = 800 // WIDTH // Position on the X-axis, initially at the width of the canvas
		this.speed = 10 // Speed at which the pipe moves
		this.imagePath = imagePath // Path to the pipe image
		this.pipeWidth = 100 // Custom pipe width

		// Create a new Image object
		this.pipeImage = new Image()
		this.pipeImage.src = this.imagePath
	}

	draw(ctx) {
		if (!this.pipeImage.complete) return // Ensure the image is loaded

		// Draw the top pipe (rotated)
		ctx.save()
		ctx.translate(this.x, this.top) // Move to the pipe's position
		ctx.rotate(Math.PI) // Rotate to draw upside down
		ctx.drawImage(this.pipeImage, -this.pipeWidth, 0, this.pipeWidth, this.pipeImage.height)
		ctx.restore()

		// Draw the bottom pipe
		ctx.drawImage(
			this.pipeImage,
			this.x + 10,
			HEIGHT - this.bottom,
			this.pipeWidth,
			this.pipeImage.height
		)
	}

	move() {
		this.x -= this.speed
	}
}

// Get a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

export { Pipe }
