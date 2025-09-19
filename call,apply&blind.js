let personOne = {
    firstName: 'Varun',
    lastName: 'Reddy',
    printName() {
        console.log(this.firstName + " " + this.lastName);
    }
}
let personTwo = {
    firstName: 'sachin',
    lastName: 'tendulkar',
    printName() {
        console.log(this.firstName + " " + this.lastName);
    }
}


personOne.printName();
personTwo.printName();

//FUNCTION BORROWING 
//APPROACH METHOD 1
let personOne = {
    firstName: 'Varun',
    lastName: 'Reddy',
    printName() {
        console.log(this.firstName + " " + this.lastName);
    }
}
let personTwo = {
    firstName: 'sachin',
    lastName: 'tendulkar',
}
personOne.printName.call(personTwo);

//FUNCTION BORROWING 
//APPROACH METHOD 2
let personName = function (obj) {
    console.log(this.firstName + " " + this.lastName);
}
let personOne = {
    firstName: 'Varun',
    lastName: 'Reddy',
}
let personTwo = {
    firstName: 'sachin',
    lastName: 'tendulkar',
}
printName(personTwo);

//FUNCTION BORROWING 
//APPROACH METHOD 3
let printName = function (hometown, state) {
    console.log(`\n ${this.firstName} ${this.lastName} form ${hometown},${state}`);
}
let personOne = {
    firstName: 'Varun',
    lastName: 'Reddy',
}
let personTwo = {
    firstName: 'sachin',
    lastName: 'tendulkar',
}
printName.call(personOne, 'kadapa', 'AP');
printName.apply(personOne, ['kadapa', 'AP']);

//FUNCTION BORROWING 
//BIND METHOD
let printName = function (hometown, state) {
    console.log(`\n ${this.firstName} ${this.lastName} form ${hometown},${state}`);
}
let personOne = {
    firstName: 'Varun',
    lastName: 'Reddy',
}
let personTwo = {
    firstName: 'sachin',
    lastName: 'tendulkar',
}
let f1 = printName.bind(personOne, 'kadapa', 'AP');
let f2 = printName.bind(personOne, ['kadapa']);

f1();
f2();

//FUNCTION BORROWING 
//BIND METHOD
let printName = function (hometown, state) {
    console.log(`\n ${this.firstName} ${this.lastName} form ${hometown},${state}`);
}
let personOne = {
    firstName: 'Varun',
    lastName: 'Reddy',
}
let personTwo = {
    firstName: 'sachin',
    lastName: 'tendulkar',
}
printName.bind(personOne, 'kadapa', 'AP').call();
printName.bind(personOne, ['kadapa']).call();
