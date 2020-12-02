const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
var engine,world,drops,rain=[];
var rand,maxdrops=400,thunderflame=0,t1,t2,t3,t4,manwalk,man,thunder;
function preload(){
  t1=loadImage("images/1.png");
  t2=loadImage("images/2.png");
  t3=loadImage("images/3.png");
  t4=loadImage("images/4.png");
  manwalk=loadAnimation("images/w_1.png","images/w2.png","images/w3.png","images/w4.png","images/w5.png","images/w6.png","images/w7.png","images/w8.png");
}
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
umbrella=new Umbrella(400,350);
man=createSprite(400,500,200,200);
man.scale=0.8;
man.addAnimation("walkin",manwalk);
if (frameCount%50==0)
    for (var j=0; j <= maxdrops; j ++ ) {
      rain.push (new Rain (random(0,800), random(0,800)));
    }

}

function draw() {
  background("black");

  textSize(20)

  Engine.update(engine);
  

  for (var i=0; i<rain.length; i++){
    rain[i].display();
    rain[i].updatey();
  }
  
  
  

  drawSprites();
}