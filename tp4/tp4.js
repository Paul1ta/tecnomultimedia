//                         TARTARIS – TECNO1 - C3
//                         Paula Mendes   93546/1
//                         URL : 

const windowWidth = 600;    // Constante para asignar el
const windowHeight = 600;   // tamaño de la ventana.

const rows = 6;             // Constante para asignar la cantidad
const cols = 10;            // de columnas y filas.

let rightDown = false;      // Variables booleanas para confirmar
let leftDown = false;       // qué teclas están siendo presionadas.
let alive = false;          // Variable booleana para chequear si el 
                            // sigue en proceso.

const brickWidth = Math.round(windowWidth / cols - 4);
const brickHeight = Math.round((windowHeight * 1 / 3) / rows - 10);

// ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ 

// Constantes para determinar la altura y anchura  de los "ladrillos" .

let bricks = []; // Arreglo para almacenar información sobre los ladrillos.
let score = 0;   // Arreglo para chequear los puntos que gana el jugador.

let paddle = { x:windowWidth / 2 - 50, y:windowHeight - 15, width: 100, height: 10 };

let ball = {x:paddle.x, y:paddle.y - 50, speedX:6,  speedY:6,  diameter:15  };

// ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ 

// Objectos representando la velocidad, posición y tamaño de la pelota y la barra.

const pinkishPurpleColors = ['#FFC0CB', '#FF69B4', '#FF1493', '#800080', '#DA70D6'];

// Arreglo para determinar los colores de los ladrillos. 

let brickHitSound;               // Arreglo para añadir
let winSound;                    // sonidos al ganar, perder,
let loseSound;                   // al golpear los ladrillos,
let bgmusic;                     // y la música de fondo.
let fondo;

let gameState = 'start';        

let titleColor;                // Contiene el color actual del título.

function preload() {           // Función load para cargar los sonidos.
  
  brickHitSound = loadSound('assets/brickhit.mp3');
  winSound = loadSound('assets/win.mp3');
  loseSound = loadSound('assets/lose.mp3');
  bgmusic = loadSound('assets/bgmusic.mp3');
}

function setup() {
  createCanvas(600, 600); // Inicializa la pantalla con 600x600 pixeles.
  generateBricks();       // Genera los ladrillos.
  fondo = loadImage('assets/fondo.JPG');    // Se setea la imágen de fondo.
  titleColor = random(pinkishPurpleColors); // Inicializa la función titleColor

}

function generateBricks() {               // Genera a los ladrillos especificando
  for (let i = 0; i < rows; i++) {        // las posiciones, sus dimensiones y 
    for (let j = 0; j < cols; j++) {      // sus colores.
      let brickData = {
        x: j * (brickWidth + 2) + 10,
        y: i * (brickHeight + 2) + 30,
        width: brickWidth,
        height: brickHeight,
        color: random(pinkishPurpleColors)
      };
      bricks.push(brickData);
    }
  }
}

function drawBricks() {         // Dibuja los ladrillos en la pantalla basado
  bricks.forEach((brick) => {   // en los datos del arreglo "bricks".
    fill(brick.color);
    rect(brick.x, brick.y, brick.width, brick.height);
    noStroke();
  });
}

function draw() {             // Se ejecuta la función draw, encaargándose de
  background('black');        // dibujar los elementos del juego, ladrillos,
  image(fondo, 0, 0);         // barra, pelota y puntuación.
  fondo.resize(600, 600);
  if (gameState === 'start') {
    drawStartScreen();
  } else if (gameState === 'instructions') {
    displayInstructions();
  } else if (gameState === 'game') {
    if (alive) {
      drawBricks();
      drawPaddle();
      drawBall();
      displayScore();
    } else {
      endScreen(score > 0 ? '¡Al menos, lo intentaste!' : 'Game over');
    }
  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    rightDown = true;
  }
  if (keyCode === LEFT_ARROW) {
    leftDown = true;
  }
  if (keyCode === 32) { 
    if (gameState === 'start') {
      gameState = 'instructions';
    } else if (gameState === 'instructions') {
      gameState = 'game';
      startGame();
    } else if (gameState === 'game' && !alive) {
      startGame();
    }
  }
}

// ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ 
// Estados para determinar qué página mostrar en la pantalla.

