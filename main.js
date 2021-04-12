function preload() {
 clown_nose=loadImage('https://i.postimg.cc/vZcLkr11/nose.png') ;
}

function setup() {

    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO) ;
    video.size(300,300) ;
    video.hide() ;

    poseNet=ml5.poseNet(video,modelLoaded) ;
    poseNet.on('pose', gotPoses) ;
}

noseX=0 ;
noseY=0 ;

function gotPoses(results) {
    if (results.length>0) {
        console.log(results) ;
        console.log("x coordinate of nose =" + results[0].pose.nose.x) ;
        console.log("y coordinate of nose =" + results[0].pose.nose.y) ;
        noseX= results[0].pose.nose.x
        noseY= results[0].pose.nose.y
    }
}



function modelLoaded() {
    console.log("Model PoseNet Is Loaded"); 
}

function draw() {
image(video,0,0,300,300) ;
//fill(255,0,0) ;
//stroke(255,0,0) ;
//circle(noseX, noseY ,30) ;
image(clown_nose, noseX-15 ,noseY-15 ,30,30) ;
}

function takeSnapshot() {
save('myFilter.png') ;
}