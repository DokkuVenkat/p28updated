
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stone,groundObject;
var mango1,mangao2,mango3,mango4,mango5;
var engine,boyImage,treeImage,platform;
var world,elastic,boy;

function preload(){
	boyImage=loadImage("images/boy.png");
	treeImage=loadImage("images/tree.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	stone = new Stone(100,100,50,50);
	elastic = new Elastic(stone.body,{x:160,y:285});
	mango1=new Mango(900,230,30);
	mango2=new Mango(980,200,30);
	mango3=new Mango(1050,100,30);
	mango4=new Mango(1200,240,30);
	mango5=new Mango(1150,100,30);
	treeObj=new Tree(1050,580);
	groundObject=new Ground(width/2,600,width,20);
	Engine.run(engine);

}

function draw() {

  rectMode(CENTER);
  background(230);
  groundObject.display();
  elastic.display();
  imageMode(CENTER);
  image(boyImage,200,330,130,180);
  treeObj.display();
  stone.display();
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  //platform.display();
  //boyImage.display();
  

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);

}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

//make the bird fly when the mouse is released
function mouseReleased(){
	elastic.fly()
}
function detectCollision(stone,mango){

	//create stonePos and mangoPos
	stonePos = stone.body.position;
	mangoPos = mango.body.position;

	//isTouching instruction - when stone touches mango, the mango falls down and becomes not static
	//if(stonePos.x - mangoPos.x < stone.width/2 + mango.width/2 &&
		//mangoPos.x - stonePos.x < stone.width/2 + mango.width/2 &&
		//stonePos.y - mangoPos.y < stone.height/2 + mango.height/2 &&
		//mangoPos.y - stonePos.y < stone.height/2 + mango.height/2){
			//Matter.Body.setStatic(mango.body,false);
			var distance=dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y)
			if(distance<=mango.r+stone.r) {
	Matter.Body.setStatic(mango.body,false); 
			}

}
function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:160,y:285});
		elastic.attach(stone.body);
	}
}
