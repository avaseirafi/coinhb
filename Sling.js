class Sling{
    constructor(x,y,width,height){
        var options = {
            'restitution': 0.8,
            'friction': 1,
            'density': 1,
            'isStatic': false
        }
            this.sling1 = loadImage('sprites/sling1.png');
            this.sling2 = loadImage('sprites/sling2.png');
            this.body = Bodies.rectangle(x, y, width, height, options);
            World.add(world, this.body);
    }
    

    display(){
        push();
        this.body.position.x = platform.x+20;
        this.body.position.y = platform.y-100;
        translate(this.body.position.x, this.body.position.y);
        //rotate(this.body.angle);
        imageMode(CENTER);
        image(this.sling1, 0,0);
        image(this.sling2, -30, -40);
        pop();
    }
}
