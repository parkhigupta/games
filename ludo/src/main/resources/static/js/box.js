class Box{
    constructor(x, y, l, w){
        this.x = x;
        this.y =y;
        this.l = l;
        this.w = w;
    }

    showEmptyBox(){
        stroke(255, 255, 255);
        strokeWeight(1);
        noFill();
        rect(this.x, this.y, this.l, this.w);
    }

    showRedBox(){
        stroke(255, 255, 255);
        strokeWeight(4);
        fill(255, 0, 1);
        rect(this.x, this.y, this.l, this.w);
    }

    showGreenBox() {
        stroke(255, 255, 225);
        strokeWeight(4);
        fill(0, 153, 51);
        rect(this.x, this.y, this.l, this.w);
    }

    showBlueBox() {
        stroke(255, 255, 225);
        strokeWeight(4);
        fill(0, 102, 255);
        rect(this.x, this.y, this.l, this.w);
    }

    showYellowBox() {
        stroke(255, 255, 225);
        strokeWeight(4);
        fill(255, 255, 0);
        rect(this.x, this.y, this.l, this.w);

    }
}