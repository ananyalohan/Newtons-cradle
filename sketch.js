const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob, bob2, bob3, bob4, bob5;
var roof;
var rope;
var bobDiameter=80;


function preload()
{
	
}

function setup() {
	createCanvas(900, 600);


	engine = Engine.create();
	world = engine.world;

	bob = new Bob(300,480,38);
	bob2 = new Bob(380,480,38);
	bob3 = new Bob(460,480,38);
	bob4 = new Bob(540,480,38);
	bob5 = new Bob(620,480,38);
	roof = new Roof(400,100,400,20);
	rope1 = new Rope(bob.body,roof.body,-bobDiameter*2,0)
	rope2 = new Rope(bob2.body,roof.body,-bobDiameter*1,0)
	rope3 = new Rope(bob3.body,roof.body,bobDiameter*0,0)
	rope4 = new Rope(bob4.body,roof.body,bobDiameter*1,0)
	rope5 = new Rope(bob5.body,roof.body,bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("#D2C8D0");
  fill(0,0,150);
  bob.display();
  fill("turquoise")
  bob2.display();
  fill(150,0,0)
  bob3.display();
  fill("coral")
  bob4.display(); 
  fill("wheat")
  bob5.display();
  fill("#48A5E7")

  roof.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
  
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob.body,bob.body.position,{x:-800,y:-500})
	}
}
