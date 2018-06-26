"use strict";
var EndScreen = (function () {
    function EndScreen() {
    }
    return EndScreen;
}());
var Game = (function () {
    function Game() {
        this.screen = new StartScreen(this);
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.screen.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.showPlayScreen = function () {
        document.body.innerHTML = "";
        this.screen = new PlayScreen(this);
        this.screen.gameTimer();
    };
    Game.prototype.showEndScreen = function () {
        document.body.innerHTML = "";
        this.screen = new EndScreen();
        this.screen.gameTimer();
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Jar = (function () {
    function Jar() {
        var _this = this;
        this.score = 0;
        this.particles = [];
        this.element = document.createElement("jar");
        document.body.appendChild(this.element);
        this.element.addEventListener("click", function () { return _this.clickJar(); });
    }
    Jar.prototype.particlesOnClick = function () {
        for (var _i = 0, _a = this.particles; _i < _a.length; _i++) {
            var p = _a[_i];
            p.update();
        }
    };
    Jar.prototype.removeElement = function (el) {
        for (var i = 0; i < this.particles.length; i++) {
            if (this.particles[i] === el) {
                this.particles.splice(i, 1);
            }
        }
    };
    Jar.prototype.clickJar = function (n) {
        var _this = this;
        if (n === void 0) { n = 1; }
        this.score += n;
        if (this.particles, length < 60) {
            this.particles.push(new Particle(this, this.element.offsetLeft, this.element.offsetTop));
        }
        this.element.style.transform = "scale(1.1)";
        setTimeout(function () { return _this.scaleDown(); }, 100);
    };
    Jar.prototype.scaleDown = function () {
        this.element.style.transform = "scale(1)";
    };
    Jar.prototype.buy = function (n) {
        if (this.score >= n) {
            this.score -= n;
            return true;
        }
    };
    Jar.prototype.getScore = function () {
        return this.score;
    };
    return Jar;
}());
var Particle = (function () {
    function Particle(j, x, y) {
        this.jar = j;
        this.x = this.rng(x - 20, x + 220);
        this.y = this.rng(y - 20, y + 200);
        this.element = document.createElement("particle");
        document.body.appendChild(this.element);
        this.element.style.transform = "translate(" + this.x + "px, " + (this.y -= 3) + "px)";
    }
    Particle.prototype.update = function () {
        this.element.style.transform = "translate(" + this.x + "px, " + (this.y -= 3) + "px)";
        if (this.y < -20) {
            this.delete();
        }
    };
    Particle.prototype.delete = function () {
        this.element.remove();
        this.jar.removeElement(this);
    };
    Particle.prototype.rng = function (min, max) {
        var a = Math.floor(Math.random() * (max - min + 1)) + min;
        return a;
    };
    return Particle;
}());
var PlayScreen = (function () {
    function PlayScreen(g) {
        var _this = this;
        this.game = g;
        this.jar = new Jar;
        this.ui = new UI(this, this.jar);
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
    }
    PlayScreen.prototype.onKeyDown = function (e) {
        console.log("blyat");
        switch (e.keyCode) {
            case 27:
                this.exit();
                break;
        }
    };
    PlayScreen.prototype.update = function () {
        this.ui.update();
    };
    PlayScreen.prototype.exit = function () {
        this.game.showPlayScreen();
    };
    return PlayScreen;
}());
var StartScreen = (function () {
    function StartScreen(g) {
        var _this = this;
        this.game = g;
        var logo = document.createElement("logo");
        logo.addEventListener("click", function () { return _this.nextLevel(); });
        document.body.appendChild(logo);
    }
    StartScreen.prototype.update = function () {
    };
    StartScreen.prototype.nextLevel = function () {
        this.game.showPlayScreen;
    };
    return StartScreen;
}());
var UI = (function () {
    function UI(s, j) {
        this.jar = j;
        this.screen = s;
        this.score = document.createElement("p");
        this.score.style.left = "25px";
        this.score.innerHTML = "0 Mayonez Jars";
        document.body.appendChild(this.score);
    }
    UI.prototype.update = function () {
        this.score.innerHTML = this.jar.getScore() + " Mayonez Jars";
        this.screen.update();
    };
    return UI;
}());
//# sourceMappingURL=main.js.map