var background,player1,arcade,arcade2
var gamestate="bcoll"


function preload(){
   player1image=loadAnimation("sprites/mariostanding.png")
    backgroundimage=loadImage("sprites/background.jpg")
     player1image2=loadAnimation("sprites/marioimage.png")
     carimage=loadAnimation("sprites/car.png")
     heartimage=loadImage("sprites/heart.png")
     trophyimage=loadImage("sprites/trophy.png")
     stoneimage=loadImage("sprites/stone.png")
     fireimage=loadImage("sprites/fire.png")
     policeconesimage=loadImage("sprites/policecones.png")
     arcadeimage=loadImage("sprites/arcade.png")
     yesimage=loadImage("sprites/yes mage.png")
     textimage=loadImage("sprites/my game text.png")
  } 


function setup(){
canvas=createCanvas(1000,800)
score=5
points=0
score2=5
points2=0


textSize(20)


background1=createSprite(500,400,2000,800)
background1.addImage(backgroundimage)
background1.velocityX=-5
background1.scale=2.8



ground=createSprite(500,410,1000,10)
ground.shapeColor="pink"

ground2=createSprite(500,790,1000,10)
ground2.shapeColor="pink"
ground2.visible=false

player1=createSprite(100,380,30,40)
player1.addAnimation("mario",player1image)
player1.addAnimation("mariorunning",player1image2)
player1.scale=0.1



player2=createSprite(100,780,30,40)
player2.addAnimation("car",carimage)
player2.scale=0.2


lifeplayer1=createSprite(100,80,10,10)
lifeplayer1.addImage("heart",heartimage)
lifeplayer1.scale=0.1

awardplayer1=createSprite(600,80,10,10)
awardplayer1.addImage("award",trophyimage)
awardplayer1.scale=0.1

lifeplayer2=createSprite(100,480,10,10)
lifeplayer2.addImage("heart",heartimage)
lifeplayer2.scale=0.1

awardplayer2=createSprite(600,480,10,10)
awardplayer2.addImage("award",trophyimage)
awardplayer2.scale=0.1

obstaclegroup=new Group();
obstaclegroup2=new Group();
arcadegroup=new Group();

}



function draw(){

   

background("black")

if(background1.x<0 ){
  background1.x=background1.width/2
} 

if (gamestate==="bcoll"){
  if(keyDown("Right_arrow")){
    player1.changeAnimation("mariorunning",player1image2)
    player1.x=player1.x+2
    player1.scale=0.4
    }
    else{player1.changeAnimation("mario",player1image)
    player1.scale=0.1
    }
    
    if(keyDown("d")){
    player2.x=player2.x+2
    
    }
    
    var select_balloon = Math.round(random(1, 3));
  if (World.frameCount % 200 === 0) {
    if (select_balloon === 1) {
      stone();

    } else if (select_balloon === 2) {
      fire();
    } else if (select_balloon === 3) {
      policecones();
    }
  }

 
  if (World.frameCount % 1250 == 0) {
heart();
  }


  
  if (World.frameCount % 300 == 0) {
    arcade1();
    console.log("hi")
  
   }

   var select_balloon = Math.round(random(1, 3));
   if (World.frameCount % 200 == 0) {
     if (select_balloon == 1) {
       stone1();
 
     } else if (select_balloon == 2) {
       fire1();
     } else if (select_balloon == 3) {
       policecones1();
     }
   }
 
   var select_balloon = Math.round(random(1, 3));
   if (World.frameCount % 1250 == 0) {
 heart1();
   }
 
  var select_balloon = Math.round(random(1, 3));
   if (World.frameCount % 1500 == 0) {
 arcade2p();
   }
 
 
   if(keyDown("space")) {
    player1.velocityY = -5;
 }
 player1.velocityY =player1.velocityY + 0.1
 
 player1.collide(ground)
 
 if(keyDown("x")) {
   player2.velocityY = -5;
 }
 player2.velocityY =player2.velocityY + 0.1
 
 player2.collide(ground2)
 
 if(obstaclegroup.isTouching(player1)){
   obstaclegroup.destroyEach();
   obstaclegroup.return
   score=score-1
 }
 
 if(obstaclegroup2.isTouching(player2)){
   obstaclegroup2.destroyEach();
   obstaclegroup2.return
   score2=score2-1
 }

   if(arcadegroup.isTouching(player1)){
     gamestate="acoll"
   }
}
   
   if( gamestate==="acoll"){
    console.log("i am here")
    obstaclegroup.setVelocityXEach(0);
    player1.velocityX=0
    arcadegroup.setVelocityXEach(0);
    obstaclegroup.setLifetimeEach(-1)
    arcadegroup.setLifetimeEach(-1)
    fill("black")
    text("to enter in the challange press yes",500,400)
    text2=createSprite(500,300,30,40)
text2.addAnimation("car",textimage)
 
yes=createSprite(400,300,30,40)
yes.addAnimation("car",yesimage)

function mousePressed(){
  if (mousePressedOver(yes)){ 
    //range accounting for text length
    window.open("http://www.google.com", _self);
}}

   
    }


drawSprites();
fill("white")
text(score,120,85)
console.log(score)

fill("white")
text(points,620,85)
console.log(points)

fill("white")
text(score2,120,485)
console.log(score)

fill("white")
text(points2,620,485)
console.log(points)

}


