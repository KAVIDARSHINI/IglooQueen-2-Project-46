var bgImg,bg;
var playImg,playButton;

var snowImg,snow;
var gameState = "start";

var levelOneBg,levelOneImg,levelTwoBg,levelTwoImg;
var levelThreeBg,levelThreeImg;

var iglooImg,igloo1,iglooOpen1,igloo2,iglooOpen2;
var penguinImg,penguin1;

var land1,land2,land3,land4,land5,land6;
var land1Img,land2Img;
var path1,path2,path3,path4,path5,path6;

var seal1,seal2,seal1Img,seal2Img;
var icicle,icicleImg;

var crownImg,crown1,crown2,crown3,crown4,crown5,crown6;
var fishImg,fish1,fish2,fish3,fish4,fish5,fish6,fish7,fish8,fish9,fish10;

var lev1Life1,lev1Life2,lev1Life3,lifeImg;
var lev2Life1,lev2Life2,lev2Life3,lev2Life4,lev2Life5;

var level1Life = 3;
var level2Life = 5;
var level1Score = 0;
var level2Score = 0;

var bgSound,collectSound,loseSound,winSound,crackSound;

var gameOverImg,gameOver,restart,restartImg;



function preload(){

 bgImg = loadImage("images/backtitle.png");
 playImg = loadImage("images/playbutton.png");
 snowImg = loadImage("images/snowballs.png");

 levelOneImg = loadImage("images/iceland3.jpg");
 levelTwoImg = loadImage("images/iceland5.jpg");
 levelThreeImg = loadImage("images/iceland2.png");
 iglooImg = loadImage("images/igloos.png");
 penguinImg = loadImage("images/penqueens.png");
 land1Img = loadImage("images/land1.png");
 land2Img = loadImage("images/land2.png");
 land3Img = loadImage("images/land4.png");
 seal1Img = loadImage("images/angryseal.png");
 seal2Img = loadImage("images/sealr.png");
 icicleImg = loadImage("images/icicle1.png");
 crownImg = loadImage("images/crown.png");
 fishImg = loadImage("images/fish.png");
 lifeImg = loadImage("images/heart.png");
 gameOverImg = loadImage("images/gameOver.png");
 restartImg = loadImage("images/restart.png");


 bgSound = loadSound("sounds/bgSound.mp3");
 collectSound = loadSound("sounds/collectSound.mp3");
 loseSound = loadSound("sounds/loseSound.mp3");
 winSound = loadSound("sounds/winSound.mp3");
 crackSound = loadSound("sounds/crackSound.mp3");

 
 



}

function setup() {
  createCanvas(windowWidth,windowHeight);
  edges = createEdgeSprites();

  setStart();
  setLevelOne();
  setLevelTwo();
  setLevelThree();
}

function draw() {
  background("#0019A6");  
  drawSprites();
  if( gameState === "start"){
    levelStart();
  }else if(gameState === "levelOne"){
    levelOne();
  }else if(gameState === "levelTwo"){
    levelTwo();
  }else if(gameState === "levelThree")
    levelThree();
}

function setStart(){

  bg = createSprite(windowWidth/2,windowHeight/2,width,height);
  bg.addImage("background",bgImg);
  bg.scale = 1.163;
  bg.visible = false;

  playButton = createSprite(windowWidth/2,windowHeight/2);
  playButton.addImage(playImg);
  playButton.scale = 0.2;
  playButton.visible = false;
}

