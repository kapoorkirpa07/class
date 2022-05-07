
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var rulesimg;
var startbtn;
var backgroundi;
function preload(){
backgroundimg = loadImage("backgrnd.jpg")
}


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;





rulesimg = createImg ("RULES.jpg");
rulesimg.position(100,100);
rulesimg.size(800,800);


startbtn = createImg ("startbtn.jpg");
startbtn.position(680,590);
startbtn.size(70,70);


backgroundi = createSprite(400,400,800,800);
backgroundi.addImage(backgroundimg);
backgroundi.visible = false;
backgroundi.scale = 1;
}




function draw() {
  background("white");  

startbtn.mouseClicked(bg)

  drawSprites();
}

function bg(){

backgroundi.visible = true;
console.log ("check")

}

