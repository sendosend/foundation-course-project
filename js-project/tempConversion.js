const convertToCelsius = function(fahrenheit) {
    return Number(((fahrenheit - 32) * 5/9).toFixed(2));
};

const convertToFahrenheit = function(celsius) {
    return Number(((celsius * 9/5) + 32).toFixed(2));
};

console.log(convertToCelsius(100));
console.log(convertToFahrenheit(37.78));
console.log(typeof(convertToCelsius()))


module.exports = {
  convertToCelsius,
  convertToFahrenheit
};