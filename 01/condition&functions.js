//CONDITIONS & FUNCTION
let flag = true;
if(flag){
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


