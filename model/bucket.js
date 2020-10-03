class Bucket extends Elemento{

    constructor(app, x, y) {

        super(app, x, y);
        this.bucketImage = this.app.loadImage("./data/images/bucket.png");
        this.bucketFilledImage = this.app.loadImage("./data/images/bucketFilled.png");

    }

    drawElemento() {

        this.app.image(this.bucketImage, this.x  - (this.app.mouseX * 0.02), this.y, 80, 60);

    }
}