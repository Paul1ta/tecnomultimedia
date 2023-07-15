//Paula Mendes Com3 
//Legajo: 93546/1
//Url video YouTube: https://youtu.be/c7W3uu1G5J0

//Variable tipo contador
int cuentaFotograma = 0;
int cuentaHeight = 0;
//Variable PImage para imprimir las imagenes
PImage[] imagenes = new PImage[28];
PImage arrow;
//Variable de tipografía
PFont font;
//Declaración con asignación
String estado = "inicio";
float transparencia = 255;
boolean mostrarOpciones = false;
boolean mostrarButton = false;
int screenNum;
boolean slideShowOver = false;
boolean slideShowOver2 = false;

//Variable boolean para preguntar si el click está dentro del botón

boolean isInCenteredRectangle(int x_rect, int y_rect, int rect_width, int rect_height) {
  boolean insideLeft = mouseX >= x_rect-rect_width/2;
  boolean insideRight = mouseX <= x_rect+rect_width/2;
  boolean insideTop = mouseY >= y_rect-rect_height/2;
  boolean insideBottom = mouseY <= y_rect+rect_height/2;
  return insideLeft & insideRight & insideTop & insideBottom;
}

//Variable para poder cambiar el estilo el conjunto y ahorrar líneas de código
void imagenConTexto(PImage imagen, String texto, String position) {
  tint(255, 255);
  image(imagen, 0, 0);
  fill(249);
  textAlign(CENTER);
  textSize(24);
  if (position.equals("top")) {
    text(texto, width/2, 50);
  }
  if (position.equals("bottom")) {
    text(texto, width/2, 467);
  } 
}

void imagenConNext(PImage imagen, String texto, String position){
    imagenConTexto(imagen, texto, position);
    image(arrow, width-125, -25);
}

//Variable que declara los valores de los detalles como los textos

void opciones(String opcion1, String opcion2, String position) {
  if(cuentaFotograma > 60){
    mostrarOpciones = true; 
  }
  cuentaFotograma++;
  if (mostrarOpciones) {
    fill(177, 120, 128);
    rectMode(CENTER);
    if (position.equals("top")) {
      rect(width/2, 50, 350, 40);
      fill(249);
      textSize(24);
      text(opcion1, width/2, 60);
      fill(177, 120, 128);
      rect(width/2, 100, 350, 40);
      fill(249);
      textSize(24);
      text(opcion2, width/2, 110);
    } else if (position.equals("bottom")) {
      rect(width/2, 507, 350, 40);
      fill(249);
      textSize(24);
      text(opcion1, width/2, 517);
      fill(177, 120, 128);
      rect(width/2, 557, 350, 40);
      fill(249);
      textSize(24);
      text(opcion2, width/2, 567);
    }
  }
}

void opcionesDirection(){
  if(cuentaFotograma > 60){
    mostrarOpciones = true; 
  }
  cuentaFotograma++;
  if (mostrarOpciones) {
    fill(177, 120, 128);
    rectMode(CENTER);
    rect(width/2, 150, 350, 150);
    fill(249);
    textSize(24);
    text("a - Segunda estrella a la\nderecha y derecho\nhasta la manana", width/2, 110);
    fill(177, 120, 128);
    rect(width/2, 320, 350, 150);
    fill(249);
    textSize(24);
    text("b - Segunda estrella a la\nderecha y derecha\nhasta la manana", width/2, 280);
    fill(177, 120, 128);
    rect(width/2, 490, 350, 150);
    fill(249);
    textSize(24);
    text("c - Segunda estrella\nderecho y derecha\nhasta la manana", width/2, 450);
  }
}

void resetValues(){
  cuentaFotograma = 0;
  cuentaHeight = 0;
  mostrarOpciones = false;
  transparencia = 255;
  mostrarButton = false;
  screenNum = 1;
  slideShowOver = false;
  slideShowOver2 = false;
}

//Variable para click
void administrarClic(String estado1, String estado2, String position) {
  if (!mostrarOpciones) {
    mostrarOpciones = true;
  } else {
    int y = 50;
    if (position.equals("top")) {
      y = 50;
    } else if (position.equals("bottom")) {
      y = 507;
    }
    if (isInCenteredRectangle(width/2, y, 350, 40)) {
      estado = estado1;
      resetValues();
    } else if (isInCenteredRectangle(width/2, y+50, 350, 40)) {
      estado = estado2;
      resetValues();
    }
  }
}

void administrarNext() {
  if (isInCenteredRectangle(width-50, 50, 125, 125)) {
    screenNum++;
  }
}

//Página de inicio

void mostrarMenuPrincipal() {
  fill(177, 120, 128);
  tint(255, 255);
  image(imagenes[1], 0, 0);
  textAlign(CENTER);
  ellipse(width/4, 550, 105, 80);
  fill(249);
  textSize(17);
  text("Jugar", width/4, 557);
  fill(177, 120, 128);
  ellipse(3*width/4, 550, 105, 80);
  fill(249);
  textSize(17);
  text("Créditos", 3*width/4, 557);
  fill(30);
  if (cuentaFotograma < 120) {
    image(imagenes[0], 0, 0);
  } else {
    if (transparencia > 0) {
      transparencia -= 5;
    };
    tint(255, transparencia);
    cuentaFotograma = cuentaFotograma + 5;
    image(imagenes[0], 0, -(cuentaFotograma - 120));
  }
  cuentaFotograma++;
}