function setLevelOne(){
     
     bgSound.loop();
     
     levelOneBg = createSprite(windowWidth/2,windowHeight/2,width,height);
     levelOneBg.addImage(levelOneImg);
     levelOneBg.scale = 2.6;
     levelOneBg.visible = false;

     igloo1 = createSprite(windowWidth-230,windowHeight-70);
     igloo1.addImage(iglooImg);
     igloo1.visible = false;
     //igloo.debug = true;
     igloo1.setCollider("rectangle",0,0,150,110);

     iglooOpen1 = createSprite(windowWidth-305,windowHeight-30,30,40);
     iglooOpen1.visible = false;

     land1 = createSprite(windowWidth/2+550,windowHeight/2-200,400,30);
     land1.addImage(land1Img);
     land1.visible = false;
     //land1.debug = true;
     land1.setCollider("rectangle",0,10,550,40);

     land2 = createSprite(windowWidth/2+20,windowHeight/2-190);
     land2.addImage(land2Img);
     land2.visible = false;
     //land2.debug = true;
     land2.setCollider("rectangle",0,0,250,40);

     land3 = createSprite(windowWidth/2-450,windowHeight/2 +150);
     land3.addImage(land1Img);
     land3.visible = false;
    // land3.debug = true;
     land3.setCollider("rectangle",0,10,550,40);

     land4 = createSprite(windowWidth/2 - 250,windowHeight/2-20);
     land4.addImage(land2Img);
     land4.visible = false;
     //land4.debug = true;
     land4.setCollider("rectangle",0,0,250,40);

     land5 = createSprite(windowWidth/2-70,windowHeight/2 + 370);
     land5.addImage(land1Img);
     land5.visible = false;
     //land5.debug = true;
     land5.setCollider("rectangle",0,10,550,40);

     land6 = createSprite(windowWidth/2+330,windowHeight/2+380);
     land6.addImage(land2Img);
     land6.visible = false;
     //land6.debug = true;
     land6.setCollider("rectangle",0,0,250,40);

     penguin1 = createSprite(windowWidth - 100,windowHeight -1000);
     penguin1.addImage(penguinImg);
     penguin1.scale = 0.1;
     penguin1.visible = false;
      
     crown2 = createSprite(windowWidth-1450,windowHeight -240);
     crown2.addImage(crownImg);
     crown2.scale = 0.2;
     crown2.visible = false;

     crown4 = createSprite(windowWidth - 1000,windowHeight - 240);
     crown4.addImage(crownImg);
     crown4.scale = 0.2;
     crown4.visible = false;
     
     seal1 = createSprite(windowWidth -1175,windowHeight/2 + 100);
     seal1.addImage(seal1Img);
     seal1.scale = 0.5;
     seal1.velocityX = -3;
     seal1.visible = false;

     seal2 = createSprite(windowWidth -1100,windowHeight - 50 );
     seal2.addImage(seal2Img);
     seal2.scale = 0.5;
     seal2.velocityX = 3;
     seal2.visible = false;

     crown1 = createSprite(windowWidth-920,windowHeight -430);
     crown1.addImage(crownImg);
     crown1.scale = 0.2;
     crown1.visible = false;

     crown3 = createSprite(windowWidth - 750,windowHeight - 680);
     crown3.addImage(crownImg);
     crown3.scale = 0.2;
     crown3.visible = false;

     crown5 = createSprite(windowWidth - 800,windowHeight - 680);
     crown5.addImage(crownImg);
     crown5.scale = 0.2;
     crown5.visible = false;

     crown6 = createSprite(windowWidth - 700,windowHeight - 680);
     crown6.addImage(crownImg);
     crown6.scale = 0.2;
     crown6.visible = false;

     lev1Life1 = createSprite(windowWidth-1300,windowHeight-650,20,20);
     lev1Life1.addImage(lifeImg);
     lev1Life1.scale = 0.1;
     lev1Life1.visible = false;
     lev1Life2 = createSprite(windowWidth-1250,windowHeight-650,20,20);
     lev1Life2.addImage(lifeImg);
     lev1Life2.scale = 0.1;
     lev1Life2.visible = false;
     lev1Life3 = createSprite(windowWidth-1200,windowHeight-650,20,20);
     lev1Life3.addImage(lifeImg);
     lev1Life3.scale = 0.1;
     lev1Life3.visible = false;

     gameOver = createSprite(windowWidth/2,windowHeight/2);
     gameOver.addImage(gameOverImg);
     gameOver.scale = 0.8;
     gameOver.visible = false;

     restart = createSprite(windowWidth - 750,windowHeight-80);
     restart.addImage(restartImg);
     restart.scale = 0.5;
     restart.visible = false;
}

