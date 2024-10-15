import { Background } from './background.js'
let background

function init() {
	background = new Background('images/Background.png')
}

export { init, background }
