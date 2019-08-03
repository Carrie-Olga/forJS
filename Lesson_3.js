//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
//Почему код в конце этого задания выдает бесконечный цикл? Не могу понять, вроде логика правильная...

var arr = [];
for (var i = 1; i < 101; i++) {
    arr.push(i);
}
console.log(arr.length);

for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0 || arr[i] == 1)  {
            arr.splice(i, 1);
        } 
}
console.log(arr.length);

for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 8 && arr[i] % 3 == 0)  {
        arr.splice(i, 1);
    } 
}
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 8 && arr[i] % 5 == 0)  {
        arr.splice(i, 1);
    } 
}
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 8 && arr[i] % 7 == 0)  {
        arr.splice(i, 1);
    } 
}
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 8 && arr[i] % 9 == 0)  {
        arr.splice(i, 1);
    } 
}
console.log(arr);
console.log(arr.length);

//Этот код вместо строк с 17 по 36:
// for (var j = 3; j < 10; j + 2) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > 8 && arr[i] % j == 0)  {
//             arr.splice(i, 1);
//         } 
//     }
// }

//3. Товары в корзине хранятся в массиве. Задачи:
//Организовать такой массив для хранения товаров в корзине;
//Организовать функцию countBasketPrice, которая будет считать стоимость корзины


// const cartObj = [{name: 'first item', price: 200}, {name: 'second item', price: 300}, {name: 'second item', price: 100}];
// //console.log(cartObj[0].price);
// console.log(countBasketPrice(cartObj));

// function countBasketPrice(obj) {
//     let sum = 0;
//     for (let i = 0; i < obj.length; i++) {
//         sum += obj[i].price;
//     }
//     return sum;
// }

//4. Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. 
