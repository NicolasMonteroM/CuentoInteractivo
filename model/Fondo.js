class Fondo {

    contructor(app) {

        this.app = app;
        this.backgroundImage = this.app.loadImage("./data/images/background.png");

    }

    drawBackground(){
       
        this.app.image(this.backgroundImage, 0,0, 1200, 700);

    }

}