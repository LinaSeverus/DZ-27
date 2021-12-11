'use strict';

const targetObj = {
    name: `Max`,
    age: 30
}

function getInfo(country, city) {
    console.log(`Имя: ${this.name} Возвраст: ${this.age}`);
    console.log(`Страна: ${country} Город: ${city}`);
}




function bind(foo, context, ...args) {

    context.newKey = foo;                                               // делаем нашу функцию методом нужного объекта, чтоб привязаться к его контексту
    const newFunc = context.newKey(...args);
    delete context.newKey;                                             //возвращаем внешний объект к первоначальному состоянию
    return newFunc

}

console.log(bind(getInfo, targetObj, `Ukraine`, `Odessa`));
