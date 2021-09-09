class Snake{
  constructor(x,y){
    this.x=x;
    this.y=y
  }
  

}
let ra=Math.floor(Math.random() * 400) + 1;

let increment=1;
//distance
function distance(x1,y1,x2,y2){
  return (sqrt(((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2))));
  
}

let speed=10;
let snakeBody=[];
let x_pos=0,y_pos=0;
let spikex=[]
let spikey=[];
//main
function setup() {
  var myCanvas=createCanvas(400, 400);
  myCanvas.parent("game");
 
  snakeBody[0]=new Snake(width/2,height/2);
  for(let i=0;i<40;i++){
    spikex.push(Math.floor(Math.random() * 400) + 1);
    spikey.push(Math.floor(Math.random() * 400) + 1);

  }
 

}
let score=0;
//loop
function draw() {
  background(0);
  fill(255);
  for(i of snakeBody){

  ellipse(i.x,i.y,10);

 
  i.x+=x_pos;
  i.y+=y_pos;
 

  if(distance(i.x,i.y,ra,ra)<=5){
    snakeBody.push(new Snake(ra,ra));
    ra=Math.floor(Math.random() * 400) + 1;
    increment+=0.001;
    score+=1;
    changeText();
    

  }
  if(collision(i.x,i.y)==true){
    x_pos=0;
    y_pos=0; 
    snakeBody=[];
    snakeBody[0]=new Snake(width/2,height/2);
    score=0;
    n+=1;
    changeText();
    
  }
  
  fill(0,0,255);
    ellipse(ra,ra,7);
  }

    spikes();
 
}
let n=20;
function spikes(){
  fill(255,0,0);
  for(var i=0;i<n;i++){
    ellipse(spikex[i],spikey[i],5);
  }
 
}
function collision(x,y){
  for(var i=0;i<n;i++){
    if(distance(x,y,spikex[i],spikey[i])<=5){
      return true;
    }

  }
}

function keyPressed(){
  if(keyCode== LEFT_ARROW){
    x_pos=-1-increment;
    y_pos=0;
  }
  else if(keyCode == RIGHT_ARROW){
    x_pos=1+increment;
    y_pos=0;
  }
  else if(keyCode == UP_ARROW){
    y_pos=-1-increment;

    x_pos=0;
  }
  else if(keyCode== DOWN_ARROW){
    y_pos=1+increment;
    x_pos=0;
  }
  else if(key==' '){
    y_pos=0;
    x_pos=0;
  }
}
function changeText(){
  document.getElementById("text").innerHTML=score;
}