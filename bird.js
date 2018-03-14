function Bird() {
    this.y = height/2;
    this.x = 64;
    this.d = 32

    this.gravity = 2.5;
    this.lift = 40;

    this.show = function() {
        fill(255);
        ellipse(this.x, this.y, this.d, this.d);
    }

    this.up = function()  {
        this.y -= this.lift
    }

    this.update = function() {
        this.y += this.gravity;

        if(this.y + (this.d/2) > height) {
            this.y = height - (this.d/2);
            return true;
        }
        return false;
    }

    this.reset = function() {
        this.y = height/2;
    }
}