class Ball{
    constructor(x){
            this.y=random([50,150])
            this.body=createSprite(x,this.y)
            this.body.addAnimation("ball",BallImg)
            this.body.scale=0.2
            this.body.velocityY=+19
        }
        gravity(){
            this.body.velocityY+=2
        }
    }