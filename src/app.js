const assignment = require('./assignment');

const { sumOfNumbersTo, countEvenNumbers, celsiusToFahrenheit } = assignment;

if (sumOfNumbersTo && typeof sumOfNumbersTo === 'function'){
    console.log(sumOfNumbersTo(99));
}

if (assignment.countEvenNumbers && typeof assignment.countEvenNumbers === 'function'){
    console.log(assignment.countEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
}

if (celsiusToFahrenheit && typeof celsiusToFahrenheit === 'function'){
    console.log(celsiusToFahrenheit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
}