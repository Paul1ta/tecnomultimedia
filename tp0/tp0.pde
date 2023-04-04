//Preparamos la imagen que luego vamos a insertar

PImage imagen;
void setup() {
  imagen = loadImage("Data/Foto.jpeg");
  size (800, 400);
  background (127, 179, 213);
}
void draw() {

  //Seccionamos el pelo en dos módulos distintos para crear profundidad: Back y Front

  //Back hair
  stroke(53, 5, 99);
  fill(152, 46, 140);
  ellipse(110, 210, 200, 200);
  ellipse(290, 210, 200, 200);
  ellipse(100, 310, 200, 200);
  ellipse(300, 300, 200, 200);
  ellipse(100, 450, 200, 200);
  ellipse(300, 450, 200, 200);
  ellipse(300, 400, 150, 400);
  ellipse(100, 400, 150, 400);
  ellipse(100, 200, 150, 350);
  ellipse(300, 200, 150, 350);
  ellipse(200, 200, 300, 400);
  ellipse(200, 200, 300, 400);

  //Neck
  stroke(94, 34, 70);
  fill(234, 137, 154);
  rect(150, 350, 115, 80);
  fill(180, 100, 158);
  rect(150, 280, 115, 80);

  //Colocamos la foto en el lado derecho de la ventana

  image (imagen, 400, 0, 400, 400);

  //Face
  stroke(94, 34, 70);
  fill(234, 137, 154);
  ellipse(200, 200, 249, 310);

  //Colocamos detalles como rubor, pecas y pestañas

  //Nose & blush
  stroke(178, 61, 1);
  fill(255, 86, 72);
  ellipse(200, 250, 50, 40);
  stroke(156, 25, 136);
  fill(231, 105, 155);
  ellipse(290, 215, 50, 30);
  ellipse(110, 215, 50, 30);

  //Freckles
  noStroke();
  fill(180, 115, 115);
  ellipse(180, 180, 3, 5);
  ellipse(120, 240, 5, 2);
  ellipse(230, 230, 5, 5);
  ellipse(280, 240, 5, 5);
  ellipse(220, 200, 2, 5);
  ellipse(120, 190, 2, 5);
  ellipse(100, 200, 5, 3);
  ellipse(190, 150, 5, 5);
  ellipse(280, 120, 2, 5);
  ellipse(280, 290, 3, 5);
  ellipse(140, 250, 5, 2);
  ellipse(170, 250, 2, 5);
  ellipse(270, 250, 2, 5);
  ellipse(190, 220, 3, 2);
  ellipse(180, 210, 2, 5);
  ellipse(180, 260, 4, 2);


  //Eyelashes muy malas
  stroke(0);
  strokeWeight(2);  // Thicker
  line(250, 200, 300, 190);
  line(150, 200, 60, 190);


  //Creamos los ojos haciendo ellipses para las tres partes distintas, la parte blanca primero,
  //luego la parte negra, y por último los reflejos de la luz.

  //Eyes
  stroke(0);
  strokeWeight(1);  // Normal
  fill(255, 255, 255); // White back eye
  ellipse(120, 185, 40, 45);//White left eye
  ellipse(270, 185, 40, 45);//White right eye
  fill(0, 0, 0); // Black eye
  ellipse(125, 183, 40, 42);// Left eye
  ellipse(275, 183, 40, 42);// Right eye
  fill(255, 255, 255); // Shine
  ellipse(130, 170, 10, 10); // Left
  ellipse(280, 170, 10, 10); // Right

  //Eyebrows
  stroke(55, 25, 57);
  strokeWeight(5);
  line(100, 150, 150, 150);
  line(250, 150, 300, 150);


  //Front Hair
  strokeWeight(1);  // normal
  fill(152, 46, 140);
  stroke(53, 5, 99);
  ellipse(340, 200, 50, 200);
  ellipse(70, 190, 50, 200);
  ellipse(100, 100, 50, 140);
  ellipse(350, 150, 50, 120);
  ellipse(70, 150, 50, 120);
  ellipse(120, 90, 50, 130);
  ellipse(320, 100, 50, 120);
  ellipse(150, 80, 200, 130);
  ellipse(260, 80, 200, 120);
  ellipse(200, 80, 50, 140);
  ellipse(100, 100, 50, 120);
  ellipse(320, 100, 50, 140);
  ellipse(270, 90, 50, 140);
  ellipse(340, 200, 50, 200);
  ellipse(320, 120, 50, 120);

  //Mouth
  stroke(40, 22, 41);
  strokeWeight(5);  // Thicker
  line(200, 311, 230, 300);
  line(170, 300, 200, 311);

  //Ponemos ropita!

  //Clothes
  strokeWeight(1);
  fill(109, 94, 133);
  //T-shirt
  rect(50, 390, 310, 200, 50);
  //T-shirt neck
  rect(110, 370, 190, 150, 50);
}
