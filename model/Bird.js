class Bird extends Elemento {

    constructor(app, x, y) {

        super(app, x, y);
        this.birdImage = this.app.loadImage("./data/images/bird.png");
        this.birdImageS =  this.app.loadImage("./data/images/birdSelected.png");

    }

    drawElemento() {

        this.app.image(this.birdImage, this.x  - (this.app.mouseX * 0.02), this.y, 150, 160);

    }
}