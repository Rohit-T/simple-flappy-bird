var bird;
var pipes = [];
var start = "start";
var img;
var imgstartxcord;
var imgstartycord;
var score;

function preload() {
    img = loadImage('imgs/PlayButton.png');
}
function setup() {
    createCanvas(400, 600);
    imgstartxcord = (width/2) - (img.width/2);
    imgstartycord = (height/2) - (img.height/2);
    bird = new Bird();
    pipes.push(new Pipe());
}

function draw() {
    background(0);
    if(start == "start") {
        score = 0;
        fill(255)
        text('Left click on the icon to start playing', imgstartxcord, imgstartycord - 20);
        image(img, imgstartxcord, imgstartycord);
        text('Use SPACEBAR key to lift your bird', imgstartxcord, imgstartycord + img.height + 20);
    }else if(start == "running"){
        if(bird.update()) {
            bird.show();
            start = "lost";
            setTimeout(function(){
                start = "start";
                bird.reset();
                pipes = [];
            }, 2000);
        }else {
            bird.show();

            if(frameCount % 100 == 0) {
                pipes.push(new Pipe());
            }
            for(var i = pipes.length - 1; i > 0; i--) {
                pipes[i].show();
                pipes[i].update();
    
                if(pipes[i].hits(bird)) {
                    start = "lost";
                    setTimeout(function(){
                        start = "start";
                        bird.reset();
                        pipes = [];
                    }, 2000);
                }else {
                    if(pipes[i].crossesBird(bird)) {
                        score++;
                    }
                    if(pipes[i].crossesBird(bird)) {
                        pipes.splice(i, 1);
                    }
                }
            }
        }
    }else if(start == "lost"){
        fill(255);
        text('Your Score is: ' + score, imgstartxcord, imgstartycord - 20);
    }
}

function keyPressed() {
    if (key == ' ') {
        bird.up();
    }
}

function mouseClicked() {
    if(start == "start" && mouseX > imgstartxcord && mouseX < imgstartxcord + img.width) {
        if(mouseY > imgstartycord && mouseY < imgstartycord + img.height) {
            start = "running";
        }
    }
}