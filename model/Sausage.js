class Sausage extends Elemento {

    constructor(app, x, y) {

        super(app, x, y);
        this.state = 1;
        this.sausageImage = this.app.loadImage("./data/images/sausage.png");
        this.sausageImageS = this.app.loadImage("./data/images/sausageSelected.png");

    }

    drawElemento(state) {


        switch (state) {

            case 1:

                this.app.image(this.sausageImage, this.x - (this.app.mouseX * 0.02), this.y, 80, 180);
                break;

            case 2:

                this.app.image(this.sausageImageS, this.x - (this.app.mouseX * 0.02), this.y, 95 * 1.60, 175 * 1.45);
                break;

        }

    }
}