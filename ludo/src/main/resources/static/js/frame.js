class Frame{
    constructor(x, y, l, w){
        this.x = x;
        this.y =y;
        this.l = l;
        this.w = w;
    }

    showRedBorder() {
        stroke(255, 0, 0);
        strokeWeight(10);
        noFill();
        rect(this.x, this.y, this.l, this.w);
    }

    showGreenBorder() {
        stroke(0, 153, 51);
        strokeWeight(10);
        noFill();
        rect(this.x, this.y, this.l, this.w);
    }

    showBlueBorder() {
        stroke(0, 102, 255);
        strokeWeight(10);
        noFill();
        rect(this.x, this.y, this.l, this.w);
    }

    showYellowBorder() {
        stroke(255, 255, 0);
        strokeWeight(10);
        noFill();
        rect(this.x, this.y, this.l, this.w);
    }
}