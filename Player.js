class Player{
    constructor(){
        this.body=createSprite(50,100)
        this.body.shapeColor='red'

        
        this.body.addAnimation("stand",playerImg)
        this.body.changeAnimation("stand")
        this.body.scale=1.6
    }
    moveRight(){
        this.body.x+=20
        this.body.addAnimation("stand",playerImg)

        
        this.body.changeAnimation("walk")
        
        this.body.addAnimation("shoot",shootImg)
    }
    moveLeft(){
        this.body.x-=20
        this.body.addAnimation("walk",p_walking1)
        
        this.body.changeAnimation("walk")
        
        this.body.addAnimation("shoot",shootImg)
    }
    moveUp(){
        this.body.velocityY=-35
    }
    gravity(){
    this.body.velocityY+=1.5
    }
}