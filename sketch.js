var cat,cat_running;
var mouse,mouse_running;
var garden,gardenImage;

function preload() {
    //load the images here
    cat_running = loadAnimation("cat1.png,cat2.png,cat3.png,cat4.png");
    mouse_running = loadAnimation("mouse1.png,mouse2.png,mouse3.png,mouse4.png");
    gardenImage = loadImage("garden.png");
    cat_lastIImg = loadAnimation("cat4.png");
    mouse_lastImg = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(1000,800,50,50);
    garden.addImage(gardenImage);
    cat = createSprite(600,600,50,50);
    cat.addAnimation("moving",cat_running);
    mouse = createSprite(300,300,20,20);
    mouse.addAnimation("moving",mouse_running);


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < mouse.width/2 + cat.width/2
      && mouse.x - cat.x < cat.width/2 + mouse.width/2
      && cat.x - mouse.x < mouse.height/2 + cat.height/2 
      && mouse.x - cat.x < cat.height/2 + mouse.height/2){
       
      cat.changeAnimation("cat_lastImg",cat4.png)   
    }else
    mouse.changeAnimation("mouse_lastImg",mouse4.png);

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("cat_running",cat2.png);
    cat.changeAnimation("cat_running");
  }
  if(keyCode===LEFT_ARROW){
    mouse.addAnimation("mouse_running",mouse2.png);
    mouse.changeAnimation("mouse_running");
  }

}
