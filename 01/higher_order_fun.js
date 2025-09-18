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
const sums = (param,a,b) =>{
    param(a,b);
    console.log(`Finished adding two numbers`);
}

const addup = (x,y){
    console.log(`Sum of Two numbers is :${x + y}`);
}
sums(addup);