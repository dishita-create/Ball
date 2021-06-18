const Engine=Matter.Engine
const World=Matter.World
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function preload() {
 




}

function setup(){
  createCanvas(windowWidth,windowHeight);
  
 engine=Engine.create()
 world=engine.world
 box1=new Box(800,500,80,80)
 g1=new Ground(10,600,2000,20)
 box2=new Box(800,400,80,80)
 box3=new Box(800,300,80,80)
 box4=new Box(800,200,80,80)
 box5=new Box(800,100,80,80)
 box6=new Box(880,500,80,80)
 box7=new Box(880,400,80,80)
 box8=new Box(880,300,80,80)
 box9=new Box(880,200,80,80)
 box10=new Box(945,500,50,50)
 box11=new Box(945,400,50,50)
 box12=new Box(945,300,50,50)
 ball1=new Ball(400,100,50)
 rope=new Rope(ball1,{x:200,y:50})
}

function draw() {

  background("pink");
  Engine.update(engine)
 

   box1.display()
   g1.display()
   box2.display()
   box3.display()
   box4.display()
   box5.display()
   box6.display()
   box7.display()
   box8.display()
   box9.display()
   box10.display()
   box11.display()
   box12.display()
   ball1.display()
   //rope.display()
  //drawSprites();
}

function keyPressed(){




}
