class Rope{
    constructor(bodyA,pointB){
var options={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:1,
    lenght:250
}
this.pointB=pointB
this.rope=Constraint.create(options)
World.add(world,this.rope)

    }
    display(){
//line (pointB.x,pointB.y,this.rope.bodyA.x,this.rope.bodyA.y)
    }
}