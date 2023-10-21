class Escudo {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tamano = 160;
  }

  mover() {
    this.x += random(1, 3);
    if (this.x > width) {
      this.x = 0;
    }
  }

  mostrar() {
    fill(0, 0, 255);
    image(escudo, this.x, this.y, this.tamano, this.tamano);
  }
}
