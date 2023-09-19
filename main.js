var img="";

function preload(){
    img=loadImage("dog_cat.jpg")
}

function setup(){
    canvas=createCanvas(1000, 600);
    canvas.center()
}

function draw(){
    image(img, 0, 0, 1000, 600);
    fill("red");
    text("Dog", 45, 75);
    noFill();
    stroke("red");
    rect(30, 60, 450, 530)
}