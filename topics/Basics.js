//Printing Statments in JavaScript
console.log("Hello Varun");
console.log('My name is varun');
console.log(2002);

//Single Line Comment & Multiline Comment

console.log("Varun"); //Single Line Commit

/*
console.log('My name is varun');
console.log(1987);
We are Writing anything over here is commented
*/

//Data TYpes in JS
console.log("Varun");
console.log('javascript');
console.log(5);
console.log(29.7);
console.log(5>2);
console.log(5<=5);

//NULL AND UNDEFINED
var a = null; //Assigning Null
console.log(a);

var b; //Not assigning anyvalue
console.log(b);//undefined value

//ARTHMETIC OPERATIONS
console.log(62 + 32);
console.log(62 - 32);
console.log(62 * 32);
console.log(62 / 32);
console.log(62 % 32);

//String Concatenation

console.log('Varun' + 'Reddy'); //VarunReddy
console.log('Varun' + ' ' +  'Reddy'); //Varun Reddy

//STRING LENGTH
console.log('Hello'.length); //5

//STRING METHODS
console.log('Varun'.toUpperCase()); //VARUN
console.log('Varun'.toLowerCase()); //varun
console.log('Varun'.startsWith('V'));//true
console.log('Varun'.startsWith('r'));//false

//BUILT-IN-OBJECTS
console.log(Math.random());//Generates Random Number from 0 to 1
console.log(Math.floor(65.87));//65
console.log(Math.ceil(65.87));//66
console.log(Number.isInteger(76));
console.log(Number.isInteger(75.35)); 

//LOCAL VARABLES USING LET AND CONST (ES6)
let myName = "Varun";
const age = 24;
console.log(myName);
console.log(age);

//UNARY, BINARY AND TERNARY OPERATORS
var num = 55; //UNARY
num += 5; //num = num+5; 
var a = 5 + 6; //BINARY
(condition) ? 56 : 65 ; //TERNARY

//typeof
let foo = 'Super Man'
console.log(typeof foo);
foo = 1987;
console.log(typeof foo);
foo = 5>2;
console.log(typeof foo);