//Animación de portada

void finalScreen(PImage imagen, String text, String position) {
  int y = 50;
  if (position.equals("top")) {
    y = 50;
  } else if (position.equals("bottom")) {
    y = 507;
  }
  tint(255, 255);
  if (cuentaFotograma < 150) {
    image(imagen, 0, 0);
    textAlign(CENTER);
    fill(249);
    textSize(17);
    text(text, width/2, y);
  } else {
    image(imagen, 0, -(cuentaFotograma - 150));
    textAlign(CENTER);
    fill(249);
    textSize(17);
    int newheight = height-(cuentaFotograma - 150);
    if (newheight > 0) {
      image(imagenes[26], 0, newheight);
      text("Historia : Peter Pan - James Matthew Barrie\n\n\nCódigo : Bastien German y Paula Mendes\n\n\nDibujos : Paula Mendes\n\n\nLegajo : 93546/1\n\n\nComision : 3", width/2, height/4+newheight);
      cuentaFotograma = cuentaFotograma + 5;
    } else {
      if (cuentaHeight > 150) {
        if (transparencia > 0) {
          transparencia -= 5;
        } else {
          mostrarButton = true;
        }
      }
      //Créditos
      image(imagenes[27], 0, 0);
      tint(255, transparencia);
      image(imagenes[26], 0, 0);
      fill(249, transparencia);
      text("Historia : Peter Pan - James Matthew Barrie\n\n\nCódigo : Paula Mendes\n\n\nDibujos : Paula Mendes\n\n\nLegajo : 93546/1\n\n\nComision : 3", width/2, height/6);
      cuentaHeight++;
      if (mostrarButton) {
        fill(177, 120, 128);
        ellipse(width/2, 65, 105, 80);
        fill(249);
        textSize(17);
        text("Reiniciar", width/2, 75);
      }
    }
  }
  cuentaFotograma++;
}

int getImage(int len, int cuenta, int time){
  for(int i = 0; i < len; i++){
    if((cuenta/((i+1)*time)) <= 1){
      return i;
    }
  }
  return len-1;
}

void slideShow(PImage[] arg_imagenes, int time, int indicator){
  int index = getImage(arg_imagenes.length, cuentaFotograma, time);
  image(arg_imagenes[index], 0, 0);
  cuentaFotograma++;
  if(cuentaFotograma >= (arg_imagenes.length+3)*time){
    if((indicator == 1 && !slideShowOver) || (indicator == 2 && !slideShowOver2)){
      cuentaFotograma = 0;
    }
    if(indicator == 1){
      slideShowOver = true;
    } else if(indicator == 2){
      slideShowOver2 = true; 
    }
  }
}

void setup () {

  size( 600, 600);

  frameRate(30);
  for (int i = 0; i < imagenes.length; i = i+1) {
    imagenes[i] = loadImage("p"+i+".PNG");
  };
  arrow = loadImage("arrow.PNG");
  arrow.resize(150,150);
  
  screenNum = 1;

  font = createFont("KGTenThousandReasons.ttf", 100);
  textFont(font);
  noStroke();
}

