function Mushroom() {

	let mushroom_img = document.getElementById("mushroom");

	this.x ;
	this.y ;

	this.pickLocation = (position) => {
		this.x = (Math.floor(Math.random() * columns -1) + 1) * scale;
		this.y = position * scale ;
	}

	this.draw = () => {
		ctx.drawImage(mushroom_img, this.x, this.y, 30, 30);
	}
}