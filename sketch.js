var car,wall;
var speed,wieght;

function setup() {
  createCanvas(1600,400);
  car= createSprite(50, 200, 50, 50);
  wall= createSprite(1400, 200,30,height/2);
  wall.shapeColor=color(80,80,80);
  speed=random(55,90);
  wieght=random(400,1500);
  car.velocityX = speed;
  
}

function draw() {
  background(255,255,255);  
  
if(wall.x-car.x<(car.width/2+wall.width/2) ){
  car.velocityX=0;
  var deformation=0.5*wieght*speed*speed/22500;
  if (deformation>180){
    car.shapeColor=color(225,0,0);
    wall.shapeColor=color(225,0,0);
  }
  if (deformation<180&&deformation>100){
    car.shapeColor=color(230,230,0);
    wall.shapeColor=color(230,230,0);
  }
  if ( deformation<100){
    car.shapeColor=color(0,225,0);
    wall.shapeColor=color(0,225,0);
  }
}
  
  drawSprites();
}
