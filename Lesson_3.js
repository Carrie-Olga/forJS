//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
// //Почему код в конце этого задания выдает бесконечный цикл? Не могу понять, вроде логика правильная...

// var arr = [];
// for (var i = 1; i < 101; i++) {
//     arr.push(i);
// }
// console.log(arr.length);

// for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0 || arr[i] == 1)  {
//             arr.splice(i, 1);
//         } 
// }
// console.log(arr.length);

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > 8 && arr[i] % 3 == 0)  {
//         arr.splice(i, 1);
//     } 
// }
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > 8 && arr[i] % 5 == 0)  {
//         arr.splice(i, 1);
//     } 
// }
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > 8 && arr[i] % 7 == 0)  {
//         arr.splice(i, 1);
//     } 
// }
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > 8 && arr[i] % 9 == 0)  {
//         arr.splice(i, 1);
//     } 
// }
// console.log(arr);
// console.log(arr.length);

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


const cartObj = [{
    name: 'first item', 
    price: 200,
    count: 2
}, 
{
    name: 'second item', 
    price: 300,
    count: 1
}, 
{
    name: 'second item', 
    price: 100,
    count: 2
}];

// var sum = 0; //summing using forEach
// cartObj.forEach((good) => {
//     sum += good.price * good.count;
// });
// console.log(sum);

 //summing using reduce
// const totalPrice = cartObj.reduce((sum, good) => {
//     sum += good.price * good.count;
//     return sum;
// }, 0)
// console.log(totalPrice);

//console.log(countBasketPrice(cartObj)); //summing using countBasketPrice function
// function countBasketPrice(obj) {
//     let sum = 0;
//     for (let i = 0; i < obj.length; i++) {
//         sum += obj[i].price;
//     }
//     return sum;
// }


//4. Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. 
// for (var i = 0; i < 10; console.log(i++)) {

// }


//5. Нарисовать пирамиду с 20 рядами с помощью console.log
// function pyramid() {
//     var rows = 20;
//     var output = "";
//     for (var i = 1; i <= rows; i++) {
//         for (var j = 1; j <= i; j++) {
//             output += "x";
//         }
//         console.log(output);
//         output = "";
//     }
// } 
// pyramid();

// for (var i = 0; i < 10; console.log('x'.repeat(i++))) {

// }

//6. *Написать свою реализацию функции forEach и map
// const arr = [1, 2, 3, 4, 5];
// arr.forEach((item, index) => {
//     console.log(item, index);
//     console.log(item);
//     console.log(index);
// }) 

//7. *Написать свою реализацию функции forEach и map без использования цикла(рекурсия)
//8. *Написать бота для игры написаной на вебинаре(код в гитлабе)