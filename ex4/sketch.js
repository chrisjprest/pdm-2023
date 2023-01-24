function setup(){
    createCanvas(500,500);
}

function draw(){
    noStroke();
    background(0,0,125);

    //green circle with white outline
    push();
    stroke(255,255,255);
    strokeWeight(8);
    fill(0,125,0);
    circle(250,250,250);
    pop();

    //red star with white outline
    push()
    stroke(255,255,255);
    strokeWeight(12);
    fill(255,0,0);
    beginShape();
    vertex(250,125);
    vertex(338.39,338.39);
    vertex(129.26,207.25);
    vertex(370.74,207.25);
    vertex(161.61,338.39);
    endShape(CLOSE);
    pop();

    fill(255,0,0);
    beginShape();
    vertex(250,125);
    vertex(338.39,338.39);
    vertex(129.26,207.25);
    vertex(370.74,207.25);
    vertex(161.61,338.39);
    endShape(CLOSE);




}