"use strict"

// Калькулятор вартості послуг
/*"Послуги" можуть додаватися по ходу роботи:

    services['Розбити скло'] = "200 грн";

Умови виконання ДЗ
створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
створити метод minPrice() - який повертає мінімальний price
створити метод maxPrice() - який повертає максимальний price*/

var services = {

    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    price: sum,
    minPrice: minPrice,
    maxPrice: maxPrice

};
// Методи minPrice() та maxPrice() поки не зроблені
function minPrice() {

}
function  maxPrice() {

}

// Метод отримання суми всіх наявних послуг
function sum() {
    let c = 0;
    for (let key in this) {
        if (typeof this[key] !== 'function') {
            c += parseInt(this[key]);
        }
    }
    console.log("Total price: ",c);
}

// services['Розбити скло'] = "200 грн";
// delete services['Розбити скло'];
services.price();
// services.minPrice();
// services.maxPrice();