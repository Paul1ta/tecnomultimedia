class Proyectil {
  constructor(x, y, mouseX, mouseY) {
    this.x = x;
    this.y = y;
    this.velX = (mouseX - this.x) / 40;
    this.velY = (mouseY - this.y) / 40;
    this.tamano = 10;
  }

  mover() {
    this.x += this.velX;
    this.y += this.velY;
  }

  mostrar() {
    fill(139, 69, 19);
    ellipse(this.x, this.y-30, this.tamano, this.tamano);
  }

  colisiona(objeto) {
    let distancia = dist(this.x, this.y, objeto.x, objeto.y);
    return distancia < this.tamano / 2 + objeto.tamano / 2;
  }
}
