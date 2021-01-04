class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:20,
            stiffness:0.8,
        }
        this.sling=Matter.Constraint.create(options)
        World.add(world,this.sling)

        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")
    }
    Display(){
        
        image(this.sling1,200,20)
        image(this.sling2,170,20)

        if(this.sling.bodyA){
            var startpoint=this.sling.bodyA.position
            var endpoint=this.sling.pointB
    
           // line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y)
          strokeWeight(5)
          line(startpoint.x-20,startpoint.y,endpoint.x-10,endpoint.y)
          stroke(84,39,15)
          line(startpoint.x-20,startpoint.y,endpoint.x +30,endpoint.y)

          image(this.sling3,startpoint.x -30,startpoint.y -10,15,30)
           
        
           
         }
        

    }

    fly(){
        this.sling.bodyA=null
    }
    attach(body){
       this.sling.bodyA=body; 
    }
}

