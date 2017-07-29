var angle = 0;
var slider;

function setup() {
	var win = window;
	var doc = document;
	var element = doc.documentElement;
	var body = doc.getElementsByTagName('body')[0];
	var width = win.innerWidth - 30 || element.clientWidth - 30 || body.clientWidth - 30;
	var height = win.innerHeight - 50 || element.clientHeight - 50|| body.clientHeight - 50;

	createCanvas(width, height);

	slider = createSlider(0, TWO_PI, PI / 4, 0.01);
}

function draw() {
	var length = (height / 100) * 30;
	angle = slider.value();

	background(51);
	stroke(255);
	translate(width / 2, height);
	branch(length);
}

function branch(length) {
	line(0, 0, 0, -length);
	translate(0, -length);

	if (length > 4) {
		push();
		rotate(angle);
		branch(length * 0.67);
		pop();
		push();
		rotate(-angle);
		branch(length * 0.67);
		pop();
	}
}