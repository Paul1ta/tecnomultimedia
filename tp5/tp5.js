//                     TP  N5 - TECNO
//                     Paula   Mendes
//                     - Pulganator -
//                     9 3 5 4 6  / 1


let juego;                   // Se declaran las variables  globales
let trayectoriaX = [];       // que son usadas a lo largo del juego.
let trayectoriaY = [];       //
let puntos = 0;              //
let maxPuntos = 5;           // Y junto a ellas se declaran también
let reinicio = false;        // las  imágenes  utilizadas  para  la
let gameOver = false;        // parte    estética     del     juego.

let fondo, escudo, personaje, barco;
let bgmusic;

let musicaIniciada = false;

function preload() {

  fondo = loadImage('assets/fondo.PNG');     // En la función preload
  escudo = loadImage('assets/escudo.PNG');   // cargamos las imágenes.
  barco = loadImage('assets/barco.PNG');
  personaje = loadImage('assets/personaje.PNG'); // Y el sonido que
  bgmusic = loadSound('assets/bgmusic.mp3');     // va en el  fondo.
}


function setup() {            // En la  función  setup se  genera el lienzo,
  createCanvas(600, 600);     // el juego y también se llama  a la  función
  juego = new Juego();        // crearBotonReinicio para generar  el  botón
  crearBotonReinicio();       // que nos da la opción de reiniciar el juego.
}

function mousePressed() {
  if (!musicaIniciada) {
    bgmusic.setVolume(0.05);
    bgmusic.loop();
    musicaIniciada = true;
  }
}

function draw() {            // En la función draw, se  pregunta si  el  juego
  if (!gameOver) {           // continúa (gameOver), si es que sí, se ejecutan
    background(fondo);       // las imágenes de fondo, se llama a los  métodos
    juego.actualizar();      // actualizar y  mostrar, se  muestra  el puntaje,
    juego.mostrar();         // el título y la  imágen del  barco que  dispara.
    mostrarPuntos();
    image(barco, 100, 180);
    fill(0);
    textSize(20);
    textAlign(CENTER);
    text("Pulga-nator", width / 2, 40);
  }
}

function mouseClicked() {                 // En la  función mouseClicked se
  if (!gameOver && puntos < maxPuntos) {  // habilita  el  disparo  de  los
    trayectoriaX = [width / 2];           // proyectiles si es que el juego
    trayectoriaY = [height - 10];         // todavía   no   ha    terminado.
    juego.dispararProyectil(mouseX, mouseY);
  }
}

function mostrarPuntos() {                  // La función mostrarPuntos, muestra
  fill(0);                                  // el puntaje en la esquina  superior
  textSize(15);                             // izquierda    de    la    pantalla.
  text("Puntos: " + puntos, 50, 30);

  if (puntos >= maxPuntos) {               // Si se llega a la cantidad máxima
    fill(0);                               // de puntos (5) se gana  el  juego.
    textSize(50);
    text("¡Genial, los empulgaste!", width / 2, height / 2);
    reinicio = true;
  }
}

function crearBotonReinicio() {    // Crea un botón de reinicio.
  const reiniciarButton = createButton("Reiniciar");
  reiniciarButton.position(20, height - 50);
  reiniciarButton.mousePressed(reiniciarJuego);
  reiniciarButton.hide();
}

function reiniciarJuego() { // Esta función se encarga   de   reiniciar
  juego = new Juego();      // el juego creando un nuevo objeto 'juego'
  puntos = 0;               // restableciendo  el   puntaje   obtenido.
  reinicio = false;
  gameOver = false;
  loop(); // Continuar el loop de dibujo
}
