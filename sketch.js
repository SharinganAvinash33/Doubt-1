
var Play=1;
var End=0;
var gameState=1;
function preload(){
  bgIm=loadImage("track.jpg");
  coneIm=loadImage("Traffic Cone.png")
  BCoin=loadAnimation("Bronze_21.png","Bronze_22.png","Bronze_23.png","Bronze_24.png","Bronze_25.png","Bronze_26.png","Bronze_27.png","Bronze_28.png","Bronze_29.png","Bronze_30.png")
  GCoin=loadAnimation("Gold_21.png","Gold_22.png","Gold_23.png","Gold_24.png","Gold_25.png","Gold_26.png","Gold_27.png","Gold_28.png","Gold_29.png","Gold_30.png")
  SCoin=loadAnimation("Silver_21.png","Silver_22.png","Silver_23.png","Silver_24.png","Silver_25.png","Silver_26.png","Silver_27.png","Silver_28.png","Silver_29.png","Silver_30.png")  
}
function setup() {
  createCanvas(displayWidth,displayHeight*2);
  bg=createSprite(width/2,height/2-height/4,displayWidth,displayHeight*4)
  bg.addImage(bgIm);
  bg.scale=2
  bg.velocityY=5

  /*cone=createSprite(width/2+340,height/2,10,10)
  cone.addImage(coneIm)
  cone.scale=0.5*/  
  coneGroup=new Group();

  
}

function draw() {
  background(0);
  if(gameState===Play){
  if(bg.y>displayHeight*4){
    bg.y=height/2-height/4
  }
  if(frameCount%100===0&&!(frameCount%120===0)){

  
  createCones();

  }
  if(frameCount%120===0){
    var rand=Math.round(random(1,3));
    switch(rand){
      case 1:BronzeCoin();
      break;
      case 2:SilverCoin();
      break;
      case 3:GoldCoin();
      break;

    }
    
  }
  drawSprites();
  }

  
}

function createCones(){
var rand=Math.round(random(1,4));

cone=createSprite(0,0,10,10)



switch(rand){
  case 1:
    cone.x=width/2-340
    break;
  case 2:
    cone.x=width/2-110
    break;
  case 3:
    cone.x=width/2+110
    break;  
  case 4:
    cone.x=width/2+340
    break;
  default:
    break;

}
cone.addImage(coneIm);
cone.scale=0.5;
cone.velocityY=5
cone.lifetime=350
coneGroup.add(cone);



}

function BronzeCoin(){
var rando=Math.round(random(1,4));

BrCoin=createSprite(0,0,10,10)



switch(rando){
  case 1:
    BrCoin.x=width/2-340
    break;
  case 2:
    BrCoin.x=width/2-110
    break;
  case 3:
    BrCoin.x=width/2+110
    break;  
  case 4:
    BrCoin.x=width/2+340
    break;
  default:
    break;
}


BrCoin.addAnimation("animation",BCoin);
BrCoin.scale=0.2;
BrCoin.velocityY=5;
BrCoin.lifetime=350;
}

function SilverCoin(){
  var random=Math.round(random(1,4));
  
  SiCoin=createSprite(0,0,10,10)
  
  
  
  switch(random){
    case 1:
      SiCoin.x=width/2-340
      break;
    case 2:
      SiCoin.x=width/2-110
      break;
    case 3:
      SiCoin.x=width/2+110
      break;  
    case 4:
      SiCoin.x=width/2+340
      break;
    default:
      break;
  }
  
  
  SiCoin.addAnimation("animation",SCoin);
  SiCoin.scale=0.2;
  SiCoin.velocityY=5;
  SiCoin.lifetime=350;
  }

  function GoldCoin(){
    var randomno=Math.round(random(1,4));
    
    GoCoin=createSprite(0,0,10,10)
    
    
    
    switch(randomno){
      case 1:
        GoCoin.x=width/2-340
        break;
      case 2:
        GoCoin.x=width/2-110
        break;
      case 3:
        GoCoin.x=width/2+110
        break;  
      case 4:
        GoCoin.x=width/2+340
        break;
      default:
        break;
    }
    
    
    GoCoin.addAnimation("animation",BCoin);
    GoCoin.scale=0.2;
    GoCoin.velocityY=5;
    GoCoin.lifetime=350;
    }