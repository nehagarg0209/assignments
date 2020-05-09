

function Mario() {
	this.x = 0;
	this.y = 0;
	this.xSpeed = scale ;
	this.ySpeed = 0;
	this.direction = "Right";
	this.totalMoves = 0;

	let mario_img = document.getElementById("mario");

	// draw the image of mario
	this.draw = () => {
		ctx.drawImage(mario_img, this.x, this.y, 30, 30);
		this.totalMoves ++ ;
	}

	// update the mario positon
	this.update = () => {
		
		this.x += this.xSpeed;
		this.y += this.ySpeed;

		if(this.x >= canvas.width - scale && this.direction == "Right" ) {  // moves from right to left
			this.xSpeed = -scale ;
			this.ySpeed = 0;
			this.direction = "Left"
		}

		else if(this.x <= 0 && this.direction == "Left") { // moves from left to right
			this.xSpeed = scale ;
			this.ySpeed = 0;
			this.direction = "Right";
		}
		
		else if(this.y >= canvas.height - scale  && this.direction == "Down") { // moves from down to up
			this.ySpeed = -scale ;
			this.xSpeed = 0 ;
			this.direction = "Up";
		}
		
		else if(this.y < scale && this.direction == "Up") { // moves from up to down
			this.ySpeed =  scale ;
			this.xSpeed = 0 ;
			this.direction = "Down";
		}
	}

	// change the direction of mario on key press events
	this.changeDirection = (direction) => {

		this.direction = direction;
		switch(direction) {

			case 'Up' : 
				this.xSpeed = 0;
				this.ySpeed = -scale;
			break;

			case 'Down' : 
				this.xSpeed = 0;
				this.ySpeed = scale;
			break;
			
			case 'Left' : 
				this.xSpeed = -scale;
				this.ySpeed = 0;
			break;
			
			case 'Right' : 
				this.xSpeed = scale;
				this.ySpeed = 0;
			break;
		}
	}

	// checks and return the index of mushroom that is eaten by mario
	this.eat = (allMushrooms) => {
	
		for (let i = 0; i < allMushrooms.length ; i++) {
			if(this.x === allMushrooms[i].x && this.y === allMushrooms[i].y ) 
				return i ;
		}
		return -1 ;
	}

	// returns the total movements done by mario
	this.getTotalMoves = () => {
		return this.totalMoves ;
	}

}