function setup() {
  createCanvas(800,400);
 
}

function draw() {
  background(255,255,255);  
  var castle1 = createSprite(400, 200, 50, 100);
  var castle2 = createSprite(500, 200, 50, 100);
  var castle3 = createSprite(600, 200, 50, 100);
  var castle4 = createSprite(700, 200, 50, 100);
  var castle5 = createSprite(800, 200, 50, 100);
  text("Amazing Castle",400, 350);

  drawSprites();
}