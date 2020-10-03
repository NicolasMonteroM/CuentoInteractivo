
let title;
let spoon;
let stick;

let tale = [];
let scene = [];

let font;


class Logica {

    constructor(app) {

        this.app = app;

        //interactions
        this.firstInteraction = false;
        this.secondInteraction = false;
        this.thirdInteraction = false;
        this.fourthtInteraction = false;
        this.fifthInteraction = false;

        this.font = this.app.loadFont('./data/times.ttf');


    }

    drawTale() {

        this.app.fill(77, 53, 22);
        this.app.textSize(16);
        this.app.textAlign(this.app.CENTER);

        this.app.textFont(this.font);
        this.app.text(this.scene, 250, 200, 1200 - 500);

        // console.log(this.scene);

    }

    loadTale() {
        
        //loading tale
        this.tale = this.app.loadStrings('./data/tale.txt');

        //slicing tale
        //  this.scene = this.tale.slice(0, 30);

        this.scene = this.app.loadStrings('./data/scene.txt');

    }

    saveTale() {

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
        this.app.saveStrings('EditedTale.txt', this.tale);

    }
}