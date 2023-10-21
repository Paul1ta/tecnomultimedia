class Personaje {                 
  constructor(x, y, velocidad) {  // Constructor de clase.
    this.x = x;                   // Se   asignan  valores
    this.y = y;                   // utilizados dentro de 
    this.velocidad = velocidad;   // la clase  'personaje.'
    this.tamano = 200;
  }

  mover() {                   // Define el movimiento de los
    this.x += this.velocidad; // personajes  en  el  canvas.
    if (this.x > width) {
      this.x = 0;
    }
  }

  mostrar() {                // Se define cómo   y   dónde 
    fill(0, 0, 255);         // se muestran los personajes.
    image(personaje, this.x, this.y, this.tamano, this.tamano);
  }
}
