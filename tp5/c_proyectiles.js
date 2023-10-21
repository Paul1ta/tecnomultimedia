class Proyectil {
  constructor(x, y, mouseX, mouseY) {  // Constructor de clase.
    this.x = x;
    this.y = y;                        // Se asignan valores  utilizados
    this.velX = (mouseX - this.x) / 40;// dentro de la clase 'proyectil'.
    this.velY = (mouseY - this.y) / 40;
    this.tamano = 10;
  }

  mover() {                // Define el movimiento
    this.x += this.velX;   // de  los  proyectiles.
    this.y += this.velY;
  }

  mostrar() {              // Define    cómo   y    dónde 
    fill(139, 69, 19);     // se muestran los proyectiles.
    ellipse(this.x, this.y-30, this.tamano, this.tamano);
  }

  colisiona(objeto) {     // Este método se utiliza para detectar 
                          // si   es   que  hubo   una  colisión.
    let distancia = dist(this.x, this.y, objeto.x, objeto.y);
    return distancia < this.tamano / 2 + objeto.tamano / 2;
  }
}
