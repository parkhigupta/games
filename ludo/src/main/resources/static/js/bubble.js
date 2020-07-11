class Bubble{
    constructor(x, y ,r){
        this.x = x;
        this.y =y;
        this.r = r;
    }

    showRed() {
        stroke(255, 0, 0);
        strokeWeight(4);
        fill(255, 0, 0);
        ellipse(this.x, this.y, this.r*2);
    }

    showGreen() {
        stroke(0, 153, 51);
        strokeWeight(4);
        fill(0, 153, 51);
        ellipse(this.x, this.y, this.r*2);
    }

    showBlue() {
        stroke(0, 102, 255);
        strokeWeight(4);
        fill(0, 102, 255);
        ellipse(this.x, this.y, this.r*2);
    }

    showYellow() {
        stroke(255, 255, 0);
        strokeWeight(4);
        fill(255, 255, 0);
        ellipse(this.x, this.y, this.r*2);

    }
}