function level1PenguinLife(){

  if(penguin1.isTouching(seal1)){
    loseSound.play();
    level1Life = level1Life - 1;    
    penguin1.x =  windowWidth - 100;  
    penguin1.y =  windowHeight -1000;
  }

  if(penguin1.isTouching(seal2)){
    loseSound.play();
    level1Life = level1Life - 1; 
    penguin1.x =  windowWidth - 100;  
    penguin1.y =  windowHeight -1000;
  }
  if(level1Life === 2){
    lev1Life3.destroy();
  }
  if(level1Life === 1){
    lev1Life2.destroy();
  }
  if(level1Life === 0){
    lev1Life1.destroy();
    gameOver.visible = true;
    restart.visible = true;
    seal1.velocityX = 0;
    seal2.velocityX = 0;
    snow.destroy();
   }
}

function level1PenguinScore(){
 
  fill("black");
  textFont("algerian");
  textSize(30);
  text("Crowns : " + level1Score,450,80);

  if(penguin1.isTouching(crown1)){
    collectSound.play();
    crown1.destroy();
    level1Score = level1Score +1;
    textSize(50);
  }

  if(penguin1.isTouching(crown2)){
    collectSound.play();
    crown2.destroy();
    level1Score = level1Score+1;
    textSize(50);
  }

  if(penguin1.isTouching(crown3)){
    collectSound.play();
    crown3.destroy();
    level1Score = level1Score +1;
    textSize(50);
  }

  if(penguin1.isTouching(crown4)){
    collectSound.play();
    crown4.destroy();
    level1Score = level1Score +1;
    textSize(50);
  }

  if(penguin1.isTouching(crown5)){
    collectSound.play();
    crown5.destroy();
    level1Score = level1Score +1;
    textSize(50);
  }

  if(penguin1.isTouching(crown6)){
    collectSound.play();
    crown6.destroy();
    level1Score = level1Score +1;
    textSize(50);
  }
}

function levelStart(){

  bg.visible = true;
  playButton.visible = true;
   if(mousePressedOver(playButton) ){
     gameState = "levelOne";
   }
}

function levelOne(){

 // penguin1.bounceOff(edges);

  if(frameCount % 5 === 0){
    snow = createSprite(500,1,20,20);
    snow.x = Math.round(random(1,windowWidth));
    //console.log(snow.x);
    snow.addImage(snowImg);
    snow.scale = 0.07;
    snow.velocityY = 7;
    snow.lifetime = 102;
  }

  level1PenguinScore();

  levelOneBg.visible = true;
  bg.destroy();
  playButton.destroy();

  igloo1.visible = true;
  penguin1.collide(igloo1);
  iglooOpen1.visible = false;

  penguin1.visible = true;
  seal1.visible = true;
  seal2.visible = true;

  land1.visible = true;
  penguin1.collide(land1);

  land2.visible = true;
  penguin1.collide(land2);

  land3.visible = true;
  penguin1.collide(land3);

  land4.visible = true;
  penguin1.collide(land4);

  land5.visible = true;
  penguin1.collide(land5);

  land6.visible = true;
  penguin1.collide(land6);

  crown1.visible = true;
  crown2.visible = true;
  crown3.visible = true;
  crown4.visible = true;
  crown5.visible = true;
  crown6.visible = true;

  lev1Life1.visible = true;
  lev1Life2.visible = true;
  lev1Life3.visible = true;

  if(seal1.x < (windowWidth -1450)){
    seal1.velocityX = 3;
    seal1.mirrorX(-1);
  }
  if(seal1.x > (windowWidth -1000)){
    seal1.velocityX = -3;
    seal1.mirrorX(1);
  }

  if(seal2.x <(windowWidth-1000)){
    seal2.velocityX = 3;
    seal2.mirrorX(1);
  }

  if(seal2.x >(windowWidth-600)){
    seal2.velocityX = -3;
    seal2.mirrorX(-1);
  }
  
 if(keyDown(RIGHT_ARROW) || keyDown("D")){
   penguin1.x = penguin1.x + 10;
   penguin1.mirrorX(-1);
 }

 if(keyDown(LEFT_ARROW) || keyDown("A")){
   penguin1.x = penguin1.x - 10;
   penguin1.mirrorX (1);
 }

 if(keyDown(UP_ARROW)|| keyDown("W")){
  penguin1.velocityY = -13;
 }

  penguin1.velocityY = penguin1.velocityY + 0.8;

  level1PenguinLife();
 
  
  if(penguin1.isTouching(iglooOpen1)){
    //add sound
    winSound.play();
    bgSound.stop();
     gameState = "levelTwo";
  }
   
  
  
}

