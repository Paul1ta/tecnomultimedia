class Juego {
  constructor() {
    this.personajes = [];
    this.escudos = [];
    this.proyectiles = [];
    this.crearPersonajes();
    this.crearEscudos();
    this.puntos = 0;
    this.maxPuntos = 5;
    this.fondo, this.escudo, this.personaje, this.barco;
    this.gameOver = false;
  }

  preload(){
      this.fondo = loadImage('assets/fondo.PNG');
      this.escudo = loadImage('assets/escudo.PNG');
      this.barco = loadImage('assets/barco.PNG');
      this.personaje = loadImage('assets/personaje.PNG');
  }

  crearPersonajes() {
    for (let i = 0; i < 5; i++) {
      // Set the initial 'y' position within the top 40% of the screen
      this.personajes.push(new Personaje(-120, random(0, height * 0.4), random(1, 3)));
    }
  }
  crearEscudos() {
    for (let i = 0; i < 3; i++) {
      this.escudos.push(new Escudo(random(-200, 120), random(height / 4)));
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
          this.puntos++;
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

    if (this.puntos >= this.maxPuntos) {
      this.gameOver = true;
    }
  }

  mostrar() {
    for (let personaje of this.personajes) {
      personaje.mostrar(this.personaje);
    }

    for (let escudo of this.escudos) {
      escudo.mostrar(this.escudo);
    }

    for (let proyectil of this.proyectiles) {
      proyectil.mostrar();
    }
  }
}
