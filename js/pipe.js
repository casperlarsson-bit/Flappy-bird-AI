class Pipe {
	constructor() {
		this.top = random(HEIGHT / 10, (7 / 10) * HEIGHT)
		this.bottom = HEIGHT - (this.top + SPACING_VERTICAL)
		this.x = WIDTH
		this.speed = 5
		this.width = 75
	}

	draw() {
		// Bottom Pipe
		image(PIPE_IMG, this.x, HEIGHT - this.bottom, this.width, this.bottom)

		// Top Pipe
		push()
		translate(this.x + this.width, this.top)
		rotate(180)
		image(PIPE_IMG, 0, 0, this.width, this.top)
		pop()
	}

	move() {
		this.x -= this.speed
	}

	isOffScreen() {
		return this.x < -this.width
	}
}
