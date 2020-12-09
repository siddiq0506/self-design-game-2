var rocket,rocketImg
var fire,pipe,ice
var sky,backgroundImg

var gameState = 1;


function preload(){
backgroundImg = loadImage("images/sky.png");
 rocketImg = loadImage("images/rocket.png");
 fire = loadImage("images/fire.png");
 pipe = loadImage("images/pipe.png");
 ice = loadImage("images/ice.png");
 

}

function setup(){
createCanvas(displayWidth,displayHeight-140)

bg = createSprite(0,displayHeight/2,displayWidth,displayHeight-140)
bg.addImage(backgroundImg);
bg.scale = 6.5;
bg.x = displayWidth/2
bg.velocityX = -2

rocket = createSprite(150,350,20,50);
rocket.scale = 0.55

}

function draw(){
background("white")

 
  rocket.addImage(rocketImg);

  if (keyDown("space")){
    rocket.velocityY = -18;
  }

if(bg.x<0){
  bg.x = displayWidth/2
}



  rocket.velocityY = rocket.velocityY + 0.8

  
spawnObstacles();
 drawSprites();
}

function spawnObstacles(){
  if(frameCount % 60 === 0){
    obstacles = createSprite(displayWidth,random(50,displayHeight-50),20,20);
    obstacles.velocityX = -4

    var rand = Math.round(random(1,3))
    switch(rand){
      case 1: obstacles.addImage("fire",fire);
      break;

      case 2: obstacles.addImage("ice",ice);
      break;

      case 3: obstacles.addImage("pipe",pipe);
      break;

    }
    obstacles.scale = 0.5
  }

}