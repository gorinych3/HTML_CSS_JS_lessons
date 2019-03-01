function makePassword(password) {
    return function getPassword(passwordGuess) {
        return (passwordGuess === password);
    };
}

var tryGuess = makePassword("secret");
console.log("Guessing 'nope': " + tryGuess("nope"));
console.log("Guessing 'secret': " + tryGuess("secret"));


function multyN(n) {
    return function result(x) {
        return n*x;
    };
}

var resFun = multyN(2);
console.log(resFun(2));
console.log(resFun(3));
console.log(resFun(4));

function makeCount() {
    var count = 0;
    var myObj = {
        increment(){
            return count++;
        }
    };
    return myObj;
}

var resCount = makeCount();
console.log(resCount.increment());
console.log(resCount.increment());
console.log(resCount.increment());