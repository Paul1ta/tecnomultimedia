class Escudo {       
  constructor(x, y) {     // Constructor de clase.
    this.x = x;           // Se   asignan  valores 
    this.y = y+50;        // utilizados  dentro de
    this.tamano = 180;    // la   clase  'escudo'.
  }
 
  mover() {                   // Controla el movimiento
    this.x += random(1, 3);   // de los 'escudos' en el
    if (this.x > width) {     // trayecto   del   juego.
      this.x = 0;
    }
  }

  mostrar() {                // Se define cómo y dónde 
    fill(0, 0, 255);         // se muestra  el  escudo.
    image(escudo, this.x, this.y, this.tamano, this.tamano);
  }
}
