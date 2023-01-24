function setup(){
    createCanvas(400, 400);
    colorMode(HSB);
}

function draw(){

    noStroke();
    
    //red top circle
    push();
    fill(0,50,100,.04);
    circle(200, 120, 225);
    pop();

    //right green circle
    push();
    fill(120,50,100,.04);
    circle(275, 260, 225);
    pop();
    
    //left blue circle
    push();
    fill(250,50,100,.04);
    circle(125, 260, 225);
    pop();
    
}