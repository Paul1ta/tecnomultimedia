//                     TP  N5 - TECNO
//                     Paula   Mendes
//                     - Pulganator -
//                     9 3 5 4 6  / 1 
let adventura;

function setup() {
  createCanvas(600, 600);
  adventura = new Adventura();
  frameRate(30);
  for (let i = 0; i < 28; i = i+1) {
    adventura.imagenes.push(loadImage('assets/p'+i+'.PNG'));
  };
  adventura.arrow = loadImage('assets/arrow.PNG');
  //adventura.arrow.resize(150,150);
  adventura.juego = new Juego();
  adventura.juego.preload();
  
  adventura.screenNum = 1;

  font = loadFont('assets/KGTenThousandReasons.ttf');
  textFont(font);
  noStroke();
}

function draw() {
  //Código para árbol de opciones
  background(255);
  if (adventura.estado==("inicio")) {
    //Inicio
    adventura.mostrarMenuPrincipal();
  } else if (adventura.estado==("ventana")) {     
    adventura.imagenConTexto(adventura.imagenes[2], "¡Se corrio el rumor de que hay ladrones\nque trepan los techos!", "top");
    adventura.opciones("Cerrar la ventana", "Dejarla abierta", "bottom"); 
  } else if (adventura.estado==("ventanaCerrada")) {
    adventura.imagenConTexto(adventura.imagenes[3], "¡Que miedo! En serio ...\n ¿Trepan las techos?", "bottom" );
    adventura.opciones("Jugar con tus hermanos", "Dormir", "top");
  } else if (adventura.estado==("ventanaAbierta")) {
    adventura.imagenConTexto(adventura.imagenes[4], "Asi que ahora, que preferis hacer?", "top");
    adventura.opciones("Jugar con tus hermanos", "Dormir", "bottom");
  } else if (adventura.estado==("durmiendoCerrada")) {
    adventura.finalScreen(adventura.imagenes[7], "Como fuiste a dormir,\n Peter ni siquiera intenta\n abrir tu ventana", "bottom");  
  } else if (adventura.estado==("jugandoCerrada")) {
    adventura.finalScreen(adventura.imagenes[6], "Al haber cerrado la ventana,\n ¡Peter no puede entrar!", "bottom");
  } else if (adventura.estado==("durmiendoAbierta")) {
    adventura.finalScreen(adventura.imagenes[8], "Como fuiste a dormir,\n a pesar de que la ventana este abierta,\n a Peter no le llama la atencion", "top");
  } else if (adventura.estado==("jugandoAbierta")) {
    let display1 = (adventura.screenNum == 1);
    let display2 = (adventura.screenNum == 2);
    let display3 = (adventura.screenNum == 3);
    if(display1){
      adventura.imagenConNext(adventura.imagenes[5], "Como dejaste la ventana abierta...", "top");
    } else if(display2){
      adventura.imagenConNext(adventura.imagenes[9], "¡Peter puede entrar!\nY te pregunta a vos y a tus hermanos...", "top");
    } else if(display3){
      adventura.imagenConTexto(adventura.imagenes[9], "¿Les gustaria volar?", "top");
      adventura.opciones("Si", "No", "bottom");
    }
  } else if (adventura.estado==("volarNo")) {
    adventura.finalScreen(adventura.imagenes[8], "Peter les dice que el miedo es para adultos y se va", "top");
  } else if (adventura.estado==("volarSi")) {
    let display1 = !adventura.slideShowOver;
    let display2 = adventura.slideShowOver && (adventura.screenNum == 1);
    let display3 = (adventura.screenNum == 2);
    let display4 = (adventura.screenNum == 3) && !adventura.slideShowOver2;
    if(display1){
      let slideShowImagenes = [adventura.imagenes[10], adventura.imagenes[11], adventura.imagenes[12]];
      adventura.slideShow(slideShowImagenes, 15, 1);
    } else if (display2){
      adventura.imagenConNext(adventura.imagenes[13], "Peter les ensena a volar,\n les presenta a Tinkerbell y\nles explica la ubicacion de Nunca Jamas.", "bottom");
    } else if (display3){
      adventura.imagenConNext(adventura.imagenes[14], "La ubicacion es:\n segunda estralla a la derecha\ny derecho hasta la manana.", "top");
    } else if (display4){
        let slideShowImagenes = [adventura.imagenes[15], adventura.imagenes[16], adventura.imagenes[17]];
        adventura.slideShow(slideShowImagenes, 45, 2);    
    } else {
      adventura.screenNum = 4;
        adventura.imagenConTexto(adventura.imagenes[17], "¿Hacia donde vas?", "top");
        adventura.opcionesDirection();
    }
  } else if (adventura.estado==("ubicacionFalsa")) {
    let display1 = !adventura.slideShowOver;
    if (display1){
        let slideShowImagenes = [adventura.imagenes[19], adventura.imagenes[20]];
        adventura.slideShow(slideShowImagenes, 45, 1);
    } else {
      adventura.finalScreen(adventura.imagenes[20], "Al parecer... ese no era el camino", "bottom");
    }
  } else if(adventura.estado==("ubicacionCorrecta")){
    let display1 = (adventura.screenNum == 1);
    let display2 = !adventura.juego.gameOver && (adventura.screenNum == 2);
    //let display3 = slideShowOver;
     if(display1){
      adventura.imagenConNext(adventura.imagenes[18], "La ubicacion era correcta,\n pero hay una emboscada !", "bottom");
     } else if(display2){        // continúa (gameOver), si es que sí, se ejecutan
        background(adventura.juego.fondo);       // las imágenes de fondo, se llama a los  métodos
        adventura.juego.actualizar();      // actualizar y  mostrar, se  muestra  el puntaje,
        adventura.juego.mostrar();         // el título y la  imágen del  barco que  dispara.
        adventura.mostrarPuntos();
        image(adventura.juego.barco, 100, 180);
        fill(0);
        textSize(20);
        textAlign(CENTER);
        text("Pulga-nator", width / 2, 40);
     } else {
      adventura.estado = "victoria"
     }
  } else if (adventura.estado == "victoria"){
    let slideShowImagenes = [adventura.imagenes[20], adventura.imagenes[21], adventura.imagenes[23]];
    adventura.slideShow(slideShowImagenes, 45, 1);
    if (adventura.slideShowOver){
      adventura.finalScreen(adventura.imagenes[23], "A pesar de todos los problemas, \nterminas conociendo a los amigos de Peter", "top");
    }
  } else if(adventura.estado==("creditos")){
    adventura.finalScreen(adventura.imagenes[1], "Creditos", "bottom");
  } else {
    tint(255, 255);
    fill(0);
    textAlign(550, width/2);
    textSize(17);
    text(adventura.estado, 270, 557);
  }
}

