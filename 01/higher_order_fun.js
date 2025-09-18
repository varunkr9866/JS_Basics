//FUNCTIONS
const  addTwoNumbers =(a,b) =>{
    console.log(`sum of two numbers is :${a + b}`);
}

addTwoNumbers(7,8);

let addMethod = addTwoNumbers;

addMethod(8,8);

//name method

console.log(addMethod.name);

//CALL BACK FUNCTIONS

const sum = (param) => {
    param(5,6);
    console.log(`Finished adding two numbers`);    
}

const add = (x,y)=> {
    console.log(`Sum of Two numbers is :${x + y}`);
}

sum(add);

sum((x,y) => {console.log(`Sum of Two numbers is :${x + y}`)
});

//DIFFRENT WAY
const sums = (param, a,b) =>{
    param(a,b);
    console.log(`Finished adding two numbers`);
}

const addup = (x,y)=>{
    console.log(`Sum of Two numbers is :${x + y}`);
}
sums(addup,5,6);

//ITERATORS
const fruitSalad = ['apple','pineapple','banana','orange','kiwi','custard'];

let itrFruit = function (fruit){
    console.log(`10 gms of ${fruit}`);
}

// fruitSalad.forEach(itrFruit);

//SECOND WAY
fruitSalad.forEach(function (fruit){
    console.log(`10 gms of ${fruit}`);
}
);
//THIRD WAY
fruitSalad.forEach((fruit) =>{
    console.log(`10 gms of ${fruit}`);
}
);

//MAP FUNCTION
const numbers = [1,2,3,5,7];
const logic = function (num){
    return num * num;
}
const squares = numbers.map(logic);