class Center{
        constructor(x1, y1, x2, y2, x3, y3){
            this.x1 = x1;
            this.x2 = x2;
            this.x3 = x3;
            this.y1 = y1;
            this.y2 = y2;
            this.y3 = y3;
        }

        showRedTriangle(){
            stroke(255, 0, 0);
            strokeWeight(10);
            fill(255, 0, 0);
            triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
        }

    showGreenTriangle() {
        stroke(0, 153, 51);
        strokeWeight(4);
        fill(0, 153, 51);
        triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
    }

    showBlueTriangle() {
        stroke(0, 102, 255);
        strokeWeight(4);
        fill(0, 102, 255);
        triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
    }

    showYellowTriangle() {
        stroke(255, 255, 0);
        strokeWeight(4);
        fill(255, 255, 0);
        triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);

    }
}