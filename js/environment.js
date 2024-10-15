class Environment {
	constructor() {
		this.pipes = []
		this.pipeDistanceCounter = 0
	}

	move() {
		if (this.pipeDistanceCounter % SPACING_HORIZONTAL === 0) {
			this.pipeDistanceCounter = 0
			this.pipes.push(new Pipe())
		}

		this.pipeDistanceCounter++

		this.pipes.forEach((pipe) => pipe.move())

		this.pipes.forEach((pipe, i) => {
			if (pipe.isOffScreen()) this.pipes.splice(i, 1)
		})
	}

	draw() {
		this.pipes.forEach((pipe) => pipe.draw())
	}
}
