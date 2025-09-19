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