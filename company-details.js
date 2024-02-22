"use strict"

//Вам необхідно написати функцію findValueByKey(Object, companyName),
// яка буде приймати значення у вигляді 'Клієнт 1.2' ('Велика Компанія', 'Клієнт 2'... )
// та надавати інформацію про цю subCompany.

const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};
function findValueByKey(Object, companyName) {
    Object = Object || company;
    companyName = companyName || "Клієнт 1.1";
    if (companyName === 'Велика Компанія') {
        console.log(company);
    }
    else if (companyName === "Клієнт 1")
        console.log(company.clients[0]);
    else if (companyName === "Клієнт 2")
        console.log(company.clients[1]);
    else if (companyName === "Клієнт 1.1" ) {
        console.log(company.clients[0].partners[0]);
    } else if ( companyName === "Клієнт 1.2") {
        console.log(company.clients[0].partners[1]);
    } else {
        console.log(company.clients[0].partners[1].partners[0]);
    }
}

findValueByKey();