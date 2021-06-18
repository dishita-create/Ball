class Ball{
    constructor(x,y,r){
var options={
    //restitution:2,
    frictionAir:0.005,
density:1
}
this.radius=r
this.body=Bodies.circle(x,y,this.radius,options)
World.add(world,this.body)
    }
    display(){
        push ()
        translate (this.body.position.x,this.body.position.y)
        fill ("orange")
      ellipseMode (RADIUS)
       ellipse (0,0,this.radius,this.radius)
pop ()
    }
}