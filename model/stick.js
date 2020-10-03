class Stick extends Object {

    constructor(app, x, y) {

        super(app, x, y);
        this.stickImage = this.app.loadImage("./data/images/stick.png");

    }

    drawObject() {


        this.app.image(this.stickImage, this.x, this.y, 30, 20);

    }

    getPosX() {

        return this.x;

    }

    getPosY() {

        return this.y;

    }

}