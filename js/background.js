let WIDTH
let HEIGHT

const gameContainer = document.getElementById('game-container')

// Get the canvas and its context
const canvas = document.getElementById('game-canvas')
const ctx = canvas.getContext('2d')

class Background {
	constructor(imagePath) {
		this.image = new Image()
		this.image.src = imagePath // Path to the background image

		// Placeholder for dynamically calculated width and height
		this.width = 0
		this.height = 0

		// Once the image is loaded, calculate size and set canvas dimensions
		this.image.onload = () => {
			this.calculateCanvasSize()
			this.draw(ctx) // Draw the background once the image is loaded
		}

		loadImage('images/background.png')
	}

	// Calculate the canvas size and the background size based on the aspect ratio
	calculateCanvasSize() {
		// Get the game-container width
		const containerWidth = gameContainer.offsetWidth

		// Calculate the aspect ratio of the image
		const imageAspectRatio = this.image.width / this.image.height

		// Set the canvas width to the container's width
		canvas.width = containerWidth

		// Calculate the canvas height based on the image's aspect ratio
		canvas.height = canvas.width / imageAspectRatio

		// Set the background dimensions to match the canvas size
		this.width = canvas.width
		this.height = canvas.height

		console.log(this.image.height)

		WIDTH = this.width
		HEIGHT = this.height
	}

	// Draw the background image on the canvas
	draw(ctx) {
		ctx.drawImage(this.image, 0, 0, this.width, this.height)
	}
}

export { Background, WIDTH, HEIGHT, ctx, canvas }
