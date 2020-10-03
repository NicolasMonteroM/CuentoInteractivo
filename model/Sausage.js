class Sausage extends Elemento{

    constructor(app, x, y) {

        super(app, x, y);
        this.sausageImage = this.app.loadImage("./data/images/sausage.png");
        this.sausageImageS = this.app.loadImage("./data/images/sausageSelected.png");

    }

    drawElemento() {

        this.app.image(this.sausageImage, this.x - (this.app.mouseX * 0.02), this.y, 80, 180);

    }
}