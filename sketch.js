var bullets  ,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52)
  thickness=random(22,83)

  bullets = createSprite(50, 200, 100, 10);
  bullets.shapeColor = "white"
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = rgb(80,80,80)
  bullets.velocityX = speed;
}

function draw() {
  background("skyBlue");  
  if(hasCollided(bullets,wall))
  {
    bullets.velocityX = 0
    bullets.X = wall.X
    damage = (0.5 * weight * speed * speed )/(thickness * thickness * thickness);
    if(damage>10){ 
      wall.shapeColor = rgb(255,0,0);
     
    }
    else if(damage<10){
      wall.shapeColor = rgb(0,255,0);
  }
  drawSprites();
}

}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width/2;
  wallLeftEdge=lwall.x- lwall.width/2;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
  else{
    return false;
  }

}