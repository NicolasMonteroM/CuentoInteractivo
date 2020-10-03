
let title;
let spoon;
let stick;

let tale = [];
let scene = [];


class Logica {

    constructor(app) {

        this.app = app;

        //interactions
        this.firstInteraction = false;
        this.secondInteraction = false;
        this.thirdInteraction = false;
        this.fourthtInteraction = false;
        this.fifthInteraction = false;

        //loading tale
        this.tale = this.app.loadStrings('./data/tale.txt');

        //slicing tale
        //  this.scene = this.tale.slice(0, 30);

        this.scene = this.app.loadStrings('./data/scene.txt');


    }

    drawTale() {

        this.app.fill(77,53,22);
        this.app.textSize(16);
        this.app.textAlign(this.app.CENTER);
        this.app.text(this.scene, 250, 200, 1200 - 500);

       // console.log(this.scene);

    }

    loadTale() {



    }

    saveTale() {


        this.app.saveStrings("./data/EditedTale.txt", tale);

    }
}