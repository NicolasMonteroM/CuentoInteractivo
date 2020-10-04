class Hat extends Elemento {

    constructor(app, x, y) {

        super(app, x, y);
        this.state = 1;
        this.hatImage = this.app.loadImage("./data/images/hat.png");
        this.hatImageS = this.app.loadImage("./data/images/hatSelected.png");

    }

    drawElemento(state) {

        switch (state) {

            case 1:

                this.app.image(this.hatImage, this.x - (this.app.mouseX * 0.02), this.y, 50, 30);
                break;

            case 2:

                this.app.image(this.hatImageS, this.x - (this.app.mouseX * 0.02), this.y, 55 * 2.2, 33 * 3);
                break;

        }

    }
}