//                     TP  N5 - TECNO
//                     Paula   Mendes
//                     - Pulganator -
//                     9 3 5 4 6  / 1 


let juego;
let trayectoriaX = [];
let trayectoriaY = [];
let puntos = 0;
let maxPuntos = 5;
let reinicio = false;
let gameOver = false;
let fondo, escudo, personaje, barco;

  function preload(){
 
  fondo = loadImage('assets/fondo.PNG');
  escudo = loadImage('assets/escudo.PNG');
  barco = loadImage('assets/barco.PNG');
  personaje = loadImage('assets/personaje.PNG');
 
}


function setup() {
  createCanvas(600, 600);
  juego = new Juego();
  crearBotonReinicio();
  
}
function draw() {
  if (!gameOver) {
    background(fondo);
    juego.actualizar();
    juego.mostrar();
    mostrarPuntos();
    image(barco, 100, 180);
    
    fill(0);
    textSize(20);
    textAlign(CENTER);
    text("Pulga-nator", width / 2, 40);
  }
}

function mouseClicked() {
  if (!gameOver && puntos < maxPuntos) {
    trayectoriaX = [width / 2];
    trayectoriaY = [height - 10];
    juego.dispararProyectil(mouseX, mouseY);
  }
}

function mostrarPuntos() {
  fill(0);
  textSize(15);
  text("Puntos: " + puntos, 50, 30);

  if (puntos >= maxPuntos) {
    fill(0, 255, 0);
    text("¡Genial, los empulgaste!", width / 2 , height / 2);
    reinicio = true;
  }
}

function crearBotonReinicio() {
  const reiniciarButton = createButton("Reiniciar");
  reiniciarButton.position(20, height - 50);
  reiniciarButton.mousePressed(reiniciarJuego);
  reiniciarButton.hide();
}

function reiniciarJuego() {
  juego = new Juego();
  puntos = 0;
  reinicio = false;
  gameOver = false;
  loop(); // Continuar el loop de dibujo
}
