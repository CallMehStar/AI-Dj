flowers_song="";
Missing_someone_song="";
rightWrist_x = 0;
rightWrist_y = 0;
leftWrist_x = 0;
leftWrist_y = 0;
scoreleftWrist = 0;
scorerightWrist = 0;
song_flowers = "";
song_missing_someone = "";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function preload(){
    flowers_song = loadSound("musicflower.mp3");
    Missing_someone_song = loadSound("musicmissingsomeone.mp3");
}

function draw(){
    image(video,0,0,600,530);

    fill("#00ff00");
    stroke("#ff0000");

    song_flowers = flowers_song.isPlaying();
    console.log(song_flowers);

    song_missing_someone = Missing_someone_song.isPlaying();
    console.log(song_Harry_potter_theme);

    if(scoreleftWrist > 0.2){
        circle(leftWrist_x,leftWrist_y,20);
        Missing_someone_song.stop();
        if(song_flowers == false){
            flowers_song.play();
        }
        else{
            console.log("Song Name: Flowers");
            document.getElementById("song_id").innerHTML = "Song Name: Flowers";
        }
    }

    if(scorerightWrist > 0.2){
        circle(rightWrist_x,rightWrist_y,20);
        flowers_song.stop();
        if(song_missing_someone == false){
            Missing_someone_song.play();
        }
        else{
            console.log("Song Name: Missing Someone");
            document.getElementById("song_id").innerHTML = "Song Name: Someone";
        }
    }
}

function modelLoaded(){
    console.log("poseNet Is Initialized");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);

        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log(scoreleftWrist);

        scorerightWrist = results[0].pose.keypoints[10].score;
        console.log(scorerightWrist);

        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist_x = "+leftWrist_x+" leftWrist_y = "+leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("rightWrist_x = "+rightWrist_x+" rightWrist_y = "+rightWrist_y);
    }
}
