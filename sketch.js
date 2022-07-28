var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12;
var player, square1,square2,square3,square4;
var gameState = "wait";
var playButton,playButtonImg;
function preload(){
playButtonImg = loadImage("assets/playButton.png")
}
function setup(){
createCanvas(800,600);
wall1 = createSprite(190,120,250,3);
wall1.shapeColor = "black";
wall1.visible = false;
wall2 = createSprite(190,260,250,3);
wall2.shapeColor = "black"
wall2.visible = false;
 wall3 = createSprite(67,145,3,50);
 wall3.shapeColor = "black"
 wall3.visible = false;
 wall4 = createSprite(67,235,3,50);
 wall4.shapeColor = "black"
 wall4.visible = false;
 wall5 = createSprite(313,145,3,50);
 wall5.shapeColor = "black"
 wall5.visible = false;
 wall6 = createSprite(313,235,3,50);
 wall6.shapeColor = "black"
 wall6.visible = false;
 wall7 = createSprite(41,170,50,3);
 wall7.shapeColor = "black"
 wall7.visible = false;
 wall8 = createSprite(41,210,50,3); 
 wall8.shapeColor = "black"
 wall8.visible = false;
 wall9 = createSprite(337,210,50,3);
 wall9.shapeColor = "black"
 wall9.visible = false;
 wall10 = createSprite(337,170,50,3);
 wall10.shapeColor = "black"
 wall10.visible = false;
  wall11 = createSprite(18,190,3,40);
  wall11.shapeColor = "black"
  wall11.visible = false;
 wall12 = createSprite(361,190,3,40);
 wall12.shapeColor = "black"
 wall12.visible = false;

 player = createSprite(40,190,15,15);
 player.shapeColor = "red";
  square1 = createSprite(104,135,15,15);
  square1.shapeColor = "blue";
 square2 = createSprite(140,230,15,15);
  square2.shapeColor = "blue";
    square3 = createSprite(200,135,15,15);
   square3.shapeColor = "blue";
  square4 = createSprite(245,230,15,15);
  square4.shapeColor = "blue";

 playButton = createSprite(380,430);
 playButton.addImage(playButtonImg);
 playButton.scale = 0.15;
}


function draw(){
background("#CCCCFF");
if(gameState === "wait"){
   fill("blue");
   stroke("green");
   textSize(40);
   text("World's Hardest Game", 201,300);
   playButton.visible = true;
   player.visible = false;
   square1.visible = false;
   square2.visible = false;
   square3.visible = false;
   square4.visible = false;
}
if(mousePressedOver(playButton)){
    gameState = "play";
}
if(gameState === "play"){
    createCanvas(400,400);
    background("lightgreen");
playButton.visible = false;
//Visibility of the Walls
wall1.visible = true;
wall2.visible = true;
wall3.visible = true;
wall4.visible = true;
wall5.visible = true;
wall6.visible = true;
wall7.visible = true;
wall8.visible = true;
wall9.visible = true;
wall10.visible = true;
wall11.visible = true;
wall12.visible = true;
//Visibility of the Squares
player.visible = true;
square1.visible = true;
square2.visible = true;
square3.visible = true;
square4.visible = true;

square1.velocityY = 5;
square1.bounceOff(wall1)
square1.bounceOff(wall2);

square2.velocityY = -5;
 square2.bounceOff(wall2);
 square2.bounceOff(wall1);

 square3.velocityY =5;
 square3.bounceOff(wall1);
 square3.bounceOff(wall2);


   //Velocity of the Squares
   
}
drawSprites();
}