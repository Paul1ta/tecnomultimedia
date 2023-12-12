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
      this.x = -120;
      this.y = random(0, height * 0.4);
      this.velocidad = random(1, 3);
    }
  }

  mostrar(personaje) {
    fill(0, 255, 0);
    image(personaje, this.x, this.y, this.tamano, this.tamano);
  }
}
