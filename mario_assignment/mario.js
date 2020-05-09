

function Mario() {
	this.x = 0;
	this.y = 0;
	this.xSpeed = scale ;
	this.ySpeed = 0;
	this.direction = "Right";
	this.totalMoves = 0;

	this.draw = () => {
		ctx.fillStyle = "#FFFFFF";
		ctx.fillRect(this.x, this.y, scale, scale);
		this.totalMoves ++ ;
	}

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

	this.eat = (allMushrooms) => {
	
		for (let i = 0; i < allMushrooms.length ; i++) {
			if(this.x === allMushrooms[i].x && this.y === allMushrooms[i].y ) 
				return i ;
		}
		return -1 ;
	}

	this.getTotalMoves = () => {
		return this.totalMoves ;
	}
}

