function celsiusToFahrenheit(celsius){
    return celsius *(9 / 5) + 32;
}

module.exports.celsiusToFahrenheit = celsiusToFahrenheit;


module.exports.fahrenheitTocelsius = function (fahrenheit){
    return(fahrenheit - 32) * (5 / 9);
};