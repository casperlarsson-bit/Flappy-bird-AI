class Bird {
	constructor() {
		this.x = WIDTH / 3
		this.y = HEIGHT / 2

		this.size = 50

		this.gravity = 0.2
		this.velocity = 0

		this.angle = 0
	}

	draw() {
		push()
		translate(this.x, this.y)
		rotate(this.angle)
		image(BIRD_IMG, 0, 0, this.size, this.size)
		pop()
	}

	move() {
		this.velocity += this.gravity
		this.y += this.velocity
		this.setAngle()
	}

	setAngle() {
		this.angle = map(this.velocity, -10, 10, -60, 90, true)
	}

	flap() {
		this.velocity += -10
	}
}
