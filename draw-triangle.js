"use strict"

// Задача 1 - Намалювати трикутник за допомогою функції

// Варіант 1 з циклом for
function drawTriangle(height, symbol) {
    height = height || 5;
    symbol = symbol || "*";
    var j = symbol;
    for (var i = height; i > 0; i--) {
        console.log(symbol);
        symbol += j;
    }
}
drawTriangle();

// Варіант 2 з циклом do ... while

/* let drawTriangle = function (height, symbol) {
    height = height || 5;
    symbol = symbol || "*";
    var j = symbol;
        do { --height;
            console.log(symbol);
            symbol += j;
        } while (height > 0)
}
drawTriangle(7, '#');*/
