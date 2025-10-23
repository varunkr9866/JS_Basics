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



