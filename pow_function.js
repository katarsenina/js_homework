"use strict"

// Функцію pow(x, y) яка приймає 2 числа, де перше - це число, яке ми будемо зводити у ступінь,
// друге - у яку ступінь.
function pow (number, score){
    let j = number;
    if (number === 0){
        console.log(0);
    } else if (score === 0 ) {
        console.log(1);
    } else {
        for (var i = 1; i < score; i++) {
            number *= j;
        }
        console.log(number);
    }
}
pow(2, 8);