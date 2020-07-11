let i,j;
let box;
let frame1, frame2, frame3, frame4;
let bubble1, bubble2, bubble3, bubble4;
let img;

function preload() {
    img = loadImage('../img/home.jpg');
}

function setup() {
    createCanvas(1500, 1500);
    background(32);

    for (i = 0; i <= 1500; i+=100) {
    for(j = 0; j <= 1500; j+=100) {
        box = new Box(i, j, 100, 100);
        box.showEmptyBox();
    }
}

    frame1 = new Frame(0, 0, 600, 600);
    frame2 = new Frame(0, 900, 600, 600);
    frame3 = new Frame(900, 0, 600, 600);
    frame4 = new Frame(900, 900, 600, 600);

    frame1.showRedBorder();
    frame2.showGreenBorder();
    frame3.showBlueBorder();
    frame4.showYellowBorder();

    bubble1 = new Bubble(200, 200, 50);
    bubble2 = new Bubble(400, 200, 50);
    bubble3 = new Bubble(200,400,50);
    bubble4 = new Bubble(400, 400, 50);

    bubble5 = new Bubble(200, 1100, 50);
    bubble6 = new Bubble(400, 1100, 50);
    bubble7 = new Bubble(200,1300,50);
    bubble8 = new Bubble(400, 1300, 50);

    bubble9 = new Bubble(1100, 200, 50);
    bubble10 = new Bubble(1300, 200, 50);
    bubble11 = new Bubble(1100,400,50);
    bubble12 = new Bubble(1300, 400, 50);

    bubble13 = new Bubble(1100, 1100, 50);
    bubble14 = new Bubble(1100, 1300, 50);
    bubble15 = new Bubble(1300,1100,50);
    bubble16 = new Bubble(1300, 1300, 50);

    bubble1.showRed();
    bubble2.showRed();
    bubble3.showRed();
    bubble4.showRed();

    bubble5.showGreen();
    bubble6.showGreen();
    bubble7.showGreen();
    bubble8.showGreen();

    bubble9.showBlue();
    bubble10.showBlue();
    bubble11.showBlue();
    bubble12.showBlue();

    bubble13.showYellow();
    bubble14.showYellow();
    bubble15.showYellow();
    bubble16.showYellow();

    image(img, 600, 600, 300, 300);

    box = new Box(100, 600, 100, 100);
    box.showRedBox();
    for(i = 100; i < 600; i+=100){
        box = new Box(i, 700, 100, 100);
        box.showRedBox();
    }

    box = new Box(800, 100, 100, 100);
    box.showBlueBox();
    for(j = 100; j < 600; j+=100){
        box = new Box(700, j, 100, 100);
        box.showBlueBox();
    }

    box = new Box(1300, 800, 100, 100);
    box.showYellowBox();
    for(i = 900; i < 1400; i+=100){
        box = new Box(i, 700, 100, 100);
        box.showYellowBox();
    }

    box = new Box(600, 1300, 100, 100);
    box.showGreenBox();
    for(j = 900; j < 1400; j+=100){
        box = new Box(700, j, 100, 100);
        box.showGreenBox();
    }
}