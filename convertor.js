"use strict"

// Convert kilometers to meters, hours to minutes, kilograms to grams.

// let number = prompt("Enter number");
// let measureUnit = prompt("Enter measureUnit");
let number = 1;
// let number = 10;
// let number = 100;
// let measureUnit = 'km';
// let measureUnit = 'h';
let measureUnit = 'kg';

switch (measureUnit) {
    case "km":
        result = number * 1000;
        console.log(number + 'km = ' + result + 'm');
        break;
    case "h":
        result = number * 60;
        console.log(number + 'h = ' + result + 'min');
        break;
    case "kg":
        result = number * 1000;
        console.log(number + 'kg = ' + result + 'g');
        break;
    default:
        console.log('What ?');
}