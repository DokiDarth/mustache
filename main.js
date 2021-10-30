
noseX=0;
noseY=0;

function preload() {
mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png') 
}

function setup() {
canvas = createCanvas(300,300);
canvas.center();
}
function draw() {
image(video, 0, 0, 300, 300);
image(mustache, noseX-25, noseY, 60, 40);
// fill(255,0,0);
// stroke(255,0,0);
// circle(noseX, noseY, 20);
}

function take_snapshot() {
save('myFilterImage.png')
}

function setup() {
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300)
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
console.log('PoseNet Is Initialated');
}

function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("nose x = " + noseX);
console.log("nose y = " + noseY);
}
}

