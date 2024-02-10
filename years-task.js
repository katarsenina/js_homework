"use strict"

var age = prompt("Вкажіть ваш вік від 1 до 100");
// console.log(age, typeof age);
age = Number(age);
// console.log(age, typeof age);
if (isNaN(age) || age <= 0 || age > 100) {
    console.log(age, "Це не число від 0 до 100");
} else if (age >= 2 && age <= 4) {
    console.log("Ваш вік ", + age, "роки");
} else if (age == 1 || age == 21 || age == 31
    || age == 41 || age == 51 || age == 61
    || age == 71 || age == 81 || age == 91) {
    console.log("Ваш вік ", + age, "рік");
}
else {
    console.log("Ваш вік ", + age, "років");
}