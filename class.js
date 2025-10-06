//Instance Object Creation
let dog = {
_breed:'Golden Retriver',
_weight:18,
_color:'Orange',

//Getters
//Setters
//methods
}

//Factory Object Creation
const dogFactory = (breed,weight,color) =>{
 return{
  _breed:breed,
  _weight:weight,
  _color:color,
  //Getters
  //Setters
  //methods
 }
}

let d1 = dogFactory('Labrador',18,'Orange');

//class representation in js

class Dog{
constructor(breed,weight,color){
this._breed:breed,
this._weight:weight,
this._color:color,

//Getter&setter methods
get breed(){
return this_breed;
}
get weight(){
return this_weight;
}

get color(){
return this_color;
}

set breed(newBreed){
if(typeof newBreed == 'string'){
this._breed = newBreed;
}
set weight(newWeight){
if(typeof newWeight == 'string'){
this._weight = newWeight;
}
set color(newColor){
if(typeof newColor == 'string'){
this._color = newColor;
}
else{
console.log("Please enter correct values")
}
}
}

//this represents object level variables

//dereferencing the objects
var object1 = new Object();
object1 = null;
