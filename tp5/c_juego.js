class Juego {
  constructor() {           // Constructor   de  clase.
    this.personajes = [];   // Todas las  matrices son
    this.escudos = [];      // inicializadas  vacías y
    this.proyectiles = [];  // almacenan a los objetos.
    this.crearPersonajes();
    this.crearEscudos();
  }

  crearPersonajes() {     // Se utiliza para crear los personajes.
    for (let i = 0; i < 5; i++) {
      this.personajes.push(new Personaje(-120, random(0, height * 0.4), random(1, 3)));
    }
  }
  crearEscudos() {        // Se utiliza  para  crear  los escudos.
    for (let i = 0; i < 5; i++) {
      this.escudos.push(new Escudo(random(-200, 120), random(height / 4)));
    }
  }

  dispararProyectil(x, y) {  // Se utiliza para disparar los proyectiles.
    const proyectil = new Proyectil(width / 2, height - 10, x, y);
    this.proyectiles.push(proyectil);
  }

  actualizar() { // Se actualizan todos los elementos del juego.
    for (let personaje of this.personajes) {
      personaje.mover();
    }

    for (let escudo of this.escudos) {
      escudo.mover();
    }

    for (let proyectil of this.proyectiles) {
      proyectil.mover();
      if (proyectil.y < 0) {
        this.proyectiles.splice(this.proyectiles.indexOf(proyectil), 1);
      }
    }

    this.detectarColisiones();
  }

  detectarColisiones() {   // Verifica si ha habido colisiones.
    for (let i = this.proyectiles.length - 1; i >= 0; i--) {
      for (let j = this.personajes.length - 1; j >= 0; j--) {
        if (this.proyectiles[i] && this.personajes[j] && this.proyectiles[i].colisiona(this.personajes[j])) {
          this.proyectiles.splice(i, 1);
          this.personajes.splice(j, 1);
          puntos++;
          break;
        }
      }

      for (let j = this.escudos.length - 1; j >= 0; j--) {
        if (this.proyectiles[i] && this.escudos[j] && this.proyectiles[i].colisiona(this.escudos[j])) {
          this.proyectiles.splice(i, 1);
          break;
        }
      }
    }

    if (puntos >= maxPuntos) {      // Pregunta si se han alcanzado
      gameOver = true;              // la   mayoría   de    puntos.
      noLoop();
      document.querySelector("button").style.display = "block"; // Mostrar el botón de reinicio
    }
  }

  mostrar() {            // Se muestran todos los elementos de juego en el Canvas.
    for (let personaje of this.personajes) {
      personaje.mostrar();
    }

    for (let escudo of this.escudos) {
      escudo.mostrar();
    }

    for (let proyectil of this.proyectiles) {
      proyectil.mostrar();
    }
  }
}
