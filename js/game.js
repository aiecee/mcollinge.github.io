window.onload = function () {
    var game = new Ludi.SolarSystem(800, 600, "content");
};
var Ludi;
(function (Ludi) {
    var SolarSystem = (function () {
        function SolarSystem(width, height, target) {
            this.game = new Phaser.Game(width, height, Phaser.AUTO, target, { create: this.create, update: this.update, render: this.render });
        }
        SolarSystem.prototype.create = function () {
            this.manager = new Ludi.SolarSystemManager(this.game, this.game.width / 2, this.game.height / 2);
            this.manager.addBody("Zero", 5, 50, 0.2);
            this.manager.addBody("Un", 7.5, 75, 0.5);
            this.manager.addBody("Deux", 15, 105, 0.3);
            this.manager.addBody("Trois", 9, 150, 0.1);
            this.manager.addBody("Quatre", 3, 200, 0.7);
        };
        SolarSystem.prototype.update = function () {
            this.manager.update();
        };
        SolarSystem.prototype.render = function () {
            this.manager.render();
        };
        return SolarSystem;
    }());
    Ludi.SolarSystem = SolarSystem;
})(Ludi || (Ludi = {}));
var Ludi;
(function (Ludi) {
    var SolarSystemManager = (function () {
        function SolarSystemManager(game, x, y) {
            this.game = game;
            this.x = x;
            this.y = y;
            this.orbitalBodies = [];
            this.labels = [];
            this.graphics = this.game.add.graphics(0, 0);
        }
        SolarSystemManager.prototype.addBody = function (name, diameter, distance, speed) {
            this.orbitalBodies.push({
                name: name,
                x: this.x,
                y: this.y,
                diameter: diameter,
                distance: distance,
                speed: speed,
                angle: 0,
                colour: this.randomColor()
            });
            var label = this.game.add.text(this.x, this.y + distance, name, { font: "12px Arial", fill: "#FFFFFF" });
            label.anchor.setTo(0, 0.5);
            this.labels.push(label);
        };
        SolarSystemManager.prototype.update = function () {
            for (var i = 0; i < this.orbitalBodies.length; i++) {
                var body = this.orbitalBodies[i];
                var label = this.labels[i];
                body.x = (body.distance * Math.cos(body.angle)) + this.x;
                body.y = (body.distance * Math.sin(body.angle)) + this.y;
                label.x = body.x + 5;
                label.y = body.y;
                body.angle += body.speed / this.game.time.elapsedMS;
            }
        };
        SolarSystemManager.prototype.render = function () {
            this.graphics.clear();
            this.graphics.beginFill(0xFFFF00);
            this.graphics.drawCircle(this.x, this.y, 50);
            this.graphics.endFill();
            for (var _i = 0, _a = this.orbitalBodies; _i < _a.length; _i++) {
                var body = _a[_i];
                this.graphics.beginFill(body.colour);
                this.graphics.drawCircle(body.x, body.y, body.diameter);
                this.graphics.endFill();
            }
        };
        SolarSystemManager.prototype.randomColor = function () {
            return Math.random() * 16777215;
        };
        return SolarSystemManager;
    }());
    Ludi.SolarSystemManager = SolarSystemManager;
})(Ludi || (Ludi = {}));
