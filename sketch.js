const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var circle;
var circle1;
var circle2;
var circle3;
var circle4;
var engine, world;
var block1;
var block2;
var block3;
var block4;
var block5;

var log;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    

    block1 = new Block(150,250,50,200);
    block2=new Block(200,250,50,200);
    block3=new Block(250,250,50,200);
    block4=new Block(350,250,30,200);
    block5=new Block(50,250,30,200);
   

    log=new Log(200,390,400,75);
    
    circle=new Circle(150,120,50);
    circle1=new Circle(200,120,50);
    circle2=new Circle(250,120,50);
    circle3=new Circle(350,100,70);
    circle4=new Circle(50,100,70);
}

function draw(){
    background(0);
    Engine.update(engine);
    block1.display();
  
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   log.display();
   circle.display();
   circle1.display();
   circle2.display();
   circle3.display();
   circle4.display();
}