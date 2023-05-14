PImage img1, img2, img3, img4, img5, img6, img7, img8;
int cont;
int currentImg = 0;
void setup() {
  size (640, 480);
  
  img8 = loadImage("imagen8.png");
  image(img8, 0, 0);
  img8.resize(640, 480);

  img5 = loadImage("imagen5.png");
  image(img5, 0, 0);
  img5.resize(640, 480);

  img6 = loadImage("imagen6.png");
  image(img6, 0, 0);
  img6.resize(640, 480);

  img7 = loadImage("imagen7.png");
  image(img7, 0, 0);
  img7.resize(640, 480);

  img1 = loadImage("imagen1.png");
  image(img1, 0, 0);
  img1.resize(640, 480);

  img2 = loadImage("imagen2.png");
  image(img2, 0, 0);
  img2.resize(640, 480);

  img3 = loadImage("imagen3.png");
  image(img3, 0, 0);
  img3.resize(640, 480);

  img4 = loadImage("imagen4.png");
  image(img4, 0, 0);
  img4.resize(640, 480);

}
void draw() {
  background(255);
  if (currentImg == 0) {
    image(img8, 0, 0);
      PFont font;
  font = createFont("Binjay.otf", 100);
  textFont(font);
  text("Van Gogh", 100, 100);
  fill(80, 176, 75);
  } else if (currentImg == 1) {
    image(img5, 0, 0);
    PFont font;
  font = createFont("sf.otf", 25);
    textFont(font);
  text("Van gogh, fue un pintor neerlandés.", 100, 100);
   text("Uno de los máximos exponentes del", 100, 130);
    text("postimpresionismo. Pintó unos 800", 100, 160);
        text("y realizó más de 1600 dibujos", 100, 190);
fill(255, 255, 255);
  } else if (currentImg == 2) {
    image(img6, 0, 0);
    PFont font;
  font = createFont("sf.otf", 25);
    textFont(font);
  text("Van gogh, fue un pintor neerlandés.", 100, 100);
   text("Uno de los máximos exponentes del", 100, 130);
    text("postimpresionismo. Pintó unos 800", 100, 160);
        text("y realizó más de 1600 dibujos", 100, 190);
fill(255, 255, 255);
  } else if (currentImg == 3) {
    image(img7, 0, 0);
  } else if (currentImg == 4) {
    image(img1, 0, 0);
         PFont font;
  font = createFont("Binjay.otf", 100);
  textFont(font);
  text("La obra", 100, 100);
  fill(109, 120, 165);
  } else if (currentImg ==5) {
    image(img2, 0, 0);
  } else if (currentImg == 6) {
    image(img3, 0, 0);
  } else if (currentImg == 7) {
    image(img4, 0, 0);
  }

  if (cont>200) {
    currentImg++;
    cont = 0;
  } else {
    cont++;
  }
}
