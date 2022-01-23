var man, running_man;
var path, pathImage;

var boundaryRight
var boundaryLeft

function preload(){
  running_man = loadAnimation("Runner-1.png", "Runner-2.png");
  pathImage = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);

  path = createSprite(200,200,400,400);
  path.addImage("path.png", pathImage)
  path.velocityY = 4;

  man = createSprite(200,360,30,40);
  man.addAnimation("running", running_man);
  man.scale = 0.1;

  boundaryRight = createSprite(400,200,80,400);
  boundaryLeft = createSprite(10,200,80,400);

  boundaryRight.visible = false;
  boundaryLeft.visible = false;

  
}

function draw() {
  background("black");

if (path.y > 400)  {
  path.y = path.height/8;
}

man.x = mouseX
man.collide(boundaryRight);
man.collide(boundaryLeft);

drawSprites();
}
