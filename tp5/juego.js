class Juego {
  constructor() {
    this.personajes = [];
    this.escudos = [];
    this.proyectiles = [];
    this.crearPersonajes();
    this.crearEscudos();
  }

  crearPersonajes() {
    for (let i = 0; i < 5; i++) {
      // Set the initial 'y' position within the top 40% of the screen
      this.personajes.push(new Personaje(random(width), random(0, height * 0.4), random(1, 3)));
    }
  }
  crearEscudos() {
    for (let i = 0; i < 3; i++) {
      this.escudos.push(new Escudo(random(width), random(height / 4)));
    }
  }

  dispararProyectil(x, y) {
    const proyectil = new Proyectil(width / 2, height - 10, x, y);
    this.proyectiles.push(proyectil);
  }

  actualizar() {
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

  detectarColisiones() {
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

    if (puntos >= maxPuntos) {
      gameOver = true;
      noLoop(); // Detener el loop de dibujo
      document.querySelector("button").style.display = "block"; // Mostrar el botón de reinicio
    }
  }

  mostrar() {
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