function setLevelTwo(){
    //bgSound.play();
    
    levelTwoBg = createSprite(windowWidth/2,windowHeight/2,width,height);
    levelTwoBg.addImage(levelTwoImg);
    levelTwoBg.scale = 1.55;
    levelTwoBg.visible = false;

    igloo2 = createSprite(windowWidth-1450,windowHeight-60);
    igloo2.addImage(iglooImg);
    igloo2.visible = false;
    igloo2.mirrorX(-1);
    //igloo2.debug = true;
    igloo2.setCollider("rectangle",0,0,150,110);

    iglooOpen2 = createSprite(windowWidth-1380,windowHeight-25,30,40);
    iglooOpen2.visible = false;

    path1 = createSprite(windowWidth-1270,windowHeight-600);
    path1.addImage(land1Img);
    path1.visible = false;
    //path1.debug = true;
    path1.setCollider("rectangle",0,10,550,40);

    path2 = createSprite(windowWidth-890,windowHeight-400);
    path2.addImage(land3Img);
    path2.visible = false;
    //path2.debug = true;
    path2.setCollider("rectangle",100,5,470,40);

    path3 = createSprite(windowWidth-270,windowHeight-600);
    path3.addImage(land1Img);
    path3.visible = false;
    path3.mirrorX(-1);
    //path3.debug = true;
    path3.setCollider("rectangle",0,10,550,40);

    path4= createSprite(windowWidth-1280,windowHeight-400);
    path4.addImage(land1Img);
    path4.visible = false;
    //path4.mirrorX(-1);
    //path4.debug = true;
    path4.setCollider("rectangle",0,10,550,40);

    path5 = createSprite(windowWidth-290,windowHeight-400);
    path5.addImage(land1Img);
    path5.visible = false;
    path5.mirrorX(-1);
    //path5.debug = true;
    path5.setCollider("rectangle",0,10,550,40);

    path6 = createSprite(windowWidth-770,windowHeight-200);
    path6.addImage(land1Img);
    path6.visible = false;
   // path6.mirrorX(-1);
    //path6.debug = true;
    path6.setCollider("rectangle",0,10,550,40);

     path7 = createSprite(windowWidth-300,windowHeight-100);
     path7.addImage(land2Img);
     path7.visible = false;
    // path7.debug = true;
     path7.setCollider("rectangle",0,0,250,40);

     path8 = createSprite(windowWidth- 1250,windowHeight+20);
     path8.addImage(land2Img);
     path8.visible = false;
    // path8.debug = true;
     path8.setCollider("rectangle",0,0,250,40);
    
    penguin2 = createSprite(windowWidth-1300,windowHeight-600);
    penguin2.addImage(penguinImg);
    penguin2.scale = 0.1;
    penguin2.mirrorX(-1);
    penguin2.visible = false;

    fish1 = createSprite(windowWidth-1200,windowHeight -450);
    fish1.addImage(fishImg);
    fish1.scale = 0.08;
    fish1.visible = false;

    fish2 = createSprite(windowWidth-1300,windowHeight -450);
    fish2.addImage(fishImg);
    fish2.scale = 0.08;
    fish2.visible = false;

    fish3 = createSprite(windowWidth-1400,windowHeight -450);
    fish3.addImage(fishImg);
    fish3.scale = 0.08;
    fish3.visible = false;

    fish4 = createSprite(windowWidth-1100,windowHeight -450);
    fish4.addImage(fishImg);
    fish4.scale = 0.08;
    fish4.visible = false;

    fish5 = createSprite(windowWidth-200,windowHeight -450);
    fish5.addImage(fishImg);
    fish5.scale = 0.08;
    fish5.visible = false;

    fish6 = createSprite(windowWidth-300,windowHeight -450);
    fish6.addImage(fishImg);
    fish6.scale = 0.08;
    fish6.visible = false;

    fish7 = createSprite(windowWidth-400,windowHeight -450);
    fish7.addImage(fishImg);
    fish7.scale = 0.08;
    fish7.visible = false;

    fish8 = createSprite(windowWidth-100,windowHeight -450);
    fish8.addImage(fishImg);
    fish8.scale = 0.08;
    fish8.visible = false;

    fish9 = createSprite(windowWidth-300,windowHeight -200);
    fish9.addImage(fishImg);
    fish9.scale = 0.08;
    fish9.visible = false;

    fish10 = createSprite(windowWidth-1250,windowHeight - 50);
    fish10.addImage(fishImg);
    fish10.scale = 0.08;
    fish10.visible = false;

    icicle = createSprite(500,1,20,20);
    icicle.addImage(icicleImg);
    icicle.scale = 0.9;
   // icicle.debug = true;
    icicle.visible = false;

     lev2Life1 = createSprite(windowWidth-850,windowHeight-700,20,20);
     lev2Life1.addImage(lifeImg);
     lev2Life1.scale = 0.1;
     lev2Life1.visible = false;
     lev2Life2 = createSprite(windowWidth-800,windowHeight-700,20,20);
     lev2Life2.addImage(lifeImg);
     lev2Life2.scale = 0.1;
     lev2Life2.visible = false;
     lev2Life3 = createSprite(windowWidth-750,windowHeight-700,20,20);
     lev2Life3.addImage(lifeImg);
     lev2Life3.scale = 0.1;
     lev2Life3.visible = false;
     lev2Life4 = createSprite(windowWidth-700,windowHeight-700,20,20);
     lev2Life4.addImage(lifeImg);
     lev2Life4.scale = 0.1;
     lev2Life4.visible = false;
     lev2Life5 = createSprite(windowWidth-650,windowHeight-700,20,20);
     lev2Life5.addImage(lifeImg);
     lev2Life5.scale = 0.1;
     lev2Life5.visible = false;  

}