function drawStartScreen() {
  fill(titleColor);                         // Generar el color del título.
  textAlign(CENTER);
  textSize(38);
  text("Tartaris", windowWidth / 2, windowHeight / 2 - 50);
  text('Presiona espacio para comenzar', windowWidth / 2, windowHeight / 2 + 50);
  titleColor = random(pinkishPurpleColors); // Cambia el color del título
}                                           // aleatoriamente.

function displayInstructions() {    // Imprime la página de instrucciones.
  fill('white');
  textAlign(CENTER);
  textSize(28);
  text('Instrucciones', windowWidth / 2, windowHeight / 2 - 150);
  textSize(18);
  text('Usa las flechas izquierda y derecha para mover la barra.', windowWidth / 2, windowHeight / 2 - 100);
  text('Utiliza la barra para romper los ladrillos y ganar puntos.', windowWidth / 2, windowHeight / 2 - 70);
  text('Presiona espacio para comenzar.', windowWidth / 2, windowHeight / 2 + 50);
  text('¡Suerte!', windowWidth / 2, windowHeight / 2 + 80);
}

function startGame() {             // Inicializa el juego
  alive = true;                    // restableciendo 
  paddle.x = windowWidth / 2 - 50; // todas las variables
  ball.x = paddle.x;               // y generando nuevos
  ball.y = paddle.y - 50;          // ladrillos.
  ball.speedX = 8;
  ball.speedY = 8;
  bricks.splice(0, bricks.length);
  score = 0;
  generateBricks();
  bgmusic.setVolume(0.1);          // Inicializa la música 
  bgmusic.loop();                  // en loop en un volúmen
}                                  // específico.

function keyReleased() {
  if (keyCode === RIGHT_ARROW) {
    rightDown = false;
  }
  if (keyCode === LEFT_ARROW) {
    leftDown = false;
  }
}

function drawPaddle() {       // Función encargada de dibujar la barra.
  fill('cyan');
  rect(paddle.x, paddle.y, paddle.width, paddle.height);
  if (rightDown && paddle.x + paddle.width < windowWidth) {
    paddle.x += 10;
  }
  if (leftDown && paddle.x > 0) {
    paddle.x -= 10;
  }
}

function drawBall() {         // Función encargada de dibujar la pelota.
  fill('white');
  circle(ball.x, ball.y, ball.diameter);

  if (ball.y - ball.diameter / 2 <= 0) {
    ball.speedY = -ball.speedY;
  }

  if (ball.y + ball.diameter / 2 >= windowHeight) {
    alive = false;
  }
  if (ball.x - ball.diameter / 2 <= 0 || ball.x + ball.diameter / 2 >= windowWidth) {
    ball.speedX = -ball.speedX;
  }

  if (
    ball.y + ball.diameter / 2 >= paddle.y &&
    ball.y - ball.diameter / 2 <= paddle.y + paddle.height &&
    ball.x >= paddle.x &&
    ball.x <= paddle.x + paddle.width
  ) {
    ball.speedY = -ball.speedY;
    ball.y = paddle.y - ball.diameter / 2 - 1;
  }

  bricks.forEach((brick, index) => {
    if (ball.y - ball.diameter / 2 <= brick.y + brick.height && ball.x >= brick.x && ball.x <= brick.x + brick.width) {
      ball.speedY = -ball.speedY;
      bricks.splice(index, 1);
      score++;
      brickHitSound.play();
      if (bricks.length === 0) alive = false;
    }
  });

  ball.x += ball.speedX;
  ball.y += ball.speedY;
}

function displayScore() {         // Función encargada de dibujar el puntaje.
  fill('white');
  textAlign(CENTER);
  textSize(20);
  text(`Puntos: ${score}`, windowWidth / 2, 22);
}

function endScreen(message) {    // Función encargada de dibujar la pantalla final.
  fill('white');
  textAlign(CENTER);
  textSize(25);
  text(message, 300, 170);
  text('Presiona espacio para reiniciar', 300, 255);
  text(`Puntos: ${score}`, 300, 320);

  if (message === "Game over") {
    if (winSound.isPlaying()) {
      winSound.stop();
    }
    if (!loseSound.isPlaying()) {
      loseSound.play();
    }
  } else if (message === "¡Felicidades!") {
    if (loseSound.isPlaying()) {
      loseSound.stop();
    }
    if (!winSound.isPlaying()) {
      winSound.play();
    }
  }    // If else para determinar cuál es el mensaje que se muestra
}      // dependiendo de si se pierde o si se gana.
