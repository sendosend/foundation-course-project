const leapYears = function (year) {
    const ifYeardivFour = year % 4 === 0;
    const isCentury =  year % 100 === 0;
    const isYearDivFourHundred = year % 400 === 0;

    if (
        ifYeardivFour && 
        (!isCentury || isYearDivFourHundred)
    ) {
        return true;
    } else {
        return false
    }
}

console.log(k);


module.exports = leapYears;