class Spoon extends Elemento {

    constructor(app, x, y) {

        super(app, x, y);
        this.state = 1;
        this.spoonImage = this.app.loadImage("./data/images/spoon.png");
        this.spoonImageS = this.app.loadImage("./data/images/spoonSelected.png");

    }

    drawElemento(state) {

        switch (state) {

            case 1:

                this.app.image(this.spoonImage, this.x - (this.app.mouseX * 0.02), this.y, 60, 27);
                break;

            case 2:

                this.app.image(this.spoonImageS, this.x - (this.app.mouseX * 0.02), this.y, 60*2.5, 20*4);
                break;

        }

    }
}