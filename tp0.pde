//Iniciamos la variable PImage para poder
//insertar la foto más tarde
//También usamos void setup y draw
PImage imagen;
void setup() {
  imagen = loadImage("data/foto.jpeg");
  size (800, 400);
}
void draw()
{
  //Ponemos un color base como fondo

  background (87, 114, 71);

  //Usamos bezier para hacer un fondo
  //colorido como el de la imagen de referencia

  //Fondo

  fill(50, 90, 49);
  bezier(-326, 535, -46, 455, 93, -266, 71, -21);
  bezier(643, 46, -46, 520, 774, 22, 129, 59);
  bezier(112, 755, 544, 289, 21, 16, 106, -31);

  fill(46, 123, 42);
  bezier(444, -82, 322, 275, 703, 22, 129, -11);
  bezier(833, 489, -327, 573, 819, 101, 143, 59);
  bezier(-23, -443, -731, 842, 774, -2, 16, 128);

  fill(114, 170, 101);
  bezier(418, 431, 274, 289, 93, 22, 216, 59);
  bezier(165, 91, 175, 658, 285, -19, 517, 211);
  bezier(-141, 115, -46, 289, 37, 22, 129, 221);

  fill(57, 84, 56);
  bezier(643, 494, -7, 520, 774, 22, 129, 59);
  bezier(60, -267, -481, 520, 353, 22, -61, -37);
  bezier(1123, -435, 83, 421, 489, 22, 242, 285);

  //Iniciamos el pelo

  //Parte atrás pelo
  fill(109, 50, 103);
  rect(64, 10, 270, 484, 500);
  bezier(165, 431, -46, 289, 93, 22, 129, 59);
  bezier(312, 146, 314, 402, 533, 324, 184, 283);
  bezier(193, 336, 380, 395, 407, 66, 202, 34);
  bezier(165, 431, 19, 289, 93, 22, 129, 59);
  //Brillo pelo atrás
  fill(135, 69, 130);
  bezier(258, 146, 327, 508, 314, 171, 193, 33);
  bezier(161, 61, 345, 413, 477, 277, 184, 283);
  //Sombra pelo atrás
  fill(77, 37, 75);
  bezier(71, 191, 91, 598, -9, -13, 205, 31);
  bezier(92, 247, 19, 35, 477, 56, 90, 110);

  //Hacemos la ropa y el cuello

  //Remera
  fill(83, 90, 142);
  rect(11, 325, 372, 200, 99);
  //Cuello superior
  fill( 211, 161, 161);
  ellipse( 199, 288, 87, 166);
  bezier(111, 311, 239, 352, 136, -37, 193, 371);
  bezier(289, 341, 64, 265, 209, 102, 211, 368);
  //Cuello remera
  fill(61, 70, 125);
  bezier(301, 324, 348, 498, -169, 135, 201, 378);
  bezier(232, 369, 376, 350, 291, 305, 202, 377);
  //Sombra cuello
  fill( 171, 126, 126);
  ellipse( 200, 190, 147, 263);
  //Pelo sobre cuello
  noStroke();
  fill(105, 46, 100);
  //Pelo lado derecho
  bezier(368, 337, 303, 357, 223, 60, 239, 387);
  //Pelo lado izquierdo
  bezier(45, 335, 197, 364, 205, 170, 88, 303);

  //Hacemos y detallamos la cara :)

  //Cara
  fill( 218, 170, 169);
  ellipse( 200, 161, 197, 263);
  //Cejas
  noStroke();
  fill(43, 18, 41);
  //Ceja izquierda
  bezier(184, 127, 175, 122, 128, 117, 119, 128);
  //Ceja derecha
  bezier(286, 122, 256, 113, 212, 123, 221, 128);
  //Sombra párpado izquierdo
  fill( 171, 123, 123);
  bezier(175, 155, 186, 131, 128, 125, 119, 155);
  //Sombra párpado derecho
  bezier(280, 156, 263, 125, 243, 126, 225, 147);
  //Sombras ojo
  noStroke();
  fill( 214, 166, 166);
  //Izquierdas
  ellipse( 152, 159, 53, 45);
  //Derechas
  ellipse( 248, 159, 53, 45);
  //Ojera
  stroke(214, 165, 165);
  fill( 191, 141, 141);
  //Izquierda
  ellipse( 150, 161, 51, 31);
  //Derecha
  ellipse( 250, 161, 51, 31);
  //Párpado
  stroke(184, 133, 133);
  fill( 214, 166, 166);
  //Izquierdo
  ellipse( 150, 153, 51, 31);
  //Derecho
  ellipse( 250, 153, 51, 31);
  //Esclera
  noStroke();
  fill( 237, 231, 203);
  //Izquierdo
  ellipse( 150, 157, 53, 26);
  //Derecho
  ellipse( 250, 157, 50, 26);
  //Iris
  noStroke();
  fill( 30, 17, 17);
  //Izquierdo
  ellipse( 157, 152, 25, 25);
  //Derecho
  ellipse( 250, 152, 25, 25);
  //Pestañas izquierdas
  bezier( 109, 156, 201, 132, 136, 132, 122, 157);
  //Pestañas derechas
  bezier( 288, 156, 261, 166, 289, 138, 241, 141);
  //Lagrimal izquierdo
  bezier( 168, 149, 183, 177, 180, 143, 154, 138);
  //Lagrimal derecho
  bezier( 254, 153, 266, 104, 174, 202, 258, 137);
  //Brillo izquierdo
  fill( 225, 255, 255);
  ellipse( 152, 152, 5, 2);
  //Brillo derecho
  ellipse( 242, 152, 5, 2);
  //Flequillo
  noStroke();
  fill(109, 50, 103);
  bezier( 190, 22, 218, -41, 178, 202, 161, 114);
  bezier( 203, 30, 213, -4, 163, 56, 299, 134);
  bezier( 194, 25, 94, 67, 122, 198, 131, 117);
  bezier( 190, 19, 218, -26, 435, 226, 269, 114);
  fill(135, 69, 130);
  bezier( 290, 45, 340, 123, 333, 168, 320, 140);
  fill(109, 50, 103);
  bezier( 220, 36, 246, -27, 257, 216, 266, 112);
  fill(117, 45, 111);
  bezier( 206, 35, 241, 15, 253, 203, 346, 143);
  bezier( 34, 201, 286, -193, 172, 150, 51, 183);
  bezier( 220, 53, 239, 19, 237, 130, 229, 134);
  bezier( 220, 36, 246, -27, 257, 216, 266, 112);
  //Luces flequillo
  fill(135, 69, 130);
  bezier( 207, 30, 246, 108, 257, 87, 266, 126);
  bezier( 220, 36, 293, 110, 247, 99, 344, 146);
  //Sombras flequillo
  fill(77, 37, 75);
  bezier( 159, 25, 101, 147, 104, 129, 77, 151);
  bezier( 195, 31, 214, 9, 153, 74, 171, 127);
  //Tabique
  fill( 204, 161, 161);
  bezier(188, 208, 164, 259, 227, 183, 184, 127);
  //Sombra nariz
  fill( 189, 143, 143);
  ellipse(200, 214, 41, 25);
  //Luces nariz
  fill( 208, 164, 163);
  ellipse(200, 211, 35, 21);
  fill( 217, 178, 178);
  ellipse(206, 209, 15, 8);
  //Nostriles
  fill( 146, 111, 111);
  ellipse(190, 219, 10, 5);
  ellipse(212, 219, 10, 5);
  //Pómulos sombra
  fill( 224, 180, 180);
  bezier(298, 161, 291, 162, 322, 201, 238, 281);
  //Pómulos luz
  fill( 206, 160, 160);
  bezier(105, 172, 95, 240, 227, 356, 117, 188);
  //Labios
  fill( 186, 98, 98);
  ellipse(194, 247, 19, 13);
  ellipse(207, 247, 19, 13);
  bezier(232, 252, 204, 267, 192, 267, 168, 252);
  fill( 152, 64, 64);
  bezier(225, 254, 207, 213, 147, 263, 174, 247);
  bezier(163, 249, 193, 238, 254, 240, 176, 255);
  bezier(237, 253, 225, 252, 206, 219, 194, 252);

  //¡A pedido del profe, el piercing! =)

  //Septum
  fill(110, 110, 128);
  bezier(190, 218, 201, 243, 202, 218, 201, 229);
  bezier(212, 218, 219, 212, 209, 237, 210, 228);
  ellipse(199, 227, 5, 4);
  ellipse(208, 227, 5, 4);

  //Un poco más de color...

  //Rubor
  fill(220, 155, 155);
  ellipse(125, 188, 39, 30);
  ellipse(273, 188, 39, 30);


  //Insertamos la imagen de referencia

  image (imagen, 400, 0, 400, 400);

  //Utilizamos el bezier para añadir unos detalles a la remera y...
  //¡Tah-dah!

  //Detalle remera
  fill(255, 255, 255);
  bezier(84, 390, 262, 427, -101, 328, 204, 389);
  bezier(278, 383, 165, 557, 224, 370, 307, 377);
}

// Paula Mendes
// Comisión 3
// 93546/1
