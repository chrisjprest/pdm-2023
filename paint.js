let h = 0;
let st = 0;
let b = 0;
let s = 46.6;

function setup() {
  createCanvas(1200,750);
  colorMode(HSB);
  background(0,0,100);
}

function mouseDragged(){
  push();
  strokeWeight(20)
  stroke(h,st,b);
  line(pmouseX,pmouseY,mouseX,mouseY);
  pop();
}

function keyPressed(){
  if(keyCode == BACKSPACE){
    background(0,0,100);
  }
}

function draw() {

  //red pallete
  push();
  fill(0,100,100);
  square(5,5,41.67);
  pop();

  //orange
  push();
  fill(30,100,100);
  square(5, 51.6, 41.67);
  pop();

  //yellow
  push();
  fill(60,100,100);
  square(5,98.2,41.67);
  pop();

  //green
  push();
  fill(90,100,100);
  square(5,144.8,41.67);
  pop();

  //cyan
  push();
  fill(180,100,100);
  square(5,191.4,41.67);
  pop();

  //blue
  push();
  fill(240,100,100);
  square(5,238,41.67);
  pop();

  //magenta
  push();
  fill(300,100,100);
  square(5,284.6,41.67);
  pop();

  //brown
  push();
  fill(30,100,50);
  square(5,331.2,41.67);
  pop();

  //white
  push();
  fill(0,0,100);
  square(5,377.8,41.67);
  pop();

  //black
  push();
  fill(0,0,0);
  square(5,424.4,41.67);
  pop();

  if(mouseIsPressed){  
    if(mouseX >= 5 && mouseX <= s && mouseY <= 10*s){
      loop();
      if(mouseY >= 5 && mouseY <= s){
        h = 0;
        st = 100;
        b = 100;
        console.log("color:red");
      }
      else if(mouseY >= s+5 && mouseY <= 2*s){
        h = 30;
        st = 100;
        b = 100;
        console.log("color:orange");
      }
      else if(mouseY >= 2*s+5 && mouseY <= 3*s){
        h = 60;
        st = 100;
        b = 100;
        console.log("color:yellow");
      }
      else if(mouseY >= 3*s+5 && mouseY <=4*s){
        h = 90;
        st = 100;
        b = 100;
        console.log("color:green");
      }
      else if(mouseY >= 4*s+5 && mouseY <=5*s){
        h = 180;
        st = 100;
        b = 100;
        console.log("color:cyan");
      }
      else if(mouseY >= 5*s+5 && mouseY <=6*s){
        h = 240;
        st = 100;
        b = 100;
        console.log("color:blue");
      }
      else if(mouseY >= 6*s+5 && mouseY <=7*s){
        h = 300;
        st = 100;
        b = 100;
        console.log("color:magenta");
      }
      else if(mouseY >= 7*s+5 && mouseY <=8*s){
        h = 30;
        st = 100;
        b = 50;
        console.log("color:brown");
      }
      else if(mouseY >= 8*s+5 && mouseY <=9*s){
        h = 0;
        st = 0;
        b = 100;
        console.log("color:white");
      }
      else if(mouseY >= 9*s+5 && mouseY <=10*s){
        h = 0;
        st = 0;
        b = 0;
        console.log("color:black");
      }
    }
    else{
      mouseDragged();
    }
  }
}

