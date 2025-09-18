//FUNCTIONS
const  addTwoNumbers =(a,b) =>{
    console.log(`sum of two numbers is :${a + b}`);
}

addTwoNumbers(7,8);

let addMethod = addTwoNumbers;

addMethod(8,8);

//name method

console.log(addMethod.name);

//CALL BACK FUNCTION
