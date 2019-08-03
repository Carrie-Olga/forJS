//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

// let num = 10;
// let i = 0;
// while (i <= num) {
//     console.log(i);
//     i++;
// }

//3. Товары в корзине хранятся в массиве. Задачи:
//Организовать такой массив для хранения товаров в корзине;
//Организовать функцию countBasketPrice, которая будет считать стоимость корзины


const cartObj = [{name: 'first item', price: 200}, {name: 'second item', price: 300}, {name: 'second item', price: 100}];
//console.log(cartObj[0].price);
console.log(countBasketPrice(cartObj));

function countBasketPrice(obj) {
    let sum = 0;
    for (let i = 0; i < obj.length; i++) {
        sum += obj[i].price;
    }
    return sum;
}