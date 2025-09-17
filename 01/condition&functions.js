//CONDITIONS & FUNCTION
let flag = true;
if (flag) {
    console.log("Salute,salute,Salute");
}

//NON-BOOLRAN INSIDE IF CONDITION
/*
FOR NUM '0' IS false,REMAINING NUMBER ITS true;
STRING '' , "" & NULL ALL ARE false;
undefined OR NULL OR NaN IS false;
*/

//SHORT CIRCUIT ASSIGNMENT
let myName = 'varun';
let person = myName || 'nobody';
console.log(`You know ,${person} is a good person`);

let Name = '';
let Person = Name || 'nobody';
console.log(`You know ,${Person} is a good person`);

//SWITCH CASE

let position = 'second';

switch (position) {
    case 'first':
        console.log(1);

        break;
    case 'second':
        console.log(2);

        break;
    case 'third':
        console.log(3);

        break;

    default:
        break;
}

//FUNCTION IN JS

function sayHello(){
    console.log('Hello Everyone');
}
function sayWishes(){
    console.log('Congrats');
    
}

sayHello();
sayWishes();

//functions

function sayHello(myName){
    console.log(`Hello ${myName} How are you`);
}
function sayWishes(myName){
    console.log(`Congrats ${myName} that's amazing`);
    
}
sayWishes('Varun');

//DEFAULT PARAMETERS

function sayHello(myName = 'Nobody'){
    console.log(`Hello ${myName} How are you`);
}
sayHello();

//RETURN TYPE
function area(b,h){
    let area = b * h;
    return area;
}
console.log(area(2,3));

//HELPER FUNCTIONS
function mangoWeight(count){
    return count * 0.25;
}
function mangoCost(count){
    return mangoWeight(count) * 175;
}
let costOfMangos = mangoCost(10);
console.log(`${costOfMangos}`);

//WAYS WE CAN EXPRESS FUNCTION

var traingleArea = function (b , h){
    let area = 0.5 * b * h ;
    return area;
}
var area = traingleArea;
traingleArea = null;
console.log(`Using Area Varable:${area(10,10)}`);

//ARROW HEAD FUNCTION

var traingleArea = (base , height)=>{
    let area = 0.5 * base * height;
    return area;
}
var area = traingleArea;
console.log(`Using Area Varable:${area(10,10)}`);

//CONSIDER BODY
var traingleArea = (base,height) =>0.5*base*height;
var area = traingleArea;
console.log(area(12,3));

//SCOPE
let valueOne = 10;  //global scope
function funA(){
    var valueTwo =20; //function scope var
    console.log(valueOne); //Accessing Global Scope Variable
}
function funB(){
    var valueThree =30; //Blocking scope
    console.log(valueOne); //Accessing Global Scope Variable
}