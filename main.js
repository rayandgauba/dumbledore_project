function preload() {}

function setup() {
    video = createCapture(VIDEO);
    video.size(500,500);
    canvas = createCanvas(500,450);
    canvas.position(550,150);
}

function draw() {
    background('#6e6969');
}