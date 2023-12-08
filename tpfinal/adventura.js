//Paula Mendes Com3 
//Legajo: 93546/1
//Url video YouTube: 
class Adventura {
    constructor() {
        //Variable tipo contador
        this.cuentaFotograma = 0;
        this.cuentaHeight = 0;
        //Variable PImage para imprimir las imagenes
        this.imagenes = [];
        this.arrow;
        //Declaración con asignación
        this.estado = "inicio";
        this.transparencia = 255;
        this.mostrarOpciones = false;
        this.mostrarButton = false;
        this.screenNum;
        this.slideShowOver = false;
        this.slideShowOver2 = false;

        //juego
        this.juego;
        this.trayectoriaX = [];
        this.trayectoriaY = [];
       
    }
    
    //Variable boolean para preguntar si el click está dentro del botón

    isInCenteredRectangle(x_rect, y_rect, rect_width, rect_height) {
        let insideLeft = mouseX >= x_rect-rect_width/2;
        let insideRight = mouseX <= x_rect+rect_width/2;
        let insideTop = mouseY >= y_rect-rect_height/2;
        let insideBottom = mouseY <= y_rect+rect_height/2;
        return insideLeft & insideRight & insideTop & insideBottom;
    }
    
    //Variable para poder cambiar el estilo el conjunto y ahorrar líneas de código
    imagenConTexto(imagen, texto, position) {
        tint(255, 255);
        image(imagen, 0, 0);
        fill(249);
        textAlign(CENTER);
        textSize(24);
        if (position==("top")) {
        text(texto, width/2, 50);
        }
        if (position==("bottom")) {
        text(texto, width/2, 467);
        } 
    }
    
    imagenConNext( imagen, texto, position){
        this.imagenConTexto(imagen, texto, position);
        fill(177, 120, 128);
        rect(570, 15, 50, 25);
        fill(249);
        textSize(12);
        text("Next", 570, 20);
    }
    
    //Variable que declara los valores de los detalles como los textos
    
    opciones( opcion1, opcion2, position) {
        if(this.cuentaFotograma > 60){
            this.mostrarOpciones = true; 
        }
        this.cuentaFotograma++;
        if (this.mostrarOpciones) {
        fill(177, 120, 128);
        rectMode(CENTER);
        if (position==("top")) {
            rect(width/2, 50, 350, 40);
            fill(249);
            textSize(24);
            text(opcion1, width/2, 60);
            fill(177, 120, 128);
            rect(width/2, 100, 350, 40);
            fill(249);
            textSize(24);
            text(opcion2, width/2, 110);
        } else if (position==("bottom")) {
            rect(width/2, 507, 350, 40);
            fill(249);
            textSize(24);
            text(opcion1, width/2, 517);
            fill(177, 120, 128);
            rect(width/2, 557, 350, 40);
            fill(249);
            textSize(24);
            text(opcion2, width/2, 567);
        }
        }
    }
    
    opcionesDirection(){
        if(this.cuentaFotograma > 60){
            this.mostrarOpciones = true; 
        }
        this.cuentaFotograma++;
        if (this.mostrarOpciones) {
        fill(177, 120, 128);
        rectMode(CENTER);
        rect(width/2, 150, 350, 150);
        fill(249);
        textSize(24);
        text("a - Segunda estrella a la\nderecha y derecho\nhasta la manana", width/2, 110);
        fill(177, 120, 128);
        rect(width/2, 320, 350, 150);
        fill(249);
        textSize(24);
        text("b - Segunda estrella a la\nderecha y derecha\nhasta la manana", width/2, 280);
        fill(177, 120, 128);
        rect(width/2, 490, 350, 150);
        fill(249);
        textSize(24);
        text("c - Segunda estrella\nderecho y derecha\nhasta la manana", width/2, 450);
        }
    }
    
    resetValues(){
        this.cuentaFotograma = 0;
        this.cuentaHeight = 0;
        this.mostrarOpciones = false;
        this.transparencia = 255;
        this.mostrarButton = false;
        this.screenNum = 1;
        this.slideShowOver = false;
        this.slideShowOver2 = false;
    }
    
    //Variable para click
    administrarClic( estado1, estado2, position) {
        if (!this.mostrarOpciones) {
            this.mostrarOpciones = true;
        } else {
        let y = 50;
        if (position==("top")) {
            y = 50;
        } else if (position==("bottom")) {
            y = 507;
        }
        if (this.isInCenteredRectangle(width/2, y, 350, 40)) {
            this.estado = estado1;
            this.resetValues();
        } else if (this.isInCenteredRectangle(width/2, y+50, 350, 40)) {
            this.estado = estado2;
            this.resetValues();
        }
        }
    }
    
