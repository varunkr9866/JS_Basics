//OBJECTS IN JAVASCRIPT
let dog = {
    breed : 'Golden Retriver',
    color : 'Orange',
    weight : 18,
    'response to' : ['wistle','clap','throw ball'],
    tag_no : 776
}

let dogColor = dog.color;
console.log(`color of the Dog is : ${dogColor}`);
console.log(`Weight of the dog is : ${dog.weight} Kilos`);

let response = dog ['response to'];
console.log(`My dog response to ${response}`);
console.log(dog.tag_no);
//ACCESSING THE KEY VALUE PAIRS 
console.log(dog);
console.log(dog['response to']);

//PROPERTY ASSIGNMENTS

let baby = {
    cat : 'kitten',
    dog : 'dog',
    kangaroo : 'zoey',
    'horse baby' : 'fawn',
    'baby duck' : 'duckling',
    'lion' : 'cub',
    sheep : 'lamb'
}

baby.cow = 'calf';
baby['Baby Monkey'] = 'Infant';

//DELETE PROPERTY
delete baby.sheep;
delete baby['Baby Monkey'];

console.log(baby);

//FUNCTION EXPRESSION AS PROPERTY
const actions = {
        sayHello : function() {
        console.log("Hello Everyone!!");
    },
        sayNamaste : function(person) {
        console.log(`Namaste ${person},How are you?`);
    },
    add : function (num1, num2){
        return num1 +num2;
    }
}

actions.sayHello();
actions.sayNamaste('varun');
console.log(actions.add(1,2));

//PASS BY REFERENCE 
 let profile ={
    fullName: 'Varun',
    lastname : 'Reddy',
    children : 0,
    parents :['Jayarami Reddy','Lakshumma'],
    salaried : true
 }

 const modifyName = function (obj,changeName){
    obj.fullName = changeName;
 }

 const addChild = obj =>{
    obj.children = obj.children + 1;
 }

 addChild(profile);
 console.log(profile);

 //iterate using for..in
 
let babys = {
    cat : 'kitten',
    dog : 'puppy',
    kangaroo : 'zoey',
    'horse baby' : 'fawn',
    'baby duck' : 'duckling',
    'lion' : 'cub',
    sheep : 'lamb'
}
for(let key in baby){
    console.log(`child of ${key} is ${baby[key]}`);
    
}