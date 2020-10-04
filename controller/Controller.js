let fondo;
let logica;

class Controller {

    constructor(app) {

        this.logica = new Logica(app);
        this.app = app;
        this.logica.loadTale();

    }

    drawController() {

        this.logica.drawTale();

    }

    saveChanges() {

        this.logica.saveTale();
    }


    mouseController() {

        this.logica.interactions();

    }

}

