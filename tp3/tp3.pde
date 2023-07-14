//Variable tipo contador
int cuentaFotograma = 0;
int cuentaHeight = 0;
//Variable PImage para imprimir las imagenes
PImage[] imagenes = new PImage[28];
//Variable de tipografía
PFont font;
//Declaración con asignación
String estado = "inicio";
float transparencia = 255;
boolean mostrarOpciones = false;
boolean mostrarButton = false;

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
  textSize(30);
  if (position.equals("top")) {
    text(texto, width/2, 50);
  }
  if (position.equals("bottom")) {
    text(texto, width/2, 507);
  }
}

//Variable que declara los valores de los detalles como los textos

void opciones(String opcion1, String opcion2, String position) {
  if (mostrarOpciones) {
    fill(177, 120, 128);
    rectMode(CENTER);
    if (position.equals("top")) {
      rect(width/2, 50, 350, 40);
      fill(249);
      textSize(30);
      text(opcion1, width/2, 60);
      fill(177, 120, 128);
      rect(width/2, 100, 350, 40);
      fill(249);
      textSize(30);
      text(opcion2, width/2, 110);
    } else if (position.equals("bottom")) {
      rect(width/2, 507, 350, 40);
      fill(249);
      textSize(30);
      text(opcion1, width/2, 517);
      fill(177, 120, 128);
      rect(width/2, 557, 350, 40);
      fill(249);
      textSize(30);
      text(opcion2, width/2, 567);
    }
  }
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
      cuentaFotograma = 0;
      cuentaHeight = 0;
      mostrarOpciones = false;
      transparencia = 255;
      mostrarButton = false;
    } else if (isInCenteredRectangle(width/2, y+50, 350, 40)) {
      estado = estado2;
      cuentaFotograma = 0;
      cuentaHeight = 0;
      mostrarOpciones = false;
      transparencia = 255;
      mostrarButton = false;
    }
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
  textSize(23);
  text("Jugar", width/4, 557);
  fill(177, 120, 128);
  ellipse(3*width/4, 550, 105, 80);
  fill(249);
  textSize(23);
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

void finalScreen(PImage imagen, String text) {
  tint(255, 255);
  if (cuentaFotograma < 120) {
    image(imagen, 0, 0);
    textAlign(CENTER);
    fill(249);
    textSize(23);
    text(text, width/2, 557);
  } else {
    image(imagen, 0, -(cuentaFotograma - 120));
    textAlign(CENTER);
    fill(249);
    textSize(23);
    int newheight = height-(cuentaFotograma - 120);
    if (newheight > 0) {
      image(imagenes[26], 0, newheight);
      text("Historia : Peter Pan - James Matthew Barrie\n\n\nCódigo : Bastien German y Paula Mendes\n\n\nDibujos : Paula Mendes\n\n\nLegajo : 93546/1\n\n\nComision : 3", width/2, height/6+newheight);
      cuentaFotograma = cuentaFotograma + 5;
    } else {
      if (cuentaHeight > 120) {
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
      text("Historia : Peter Pan - James Matthew Barrie\n\n\nCódigo : Bastien German y Paula Mendes\n\n\nDibujos : Paula Mendes\n\n\nLegajo : 93546/1\n\n\nComision : 3", width/2, height/6);
      cuentaHeight++;
      if (mostrarButton) {
        fill(177, 120, 128);
        ellipse(width/2, 65, 105, 80);
        fill(249);
        textSize(23);
        text("Reiniciar", width/2, 75);
      }
    }
  }
  cuentaFotograma++;
}

void setup () {

  size( 600, 600);

  frameRate(30);
  for (int i = 0; i < imagenes.length; i = i+1) {
    imagenes[i] = loadImage("p"+i+".PNG");
  };

  font = createFont("crayon.ttf", 100);
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
    imagenConTexto(imagenes[4], "TEXT", "bottom");
    opciones("Jugar con tus hermanos", "Dormir", "top");
  } else if (estado.equals("durmiendoCerrada")) {
    finalScreen(imagenes[7], "ZZZZZZZZZZZZZZZZZZ");  
  } else {
    tint(255, 255);
    fill(0);
    textAlign(550, width/2);
    textSize(23);
    text(estado, 270, 557);
  }
}

void mousePressed() {
  if (estado.equals("inicio") ) {
    if (dist(mouseX, mouseY, width/4, 550) <40 ) {
      estado = "ventana";
      cuentaFotograma = 0;
    } else if ( dist(mouseX, mouseY, 3*width/4, 550) <40 ) {
      estado = "creditos";
      cuentaFotograma = 0;
    }
  } else if (estado.equals("ventana") ) { 
    administrarClic("ventanaCerrada", "ventanaAbierta", "bottom");  
  } else if (estado.equals("ventanaCerrada")) {
    administrarClic("jugandoCerrada", "durmiendoCerrada", "top");
  } else if (estado.equals("ventanaAbierta")) {
    administrarClic("jugandoAbierta", "durmiendoAbierta", "top");
  } else if (mostrarButton) {
    if (dist(mouseX, mouseY, width/2, 65) <40 ) {
      estado = "inicio";
      cuentaFotograma = 0;
      transparencia = 255;
      mostrarButton = false;
      cuentaHeight = 0;
    }
  }
}

//First narration: Inicio
//La familia de los Darling, vivia en Inglaterra, ellos eran una familia muy unida, conformada por Wendy, John, Michael
//y sus padres. Pero ellos, estaban un poco preocupados por el rumor que rondaba la ciudad... Se decia, que ladrones habian inventado una
//nueva forma de hurtar pertenencias, y era nada mas ni nada menos que...
//¡Trepando los techos!

//Second narration: If you decided to play with your brothers and leave the window open as well
//Como dejaste la ventana abierta ¡Peter puede entrar! 
//Y te pregunta a vos ya  tus hermanos... ¿Les gustaria volar?

//Third narration: If you closed the window and you sleep or play with your brothers
//Al haber cerrado la ventana ¡Peter no puede entrar!

//Fourth narration: If you say you wouldn't like to fly
//Peter les dice que el miedo es para adultos y se va

//Fifth narration: If you say you would like to fly
//Peter les enseña a volar, les presenta a Tinkerbell, y les explica la ubicación de 
//Nunca Jamas. La ubicación es: segunda estrella a la derecha y derecho hasta la mañana.

//Sixth narration: If you go to the right direction
//La ubicacion es correcta, y avistan Nunca Jamas.
//Conociendo así al aterrizar, los amigos de Peter.
