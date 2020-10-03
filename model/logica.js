
let title;
let spoon;
let stick;

let tale = [];
let scene = [];

let font;


class Logica {

    constructor(app) {

        this.app = app;
        this.stick = new Stick(app, 0, 0);

        //interactions
        this.firstInteraction = false;
        this.secondInteraction = false;
        this.thirdInteraction = false;
        this.fourthtInteraction = false;
        this.fifthInteraction = false;

        this.font = this.app.loadFont('./data/times.ttf');
        this.titleFont = this.app.loadFont('./data/tioxo.otf');


    }

    drawTale() {

        this.app.fill(77, 53, 22);
        this.app.textSize(17);
        this.app.textAlign(this.app.CENTER);

        //writing scene
        this.app.textFont(this.font);
        this.app.text(this.scene, 250, 250, 1200 - 500);

        //writing title
        this.app.textSize(30);
        this.app.textFont(this.titleFont);
        this.app.text('The Mouse, the Bird, and the Sausage', 450, 150, 1200 - 900);

        //–––––––––– SLICING FIRST PART OF THE TALE ––––––––––––––//
        this.scene = this.tale.slice(0, 1);

        // console.log(this.scene);

    }

    loadTale() {

        //loading tale
        this.tale = this.app.loadStrings('./data/tale.txt');

    }

    //–––––––––– THE FILE IS GOING TO BE DOWNLOADED ––––––––––––––//
    saveTale() {

        //the tale is going to be downloaded after finishing the interactions
        if (this.firstInteraction, this.secondInteraction, this.thirdInteraction, this.fourthtInteraction, this.fifthInteraction) {

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

        }
    }
}