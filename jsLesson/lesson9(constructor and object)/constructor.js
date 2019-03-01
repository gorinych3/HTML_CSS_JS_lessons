function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function () {
        if(this.weight > 25){
            alert(this.name + " says Woof!");
        } else {
            alert(this.name + " says Yip!")
        }
    };
}

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var dogs = [fido, fluffy, spot];
for (var i = 0; i < dogs.length; i++) {
    dogs[i].bark();
}

function Coffee(roast, ounces) {
    this.roast = roast;
    this.ounces = ounces;
    this.getSize = function () {
        if(this.ounces < 12){
            return "small";
        } else if(this.ounces < 16){
            return "medium";
        }else return "large"
    };
    this.toString = function () {
        console.log(this.roast + " " + this.ounces + " " + this.getSize());
    };
}

var houseBlend = new Coffee("House Blend", 12);
console.log(houseBlend.toString());
var darkRoast = new Coffee("Dark Roast", 16);
console.log(darkRoast.toString());