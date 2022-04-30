Flowers_song="";
Missing_Someone_song="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    Flowers_song = loadSound("musicflower.mp3");
    Missing_Someone_song = loadSound("musicmissingsomeone.mp3");
}

function draw(){
    image(video,0,0,600,530);
}