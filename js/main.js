const WIDTH = 800
const HEIGHT = 400

const SPACING_VERTICAL = 100
const SPACING_HORIZONTAL = 75

// IMAGES
let BACKGROUND_IMG
let PIPE_IMG
let BIRD_IMG

let environment

function setup() {
	angleMode(DEGREES)

	BACKGROUND_IMG = loadImage('images/background.png')
	PIPE_IMG = loadImage('images/pipe.png')
	BIRD_IMG = loadImage('images/bird.png')

	const canvas = createCanvas(WIDTH, HEIGHT)
	canvas.parent('game-container')

	environment = new Environment()
}

function draw() {
	background(BACKGROUND_IMG)
	environment.move()
	environment.draw()
}
