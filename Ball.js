class Ball{
    constructor(x,y,width,height){
        var options = {
            'restitution': 0.8,
            'friction': 1,
            'density': 1,
            'isStatic': false
        }

            this.body = Bodies.rectangle(x, y, width, height, options);
            this.image = loadImage("sprites/ball.png");
            World.add(world, this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0,0,60,60);
        pop();
    }
}
