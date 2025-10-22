//MODULES IN JS
function celsiusToFahrenheit(celsius){
    return celsius *(9 / 5) + 32;
}

const freezingPointC = 0;
const boilingPointC = 100;


const freezingPointF = celsiusToFahrenheit(freezingPointC);
const boilingPointF = celsiusToFahrenheit(boilingPointC);


console.log(`This is freezing point of water in Fehrenheit is ${freezingPointF}`);
console.log(`This is boiling point of water in Fehrenheit is ${boilingPointF}`);


MediaSourceHandle.export.celsiusToFahrenheit = celsiusToFahrenheit;