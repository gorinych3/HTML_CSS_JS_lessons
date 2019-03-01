function processPassengers(passengers, testFunction) {
    for(var i = 0; i < passengers.length; i++){
        if(testFunction(passengers[i])){
            return false;
        }
    }
    return true;
}

var passengers = [ { name: "Jane Doloop", paid: true, ticket: "coach" },
    { name: "Dr. Evel", paid: true, ticket: "firstclass" },
    { name: "Sue Property", paid: false, ticket: "firstclass" },
    { name: "John Funcall", paid: true, ticket: "coach" } ];

function checkNoFlyList(passenger) {
    return (passenger.name === "Dr. Evel");
}

function  checkNotPaid(passenger) {
    return (!passenger.paid);
}

var allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly){
    console.log("Самолет не может взлететь: у нас есть пассажир в черном списке");
}

var allPaid = processPassengers(passengers, checkNotPaid);
if(!allPaid){
    console.log("Самолет не может взлететь: не все заплатили.")
}

function  printPassenger(passenger) {
    console.log("name: " + passenger.name + " paid: "+ passenger.paid);
}

processPassengers(passengers, printPassenger);

function createDrinkOrder(passenger) {
    var orderFunction;
    if (passenger.ticket === "firstclass") {
        orderFunction = function() {
            alert("Would you like a cocktail or wine?");
        };
    } else {
        orderFunction = function() {
            alert("Your choice is cola or water.");
        };
    }
    return orderFunction;
}

function serveCustomer(passenger) {
    var getDrinkOrderFunction = createDrinkOrder(passenger);
    getDrinkOrderFunction();
// Предложить обед
    getDrinkOrderFunction();
    getDrinkOrderFunction();
// Включить кино
    getDrinkOrderFunction();
// Забрать мусор
}

function servePassengers(passengers) {
    for (var i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}

servePassengers(passengers);