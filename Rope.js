class Rope{
    constructor(body1,body2){
        var op={
            bodyA:body1,
            bodyB:body2,
            stiffness:0.05,
            length:20
        }
        this.attachment=Matter.Constraint.create(op)
        World.add(world,this.attachment)
    }
    display(){
        push()
        strokeWeight(5)
        line(this.attachment.bodyA.position.x,this.attachment.bodyA.position.y,this.attachment.bodyB.position.x,this.attachment.bodyB.position.y)
        pop()
    }
}