class Fondo {

    constructor(app) {

        this.app = app;
        this.fondoImage = this.app.loadImage("./data/images/background.png");

    }

    drawFondo() {

        this.app.image(this.fondoImage, -100 - (this.app.mouseX * 0.06), 0, 1500, 800);

    }

}