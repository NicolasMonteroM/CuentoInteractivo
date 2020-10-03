class Spoon extends Elemento{

    constructor(app, x, y) {

        super(app, x, y);
        this.spoonImage = this.app.loadImage("./data/images/spoon.png");
        this.spoonImageS = this.app.loadImage("./data/images/spoonSelected.png");

    }

    drawElemento() {

        this.app.image(this.spoonImage, this.x - (this.app.mouseX * 0.02), this.y, 60, 20);

    }
}