class Box{
constructor(x,y){
    this.body=createSprite(x,y)
    this.body.addImage(BlockImg)
    this.body.scale=0.13
    //this.body.velocityY=+19
}
}