let sound;
let a;
let b;

function setup() {
  sound = loadSound('assets/tururu.mp3');
  createCanvas(1440, 700);
  a = width;
  b = width/2;
}
function mousePressed() {
  if (sound.isPlaying()) {
    sound.stop();
    background(46, 52, 180);
  } else {
    sound.play();
    background(46, 52, 120);
  }
}


function draw() {
  background(46, 52, 139);
  noStroke();

  fill(2, 40, 2);
  rect(0, 500, 1440, 200);
  fill(200, 200, 200);
  ellipse( a, 70, 160, 150);
  ellipse( a-60, 100, 160, 150);
  ellipse( a+60, 100, 140, 130);
  ellipse( a-140, 100, 110, 100);

  fill(2, 40, 2);
  rect(0, 500, 1440, 200);
  fill(200, 200, 200);
  ellipse( a+width/3, 100, 160, 150);
  ellipse( a+width/3-60, 130, 160, 150);
  ellipse( a+width/3+60, 130, 140, 130);
  ellipse( a+width/3-140, 130, 110, 100);

  fill(2, 40, 2);
  rect(0, 500, 1440, 200);
  fill(200, 200, 200);
  ellipse( b, 70, 150, 150);
  ellipse( b-60, 100, 150, 150);
  ellipse( b+60, 100, 130, 130);
  ellipse( b-140, 100, 100, 100);

  a = a - 0.4;
  if (a < 0 ) {
    a = width;
  }

  b = b - 0.4;
  if (b < 0 ) {
    b = width/2;
  }
}
