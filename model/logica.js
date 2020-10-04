let tale = [];
let scene = [];

let title;
let stick;
let bird;
let bucket;
let mouse;
let sausage;
let table;
let spoon;
let hat;

let firstInteraction = false;
let secondInteraction = false;
let thirdInteraction = false;
let fourthtInteraction = false;
let fifthInteraction = false;
let sixthInteraction = false;

class Logica {

    constructor(app) {

        this.app = app;

        this.fondo = new Fondo(app);
        this.stick = new Stick(app, 770, 580);
        this.bird = new Bird(app, 900, 520);
        this.bucket = new Bucket(app, 500, 570);
        this.mouse = new Mouse(app, 620, 530);
        this.sausage = new Sausage(app, 320, 500);
        this.table = new Table(app, 110, 540);
        this.hat = new Hat(app, 140, 480);
        this.spoon = new Spoon(app, 70, 485);

        //interactions

        this.font = this.app.loadFont('./data/times.ttf');
        this.titleFont = this.app.loadFont('./data/tioxo.otf');

    }

    drawTale() {

        this.app.imageMode(this.app.CORNER);
        this.fondo.drawFondo();
        this.app.imageMode(this.app.CENTER);

        if (this.firstInteraction) {
            this.stick.drawElemento();
        }

        if (!this.firstInteraction && this.app.dist(this.app.mouseX, this.app.mouseY, this.bird.getPosX(), this.bird.getPosY()) < 40) {

            this.bird.drawElemento(2);

        } else { this.bird.drawElemento(1); }


        if (this.secondInteraction) {

            if (!this.thirdInteraction && this.secondInteraction && this.app.dist(this.app.mouseX, this.app.mouseY, this.bucket.getPosX(), this.bucket.getPosY()) < 40) {

                this.bucket.drawElemento(2);

            } else { this.bucket.drawElemento(1); }

            if (this.thirdInteraction) {

                this.bucket.drawElemento(3);
            }

        }

        if (!this.secondInteraction && this.app.dist(this.app.mouseX, this.app.mouseY, this.mouse.getPosX(), this.mouse.getPosY()) < 40) {

            this.mouse.drawElemento(2);

        } else { this.mouse.drawElemento(1); }


        if (!this.fourthInteraction && this.app.dist(this.app.mouseX, this.app.mouseY, this.sausage.getPosX(), this.sausage.getPosY()) < 40) {

            this.sausage.drawElemento(2);

        } else { this.sausage.drawElemento(1); }

        this.table.drawElemento();

        if (this.fourthInteraction) {

            if (!this.fifthInteraction && this.app.dist(this.app.mouseX, this.app.mouseY, this.hat.getPosX(), this.hat.getPosY()) < 40) {

                this.hat.drawElemento(2);

            } else { this.hat.drawElemento(1); }

            if (this.fifthInteraction) {

                this.hat.setPosX(340);
                this.hat.setPosY(410);
            }

        }

        if (this.fourthInteraction) {

            if (!this.sixthInteraction && this.app.dist(this.app.mouseX, this.app.mouseY, this.spoon.getPosX(), this.spoon.getPosY()) < 20) {

                this.spoon.drawElemento(2);

            } else { this.spoon.drawElemento(1); }

            if (this.sixthInteraction) {

                this.spoon.setPosX(300);
                this.spoon.setPosY(520);
            }

        }


        this.app.fill(77, 53, 22);
        this.app.textSize(17);
        this.app.textAlign(this.app.CENTER);

        //–––––––––– SLICING FIRST PART OF THE TALE ––––––––––––––//
        this.scene = this.tale.slice(0, 1);

        //writing scene
        this.app.textFont(this.font);
        this.app.text(this.scene, 250, 250, 1200 - 500);

        //writing title
        this.app.textSize(30);
        this.app.textFont(this.titleFont);
        this.app.text('The Mouse, the Bird, and the Sausage', 450, 150, 1200 - 900);

        // console.log(this.scene);

    }

    interactions() {


        if (this.app.dist(this.app.mouseX, this.app.mouseY, this.bird.getPosX(), this.bird.getPosY()) < 40) {

            this.firstInteraction = true;

        }

        if (this.app.dist(this.app.mouseX, this.app.mouseY, this.mouse.getPosX(), this.mouse.getPosY()) < 40) {

            this.secondInteraction = true;

        }

        if (this.secondInteraction && this.app.dist(this.app.mouseX, this.app.mouseY, this.bucket.getPosX(), this.bucket.getPosY()) < 40) {

            this.thirdInteraction = true;

        }

        if (this.app.dist(this.app.mouseX, this.app.mouseY, this.sausage.getPosX(), this.sausage.getPosY()) < 40) {

            this.fourthInteraction = true;

        }


        if (this.fourthInteraction && this.app.dist(this.app.mouseX, this.app.mouseY, this.hat.getPosX(), this.hat.getPosY()) < 40) {

            this.fifthInteraction = true;

        }

        if (this.fourthInteraction && this.app.dist(this.app.mouseX, this.app.mouseY, this.spoon.getPosX(), this.spoon.getPosY()) < 20) {

            this.sixthInteraction = true;

        }

        /* if (this.firstInteraction && this.secondInteraction && this.thirdInteraction && this.fourthInteraction && this.fifthInteraction && this.sixthInteraction) {
             saveChanges();
         }*/

        // console.log(this.firstInteraction);

    }

    loadTale() {

        //loading tale
        this.tale = this.app.loadStrings('./data/tale.txt');

    }

    //–––––––––– THE FILE IS GOING TO BE DOWNLOADED ––––––––––––––//
    saveTale() {

        //the tale is going to be downloaded after finishing the interactions

        // if (this.firstInteraction && this.secondInteraction && this.thirdInteraction && this.fourthInteraction && this.fifthInteraction && this.sixthInteraction) {

        //changing words 
        for (let i = 0; i < this.tale.length; i++) {
            this.tale[i] = this.tale[i].replaceAll("wood", "WOOD");
            this.tale[i] = this.tale[i].replaceAll("mouse", "MOUSE");
            this.tale[i] = this.tale[i].replaceAll("bird", "BIRD");
            this.tale[i] = this.tale[i].replaceAll("sausage", "SAUSAGE");
            this.tale[i] = this.tale[i].replaceAll("cooking", "COOKING");
            this.tale[i] = this.tale[i].replaceAll("water", "WATER");
            this.tale[i] = this.tale[i].replaceAll("table", "TABLE");
        }

        //saving txt file
        this.app.saveStrings(this.tale, 'The Mouse, the Bird, and the Sausage.txt');

        // }

    }
}