function level2PenguinLife(){

  if(penguin2.isTouching(icicle)){
      level2Life = level2Life - 1; 
      loseSound.play();
      penguin2.x =  windowWidth-1300;  
      penguin2.y =  windowHeight-600;
  }

  if(level2Life === 4){
    lev2Life5.destroy();
  }

  if(level2Life === 3){
    lev2Life4.destroy();
  }

  if(level2Life === 2){
    lev2Life3.destroy();
  }

  if(level2Life === 1){
    lev2Life2.destroy();
  }

  if(level2Life === 0){
    lev2Life1.destroy();
    //gameOver.visible = true;
    //restart.visible = true;
    //seal1.velocityX = 0;
    //seal2.velocityX = 0;
    //snow.destroy();
   }

}

function level2PenguinScore(){

 /* if(level1Score === 10){
    fill("black");
    textFont("algerian");
    textSize(50);
    text("Stomach Full",windowWidth/2,windowHeight/2);
 }*/

  fill("black");
  textFont("algerian");
  textSize(50);
  text("Fish : " + level2Score, windowWidth-850,windowHeight - 600 );

  if(penguin2.isTouching(fish1)){
   collectSound.play(); 
   fish1.destroy();
   level2Score = level2Score + 1;
  }

  if(penguin2.isTouching(fish2)){
    collectSound.play(); 
    fish2.destroy();
    level2Score = level2Score + 1;
   }

   if(penguin2.isTouching(fish3)){
    collectSound.play(); 
    fish3.destroy();
    level2Score = level2Score + 1;
   }

   if(penguin2.isTouching(fish4)){
    collectSound.play(); 
    fish4.destroy();
    level2Score = level2Score + 1;
   }

   if(penguin2.isTouching(fish5)){
    collectSound.play(); 
    fish5.destroy();
    level2Score = level2Score + 1;
   }

   if(penguin2.isTouching(fish6)){
    collectSound.play(); 
    fish6.destroy();
    level2Score = level2Score + 1;
   }

   if(penguin2.isTouching(fish7)){
    collectSound.play(); 
    fish7.destroy();
    level2Score = level2Score + 1;
   }

   if(penguin2.isTouching(fish8)){
    collectSound.play(); 
    fish8.destroy();
    level2Score = level2Score + 1;
   }

   if(penguin2.isTouching(fish9)){
    collectSound.play(); 
    fish9.destroy();
    level2Score = level2Score + 1;
   }

   if(penguin2.isTouching(fish10)){
    collectSound.play(); 
    fish10.destroy();
    level2Score = level2Score + 1;
   }

   if(level2Score === 8){
    //crackSound.play(); 
    path2.destroy();
   }

   
}

