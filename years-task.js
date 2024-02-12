"use strict"

// Задача про визначення закінчення у віці

var age = prompt("Вкажіть ваш вік від 1 до 100");
// console.log(age, typeof age);
age = Number(age);
// var age = 91; 
if (isNaN(age) || age <= 0 || age > 100) {
    console.log("Вкажіть ваш вік від 1 до 100");
} else if ((age + 9) % 10 == 0 && age != 11) {
    console.log("Ваш вік", + age, "рік");
} else if ((age + 8) % 10 == 0 && age != 12) {
    console.log("Ваш вік", + age, "роки");
} else if ((age + 7) % 10 == 0 && age != 13) {
    console.log("Ваш вік", + age, "роки");
} else if ((age + 6) % 10 == 0 && age != 14) {
    console.log("Ваш вік", + age, "роки");
} else {
    console.log("Ваш вік", + age, "років");
}