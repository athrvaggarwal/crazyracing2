const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, ball;
var bodyA , bodyB;
var pointA,pointB ;

var background , blue , green , grey , orange ; 




function preload(){
    loadImage("images/background.png") ; 
    loadImage("images/bluecar.png") ; 
    loadImage("images/greencar.png") ; 
    loadImage("images/greycar.png") ; 
    loadImage("images/orangecar.png") ; 
    loadImage("images/sling1.png") ; 
    loadImage("images/sling2.png") ; 
    loadImage("images/sling3.png") ; 
    loadImage("images/track.jpg") ; 
    loadImage("images/base.png") ; 
}


function setup(){
    var canvas = createCanvas(1200,900) ;
    engine = Engine.create() ; 
    world = engine.world ; 

   

}

function draw(){
    Engine.update(engine) ; 

    car = new Car (200,50) ;
    slingshot = new Slingshot(car.body,{x:200, y:50});
}

function mouseDragged(){   
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    Slingshot.fly();
}