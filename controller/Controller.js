let fondo;
let logica;

class Controller {

    constructor(app) {

        this.app = app;
        this.fondo = new Fondo(app);
        this.logica = new Logica(app);
        this.logica.loadTale();

    }

    drawController() {

        this.fondo.drawFondo();
        this.logica.drawTale();

    }

    saveChanges(){

        this.logica.saveTale();

    }

}

