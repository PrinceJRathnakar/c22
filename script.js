const MatterEngine=Matter.Engine;
const MatterWorld=Matter.World;
const MatterObject=Matter.Bodies;

var start,world;
var ground,ball;

function setup(){

createCanvas(400,400);
start=MatterEngine.create();
world=start.world;
var ground_options={

    isStatic:true
}
var ball_options={
    restitution:1.0
}
ground=MatterObject.rectangle(200,390,400,10,ground_options)
MatterWorld.add(world,ground);
ball=MatterObject.circle(200,200,50,ball_options);
MatterWorld.add(world,ball);

}
function draw(){
background(0);
MatterEngine.update(start);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,10);

ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20);
}
