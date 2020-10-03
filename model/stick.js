class Stick extends Object {

    constructor(app, x, y) {

        super(app, x, y);
        this.stick = this.app.loadImage("./data/images/stick.png");

    }

    drawObject(){

        this.app.image(this.stick, this.x , this.y, 30, 20);

    }


}