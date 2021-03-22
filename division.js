class DIVISION {

    constructor(x, y, w, h) {
        var prop = { isStatic: true }
        this.bod = Matter.Bodies.rectangle(x, y, w, h, prop);
        Matter.World.add(world, this.bod);
        this.w = w;
        this.h = h;
    }
    display() {
        rectMode(CENTER);
       fill("orange");
        rect(this.bod.position.x, this.bod.position.y, this.w, this.h);
    }
}