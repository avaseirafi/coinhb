class SlingShot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.sling3 = loadImage('sprites/sling3.png');
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        var pointB = this.sling.bodyB.position
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            push();
            
            stroke(48,22,8);
            if(pointA.x < pointB.x) {
                strokeWeight(7);
                line(pointA.x - 30, pointA.y, pointB.x -30, pointB.y-55);
                line(pointA.x - 30, pointA.y, pointB.x + 10, pointB.y - 58);
                image(this.sling3,pointA.x -30, pointA.y -10,15,30);
            }
            else{
                strokeWeight(7);
                line(pointA.x + 25, pointA.y, pointB.x -30, pointB.y-50);
                line(pointA.x + 25, pointA.y, pointB.x + 10, pointB.y - 53);
                image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
            }
            pop();
        }
    }
    
}