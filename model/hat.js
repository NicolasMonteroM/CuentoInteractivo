class Hat extends Elemento{

    constructor(app, x, y) {

        super(app, x, y);
        this.hatImage = this.app.loadImage("./data/images/hat.png");
        this.hatImageS = this.app.loadImage("./data/images/hatSelected.png");

    }

    drawElemento() {

        this.app.image(this.hatImage, this.x - (this.app.mouseX * 0.02), this.y, 50, 30);

    }
}