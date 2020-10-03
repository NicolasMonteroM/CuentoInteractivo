let fondo;
let logica;

let title;
let spoon;
let stick;

class Controller {

    constructor(app) {

        this.app = app;
        this.fondo = new Fondo(app);
        this.logica = new Logica(app);
        this.stick = new Stick(app,500,500);
        this.logica.loadTale();

    }

    drawController() {

        this.fondo.drawFondo();
        this.logica.drawTale();
        this.stick.drawElemento();

    }

    saveChanges(){

        this.logica.saveTale();

    }

}

