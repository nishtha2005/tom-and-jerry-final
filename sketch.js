var cat,cI,m,mI,g,gI,mI2,ci2,mi3,ci3;

function preload(){
  gI=loadImage("garden.png");
  cI=loadImage("cat1.png")
  ci2=loadAnimation("cat2.png","cat3.png")
  ci3=loadAnimation("cat4.png")
 mI=loadImage("mouse4.png"); 
 mI2=loadAnimation("mouse2.png","mouse3.png")
 mi3=loadAnimation("mouse1.png");
 
}

function setup() {
 createCanvas(600,600);
  g=createSprite(300,300)
  g.addImage(gI)
  g.scale=0.8
  
  m=createSprite(100,450)
  m.addImage(mI)
  m.scale=0.1
  
  

  cat=createSprite(530,450)
  cat.addImage(cI)
  cat.scale=0.15
}  
  
  


function draw() {
  keypressed();
if(cat.x-m.x<(cat.width-m.width)/2){

  cat.velocityX=0;
  cat.addAnimation("happy",ci3);
  cat.changeAnimation("happy");
  m.addAnimation("smile",mi3);
  m.changeAnimation("smile"); 
}
if(cat.isTouching(m)){
  cat.x=250;
  cat.addAnimation("happy",ci3);
  cat.changeAnimation("happy");
  m.addAnimation("smile",mi3);
  m.changeAnimation("smile"); 
}
drawSprites(); 
 
}
function keypressed(){
  if(keyDown("space")){
    m.addAnimation("tease",mI2);
    m.changeAnimation ("tease");
    m.frameDelay=10;
  }
  if(keyDown("right_arrow")){
    cat.addAnimation("run",ci2);
    cat.changeAnimation("run");
    cat.frameDelay=10;
    cat.velocityX=-1;
  }
}