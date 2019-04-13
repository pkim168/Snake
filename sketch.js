var s;
var f;
var scl = 20;

function newFood(){
	f.pickLocation(s.x, s.y);
	for(var i = 0; i < s.tail.length; i++){
		var pos = s.tail[i];
		var d = dist(f.x, f.y, pos.x, pos.y);
		if(d < 1){
			newFood();
			break;
		}
	}
}

function setup() {
	createCanvas(500, 500);
	s = new Snake();
	f = new Food();
	f.pickLocation();
	frameRate(10);
}

function draw() {
	background(0, 0, 0);
	s.update();
	s.show();
	s.death();
	f.show();

	if(s.eat(f.x, f.y) == true){
		newFood();
		f.show();
	}
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		if(s.yspeed != 1) {
			s.dir(0, -1);
		}
	} else if (keyCode === DOWN_ARROW) {
		if(s.yspeed != -1) {
			s.dir(0, 1);
		}
	} else if (keyCode === RIGHT_ARROW) {
		if(s.xspeed != -1) {
			s.dir(1, 0);
		}
	} else if (keyCode === LEFT_ARROW) {
		if(s.xspeed != 1) {
			s.dir(-1, 0);
		}
	}
}
