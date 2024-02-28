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
    },
    {
        userName:"Olan",
        lastName:"_",
        email: "13$*!@2341dmitro.porohov@yahoo.com44$we1Vg54"
    }
];

// Функція, яка перевіряє масив та виводить емейли з довіреними доменами
function checkForTrustedEmails() {
    let regExp = /^([a-z0-9]+\.?[a-z0-9]+)@(gmail|yahoo)\.com$/;
    // let trustedEmails = [];
    let trust = {};
    let obj = {};
    for (let i in arr) {
        obj = arr[i];
        let testedEmail = obj.email;
                if (regExp.test(testedEmail) === true ) {
                    trust["email-" + i] = obj.email;
                }

    }
    console.log("Trusted account(s):\n", trust);
}

checkForTrustedEmails(arr);

