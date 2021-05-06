const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg ()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    
    // add condition to check if any background image is there to add
    if (backgroundImg)
    background(backgroundImg)
    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var responce = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responceJSON = await responce.json ();
    //change the data in JSON format
    var datetime =responceJSON.datetime
    // write code slice the datetime
    var hour=datetime.slice(11,13);
    if(hour>=4 && hour<=6) {
      bg = "sunrises1.png"
    }
    else if(hour>=6 && hour<=8) {
        bg = "sunrises2.png"
      }
    else if(hour>=23 && hour==0) {
       bg = "sunrises10.png"
    }
    else if(hour==0 && hour<=3) {
      bg = "sunrises11.png"
    }
    else {
      bg = "sunrises12.png"
    }
    // add conditions to change the background images from sunrise to sunset
    backgroundImg=loadImage(bg);

    //load the image in backgroundImg variable here

}
