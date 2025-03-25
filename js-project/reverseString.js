const reverseString = function(str) {
 return str.split('').reverse().join('');
};

console.log(reverseString('Hello World!'));


module.exports = reverseString;