function stone() {
   var stone= createSprite(1000, Math.round(random(300, 400)), 10, 10);
   stone.addImage("stone",stoneimage)
   stone.velocityX = -3;
   stone.scale = 0.1;
   stone.lifetime = 1500
   obstaclegroup.add(stone)
 }




 function fire() {
   var fire= createSprite(1000, Math.round(random(300,400)), 10, 10);
   fire.addImage("fire1",fireimage)
   fire.velocityX = -3;
   fire.scale = 0.2;
   fire.lifetime = 1500
   obstaclegroup.add(fire)
 }


 function policecones() {
   var policecones = createSprite(1000, Math.round(random(400,400)), 10, 10);
   policecones.addImage("cones",policeconesimage)
   policecones.velocityX = -3; 
   policecones.scale = 0.2;
   policecones.lifetime = 1500
   obstaclegroup.add(policecones)
 }

 function heart() {
   var heart= createSprite(Math.round(random(1200,800)), Math.round(random(400,400)), 10, 10);
   heart.addImage("cones",heartimage)
   heart.velocityX = -3; 
   heart.scale = 0.1;
   heart.lifetime = 1500
 }





 function stone1() {
   var stone1= createSprite(Math.round(random(1200,800)), Math.round(random(700, 800)), 10, 10);
   stone1.addImage("stone",stoneimage)
   stone1.velocityX = -3;
   stone1.scale = 0.1;
   stone1.lifetime = 1500
   obstaclegroup2.add(stone1)
 }




 function fire1() {
   var fire1= createSprite(1000, Math.round(random(700,800)), 10, 10);
   fire1.addImage("fire1",fireimage)
   fire1.velocityX = -3;
   fire1.scale = 0.2;
   fire1.lifetime = 1500
   obstaclegroup2.add(fire1)
 }


 function policecones1() {
   var policecones1 = createSprite(1000, Math.round(random(700,800)), 10, 10);
   policecones1.addImage("cones",policeconesimage)
   policecones1.velocityX = -3; 
   policecones1.scale = 0.2;
   policecones1.lifetime = 1500
   obstaclegroup2.add(policecones1)
 }

 function heart1() {
   var heart1= createSprite(1000, Math.round(random(700,800)), 10, 10);
   heart1.addImage("cones",heartimage)
   heart1.velocityX = -3; 
   heart1.scale = 0.1;
   heart1.lifetime = 1500
 }


 function arcade1(){

arcade=createSprite(Math.round(random(1200,800)), Math.round(random(300, 400)), 40, 50);
arcade.addImage("arcade1",arcadeimage)
arcade.scale=0.5
arcade.velocityX= -3
arcade.lifetime = 1500
arcadegroup.add(arcade)
 }



 function arcade2p(){

   arcade2=createSprite(Math.round(random(1200,800)), Math.round(random(700, 800)), 40, 50);
   arcade2.addImage("arcade1",arcadeimage)
   arcade2.scale=0.5
   arcade2.velocityX= -3
   arcade2.lifetime = 1500
 }

