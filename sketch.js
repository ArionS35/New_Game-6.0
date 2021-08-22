const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gameState= "Play"
var fire, fireImg;
var bow;
var coinGroup;
var gameOver, gameOverImg;
var visiblity=1;
var particle = [];
var newX =500;
var score=0;

function preload(){
  bg1=loadImage("images/bg5.png")
  p_walking1= loadAnimation("images/shooter_player (3).png","images/shooter_player (4).png","images/shooter_player (5).png"
  ,"images/shooter_player (6).png","images/shooter_player (7).png")
  e_walking1= loadAnimation("images/enemy11.png")
  platformImg= loadImage("images/platform2.png")
  shootImg= loadAnimation("images/shooter_player_shoot (1).png")
  groundImg= loadImage("images/ground.png")
  playerImg= loadAnimation("images/shooter_player (1).png")
  winImg= loadImage("images/medal1.png")
  fireImg= loadImage("images/fire.png")
  gameOverImg= loadImage("images/game_over.png")
  BallImg= loadAnimation("images/obstacle1.png")
  BowImg= loadImage("images/shooter1.png")
  coinImg= loadAnimation("images/coin1.png","images/coin2.png","images/coin3.png"
  ,"images/coin4.png","images/coin5.png","images/coin6.png")
  coinImgs= loadImage("images/coin1.png")
  BlockImg= loadImage("images/block.png")
  ballImg= loadImage("images/football.png")
}
function setup(){
  var canvas=createCanvas(1700,displayHeight);
  
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine)

  coinGroup= new Group()
  platformGroup= new Group()
  enemyGroup= new Group()
  BallGroup= new Group()
  player= new Player()
  ground= new Ground(100,600)
  for(var i=0; i<60; i++){
    platform= new Platform(newX)
    newX= newX+platform.width
    platformGroup.add(platform.body)
    coin= new Coin(newX)
    if(i%2===0){
      enemy= new Enemy(newX+3000)
      enemyGroup.add(enemy.body)
    }
    if(i%5===0){
    ball= new Ball(newX)
    BallGroup.add(ball.body)
    }
  }

  platform1= new Ground(newX+350,600,100,50)
  win= new Win(newX+600)

  block1 = new Box(newX+250,450)
  block2 = new Box(newX+250,500)
  block3 = new Box(newX+250,550)
  block4 = new Box(newX+450,450)
  block5 = new Box(newX+450,500)
  block6 = new Box(newX+450,550)

 bow = createSprite(newX-300,384,20,90)
 bow.addImage(BowImg)
 bow.scale=0.25
 
 polygon = createSprite(newX,160,384,20)
 polygon.addImage(ballImg)
 polygon.scale=0.1
 sling1= new Sling(polygon,{x:160,y:384})
}
function draw()
{
  Engine.update(engine)
  
  background(bg1);
  fill ("white")
  textSize(40)
  text(score,player.body.x-220,90)
  image(coinImgs,player.body.x-300,50,50,50)
  if(gameState==="Play"){
  //if(frameCount%1000===0){
  //player.body.changeAnimation("coinImage")
//}
 // translate(-player.body.x+150,0)
 camera.position.x=player.body.x+300
 camera.position.y=height/2
  if(keyDown("right")){
    player.moveRight()
  }
  if(keyDown("left")){
    player.moveLeft()
  }
  if(keyDown("up") && player.body.velocityY===0){
    player.moveUp()
  }
  player.gravity()
  enemy.gravity()
  if(player.body.collide(enemyGroup)){
    gameState="End"
  }
  
  if(player.body.x>=newX-300){
  if(frameCount%6===0){
    particle.push(new Particle(newX+350))
    }
    for(i=0;i<particle.length;i++){
      particle[i].display()
      }

    if(frameCount%10===0){
      particle.push(new Particle(newX+50))
      }
    
      for(i=0;i<particle.length;i++){
      particle[i].display()
      }
      if(frameCount%6===0){
      particle.push(new Particle(newX+100))
      }
    
      for(i=0;i<particle.length;i++){
      particle[i].display()
      }
      if(frameCount%3===0){
        particle.push(new Particle(newX+150))
        }
      
        for(i=0;i<particle.length;i++){
        particle[i].display()
        }  
        if(frameCount%8===0){
          particle.push(new Particle(newX+200))
          }
        
          for(i=0;i<particle.length;i++){
          particle[i].display()
          }
          if(frameCount%5===0){
            particle.push(new Particle(newX+250))
            }
          
            for(i=0;i<particle.length;i++){
            particle[i].display()
            }
            if(frameCount%7===0){
              particle.push(new Particle(newX+300))
              }
            
              for(i=0;i<particle.length;i++){
              particle[i].display()
              }
  
            }

  player.body.collide(platformGroup)
  player.body.collide(platform1.body)
  player.body.collide(enemyGroup)
  player.body.collide(ground.body)
  player.body.collide(win.body)
  player.body.collide(coinGroup,points)
  player.body.collide(BallGroup,end)
  BallGroup.collide(platformGroup)
}
  drawSprites()

  if(fire){
    fire.collide(enemyGroup,kill)
  }

  

  
  if(gameState==="End"){
    player.body.destroy()
    enemyGroup.setVelocityXEach(0)
    gameOver = createSprite(player.body.x+500,height/2,20,20)
    gameOver.addImage(gameOverImg)
    gameOver.scale=2.5
  }
  if(player.body.y>800){
    player.body.destroy()
  }
  
  
 //image(polygonImg,polygon.position.x,polygon.position.y,50,50)
}
function keyPressed(){
  if(keyCode===32 && gameState==="Play"){
    player.body.changeAnimation("shoot")
    fire= createSprite(player.body.x,player.body.y,20,20)
    fire.addImage(fireImg)
    fire.scale=0.1
    fire.velocityX=150
  }
}
function kill(fire,enemy){
  tint(255,visiblity)
  enemy.alpha=visiblity
  fire.destroy()
  enemy.destroy()
  visiblity-=0.1
}
function end(player,ball){
  gameState="End"
}
function points(player,coin){
score++
coin.destroy()
} 


function mouseDragged(){
  Matter.sprite.setPosition(polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
 sling1.fly()
}