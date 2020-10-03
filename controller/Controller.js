let fondo;
let logica;

let title;
let stick;
let bird;
let bucket;
let mouse;
let sausage;
let table;
let spoon;
let hat;

class Controller {

    constructor(app) {

        this.app = app;
        this.fondo = new Fondo(app);
        this.logica = new Logica(app);
        this.stick = new Stick(app, 750, 550);
        this.bird = new Bird(app, 860, 440);
        this.bucket = new Bucket(app, 470, 540);
        this.mouse = new Mouse(app, 580, 460);
        this.sausage = new Sausage(app, 300, 420);
        this.table = new Table(app, -50 + 30, 470);
        this.hat = new Hat(app, 70 + 30, 460);
        this.spoon = new Spoon(app, 40, 475);
        this.logica.loadTale();

    }

    drawController() {

        this.fondo.drawFondo();
        this.logica.drawTale();
        this.stick.drawElemento();
        this.bird.drawElemento();
        this.bucket.drawElemento();
        this.mouse.drawElemento();
        this.sausage.drawElemento();
        this.table.drawElemento();
        this.hat.drawElemento();
        this.spoon.drawElemento();

    }

    saveChanges() {

        this.logica.saveTale();

    }

}

