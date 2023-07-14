PImage imagen;
void setup() {
  imagen = loadImage("data/ilusion.jpg");
  size(800, 400);
  frameRate(30);
}

void draw() {

  image (imagen, 400, 0, 400, 400);

  fill(200);
  line(0, 0, 400, 0);
  pushMatrix();
  for (int i = 0; i < 10; i++) {
    translate(0, 20);
    line(7, 7, 400,  7);
  }
  popMatrix();

  fill(0);
  rect(10, 0, 25, 25);
  pushMatrix();
  for (int i = 0; i < 10; i++) {
    if (i==0) {
      translate(50, 0);
    } else {
      translate(40, 0);
    }
    rect(0, 0, 25, 25);
  }
  popMatrix();

  translate(0, 20);
  fill(0);
  rect(15, 0, 25, 25);
  pushMatrix();
  for (int i = 0; i < 10; i++) {
    if (i==0) {
      translate(55, 0);
    } else {
      translate(40, 0);
    }
    rect(0, 0, 25, 25);
  }

  popMatrix();
}
