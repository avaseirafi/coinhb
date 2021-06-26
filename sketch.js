const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score=0;
var platform, invisibleBottom, invisibleTop;
var gameState = "onSling";

function setup(){
    var canvas = createCanvas(1200,900);
    engine = Engine.create();
    world = engine.world;

    platform = createSprite(175,250,275,30);
    platform.shapeColor="brown";
    platform.velocityY = 2;

    invisibleBottom = createSprite(175,800,100,20);
    invisibleBottom.visible = false;

    invisibleTop = createSprite(175,200,100,20);
    invisibleTop.visible = false;

    base = new BaseClass(175,850,2200,20);

    ball = new Ball(150,250,20,20);

    sling = new Sling(200,200,30,80);
    slingshot = new SlingShot(ball.body,sling.body);
    
    box1 = new Box(700,810,70,70);
    box2 = new Box(770,810,70,70);
    box3 = new Box(840,810,70,70);
    box4 = new Box(910,810,70,70);
    box5 = new Box(980,810,70,70);
    box6 = new Box(700,730,70,70);
    box7 = new Box(770,730,70,70);
    box8 = new Box(840,730,70,70);
    box9 = new Box(910,730,70,70);
    box10 = new Box(980,730,70,70);
    box11 = new Box(700,650,70,70);
    box12 = new Box(980,650,70,70);

    coin1 = new Coin(770,650);
    coin2 = new Coin(840,650);
    coin3 = new Coin(910,650);

    box13 = new Box(700,570,70,70);
    box14= new Box(770,570,70,70);
    box15 = new Box(840,570,70,70);
    box16= new Box(910,570,70,70);
    box17 = new Box(980,570,70,70);
    box18 = new Box(700,490,70,70);
    box19 = new Box(980,490,70,70);

    coin4 = new Coin(770,520);
    coin5 = new Coin(840,520);
    coin6 = new Coin(910,520);
    
    box20 = new Box(700,500,70,70);
    box21= new Box(770,500,70,70);
    box22 = new Box(840,500,70,70);
    box23= new Box(910,500,70,70);
    box24 = new Box(980,500,70,70);
    box25 = new Box(700,420,70,70);
    box26 = new Box(980,420,70,70);

    coin7 = new Coin(770,450);
    coin8 = new Coin(840,450);
    coin9 = new Coin(910,450);

    box27 = new Box(700,420,70,70);
    box28= new Box(770,420,70,70);
    box29 = new Box(840,420,70,70);
    box30= new Box(910,420,70,70);
    box31 = new Box(980,420,70,70);
    box32 = new Box(700,340,70,70);
    box33 = new Box(980,340,70,70);

    coin10 = new Coin(770,370);
    coin11 = new Coin(840,370);
    coin12 = new Coin(910,370);

    box34 = new Box(700,330,70,70);
    box35= new Box(770,330,70,70);
    box36 = new Box(840,330,70,70);
    box37= new Box(910,330,70,70);
    box38 = new Box(980,330,70,70);

    box39 = new Box(700,250,70,70);
    box40= new Box(770,250,70,70);
    box41 = new Box(840,250,70,70);
    box42= new Box(910,250,70,70);
    box43 = new Box(980,250,70,70);

    

}

function draw(){
    background("white");
    Engine.update(engine);

    textSize(22);
    fill("black");
    text("Score: " + score, 1000, 50);
    text("PRESS SPACE TO REATTACH THE BALL", 360, 900);

    platform.bounceOff(invisibleBottom);
    platform.bounceOff(invisibleTop);

    base.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    
    coin1.display();
    coin2.display();
    coin3.display();

    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    
    coin4.display();
    coin5.display();
    coin6.display();
   
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();

    coin7.display();
    coin8.display();
    coin9.display();

    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();

    coin10.display();
    coin11.display();
    coin12.display();

    box34.display();
    box35.display();
    box36.display();
    box37.display();
    box38.display();

    box39.display();
    box40.display();
    box41.display();
    box42.display();
    box43.display();

    coin1.score();
    coin2.score();
    coin3.score();
    coin4.score();
    coin5.score();
    coin6.score();
    coin7.score();
    coin8.score();
    coin9.score();
    coin10.score();
    coin11.score();
    coin12.score();
    
    ball.display();
    sling.display();
    slingshot.display();

    drawSprites();
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }
}

function keyPressed(){
    if(keyCode === 32){
        gameState =  "onSling";
        Matter.Body.setPosition(ball.body, {x: platform.x-50 , y: platform.y-50});
        slingshot.attach(ball.body);
    }
}

function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}