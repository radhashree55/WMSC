var wall,bullet,speed,weight,thickness1,thickness2,damage;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50, 200, 50, 20);
  bullet.shapeColor = "white";
  bullet.weight = random(30,52);
  bullet.speed= random(223,321);
  bullet.velocityX = bullet.speed;
  bullet.debug = false;

  wall = createSprite(1200, 200);
  wall.shapeColor =color(80,80,80);
  wall.debug = false;
  wall.thickness1 = random(22,83);
  wall.width = wall.thickness1;
  wall.height = wall.thickness1*3;

  wall.thickness2 = wall.thickness1*wall.thickness1*wall.thickness1;

  bullet.damage = 0.5*bullet.weight*bullet.speed*bullet.speed/wall.thickness2;
}

function draw() {
  background(0); 

    if (bullet.x - wall.x < wall.width + bullet.width/2
      && wall.x - bullet.x < wall.width + bullet.width/2){

        bullet.velocityX = 0;

        if(bullet.damage > 10){
         wall.shapeColor =color(255,0,0);
        }

        if(bullet.damage < 10){
         wall.shapeColor =color(0,255,0);
        } 
      }
  drawSprites();
}