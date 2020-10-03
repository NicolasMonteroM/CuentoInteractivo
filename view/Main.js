new p5(function (app) {

    let fondo;
    let logica;

    app.preload = function () {

        fondo = new Fondo(app);
        logica = new Logica(app);
        logica.loadTale();

    }

    app.setup = function () {

        app.createCanvas(1200, 700);

        //–––––––––– THE FILE IS GOING TO BE DOWNLOADED ––––––––––––––//

        logica.saveTale();

    }


    app.draw = function () {


        app.background(77, 53, 22);
        fondo.drawFondo();
        logica.drawTale();

    }

    app.mouseDragged = function () {

    }

    app.mousePressed = function () {

    }
}
);

