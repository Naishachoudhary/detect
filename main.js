status = "";

function setup() {
    canvas = createCanvas(600,380);
    canvas.center();
    video.hide();
}

function preload(){
    video = createVideo("video.mp4")
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object..."
    document.getElementById('text').value;
}

function modelLoaded() {
    console.log("model is loaded");
    status = true;
}

function draw() {
    image(video,0,0,600,380);
}




