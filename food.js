function Food() {
    this.x = 0;
    this.y = 0;

    this.pickLocation = function() {
        this.x = floor(random(width/scl))*scl;
        this.y = floor(random(height/scl))*scl;
    }

    this.show = function() {
        fill(255, 0, 100);
        rect(this.x, this.y, 20, 20);
    }

}
