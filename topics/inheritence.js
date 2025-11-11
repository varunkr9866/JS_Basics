//extends keyword
class Alpha{
constructor(x,y){
this.x = x;
this.y = y;
}
showAlpha(){
cosole.log("value of x : +this.x");
cosole.log("value of y : +this.y");
}
static sayHello(){
cosole.log("Hello everyone!!");
}

}
class Beta extends Alpha{
static sayName(person){
cosole.log("Namaste ${person}, welcome to india!");
}
constructor(x,y,z){
super(x,y);
this.z = z;
}
showAlpha(){
cosole.log("value of x : +this.x");
cosole.log("value of y : +this.y");
cosole.log("value of z : +this.z");
}
sum(){
return(this.x+this.y+this.z);
}

//TO ACCESS THE STATIC METHOD IN JS
