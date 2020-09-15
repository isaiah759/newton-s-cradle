
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var bobObject1;
var  rope,roof;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bobObject1 = new Bob(200,650);
  bobObject2 = new Bob(220,650);
  bobObject3 = new Bob(240,650);
  bobObject4 = new Bob(260,650);
  bobObject5 = new Bob(280,650);

  roof = new Roof(200,400,400,10);
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



