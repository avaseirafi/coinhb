class Coin{
    constructor(x,y){
        var options = {
            'restitution': 0.6,
            'friction': 1.4,
            'density': 1.0
        }
        this.body = Bodies.rectangle(x,y,70,70,options);
        this.width = 70;
        this.height = 70;
        this.visibility = 255;
        this.image = loadImage("sprites/coin.png");
        World.add(world, this.body);
    }
    display(){
        if(this.body.speed < 3){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();
        }
        else{
             World.remove(world, this.body);
             push();
             this.visibility = this.visibility - 5;
             tint(255,this.visibility);
             image(this.image, this.body.position.x, this.body.position.y, 50, 50);
             pop();
        }
           
    }
        
    score(){
        if(this.visibility<0 && this.visibility>-105){
            score++;
        }
    }
}