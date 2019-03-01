function Game() {
    this.level = 0;
}

Game.prototype.play = function () {
    this.level++;
    console.log("Welcome to level " + this.level);
    this.unlock(); //Мы вызываем unlock при каждой игре,
    // но новая способность не активизируется до тех пор,
    // пока значение level не достигнет 42.
}


//Секрет этой игры: при достижении уровня 42 в прототип добавляется новый метод.
// Это означает, что все роботы наследуют способность применения лазеров!
Game.prototype.unlock = function () {
    if (this.level === 42) {
        Robot.prototype.deployLaser = function () {
            console.log(this.name + " is blasting you with laser beams.");
        }
    }
}

function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

var game = new Game();
var robby = new Robot("Robby", 1956, "Dr. Morbius");
var rosie = new Robot("Rosie", 1962, "George Jetson");

while (game.level < 42){
    game.play();
}
robby.deployLaser();
rosie.deployLaser();