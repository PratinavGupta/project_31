class BALL {

    constructor(x, y) {
        var prop = { isStatic: true }
        this.ball = Matter.Bodies.circle(x, y, 10, prop);
        Matter.World.add(world, this.ball);
    }
    display() {
        ellipseMode(RADIUS);
        fill("white");
        ellipse(this.ball.position.x, this.ball.position.y, 10);
    }
}