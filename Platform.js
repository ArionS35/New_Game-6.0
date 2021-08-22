class Platform{
    constructor(x){
        this.y= height-random([100,300,500])
        this.width=random([200,400])
        this.body=createSprite(x,this.y,this.width,20)
        this.body.addImage(platformImg)
        this.body.scale=0.5
    }
}