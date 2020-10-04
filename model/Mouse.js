class Mouse extends Elemento {

    constructor(app, x, y) {

        super(app, x, y);
        this.state = 1;
        this.mouseImage = this.app.loadImage("./data/images/mouse.png");
        this.mouseImageS = this.app.loadImage("./data/images/mouseSelected.png");

    }

    drawElemento(state) {

        switch (state) {

            case 1:

                this.app.image(this.mouseImage, this.x - (this.app.mouseX * 0.02), this.y, 100, 138);
                break;

            case 2:

                this.app.image(this.mouseImageS, this.x - (this.app.mouseX * 0.02), this.y, 105 * 1.60, 138 * 1.50);
                break;

        }

    }
}