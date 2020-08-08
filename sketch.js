var block,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world,engine;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  ground = new Ground(400,380,800,10);

  block9 = new Block(292,10,20,20 );
  block8 = new Block(294,10,20,20 );
  block7 = new Block(291,10,20,20 );
  block6 = new Block(294,10,20,20 );
  block5 = new Block(295,10,20,20 );
  //level three
  block4 = new Block(380,200,20,20 );
  block3 = new Block(380,200,20,20 );
  block2 = new Block(380,200,20,20 );
   //top
  block1 = new Block(390,165,20,20);

}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  ground.display();
  block9.display();
  block8.display();
  block7.display();
  block6.display();
  block5.display();
  block4.display();
  block3.display();
  block2.display();
  block1.display();
  drawSprites(); 
}