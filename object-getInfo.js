"use strict"

// Задача 1 - Створити об'єкт з щонайменше трьома властивостями. Написати метод getInfo().

let obj = {
    flower: 'rose',
    height: 50,
    color: 'pink',
    paper: true,
    getInfo: test
}

// Функція, яка виведе значущі властивості об`єкта. Має цикл, який прибирає з виводу властивостей функцію отримання інформації
function test() {
    for (let key in this) {
        if (typeof this[key] !== 'function') {
            console.log(key + ': ' + this[key]);
        }
    }
}

// Функція, яка виведе всі властивості об`єкта разом з функцією

/*function test() {
    for (let key in this) {
        console.log(key + ': ' + this[key]);
    }
}*/

obj.getInfo();
obj.newProperty = "Gold ribbon";
obj.getInfo();

// console.log(obj);
// delete obj.newProperty;