function levelTwo(){

  if(frameCount % 75 === 0){
   
      icicle.visible = true;
      icicle.y = 1; 
      icicle.velocityY = 14;
      icicle.lifetime = 100; 
      icicle.x = Math.round(random(1,windowWidth));
  }

  if(frameCount % 3 === 0){
    snow1 = createSprite(500,1,20,20);
    snow1.x = Math.round(random(1,windowWidth));
    //console.log(snow.x);
    snow1.addImage(snowImg);
    snow1.scale = 0.07;
    snow1.velocityY = 7;
    snow1.lifetime = 102;}
  
  levelTwoBg.visible = true;
  levelOneBg.destroy();
  bg.destroy();
  playButton.destroy();
  igloo1.destroy();
  penguin1.destroy();
  seal1.destroy();
  seal2.destroy();
  land1.destroy();
  land2.destroy();
  land3.destroy();
  land4.destroy(); 
  land5.destroy();
  land6.destroy();
  crown1.destroy();
  crown2.destroy();
  crown3.destroy();
  crown4.destroy();
  crown5.destroy();
  crown6.destroy();
  lev1Life1.destroy();
  lev1Life2.destroy();
  lev1Life3.destroy();
  igloo2.visible = true;
  penguin2.collide(igloo2);
  iglooOpen2.visible = false;
  penguin2.visible = true;
  path1.visible = true;
  penguin2.collide(path1);
  path2.visible = true;
  penguin2.collide(path2);
  path3.visible = true;
  penguin2.collide(path3);
  path4.visible = true;
  penguin2.collide(path4);
  path5.visible = true;
  penguin2.collide(path5);
  path6.visible = true;
  penguin2.collide(path6);
  path7.visible = true;
  penguin2.collide(path7);
  path8.visible = true;
  penguin2.collide(path8);

  fish1.visible = true;
  fish2.visible = true;
  fish3.visible = true;
  fish4.visible = true;
  fish5.visible = true;
  fish6.visible = true;
  fish7.visible = true;
  fish8.visible = true;
  fish9.visible = true;
  fish10.visible = true;

  lev2Life1.visible = true;
  lev2Life2.visible = true;
  lev2Life3.visible = true;
  lev2Life4.visible = true;
  lev2Life5.visible = true;

  level2PenguinScore();

  level2PenguinLife();

  if(keyDown(RIGHT_ARROW)|| keyDown("D")){
    penguin2.x = penguin2.x + 10;
    penguin2.mirrorX(-1);
  }
 
  if(keyDown(LEFT_ARROW)|| keyDown("A")){
    penguin2.x = penguin2.x - 10;
    penguin2.mirrorX (1);
  }
 
  if(keyDown(UP_ARROW)|| keyDown("W")){
   penguin2.velocityY = -13;
  }
 
   penguin2.velocityY = penguin2.velocityY + 0.8;

   if(penguin2.isTouching(iglooOpen2)){
    //add sound
    winSound.play();
    //bgSound.stop();
     gameState = "levelThree";
  }  
}

function setLevelThree(){

    levelThreeBg = createSprite(windowWidth/2,windowHeight/2,width,height);
    levelThreeBg.addImage(levelThreeImg);
    levelThreeBg.scale = 3.87;
    levelThreeBg.visible = false;
}

function levelThree(){

  levelThreeBg.visible = true;
  levelTwoBg.destroy();
  penguin2.destroy();
  igloo2.destroy();
  iglooOpen2.destroy();
  path1.destroy();
  path2.destroy();
  path3.destroy();
  path4.destroy();
  path5.destroy();
  path6.destroy();
  fish1.destroy();
  fish2.destroy();
  fish3.destroy();
  fish4.destroy();
  fish5.destroy();
  fish6.destroy();
  fish7.destroy();
  fish8.destroy();
  fish9.destroy();
  fish10.destroy();
  lev2Life1.destroy();
  lev2Life2.destroy();
  lev2Life3.destroy();
  lev2Life4.destroy();
  lev2Life5.destroy();
}
