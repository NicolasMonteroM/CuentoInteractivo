new p5(function (app) {

    app.preload = function () {

        controller = new Controller(app);
       

    }

    app.setup = function () {

        app.createCanvas(1200, 700);

        //–––––––––– THE FILE IS GOING TO BE DOWNLOADED ––––––––––––––//

        controller.saveChanges();

    }


    app.draw = function () {

        controller.drawController();

    }

    app.mouseDragged = function () {

    }

    app.mousePressed = function () {

    }
}
);

