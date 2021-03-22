ball1 = [];
ball2 = [];
ball3 = [];
particle = [];
division = [];

function setup() {
	createCanvas(600, 600);
	engine = Matter.Engine.create();
	world = engine.world;

	division1 = new DIVISION(0, 300, 5, 600);
	division2 = new DIVISION(600, 300, 5, 600);
	ground = new DIVISION(300, 590, 600, 20);

	for (var q = 0; q <= 600; q = q + 150)
		division.push(new DIVISION(q, 500, 15, 200))
	for (var e = 0; e <= 600; e = e + 100)
		ball1.push(new BALL(e, 100))
	for (var t = 50; t <= 550; t = t + 100)
		ball2.push(new BALL(t, 200))
	for (var u = 0; u <= 600; u = u + 100)
		ball3.push(new BALL(u, 300))


	Matter.Engine.run(engine);
}


function draw() {
	background(0);

	for (var w = 0; w < division.length; w = w + 1)
		division[w].display();
	for (var r = 0; r < ball1.length; r = r + 1)
		ball1[r].display();
	for (var y = 0; y < ball2.length; y = y + 1)
		ball2[y].display();
	for (var i = 0; i < ball3.length; i = i + 1)
		ball3[i].display();

	if (frameCount % 60 === 0)
		particle.push(new PARTICLE(random(20, 580)))
	for (var p = 0; p < particle.length; p = p + 1)
		particle[p].display();

	ground.display();
	division1.display();
	division2.display();

	drawSprites();
}