    administrarNext() {
        if (this.isInCenteredRectangle(570, 15, 50, 25)){
            this.screenNum++;
        }
    }
    
    //Página de inicio
    
    mostrarMenuPrincipal() {
        fill(177, 120, 128);
        tint(255, 255);
        image(this.imagenes[1], 0, 0);
        textAlign(CENTER);
        ellipse(width/4, 550, 105, 80);
        fill(249);
        textSize(17);
        text("Jugar", width/4, 557);
        fill(177, 120, 128);
        ellipse(3*width/4, 550, 105, 80);
        fill(249);
        textSize(17);
        text("Créditos", 3*width/4, 557);
        fill(30);
        if (this.cuentaFotograma < 120) {
        image(this.imagenes[0], 0, 0);
        } else {
        if (this.transparencia > 0) {
            this.transparencia -= 5;
        };
        tint(255, this.transparencia);
        this.cuentaFotograma = this.cuentaFotograma + 5;
        image(this.imagenes[0], 0, -(this.cuentaFotograma - 120));
        }
        this.cuentaFotograma++;
    }
    
    //Animación de portada
    
    finalScreen( imagen, texto, position) {
        let y = 50;
        if (position==("top")) {
        y = 50;
        } else if (position==("bottom")) {
        y = 507;
        }
        tint(255, 255);
        if (this.cuentaFotograma < 150) {
        image(imagen, 0, 0);
        textAlign(CENTER);
        fill(249);
        textSize(17);
        text(texto, width/2, y);
        } else {
        image(imagen, 0, -(this.cuentaFotograma - 150));
        textAlign(CENTER);
        fill(249);
        textSize(17);
        let newheight = height-(this.cuentaFotograma - 150);
        if (newheight > 0) {
            image(this.imagenes[26], 0, newheight);
            text("Historia : Peter Pan - James Matthew Barrie\n\n\nCódigo : Paula Mendes\n\n\nDibujos : Paula Mendes\n\n\nLegajo : 93546/1\n\n\nComision : 3", width/2, height/4+newheight);
            this.cuentaFotograma = this.cuentaFotograma + 5;
        } else {
            if (this.cuentaHeight > 150) {
            if (this.transparencia > 0) {
                this.transparencia -= 5;
            } else {
                this.mostrarButton = true;
            }
            }
            //Créditos
            image(this.imagenes[27], 0, 0);
            tint(255, this.transparencia);
            image(this.imagenes[26], 0, 0);
            fill(249, this.transparencia);
            text("Historia : Peter Pan - James Matthew Barrie\n\n\nCódigo : Paula Mendes\n\n\nDibujos : Paula Mendes\n\n\nLegajo : 93546/1\n\n\nComision : 3", width/2, height/6);
            this.cuentaHeight++;
            if (this.mostrarButton) {
            fill(177, 120, 128);
            ellipse(width/2, 65, 105, 80);
            fill(249);
            textSize(17);
            text("Reiniciar", width/2, 75);
            }
        }
        }
        this.cuentaFotograma++;
    }
    
    getImage( len, cuenta, time){
        for(let i = 0; i < len; i++){
        if((cuenta/((i+1)*time)) <= 1){
            return i;
        }
        }
        return len-1;
    }
    
    slideShow( arg_imagenes, time, indicator){
        let index = this.getImage(arg_imagenes.length, this.cuentaFotograma, time);
        image(arg_imagenes[index], 0, 0);
        this.cuentaFotograma++;
        if(this.cuentaFotograma >= (arg_imagenes.length+3)*time){
        if((indicator == 1 && !this.slideShowOver) || (indicator == 2 && !this.slideShowOver2)){
            this.cuentaFotograma = 0;
        }
        if(indicator == 1){
            this.slideShowOver = true;
        } else if(indicator == 2){
            this.slideShowOver2 = true; 
        }
        }
    }
    
    mostrarPuntos() {
        fill(0);
        textSize(15);
        text("Puntos: " + this.juego.puntos, 50, 30);
    
        if (this.juego.puntos >= this.juego.maxPuntos) {
            fill(0, 255, 0);
            text("¡Genial, los empulgaste!", width / 2 , height / 2);
        }
    }
  
  
}

