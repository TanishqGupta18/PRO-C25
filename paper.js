//lass Paper 
//{    constructor(x,y,radius)
//{
 //  var options = 
  // {
   //    isStatic:false,
   //    restitution:0.3,
   //    friction:0,
   //    density:1.2
  // }
//this.x = x
//this.y = y
//this.radius = radius
//this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options);
//this.image = loadImage("paper.png")
//World.add(world, this.body);


//} 
//display(){
 //   var pos = this.body.position;
 //   push()
 //   translate(pos.x,pos.y);
 //   rectMode(CENTER);
 //   //ellipseMode(RADIUS)
 //   fill(255,0,255)
 //   imageMode(CENTER);
  //  image(this.image,0,0,this.r,this.r)
  //  pop()

//}
//}
class Paper  {
    constructor(x,y)   {
        var options = {
            isStatic: false,
            restitution: 0.3,
            density: 1.2,
            friction: 0.5,
        }
        this.body = Bodies.circle(x,y,23,options);
    
        this.image = loadImage('paper.png');
        World.add(world,this.body);

    }

        display()   {
            push();
            var pos = this.body.position;
            translate(pos.x,pos.y);
            imageMode(CENTER);
            image(this.image,0,0,70,70);
            pop();
        }

}
