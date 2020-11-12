
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime,score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() 
{
  bananaGroup= new Group();
  obstacleGroup= new Group();
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;  
  
  ground= createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  survivalTime=0;
  score=0;
  
}


function draw() 
{
  background(220);
  
  if (keyDown("space"))
  {
    monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY+0.8; 
  
  if (ground.x<0)
  {
    ground.x=ground.width/2;
  }
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime,100,50);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score,100,70);
  
  if (FoodGroup.isTouching(monkey))
  {
    score=score+1;
  }
  
  if (obstacleGroup.isTouching(monkey))
  {
    score=score-1;
  }
  
  monkey.collide(ground);
  
  bananas();
  obstacles();
  
  drawSprites();
}

function bananas()
{
  if (frameCount%80===0)
  {
    banana=createSprite(200,120,20,20);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.y=Math.round(random(120,200));
    banana.velocityX=-3;
    banana.lifetime=50;
    FoodGroup.add(banana);
  }
}

function obstacles()
{
  if (frameCount%300===0)
  {
    obstacle= createSprite(80,315,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.x=Math.round(random(120,200));
    obstacle.velocityX=-3;
    obstacle.lifetime=50;
    obstacleGroup.add(obstacle);
  }
}


