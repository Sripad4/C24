const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var ground;
var pig1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,100,70,70);
    box4 = new Box(920,100,70,70);
    
    

    ground=new Ground(600,height,1200,20);

    pig1=new Pig(810,350);

    pig2=new Pig(810,100);

    pig3=new Pig(810,50);

    log1=new Log(810,180,300,PI/2);
    log2=new Log(810,80,300,PI/2);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
   box3.display();
    box4.display();
    

    ground.display();

    pig1.display();
    pig2.display();
    pig3.display();
    log1.display();
    log2.display();
   
}