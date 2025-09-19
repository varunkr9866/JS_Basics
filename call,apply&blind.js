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
let personName = function (obj){
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
