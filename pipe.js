function Pipe() {
    this.top = random(height/2);
    this.bottom = random(height/2);
    this.x = width;
    this.w = 20;
    this.speed = 2.5;

    this.show = function() {
        fill(255);
        if(this.highlight) {
            fill(255, 0, 0);
        }
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height-this.bottom, this.w, this.bottom);
    }

    this.update = function() {
        this.x -= this.speed;
    }

    this.offscreen = function() {
        if(this.x < -this.w) {
            return true;
        }else {
            return false;
        }
    }

    this.crossesBird = function(bird) {
        if(this.x + this.w < bird.x - bird.d/2){
            return true;
        }
        return false;
    }

    this.hits = function(bird) {
        if(collideRectCircle(this.x, 0, this.w, this.top, bird.x, bird.y, bird.d) || collideRectCircle(this.x, height-this.bottom, this.w, this.bottom, bird.x, bird.y, bird.d)) {
            return true;
        }else {
            return false;
        }
    }
}