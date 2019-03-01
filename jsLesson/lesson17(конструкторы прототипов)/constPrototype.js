function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

Dog.prototype.species = "Canine";
Dog.prototype.bark = function() {
    if (this.weight > 25) {
        console.log(this.name + " says Woof!");
    } else {
        console.log(this.name + " says Yip!");
    }
};
Dog.prototype.run = function() {
    console.log("Run!");
};
Dog.prototype.wag = function() {
    console.log("Wag!");
};

function ShowDog(name, breed, weight, handler) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.handler = handler;
}

/*
метод call обращается к вышестоящему прототипу, передает объект и аргументы
- аналог super в java
function ShowDog(name, breed, weight, handler) {
Dog.call(this, name, breed, weight);
this.handler = handler;
}
*/
ShowDog.prototype = new Dog();
ShowDog.prototype.constructor = ShowDog; //назначаем прототипу конструктор
                                         //чтобы при вызове otherName.constructor отображался
                                         //нужный конструктор, хотя на работу не влияет
ShowDog.prototype.league = "Webville";
ShowDog.prototype.stack = function() {
    console.log("Stack");
};
ShowDog.prototype.bait = function() {
    console.log("Bait");
};
ShowDog.prototype.gait = function(kind) {
    console.log(kind + "ing");
};
ShowDog.prototype.groom = function() {
    console.log("Groom");
};
//var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
/*
scotty.stack();
scotty.bark();
console.log(scotty.league);
console.log(scotty.species);
*/

var fido = new Dog("Fido", "Mixed", 38);
if (fido instanceof Dog) {
    console.log("Fido is a Dog"); // true
}
if (fido instanceof ShowDog) {
    console.log("Fido is a ShowDog"); //false
}
var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
if (scotty instanceof Dog) {
    console.log("Scotty is a Dog"); //true
}
if (scotty instanceof ShowDog) {
    console.log("Scotty is a ShowDog"); //true
}
console.log("Fido constructor is " + fido.constructor); //constructor Dog
console.log("Scotty constructor is " + scotty.constructor); //constructor Dog/constructor ShowDog