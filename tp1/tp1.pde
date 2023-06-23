//TP1 Paula Mendes Comisión 3
//Legajo = 93546/1
//Declaración con asignación
String estado = "inicio";
//Variable tipo contador
int cuentaFotograma = 0;
//Variable PImage para imprimir las imagenes
PImage img1, img2, img3, img4, img5, img6, img7, img8, img9;
//Variable de tipografía
PFont font;


void setup() {
  size(640, 480);

  //60 fps normalmente
  //lo bajamos a 30
  //para que todos los equipos
  //puedan ejecutar el código
  //sin problemas.

  frameRate(30);

  //Cargamos las imagenes

  img1 = loadImage("data/img1.png");
  img1.resize(640, 480);
  img2 = loadImage("data/img2.png");
  img2.resize(640, 480);
  img3 = loadImage("data/img3.png");
  img3.resize(640, 480);
  img4 = loadImage("data/img4.png");
  img4.resize(640, 480);
  img5 = loadImage("data/img5.png");
  img5.resize(640, 480);
  img6 = loadImage("data/img6.png");
  img6.resize(640, 480);
  img7 = loadImage("data/img7.png");
  img7.resize(640, 480);
  img8 = loadImage("data/img8.png");
  img8.resize(640, 480);
  img9 = loadImage("data/img9.png");
  img9.resize(640, 480);
}
void draw() {

  //Pantalla de inicio
  background(255);
  image(img1, 0, 0);
  //Inicio
  if (estado.equals("inicio") ) {
    font = createFont("fuente.otf", 100);
    textFont(font);
    fill(102, 32, 41);
    ellipse(width/2, 300, 80, 80);
    fill(249);
    textAlign(CENTER);
    textSize(54);
    text("Vincent Van \nGogh", 320, 118);
    textAlign(CENTER);
    textSize(23);
    text("Ver", width/2, 308);
    fill(30, 30, 30);
    //Marco pantalla 0
    fill(255);
    noStroke();

    rect(0, 0, 15, 500);
    rect(625, 0, 15, 500);
    rect(12, 0, 637, 15);
    rect(12, 465, 637, 15);
  } else if (estado.equals("pantalla 1") ) {

    //Pantalla 1
    image(img2, 0, 0);
    fill( 178, map(cuentaFotograma, 0, 150, 0, 166));
    noStroke();
    rect ( 28, 50, 599, 330);
    fill( 10, map(cuentaFotograma, 0, 150, 0, 255));
    textAlign(CENTER);
    textSize(30);
    text("Van Gogh, fue un pintor neerlandes. \n Uno de los maximos exponentes del \n postimpresionismo. Pinto miles de \n cuadros. Y dibujo mas de dos mil obras.", width/2, 120);
    textSize (15);
    text("Obra: Noche estrellada", width/2, height/2+109);
    //Marco pantalla 1
    fill(255);
    noStroke();

    rect(0, 0, 15, 500);
    rect(625, 0, 15, 500);
    rect(12, 0, 637, 15);
    rect(12, 465, 637, 15);

    cuentaFotograma++;
    if ( cuentaFotograma>= 250 ) {
      estado = "pantalla 2";
      cuentaFotograma = 0;
    }
  } else if (estado.equals("pantalla 2") ) {

    //Pantalla 2
    image(img3, 0, 0);
    fill( 178, map(cuentaFotograma, 0, 150, 0, 220));
    noStroke();
    rect ( 28, 50, 599, 330);
    fill( 10, map(cuentaFotograma, 0, 150, 0, 255));
    textAlign(CENTER);
    textSize(30);
    text("Y hace poco, en Paris, \n se abrio un museo \n enfocado solamente al arte \n digital y monumental.", width/2, 120);
    textSize (15);
    text("Obra: Campo de trigo con cipreses", width/2, height/2+103);
    //Marco pantalla 2
    fill(255);
    noStroke();
    rect(0, 0, 15, 500);
    rect(625, 0, 15, 500);
    rect(12, 0, 637, 15);
    rect(12, 465, 637, 15);
    cuentaFotograma++;
    if ( cuentaFotograma>= 170 ) {
      estado = "pantalla 3";
      cuentaFotograma = 0;
    }
  } else if (estado.equals("pantalla 3") ) {
    //Pantalla 3
    image(img4, 0, 0);
    fill( 178, map(cuentaFotograma, 0, 150, 0, 255));
    noStroke();
    rect ( 28, 50, 599, 330);
    fill( 10, map(cuentaFotograma, 0, 150, 0, 255));
    textAlign(CENTER);
    textSize(30);
    text("Usaron varias de sus obras \n y las convirtieron en \n un espectaculo de luces y \n musica.", width/2, 120);
    textSize (15);
    text("Obra: Jardin de Arles", width/2, height/2+104);
    //Marco pantalla 3
    fill(255);
    noStroke();
    rect(0, 0, 15, 500);
    rect(625, 0, 15, 500);
    rect(12, 0, 637, 15);
    rect(12, 465, 637, 15);
    cuentaFotograma++;
    if ( cuentaFotograma>= 190 ) {
      estado = "pantalla 4";
      cuentaFotograma = 0;
    }
  } else if (estado.equals("pantalla 4") ) {
    //Pantalla 4
    image(img5, 0, 0);
    fill( 178, map(cuentaFotograma, 0, 150, 0, 255));
    noStroke();
    rect ( 28, 152, 580, 158);
    fill( 10, map(cuentaFotograma, 0, 150, 0, 255));
    textAlign(CENTER);
    textSize(5+cuentaFotograma/4);
    text("Utilizaron sus obras mas famosas...", width/2, height/2);
    //Marco pantalla 4
    fill(255);
    rect(0, 0, 15, 500);
    rect(625, 0, 15, 500);
    rect(12, 0, 637, 15);
    rect(12, 465, 637, 15);
    cuentaFotograma++;
    if ( cuentaFotograma>= 150 ) {
      estado = "pantalla 5";
      cuentaFotograma = 0;
    }
  } else if (estado.equals("pantalla 5") ) {

    //Pantalla 5
    image(img6, 0, 0);
    fill( 178, map(cuentaFotograma, 0, 150, 0, 255));
    noStroke();
    rect ( 28, 181, 599, 152);
    fill( 10, map(cuentaFotograma, 0, 150, 0, 255));
    textAlign(CENTER);
    textSize(5+cuentaFotograma/4);
    text("Para reflejarlas en un ambiente \n tridimensional.", width/2, height/2);
    //Marco pantalla 5
    fill(255);
    noStroke();

    rect(0, 0, 15, 500);
    rect(625, 0, 15, 500);
    rect(12, 0, 637, 15);
    rect(12, 465, 637, 15);
    cuentaFotograma++;
    if ( cuentaFotograma>= 250 ) {
      estado = "pantalla 6";
      cuentaFotograma = 0;
    }
  } else if (estado.equals("pantalla 6") ) {

    //Pantalla 6
    image(img7, 0, 0);
    fill( 178, map(cuentaFotograma, 0, 150, 0, 255));
    noStroke();
    rect ( 28, 181, 599, 152);
    fill(0);
    textAlign(CENTER);
    textSize(5+cuentaFotograma/2);
    text("E inmersivo.", width/2, 280);
    //Marco pantalla 6
    fill(255);
    noStroke();

    rect(0, 0, 15, 500);
    rect(625, 0, 15, 500);
    rect(12, 0, 637, 15);
    rect(12, 465, 637, 15);
    cuentaFotograma++;
    if ( cuentaFotograma>= 250 ) {
      estado = "pantalla 7";
      cuentaFotograma = 0;
    }
  } else if (estado.equals("pantalla 7") ) {

    //Pantalla 7
    image(img8, 0, 0);
    fill( 178, map(cuentaFotograma, 0, 150, 0, 166));
    noStroke();
    rect ( 28, 196, 599, 196);
    fill(0);
    textAlign(CENTER);
    textSize(5+cuentaFotograma/2);
    text("Combinando la tecnologia \n con un arte mas antiguo... ", width/2, height/2);
    //Marco pantalla 7
    fill(255);
    noStroke();

    rect(0, 0, 15, 500);
    rect(625, 0, 15, 500);
    rect(12, 0, 637, 15);
    rect(12, 465, 637, 15);
    cuentaFotograma++;
    if ( cuentaFotograma>= 250 ) {
      estado = "pantalla 8";
      cuentaFotograma = 0;
    }
  } else if (estado.equals("pantalla 8") ) {

    //Pantalla 8
    image(img8, 0, 0);
    fill(0);
    textAlign(CENTER);
    textSize(5+cuentaFotograma/2);
    text("Gracias por ver,", width/2, height/2 );
    textSize(20);
    text("Tecno uno Comision tres", width/2, height/2+40);
    //Marco pantalla 8
    fill(255);
    noStroke();

    rect(0, 0, 15, 500);
    rect(625, 0, 15, 500);
    rect(12, 0, 637, 15);
    rect(12, 465, 637, 15);
    cuentaFotograma++;
    if ( cuentaFotograma>= 250) {
      estado = "final";
      cuentaFotograma = 0;
    }
  } else if (estado.equals("final") ) {
    //Final
    image(img9, 0, 0);
    fill(178, 56, 56);
    ellipse(width/2, 300, 80, 80);
    fill(0, 0, 0);
    textAlign(CENTER);
    textSize(29);
    text("Reiniciar", width/2, 305);
    //Marco pantalla 9
    fill(255);
    noStroke();

    rect(0, 0, 15, 500);
    rect(625, 0, 15, 500);
    rect(12, 0, 637, 15);
    rect(12, 465, 637, 15);
    if ( cuentaFotograma>= 250) {
      estado = "inicio";
      cuentaFotograma++;
    }
  }
}
void mousePressed() {
  if (estado.equals("inicio") ) {
    if (dist(mouseX, mouseY, width/2, 300) <37 ) {
      estado = "pantalla 1";
      cuentaFotograma = 0;
    }
  } else if ( estado.equals("pantalla 1") ) {
    estado = "pantalla 2";
    cuentaFotograma = 0;
  } else if ( estado.equals("pantalla 2") ) {
    estado = "pantalla 3";
    cuentaFotograma = 0;
  } else if ( estado.equals("pantalla 3") ) {
    estado = "pantalla 4";
    cuentaFotograma = 0;
  } else if ( estado.equals("pantalla 4") ) {
    estado = "pantalla 5";
    cuentaFotograma = 0;
  } else if ( estado.equals("pantalla 5") ) {
    estado = "pantalla 6";
    cuentaFotograma = 0;
  } else if ( estado.equals("pantalla 6") ) {
    estado = "pantalla 7";
    cuentaFotograma = 0;
  } else if ( estado.equals("pantalla 7") ) {
    estado = "pantalla 8";
    cuentaFotograma = 0;
  } else if ( estado.equals("pantalla 8") ) {
    estado = "final";
    cuentaFotograma = 0;
  } else if ( estado.equals("final") ) {
    if (dist(mouseX, mouseY, width/2, 300) <37 ) {
      estado = "inicio";
      cuentaFotograma = 0;
    }
  }
}
