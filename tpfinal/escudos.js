class Escudo {
  constructor(x, y) {
    this.x = x;
    this.y = y+50;
    this.tamano = 160;
  }

  mover() {
    this.x += random(1, 3);
    if (this.x > width) {
      this.x = random(-200,-120);
      this.y = random(height/4);
    }
  }

  mostrar(escudo) {
    fill(0, 0, 255);
    image(escudo, this.x, this.y, this.tamano, this.tamano);
  }
}
