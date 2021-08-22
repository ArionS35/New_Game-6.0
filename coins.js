class Coin{
    constructor(x){
        this.y=height-random([150,350,550])
        this.body=createSprite(x,this.y)
        this.body1= createSprite(x+50,this.y)
        this.body2= createSprite(x+100,this.y)
        this.body3= createSprite(x+150,this.y)
        this.body4= createSprite(x+200,this.y)
        this.body.addAnimation("coin",coinImg)
        this.body1.addAnimation("coin",coinImg)
        this.body2.addAnimation("coin",coinImg)
        this.body3.addAnimation("coin",coinImg)
        this.body4.addAnimation("coin",coinImg)
        this.body.scale=0.3
        this.body1.scale=0.3
        this.body2.scale=0.3
        this.body3.scale=0.3
        this.body4.scale=0.3
        coinGroup.add(this.body)
        coinGroup.add(this.body1)
        coinGroup.add(this.body2)
        coinGroup.add(this.body3)
        coinGroup.add(this.body4)
    }
}