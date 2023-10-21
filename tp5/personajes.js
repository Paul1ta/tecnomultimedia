class Personaje {
  constructor(x, y, velocidad) {
    this.x = x;
    this.y = y;
    this.velocidad = velocidad;
    this.tamano = 200;
  }

  mover() {
    this.x += this.velocidad;
    if (this.x > width) {
      this.x = 0;
    }
  }

  mostrar() {
    fill(0, 255, 0);
    image(personaje, this.x, this.y, this.tamano, this.tamano);
  }
}
