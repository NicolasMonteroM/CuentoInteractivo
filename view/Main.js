new p5(function (app) {

    let fondo;

    app.preload = function () {

        fondo = new Fondo(app);

    }

    app.setup = function () {

        app.createCanvas(1200, 700);

    }


    app.draw = function () {

        app.background(77,53,22);
        fondo.drawFondo();
       // fondo.moveFondo();


    }

    app.mouseDragged = function () {

    }

    app.mousePressed = function () {

    }
}
);

