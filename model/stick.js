class Stick extends Elemento {

    constructor(app, x, y) {

        super(app, x, y);
        this.stickImage = this.app.loadImage("./data/images/stick.png");

    }

    drawElemento() {

        this.app.image(this.stickImage, this.x, this.y, 100, 60);

    }

}