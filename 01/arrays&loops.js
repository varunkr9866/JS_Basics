//ARRAYS
let southEastAsia = ['India', 'Pakistan', 'Bangladesh'];
console.log(southEastAsia);

//ACCESSING ARRAYS
let southAsia = ['India','Pakistan','Bangladesh','Buthan','Burma','Nepal'];

southAsia[4] = 'Myannmar';
console.log(`Burma is replaced by ${southAsia[4]} recently!`);

//ARRAY PUSH  METHOD
const northAmerica = ['Canada','United States of america','Mexico'];
northAmerica.push('Panama');
console.log(northAmerica[3]);

northAmerica.pop('Panama');

console.log(northAmerica);

//LENGTH OF STRING
let str ="Varun is A Good boy";
console.log(str.length);

//UNSHIFT | SHIFT
let nato = ['USA','UK','Germany','Canada','France','Italy','Turkey'];
nato.unshift('Ukraine');
// nato.shift('Ukraine');

console.log(nato);

//SLICE ARRAYS
console.log(`Initial  naton was ${nato.slice(1,7)}`);
