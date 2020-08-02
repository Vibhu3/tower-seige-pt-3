var ball;
var score=0;
const World=Matter.World;
var Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var engine,world;
var chain;


function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  platform= new Ground(370,305,300,20)

  box1=new Box(330,235,30,40);
  box2=new Box(360,235,30,40);
  box3= new Box(390,235,30,40)
  box4= new Box(420,235,30,40)
  box5=new Box(450,235,30,40)
  box6=new Box(360,195,30,40)
  box7=new Box(390,195,30,40)
  box8=new Box(420,195,30,40)
  box9=new Box(390,155,30,40)
  ball=new Box1(100,100,40,40);

  chain=new SlingShot(ball.body,{x:100,y:100})
  
}

function draw() {
  background(255,255,255);   
  Engine.update(engine);
  text("score"+score,width-300,50);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
 platform.display();
 ball.display();
 chain.display();
  drawSprites();
}


function mouseDragged(){

  
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  console.log("inmousereleased")
  chain.fly();
}
function keyPressed(){
  if(keyCode===32){
      chain.attach(chain.body)
  }
}

