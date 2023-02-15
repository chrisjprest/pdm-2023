let score = 0;
let timer = 30;
let speed = 2;
let gameState = 1;
let bug;
let frame = 1;
let speedMin = 1;
let speedMax = 3;


function preload(){
  bug1u = loadImage('assets/bug1u.png');
  bug1d = loadImage('assets/bug1d.png');
  bug1l = loadImage('assets/bug1l.png');
  bug1r = loadImage('assets/bug1r.png');
  bug2u = loadImage('assets/bug2u.png');
  bug2d = loadImage('assets/bug2d.png');
  bug2l = loadImage('assets/bug2l.png');
  bug2r = loadImage('assets/bug2r.png');
  squish1 = loadImage('assets/squish1.png');
  squish2 = loadImage('assets/squish2.png');
  dead = loadImage('assets/dead.png');
}

function setup() {
  createCanvas(750,750);
  imageMode(CENTER);
  angleMode(DEGREES);
  bug = new Bug();
}

function draw() {
  background(255);
  
  //tile floor graphics
  push();
  beginShape();
  noFill();
  vertex(0,0);
  vertex(750,0);
  vertex(750,750);
  vertex(0, 750);
  endShape();
  pop();

  push();
  fill(0,190,255);
  square(0,0,150);
  square(0,300,150);
  square(0,600,150);
  square(150,150,150);
  square(150,450,150);
  square(300,0,150);
  square(300,300,150);
  square(300,600,150);
  square(450,150,150);
  square(450,450,150);
  square(600,0,150);
  square(600,300,150);
  square(600,600,150);
  pop();

  
  

  if (gameState == 1){
    push();
    fill(200);
    circle(375,375,300);
    pop();
    textSize(25);
    text('Squish all the bugs!', 265, 340);
    text('Click to begin.', 300,380);

    if(mouseIsPressed){
      gameState++;
      console.log('gamestate: ' + gameState);
    }
  }

  else if (gameState == 2){
    
    //timer text
    textSize(22);
    textAlign(CENTER);
    text('TIME: ' + timer, 375, 20);
    
    //score text
    textSize(18);
    textAlign(LEFT);
    text('SQUISHED: ' + score, 15, 25);

    //timer countdown
    if (frameCount % 60 == 0 && timer > 0){
      timer--;
    }
    else if (timer == 0){
      gameState++;
      console.log('gamestate: ' + gameState);
    }
    bug.move();
    bug.squish();
    bug.display();
  }

  else if (gameState == 3){
    push();
    fill(200);
    circle(375,375,300);
    pop();
    textSize(25);
    text('Game Over!', 300, 340);
    text('Final Score: ' + score, 295,380);
    text('Click to play again!', 270, 420);

    if(mouseIsPressed){
      timer = 30;
      gameState--;
      console.log('gamestate: ' + gameState);
    }
    
  }
}

class Bug{
  constructor(){
    this.x = random(200,600);
    this.y = random(200,600);
    this.speed = random(speedMin,speedMax);
    this.rand = Math.random();

    if(this.rand <= .25){ // offscreen right
      this.x = -100;
      console.log('right');
    }
    else if (this.rand <= .5 && this.rand > .25){// offscreen left
      this.x = 800;
      console.log('left');
    }
    else if(this.rand <= .75 && this.rand > .5){// offscreen up
      this.y = 800;
      console.log('up');
    }
    else if(this.rand <= 1 && this.rand > .75){// offscreen down
      this.y = -100;
      console.log('down');
    }
  }

  move(){

    if(this.rand <= .25){ // go right
      this.x += this.speed;
      console.log('right');
    }
    else if (this.rand <= .5 && this.rand > .25){// go left
      this.x += -this.speed;
      console.log('left');
    }
    else if(this.rand <= .75 && this.rand > .5){// go up
      this.y += -this.speed;
      console.log('up');
    }
    else if(this.rand <= 1 && this.rand > .75){// go down
      this.y += +this.speed;
      console.log('down');
    }

  }
  
  squish(){
    if(mouseIsPressed && mouseX >= bug.x - 40 && mouseX <= bug.x + 43 && mouseY >= bug.y - 40 && mouseY <= bug.y + 43){
        console.log('SQUISH!');
        image(dead,this.x,this.y);
        score++;
        noLoop();
      }
  }

  display(){
    if(this.rand <= .25){ // face right
      if(frame == 1){
        image(bug1r,this.x,this.y);
      }
      else if(frame == 2){
        image(bug2r,this.x,this.y);
      }
    }
    else if (this.rand <= .5 && this.rand > .25){// face left
      if(frame == 1){
        image(bug1l,this.x,this.y);
      }
      else if(frame == 2){
        image(bug2l,this.x,this.y);
      }
    }
    else if(this.rand <= .75 && this.rand > .5){// face up
      if(frame == 1){
        image(bug1u,this.x,this.y);
      }
      else if(frame == 2){
        image(bug2u,this.x,this.y);
      }
    }
    else if(this.rand <= 1 && this.rand > .75){// face down
      if(frame == 1){
        image(bug1d,this.x,this.y);
      }
      else if(frame == 2){
        image(bug2d,this.x,this.y);
      }
    }

    if(frameCount % 30 == 0){
      if(frame == 1){
        frame++;
      }
      else if(frame == 2){
        frame--;
      }
    }
  }
}

