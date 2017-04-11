var x = 0;
var y = 0;
sizes = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

function setup(){
    createCanvas(600,400);
}

function draw(){
    background(0);
    redCircle();
    greenStripe();
    whiteLines();
    chnageBackground();
    rowCircles(250);
    rowCircles(350);
}

function redCircle(){
    noStroke();
    fill(255, 255, 128);
    ellipse(mouseX, mouseY, 100, 100);
}

function greenStripe(){
    fill(128, 0, 96);
    x = 200;
    y+=3;
    rect(x, y, 100, height);
    if(y > height){
        y = 0 - height;
    }
}

function whiteLines(){
     var i = 0;
    var yLine = 50;
    while(i<10){
         stroke(255);
         line(100, yLine, 500, yLine);
         i++;
         yLine += 20;
    }
}

function chnageBackground(){
    if(mouseIsPressed && mouseY < 200){
        background(179, 240, 255);
    }
    else if(mouseIsPressed && mouseY >=200){
        background(255, 179, 179);
   
    }
}

function rowCircles(yRow){
     var xCircle = 40;
    for(var i = 0; i < 10; i++){
        noStroke();
       fill(255, 255, 0);
       ellipse(xCircle, yRow, sizes[i], sizes[i]);
       xCircle += 50;
    }
}