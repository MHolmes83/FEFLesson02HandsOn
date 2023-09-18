const thisNumber = 1234;

const settings = {
    number: 12,
    time: "noon"
};

let i = 2;

const numberFive = 5;

let greeting = "Hello, World!"

let name = "Brittany";

let age = 33;

let married = false;

let cats = ['Walter', 'Snowball', 'Sithis', 'Kim Chin', 'Big Chungus'];

let house = {
    numberOfBedrooms: 2,
    numberOfBathrooms: 2,
    hasPool: null,
    location: 'Manhattan, Midtown East',
    price: '$300,000'
}

let newHouse;

var newString = "Whaddup, Party People!";

var newNumber = 286;

var newBoolean = false;

let person = {
    firstName: "John",
    lastName: "Smith",
    getFullName: function() {
       console.log(this.firstName + ' ' + this.lastName);
    }
};

let carMiles = {
    odometer: 5000,
    traveled: 250,
    getUpdatedOdometer: function() {
        console.log(this.odometer + this.traveled);
    }
}

let user = {
    firstName: "Bill",
    lastName: "Coder",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

let product = {
    cost: 1200,
    deliveryFee: 200,
    newPayments: function() {
        return (this.cost + this.deliveryFee) * 100;
    }
}

let odd = 7;
let even = 20;
let greaterThan;
if(odd > 19 && even > 19){
    greaterThan = true;
} else {
    greaterThan = false;
}

let newOdd = 9;
let newEven = 22;
let newGreaterThan;
if(newOdd > 19 || newEven > 19){
    newGreaterThan = true;
} else {
    newGreaterThan = false;
}

let anotherOdd = "20";
let anotherEven = 20;
let equalTo;
if(even === odd) {
    equalTo = true;
} else {
    equalTo = false;
}

let midArray = [12, 13];
let normArray = [1, 2, 3, midArray, 4, 5];

let newMidArray = [13, 21, 34];
let fibonacciArray = [1, 1, 2, 3, 5, 8, ...newMidArray, 55, 89];

let arr1 = ['a', 'b', 'c', 'd'];
let arr2 = ['e', 'f', 'g', 'h'];

let arr3 = [...arr1, ...arr2];

let person1 = { name: 'John', age: 39};
let person2 = {name: 'Alice', email: 'alice@email.com'};

let mergePerson = {...person1, ...person2};

let firstSet = ['q', 'w', 'e', 'r', 't', 'y'];
let secondSet = ['1', '3', '3', '7'];

let cluster;

cluster = [...firstSet, ...secondSet];

let goodGrades = ['A', 'B'];
let notSoGoodGrades = ['C', 'D', 'F'];

let grades;

grades = [...goodGrades, ...notSoGoodGrades];

console.log(thisNumber);
console.log(settings);
console.log(settings.number = 11);
console.log(settings.time = 'eleven');
console.log(i = 3);
console.log(numberFive);
console.log(greeting);
console.log(name);
console.log(age);
console.log(married);
console.log(cats);
console.log(house);
console.log(newHouse);
console.log(newString);
console.log(newNumber);
console.log(newBoolean);
person.getFullName();
carMiles.getUpdatedOdometer();
console.log(user.fullName());
console.log(product.newPayments());
console.log(greaterThan);
console.log(newGreaterThan);
console.log(equalTo);
console.log(normArray);
console.log(fibonacciArray);
console.log(arr3);
console.log(mergePerson);
console.log(cluster);
console.log(grades);