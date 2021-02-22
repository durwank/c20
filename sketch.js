var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(600, 300, 80, 50);

  fixedRect.shapeColor="blue";
  movingRect.shapeColor="blue";

}

function draw() {
  background(255,255,255);  
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(movingRect.x-fixedRect.x===movingRect.width/2+fixedRect.width/2 && fixedRect.x-movingRect.x===movingRect.width/2+fixedRect.width/2)
  {
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green"; 
  }
  else{
    fixedRect.shapeColor="blue";
  movingRect.shapeColor="blue";
  }


  drawSprites();
}