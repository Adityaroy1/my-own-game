var warship
function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);

warship=createSprite(0,250,50,50);
	

	//Create the Bodies Here.


	//
  
}


function draw() {
  rectMode(CENTER);
  background('red');
  
  drawSprites();
 
}
function SpawnEnemy (){
var num =Math.round(random(60,80))
if(frameCount%num===0){
	enemy=createSprite(1000,250,60,60)
	enemy.y=Math.round(random(10,490))
	
}

}



