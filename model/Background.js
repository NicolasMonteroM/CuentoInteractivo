
let background;

class Background {


    contructor(posX, posY) {

        this.posX = posX;
        this.posY = posY;
        this.background = loadImage('./data/images/background.png');

    }

    drawBackground(){
       
        image(background, this.posX, this.posY);

    }

}