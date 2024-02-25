"use strict"

/*У нас параноя, ми не довіряємо жодним адресам, окрім зареєстрованих на доменах gmail.com та yahoo.com.
    За допомогою регулярного виразу створіть масив з адресами, гідними довіри.
    Постарайтеся також зробити просту валідацію до @
- одне, або два слова які, можуть містити (латинські букви, цифри) яке може бути розділене крапкою.*/

var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    }
];

// Функція, яка перевіряє масив та виводить емейли з довіреними доменами
function checkForTrustedEmails() {
    let regExp = /\w*.\w@(gmail|yahoo)(.com)|(^.ru)/gm;
    let trustedEmails = [];
    let obj = {};
    for (let i in arr) {
        obj = arr[i];
        if (obj.email.match(regExp) !== null) {
            trustedEmails.push(arr[i]);
        }
    }
    console.log("Trusted account(s):\n", trustedEmails);
}

checkForTrustedEmails(arr);

