let sound;

function setup() {
  sound = loadSound('assets/tururu.mp3');
  createCanvas(1440, 700);
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

}
