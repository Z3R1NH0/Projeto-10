var sea,ship;
var seaImg,shipImg;
var airplane,airplane_img;
var invisible;
var invisible_2;


function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
  airplane_img = loadImage ("airplane.png");
  
}


function setup(){
  createCanvas(400,400);
  background("blue");

  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  invisible = createSprite(200,400,400,1);
  invisible.visible = false;

  invisible_2 = createSprite (200,0,400,1);
  invisible_2.visible = false;

  
  ship = createSprite(90,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;

  airplane = createSprite (200,50);
  airplane.addImage(airplane_img);
  airplane.scale = 0.5;
  
}


function draw() {
  
  background(0);
  
  sea.velocityX = -3;

  if (ship.x > 399){
    ship.x = 90;
  }

  if (ship.x < 0){
    ship.x = 90;
  }

  if (ship.y > 399){
    ship.y = 200;
  }

  if (ship.y < 0){
    ship.y = 200;
  }
 
  // movimento 

  if (keyDown ("space")){
    airplane.y = airplane.y + 20
  }

  airplane.y = airplane.y - 4;

  if (keyDown("W")){
    ship.y  = ship.y -20;
  }

  

 ship.y = ship.y + 4;
 ship.collide (invisible);

 airplane.collide (invisible);
 airplane.collide (invisible_2);
    


 // oceano infinito.

  if(sea.x < 0){
    sea.x = sea.width/7;
  }

 
  drawSprites();
}
