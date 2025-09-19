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
