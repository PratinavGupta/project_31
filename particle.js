class PARTICLE {

    constructor(x) {
        var prop = { restitution: 0.5 }
        this.p = Matter.Bodies.circle(x, 10, 10, prop);
        Matter.World.add(world, this.p);
        this.r1 = random(0, 255);
        this.r2 = random(0, 255);
        this.r3 = random(0, 255);
    }
    display() {
        ellipseMode(RADIUS);
        fill(this.r1, this.r2, this.r3);
        ellipse(this.p.position.x, this.p.position.y, 10);
    }
}