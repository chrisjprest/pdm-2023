function setup(){
    createCanvas(750,400);
}

function draw(){

    noStroke();
    background(0,0,0);

    //pac-man body
    push();
    fill(255,255,0);
    circle(180, 200, 325);
    pop();

    //pac-man mouth
    push();
    fill(0,0,0);
    triangle(0,37.5,0,362.5,180,200);

    //red ghost body
    push();
    fill(255,0,0);
    circle(550, 200, 325);
    rect(387.5,200,325,162.5);
    pop();

    //red ghost eyes
    push();
    fill(255,255,255);
    circle(468.75,200,100);
    circle(631.25,200,100);
    pop();

    push();
    fill(0,0,255);
    circle(468.75,200,50);
    circle(631.25,200,50);

    
}