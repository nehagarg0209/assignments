function Mushroom() {

	this.x ;
	this.y ;

	this.pickLocation = (position) => {
		this.x = (Math.floor(Math.random() * columns -1) + 1) * scale;
		this.y = position * scale ;
	}

	this.draw = () => {
		ctx.fillStyle = "#f1560c";
		ctx.fillRect(this.x, this.y, scale, scale);
	}
}