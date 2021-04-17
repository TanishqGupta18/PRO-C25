
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject;
var paperBall;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperBall =new Paper(100,600);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  //if(paperBall.isTouching(dustbinObj))

  groundObject.display();
  dustbinObj.display();
  paperBall.display();

}
function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:127,y:-127});
    }
}

