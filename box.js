class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image=loadImage("box.png");
    this.Visiblity=255;
    World.add(world, this.body);
  }
   score(){
    if(this.Visiblity<0&&this.Visiblity>-1005){
      score++
    
    }
  }
  display(){
    var pos =this.body.position;
    var angle=this.body.angle;
   /* rectMode(CENTER)
   rect(pos.x,pos.y,this.width,this.height)
   push();
   translate(pos.x,pos.y)
   rotate(angle)
   imageMode(CENTER)
  image(this.image,0,0,30,30)
   pop();*/
   console.log(this.body.speed);
   if(this.body.speed<5){
   this.Visiblity=255;
   rectMode(CENTER);
   rect(pos.x,pos.y,this.width,this.height)
  
} 
   else{
          World.remove(world,this.body)
          push();
     this.Visiblity=this.Visiblity-5;
     tint(255,this.Visiblity)
     translate(pos.x,pos.y)
     image(this.image,0,0,this.width,this.height)
   pop();
   }
 
   
  }
};

