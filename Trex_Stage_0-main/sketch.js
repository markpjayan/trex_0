
var trex ,trex_running;
var ground;
var groundimage;
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
groundimage=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale=0.5
  ground=createSprite(200,180,400,20);
  ground.addImage(groundimage)

}

function draw(){
  background("white")
  ground.velocityX=-2
  if(ground.x<0){
    ground.x=ground.width/2
    console.log(ground.width)
  }
  if(keyDown("space")){
    trex.velocityY=-10;

  }
  trex.velocityY=trex.velocityY+0.5
  trex.collide(ground)
  drawSprites();

}