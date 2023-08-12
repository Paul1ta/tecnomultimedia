// URL Video: https://youtu.be/PvTT0OLM-7I
// Comisión: 3 Alumna: Paula Mendes
// Legajo : 93546/1


PImage p1;
int turn;

void lineOfSquares(int sidestep){
  rect(10+sidestep,0, 20, 20);
  pushMatrix();
  for (int i = 0; i < 9; i++){
    if (i==0){
      translate(50+sidestep,0);
    } else {
      translate(40,0);
    }
    rect(0,0, 20, 20);
  }
  popMatrix();
}

int getSideStep(){
  if(turn == 1){
    turn = 2;
    return 0;
  } else if(turn == 2){
    turn = 3;
    return 5;
  } else if(turn == 3){
    turn = 4;
    return 0;
  } else {
    turn = 1;
    return -5;
  }
}

void setup(){
  size(800, 400);

  background(255);

  p1 = loadImage("p1.jpg");
  p1.resize(400,400);
  
  turn = 1;

  frameRate(30);
}

void draw(){
  image(p1, 400,0);
  fill(200);
  line(0,0, 400, 0);
  pushMatrix();
  for (int i = 0; i < 20; i++){
    translate(0,20);
    line(0,0, 400, 0);
  }
  popMatrix();
  
  fill(20);
  translate(0,-20);
  for(int i = 0; i < 20; i++){
    translate(0,20);
    lineOfSquares(getSideStep());
  }
}
