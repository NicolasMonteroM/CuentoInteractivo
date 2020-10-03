class Mouse extends Elemento {

    constructor(app, x, y) {

        super(app, x, y);
        this.mouseImage = this.app.loadImage("./data/images/mouse.png");
        this.mouseImageS = this.app.loadImage("./data/images/mouseSelected.png");

    }

    drawElemento() {

        this.app.image(this.mouseImage, this.x - (this.app.mouseX * 0.02), this.y, 100, 138);

    }
}