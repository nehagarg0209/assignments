const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

const scale = 30 ;
let rows =  prompt("Please enter board width ", "15") ;
let columns = prompt("Please enter board height ", "10") ;

let mario ;
let mushrooms = [];

(function setup() {
	
	if(rows && columns ) {

		canvas.width = columns * scale;
		canvas.height = rows * scale;

		mario = new Mario();
	
		for(let i=0; i < rows; i++) {
			mushrooms[i] = new Mushroom();
			mushrooms[i].pickLocation(i);
		}
		
		let gameTimer = window.setInterval(() => {
			ctx.clearRect(0, 0, canvas.width, canvas.height); 
			mario.update();
			mario.draw();

			for(let i=0; i < mushrooms.length; i++) 
				mushrooms[i].draw();
			
			let eatenMushroomIndex = mario.eat(mushrooms);
			if(eatenMushroomIndex > -1 ) 
				mushrooms.splice(eatenMushroomIndex, 1);
			
			if(mushrooms.length === 0) {
				let totalMovesbyMario = mario.getTotalMoves();
				clearInterval(gameTimer);
				alert("Game over. Total moves to save princess : " + totalMovesbyMario );
			}
		}, 500);
	} else 
		alert("Rows and Columns must be greater that one");
	
}());

window.addEventListener('keydown', (event) => {
	const direction = event.key.replace("Arrow", "");
	mario.changeDirection(direction);
});