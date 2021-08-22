class Enemy{
    constructor(x){
        this.y=random([20,120,220,320,420])
        this.body=createSprite(x,this.y)
        this.body.addAnimation("enemy",e_walking1)
        this.body.scale=0.4
        this.body.velocityX=-9
    }
    gravity(){
        this.body.velocityY+=2
    }
}