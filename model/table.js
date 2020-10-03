class Table extends Elemento{

    constructor(app, x, y) {

        super(app, x, y);
        this.tableImage = this.app.loadImage("./data/images/table.png");

    }

    drawElemento() {

        this.app.image(this.tableImage, this.x - (this.app.mouseX * 0.02), this.y, 190, 130);

    }
}