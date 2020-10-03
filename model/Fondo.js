class Fondo {

    constructor(app) {

        this.app = app;
        this.fondoImage = this.app.loadImage("./data/images/background.png");
        this.floor = this.app.loadImage("./data/images/floor.png");

    }

    drawFondo() {

        this.app.background(77, 53, 22);
        this.app.image(this.fondoImage, -100 - (this.app.mouseX * 0.06), 0, 1500, 800);
        this.app.image(this.floor, -100 - (this.app.mouseX * 0.02), 500, 1500, 300);

    }

}