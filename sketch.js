const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine,ground,world,ball;
function setup() {
  createCanvas(400,400);
  
   engine = Engine.create();
   world = engine.world;
   var ground_options=
   {
     isStatic:true
   }
   ground= Bodies.rectangle(200,300,70,50,ground_options);
   World.add(world,ground);

   var ball_options=
   
   {

      restitution: 2.0
    
   }
   ball =Bodies.circle(200,50,70,ball_options);
   World.add(world,ball);
                   
   console.log(ground);

   
  }

function draw() {
  background(0,0,0);
  
  

  Engine.update(engine);
  
rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,50);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

}