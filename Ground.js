class Ground{
    constructor(x,y){
        this.body=createSprite(x,y,300,1300)
        this.body.shapeColor='blue'
        this.body.addImage(groundImg)
    }
}