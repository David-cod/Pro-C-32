const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ball, slingShot, alien1,alien2,asteroid,asteroid2,asteroid3;
var score=0;



function setup() {
  createCanvas(400,800);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  ball=new Ball(200,600,100,100,0);
  slingShot = new SlingShot(ball.body,{x:200,y:600});
  alien1=new Alien(100,200,100,100);
    alien2=new Alien(300,200,100,100);
    alien3=new Alien(100,400,100,100);
    alien4=new Alien(300,400,100,100);
    alien5=new Alien(200,300,100,100);
    asteroid= new Asteroid(200,100,100,100);
    asteroid2= new Asteroid(75,300,100,100);
    asteroid3= new Asteroid(325,300,100,100);
}

function draw() {
  background(0);
  fill(255,255,255);
  textSize(24);
  text("Score="+score,50,50)
  fill(255,255,255);
  textSize(24);
  text("Try to get your highest Score!",50,700)
  fill(255,255,255);
  textSize(24);
  text("Click Space to reset Ship",50,720)
  Engine.update(engine);  

  ball.display()
  slingShot.display();
  alien1.display();
  alien2.display();
  alien3.display();
  alien4.display();
  alien5.display();
  
  asteroid.display();
  asteroid2.display();
  asteroid3.display();
  detectCollision(ball,alien1);
  detectCollision(ball,alien2);
  detectCollision(ball,alien3);
  detectCollision(ball,alien4);
  detectCollision(ball,alien5);
  
  //detectCollisionAsteroid(ball,asteroid);
  drawSprites();
  
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
  
  
  
  }
  function mouseReleased(){
      slingShot.fly();
      
  
  
  }
  function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(ball.body,{x:200,y:600});
        slingShot.attach(ball.body);
    }
}
function detectCollision(bball,aalien){
  ballBodyPosition=bball.body.position 
	alienBodyPosition=aalien.body.position

	var distance=dist(alienBodyPosition.x,alienBodyPosition.y,ballBodyPosition.x, ballBodyPosition.y)
		if(distance<=bball.width+aalien.width){
			Matter.Body.setStatic(aalien.body,false);
      score++;
		}


}
/*function detectCollisionAsteroid(bball,aasteroid){
  ballBodyPosition=bball.body.position 
	aasteroidBodyPosition=aasteroid.body.position

	var distance=dist(aasteroidBodyPosition.x,aasteroidBodyPosition.y,ballBodyPosition.x, ballBodyPosition.y)
		if(distance<=bball.width+aasteroid.width){
			Matter.Body.setStatic(aasteroid.body,false);
      World.remove(world,this.body)
		}


}*/