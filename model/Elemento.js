class Elemento {

    constructor(app, x, y) {

        this.app = app;
        this.x = x;
        this.y = y;
       
    }

    drawElemento(){

    }

    setPosX(x) {

        this.x = x;

    }

    setPosY(y) {

        this.y = y;

    }

    getPosX() {

        return this.x;

    }

    getPosY() {

        return this.y;

    }
}