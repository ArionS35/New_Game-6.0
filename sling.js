class Sling{

    constructor(a,b){

        var options={
            bodyA:a,
            pointB:b,
            stiffness:0.04,
            length:1
        }
        
        this.sling= Constraint.create(options)
        this.pointB=b
    
    }

    display(){
        if(this.sling.bodyA){
      push ()
      strokeWeight(3)
      stroke("grey")
      line(this.sling.bodyA.position.newX, this.sling.bodyA.position.y,
           this.sling.pointB.newX,this.sling.pointB.y);
      pop ()
        }
    }

    fly(){
        this.sling.bodyA=null;
    }

}