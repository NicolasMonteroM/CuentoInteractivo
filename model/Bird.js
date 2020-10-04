class Bird extends Elemento {

    constructor(app, x, y) {

        super(app, x, y);
        this.state = 1;
        this.birdImage = this.app.loadImage("./data/images/bird.png");
        this.birdImageS = this.app.loadImage("./data/images/birdSelected.png");

    }

    drawElemento(state) {

        switch (state) {

            case 1:

                this.app.image(this.birdImage, this.x - (this.app.mouseX * 0.02), this.y, 150, 160);
                break;

            case 2:

                this.app.image(this.birdImageS, this.x - (this.app.mouseX * 0.02), this.y, 152 * 1.45, 160 * 1.45);
                break;

        }

    }
}