void draw() {
  //Código para árbol de opciones
  background(255);
  if (estado.equals("inicio")) {
    //Inicio
    mostrarMenuPrincipal();
  } else if (estado.equals("ventana")) {     
    imagenConTexto(imagenes[2], "¡Se corrio el rumor de que hay ladrones\nque trepan los techos!", "top");
    opciones("Cerrar la ventana", "Dejarla abierta", "bottom"); 
  } else if (estado.equals("ventanaCerrada")) {
    imagenConTexto(imagenes[3], "¡Que miedo! En serio ...\n ¿Trepan las techos?", "bottom" );
    opciones("Jugar con tus hermanos", "Dormir", "top");
  } else if (estado.equals("ventanaAbierta")) {
    imagenConTexto(imagenes[4], "Asi que ahora, que preferis hacer?", "top");
    opciones("Jugar con tus hermanos", "Dormir", "bottom");
  } else if (estado.equals("durmiendoCerrada")) {
    finalScreen(imagenes[7], "Como fuiste a dormir,\n Peter ni siquiera intenta\n abrir tu ventana", "bottom");  
  } else if (estado.equals("jugandoCerrada")) {
    finalScreen(imagenes[6], "Al haber cerrado la ventana,\n ¡Peter no puede entrar!", "bottom");
  } else if (estado.equals("durmiendoAbierta")) {
    finalScreen(imagenes[8], "Como fuiste a dormir,\n a pesar de que la ventana este abierta,\n a Peter no le llama la atencion", "top");
  } else if (estado.equals("jugandoAbierta")) {
    boolean display1 = (screenNum == 1);
    boolean display2 = (screenNum == 2);
    boolean display3 = (screenNum == 3);
    if(display1){
      imagenConNext(imagenes[5], "Como dejaste la ventana abierta...", "top");
    } else if(display2){
      imagenConNext(imagenes[9], "¡Peter puede entrar!\nY te pregunta a vos y a tus hermanos...", "top");
    } else if(display3){
      imagenConTexto(imagenes[9], "¿Les gustaria volar?", "top");
      opciones("Si", "No", "bottom");
    }
  } else if (estado.equals("volarNo")) {
    finalScreen(imagenes[8], "Peter les dice que el miedo es para adultos y se va", "top");
  } else if (estado.equals("volarSi")) {
    boolean display1 = !slideShowOver;
    boolean display2 = slideShowOver && (screenNum == 1);
    boolean display3 = (screenNum == 2);
    boolean display4 = (screenNum == 3) && !slideShowOver2;
    boolean display5 = slideShowOver2;
    if(display1){
      PImage[] slideShowImagenes = {imagenes[10], imagenes[11], imagenes[12]};
      slideShow(slideShowImagenes, 15, 1);
    } else if (display2){
      imagenConNext(imagenes[13], "Peter les ensena a volar,\n les presenta a Tinkerbell y\nles explica la ubicacion de Nunca Jamas.", "bottom");
    } else if (display3){
      imagenConNext(imagenes[14], "La ubicacion es:\n segunda estralla a la derecha\ny derecho hasta la manana.", "top");
    } else if (display4){
      PImage[] slideShowImagenes = {imagenes[15], imagenes[16], imagenes[17]};
      slideShow(slideShowImagenes, 45, 2);    
    } else if (display5){
      screenNum = 4;
      imagenConTexto(imagenes[17], "¿Hacia donde vas?", "top");
      opcionesDirection();
    }
  } else if (estado.equals("ubicacionFalsa")) {
    boolean display1 = !slideShowOver;
    if (display1){
      PImage[] slideShowImagenes = {imagenes[19], imagenes[20]};
      slideShow(slideShowImagenes, 45, 1);
    } else {
      finalScreen(imagenes[20], "Al parecer... ese no era el camino", "bottom");
    }
  } else if(estado.equals("ubicacionCorrecta")){
    boolean display1 = (screenNum == 1);
    boolean display2 = !slideShowOver && (screenNum == 2);
    boolean display3 = slideShowOver;
    if(display1){
      imagenConNext(imagenes[18], "La ubicacion era correcta,\ny avistan Nunca Jamas.", "bottom");
    } else if(display2){
      PImage[] slideShowImagenes = {imagenes[21], imagenes[23]};
      slideShow(slideShowImagenes, 45, 1);
    } else if (display3){
      finalScreen(imagenes[23], "Terminas conociendo a los amigos de Peter", "top");
    }
  } else if(estado.equals("creditos")){
    finalScreen(imagenes[1], "Creditos", "bottom");
  } else {
    tint(255, 255);
    fill(0);
    textAlign(550, width/2);
    textSize(17);
    text(estado, 270, 557);
  }
}

void mousePressed() {
  if (estado.equals("inicio") ) {
    if (dist(mouseX, mouseY, width/4, 550) <40 ) {
      resetValues();
      estado = "ventana";
    } else if ( dist(mouseX, mouseY, 3*width/4, 550) <40 ) {
      resetValues();
      estado = "creditos";
    }
  } else if (estado.equals("ventana") ) {
    administrarClic("ventanaCerrada", "ventanaAbierta", "bottom");  
  } else if (estado.equals("ventanaCerrada")) {
    administrarClic("jugandoCerrada", "durmiendoCerrada", "top");
  } else if (estado.equals("ventanaAbierta")) {
    administrarClic("jugandoAbierta", "durmiendoAbierta", "bottom");
  } else if (estado.equals("jugandoAbierta")) {
    if(screenNum == 3){
      administrarClic("volarSi", "volarNo", "bottom");
    } else {
      administrarNext();
    }
  } else if (estado.equals("volarSi")) {
    if(screenNum != 4){
      administrarNext();
    } else {
      mostrarOpciones = true;
    }
  } else if (estado.equals("ubicacionCorrecta")){
    if(screenNum == 1){
      administrarNext(); 
    } else if (screenNum == 2){
      if (dist(mouseX, mouseY, width/2, 65) <40 ) {
        estado = "inicio";
        resetValues();
      }
    }
  } else if (mostrarButton) {
    if (dist(mouseX, mouseY, width/2, 65) <40 ) {
      estado = "inicio";
      resetValues();
    }
  }
}

void keyTyped(){
  if(estado.equals("volarSi")){
    if (screenNum == 4){
      if (key == 'a'){
        estado = "ubicacionCorrecta";
        resetValues();
      } else if((key =='b') || (key == 'c')){
        estado = "ubicacionFalsa";
        resetValues();
      }
    }
  }
}