function mousePressed(){
  if (adventura.estado==("inicio") ) {
    if (dist(mouseX, mouseY, width/4, 550) <40 ) {
      adventura.resetValues();
        adventura.estado = "ventana";
    } else if ( dist(mouseX, mouseY, 3*width/4, 550) <40 ) {
      adventura.resetValues();
        adventura.estado = "creditos";
    }
  } else if (adventura.estado==("ventana") ) {
    adventura.administrarClic("ventanaCerrada", "ventanaAbierta", "bottom");  
  } else if (adventura.estado==("ventanaCerrada")) {
    adventura.administrarClic("jugandoCerrada", "durmiendoCerrada", "top");
  } else if (adventura.estado==("ventanaAbierta")) {
    adventura.administrarClic("jugandoAbierta", "durmiendoAbierta", "bottom");
  } else if (adventura.estado==("jugandoAbierta")) {
    if(adventura.screenNum == 3){
      adventura.administrarClic("volarSi", "volarNo", "bottom");
    } else {
      adventura.administrarNext();
    }
  } else if (adventura.estado==("volarSi")) {
    if(adventura.screenNum != 4){
      adventura.administrarNext();
    } else {
      adventura.mostrarOpciones = true;
    }
  } else if (adventura.estado==("ubicacionCorrecta")){
    if(adventura.screenNum == 1){
      adventura.administrarNext(); 
    } else if (adventura.screenNum == 2){
        if (dist(mouseX, mouseY, width/2, 65) <40 ) {
          adventura.estado = "inicio";
          adventura.resetValues();
        }
    }
  } else if (adventura.mostrarButton) {
    if (dist(mouseX, mouseY, width/2, 65) <40 ) {
      adventura.estado = "inicio";
      adventura.resetValues();
    }
  }
}

function mouseClicked() { 
  if (!adventura.gameOver && adventura.juego.puntos < adventura.juego.maxPuntos && adventura.estado == "ubicacionCorrecta") {
    adventura.trayectoriaX = [width / 2];
    adventura.trayectoriaY = [height - 10];
    adventura.juego.dispararProyectil(mouseX, mouseY);
  }
}

function keyTyped(){
  if(adventura.estado==("volarSi")){
  if (adventura.screenNum == 4){
      if (key == 'a'){
      adventura.estado = "ubicacionCorrecta";
      adventura.resetValues();
      } else if((key =='b') || (key == 'c')){
      adventura.estado = "ubicacionFalsa";
      adventura.resetValues();
      }
  }
  }
}
