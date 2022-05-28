img = "";
status = "";

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload() {
    img = loadImage("desk.jpg");
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#00FF00");
    text("Desk", 45, 75);
    noFill();
    stroke("#00FF00");
    rect(30, 60, 450, 350);
}

function modelLoded() {
    console.log("Model Loded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error){
        console.log(error);
    }
    console.log(results);
}