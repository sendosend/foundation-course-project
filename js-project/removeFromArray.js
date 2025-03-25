const { array } = require("yargs");

const removeFromArray = function(array) {
    array.splice(2, 1);
    return array;
};

console.log(removeFromArray([1,2,3,4]))

module.exports = removeFromArray;