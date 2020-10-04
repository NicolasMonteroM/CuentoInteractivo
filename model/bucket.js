class Bucket extends Elemento {

    constructor(app, x, y) {

        super(app, x, y);
        this.state = 1;
        this.bucketImage = this.app.loadImage("./data/images/bucket.png");
        this.bucketImageS = this.app.loadImage("./data/images/bucketSelected.png");
        this.bucketFilledImage = this.app.loadImage("./data/images/bucketFilled.png");

    }

    drawElemento(state) {

        switch (state) {

            case 1:

                this.app.image(this.bucketImage, this.x - (this.app.mouseX * 0.02), this.y, 80, 60);
                break;

            case 2:

                this.app.image(this.bucketImageS, this.x - (this.app.mouseX * 0.02), this.y, 80 * 1.9, 69 * 1.9);
                break;

            case 3:
                this.app.image(this.bucketFilledImage, this.x - (this.app.mouseX * 0.02), this.y, 80, 60);

                break;
        }

    }
}