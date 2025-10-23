// const bringChoclates = function (){
//     let didBringChoclates = false;
//     console.log('Getting Ready to go to markets');
//     console.log('Booking a cab to the store');
//     console.log('Selecting the Choclates');
//     console.log('Making the payments');

//     didIBringChoclates = true;

//     if (didIBringChoclates == true) {
//         console.log('kishan says: Thanks You appa!');

//     } else {
//         console.log('Kishan Crying in the Corner')
//     }
// }

// bringChoclates();

//  THE OTHER WAY TO DO IT
// const bringChoclates = function (){
//     let didBringChoclates = false;
//     setTimeout(() =>{ console.log('Getting Ready to go to markets')},2000);
//     setTimeout(() =>{ console.log('Booking a cab to the store')},4000);
//     setTimeout(() =>{ console.log('Selecting the Choclates')},6000);
//     setTimeout(() =>{ console.log('Making the payments')},8000);

//     setTimeout(() =>{
// didIBringChoclates = true;

//     if (didIBringChoclates == true) {
//         console.log('kishan says: Thanks You appa!');

//     } else {
//         console.log('Kishan Crying in the Corner')
//     }
// },12000);
// }

// bringChoclates();

//THE OTHER WAY TO DO IT
const didIBringChoclates = function (resolve, reject) {
  let didIBringChoclates = false;
  setTimeout(() => {
    console.log("Getting Ready to go to markets");
  }, 2000);
  setTimeout(() => {
    console.log("Booking a cab to the store");
  }, 4000);
  setTimeout(() => {
    console.log("Selecting the Choclates");
  }, 6000);
  setTimeout(() => {
    console.log("Making the payments");
  }, 8000);

  setTimeout(() => {
    didIBringChoclates = true;

    if (didIBringChoclates == true) {
      resolve();
    } else {
      reject();
    }
  }, 12000);
};

function eatTheChoclates()() {
    console.log('Kishan say thanks papa!');
    
}
function cryInACorner() {
    
    console.log('Kishan say thanks papa!');
}
let iPromiseToBringChoclates = new Promise(tryToBringChoclates);

iPromiseToBringChoclates.then(eatTheChoclates).catch(cryInACorner);


const profiles = {
    'balaji' :{
        fullname : 'Balaji KR',
        age:35,
        married:true;
        hobbies:['Defence','Finance','Foreign Affairs']
    },
    'seema' :{
        fullname : 'seema H',
        age:30,
        married:true;
        hobbies:['Cooking','Painting','Arts & Craft ']
    },
    'balaji' :{
        fullname : 'Kishan KR',
        age:10,
        married:true;
        hobbies:['Football','Video Games']
    },
    'balaji' :{
        fullname : 'Rajeevalochana KV',
        age:70,
        married:true;
        hobbies:['Watching TV']
    }
}

//STAGE 1
// let goToHell = new Promise(keyPromiseFunction);

// function keyPromiseFunction(resolve,reject) {
//     //callback function for Promise
// }
// function displayKeys(keys) {
//     //callback function for resolve
// }
// function error(msg) {
//     //callback function for reject
// }
//  goToHell.then(displayKeys).catch(error);


let goToHell = new Promise(keyPromiseFunction);

function keyPromiseFunction(resolve,reject) {
    setTimeout((objs) =>{
        let keys = Object.keys(objs);
        (keys.length>0)?
        resolve(keys):
        reject(`Error While Parsing Keys From Object`);
    },2000,profiles);
}
function displayKeys(keys) {
    console.log(keys);
}
function error(msg) {
    console.log(msg);
    
}
 goToHell.then(displayKeys).catch(error);


