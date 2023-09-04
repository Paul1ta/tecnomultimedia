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
let winSound;                    // sonidos al ganar, perder
let loseSound;                   // y al golpear los ladrillos.

function preload() {            // Función load para cargar los sonidos.

  brickHitSound = loadSound('asssets/brick-hit.mp3'); 
  winSound = loadSound('asssets/win.mp3'); 
  loseSound = loadSound('asssets/lose.mp3');
}
function setup() {        
  createCanvas(600, 600); // Inicializa la pantalla con 600x600 pixeles.
  generateBricks();       // Genera los ladrillos.
  displayStartScreen();   // Llama a "displayStartScreen" para mostrar 
}                         // la primer pantalla.

function generateBricks() {            // Genera a los ladrillos especificando
  for (let i = 0; i < rows; i++) {     // las posiciones, sus dimensiones y 
    for (let j = 0; j < cols; j++) {   // sus colores.
      let brickData = {
      x:  j * (brickWidth + 2) + 10,
      y: i * (brickHeight + 2) + 30,
      width:  brickWidth,
      height: brickHeight,
      color: random(pinkishPurpleColors)
    };
    bricks.push(brickData);
  }
}
}

function drawBricks() {           // Dibuja los ladrillos en la pantalla basado 
  bricks.forEach((brick) => {     // en los datos de el arreglo "bricks".
    fill(brick.color);
    rect(brick.x, brick.y, brick.width, brick.height);
    noStroke();  }
  );
}

function draw() {           // Se ejecuta la función draw, encargándose de
  background('black');      // dibujar los elementos del juego, ladrillos, barra,
                            // pelota y puntuación. 
  if (alive) {
    drawBricks();
    drawPaddle();
    drawBall();
    displayScore();
  } else {
    displayStartScreen();
  }
}


function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    rightDown = true;
  }
  if (keyCode === LEFT_ARROW) {
    leftDown = true;
  }
  if (keyCode === 32 && !alive) {
    startGame();
  }

function keyTyped() {
  if (key === ' ' && !alive) {
    startGame();
  }
}
}
// ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ 

// Manejan eventos de teclado, como presionar las teclas espacio, derecha o izquierda.

function displayStartScreen() {
  fill('white');
  textAlign(CENTER);
  textSize(38);
  text("Ataris", windowWidth / 2, windowHeight / 2 - 50);
  text('Presiona espacio \n para empezar', windowWidth / 2, windowHeight / 2 + 50);
}
// ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ 

// Muestra la pantalla de inicio con un mensaje para iniciar el juego.

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    rightDown = true;
  }
  if (keyCode === LEFT_ARROW) {
    leftDown = true;
  }
  if (keyCode === 32 && !alive) {
    startGame();
  }
}

function startGame() {                // Inicia el juego
  alive = true;                       // restableciendo 
  paddle.x = windowWidth / 2 - 50;    // todas las variables
  ball.x = paddle.x;                  // y generando nuevos
  ball.y = paddle.y - 50;             // ladrillos.
  ball.speedX = 6;
  ball.speedY = 6;
  bricks.splice(0, bricks.length);
  score = 0;
  generateBricks();
}



function keyReleased() {
  if (keyCode === RIGHT_ARROW) {
    rightDown = false;
  }
  if (keyCode === LEFT_ARROW) {
    leftDown = false;
  }
}

function drawPaddle() {        // Función encargada de dibujar la barra.
  fill('purple');
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
      if (bricks.length === 0) alive = false;
    }
  });

  ball.x += ball.speedX;
  ball.y += ball.speedY;
}

function displayScore() {          // Función para dibujar el puntaje.
  fill('white');
  textAlign(CENTER);
  textSize(20);
  text(`Puntos: ${score}`, windowWidth / 2, 22);
}

function endScreen(message) {     // Función para la pantalla del final.
  fill('white');
  textAlign(CENTER);
  textSize(38);
  text(message, 300, 170);
  text('Presiona espacio para resetear', 300, 255);
  text(`Puntos: ${score}`, 300, 280);
}
