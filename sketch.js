var sleep;var sleepi
var issb;var iss
var astronaut
var brusha
var move
var gym
var eat
var bath

function preload(){
issb=loadImage("images//iss.png")
sleepi= loadAnimation("images//sleep.png")
brusha=loadAnimation("images//brush.png")
move=loadAnimation("images//move.png","images//move1.png")
gym=loadAnimation("images//gym1.png","images//gym2.png")
eat=loadAnimation("images//eat1.png","images//eat2.png")
bath=loadAnimation("images//bath1.png","images//bath2.png")
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
iss=createSprite(400,200,0.5,0.5)
  iss.addImage(issb)
  iss.scale=0.15

  astronaut=createSprite(400,210)
  astronaut.addAnimation("sleeping",sleepi)
  astronaut.scale=0.10
  
createEdgeSprites();

}


function draw() {
  
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation('brushing',brusha)
    astronaut.changeAnimation('brushing')
    astronaut.y=350
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation('eating',eat)
    astronaut.changeAnimation('eating')
      astronaut.y=200
      astronaut.velocityX=0
      astronaut.velocityY=0
    }
    if(keyDown("DOWN_ARROW")){
      astronaut.addAnimation('gymming',gym)
      astronaut.changeAnimation('gymming')
        astronaut.y=300
        astronaut.velocityX=0
        astronaut.velocityY=0
      
      }
      if(keyDown("LEFT_ARROW")){
        astronaut.addAnimation('bathing',bath)
        astronaut.changeAnimation('bathing')
          astronaut.y=300
          astronaut.velocityX=0
          astronaut.velocityY=0
        }
  
        if(keyDown("M")){
          astronaut.addAnimation('moving',move)
          astronaut.changeAnimation('moving')
          astronaut.velocityX=1
          astronaut.velocityY=1
        
    }
  
  
  background(255,255,255);  
  drawSprites();
} 