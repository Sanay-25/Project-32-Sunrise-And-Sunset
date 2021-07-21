const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    
    if(backgroundImg){
        background(backgroundImg);

    }


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    
    var response = await fetch("http://worldtimeapi.org/api//timezone/Asia/Kolkata");
    console.log(response);
    var resType=await response.json();
    console.log(resType);
    var datetime= resType.datetime;
    console.log(datetime);
    var hour=datetime.slice(11,13);
    console.log(hour);


   if(hour>=04 && hour<=06){
       bg= "sunrise1.png";
   }
   else if(hour>06 && hour<=08){
       bg= "sunrise2.png";
   }
   else if(hour>=10 && hour<=12){           
    bg="sunrise6.png";
   }
   else if(hour>=18 && hour<=19){
       bg="sunset7.png";
   }
   else if(hour>19 && hour<=20){
       bg="sunset11.png"
   }
   else if(hour>=23 && hour===0){
       bg="sunset10.png"
   }
   else if(hour>0 && hour<=03){
       bg= "sunset11.png";
   }
   
   else{
       bg="sunset12.png"
   }


   backgroundImg=loadImage(bg);

}
