function celsiusToFahrenheit(celsius){
    return celsius *(9 / 5) + 32;
}

const celsiusInput = ProcessingInstruction.argv[2];
const fahrnheitValue = celsiusToFahrenheit(celsiusInput);

console.log(`${celsiusInput} degrees Celsius = ${fahrnheitValue} degrees Fehrenheit`);

