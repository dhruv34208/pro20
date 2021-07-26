var astronaut;
var eat;
var move;
var drink;
var sleep;
var bg;
var brush;
var gym;
var bath;
var edge;






function preload (){
  bg=loadImage("iss.png")
  eat = loadAnimation("eat1.png","eat2.png")
  move = loadAnimation("move.png")
  drink = loadAnimation("drink1.png","drink2.png")
  sleep = loadAnimation("sleep.png")
  brush = loadAnimation("brush.png")
  gym= loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
  bath = loadAnimation("bath1.png","bath2.png")
  





}



function setup() {
  createCanvas(800,400);
  astronaut=createSprite(400, 200, 50, 50);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1

}

function draw() {
  background(bg); 
  edge=createEdgeSprites();
  astronaut.bounceOff(edge)
  if(keyDown(UP_ARROW)){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown(DOWN_ARROW)){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown(LEFT_ARROW)){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown(RIGHT_ARROW)){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("m")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
   
    astronaut.velocityX=2;
    astronaut.velocityY=2;
  }
 
  drawSprites();
}