
let choice = document.querySelectorAll('.choice');
let sumCalories = 0;
let sumPrice = 0;

for (let i = 0; i < choice.length; i++) {
    let price = choice[i].dataset.price;
    let calories = choice[i].dataset.calories;
    let title = choice[i].dataset.title;

    choice[i].insertAdjacentHTML('afterend', `<span>${title}: ${price} rub and ${calories} calories</span><br>`);
    if (choice[i].checked) {
        sumCalories += parseInt(calories);
        sumPrice += parseInt(price);
    }
}
console.log(sumCalories, sumPrice);
document.querySelector('#log').innerHTML = `${sumPrice} rub and ${sumCalories} calories.`;

// function eventListener() {
//     let form = document.querySelector("form");
//     let log = document.querySelector("#log");
//
//     form.addEventListener("submit", function(event) {
//
//         event.preventDefault();
//     }, false);
// }


class Hamburger {
    constructor(size, stuffing, topping) {
        this.size = size;
        this.stuffing = stuffing;
        this.topping = topping;
    }
    getSize() { // Узнать размер гамбургера
        return this.size;
    }
    getStuffing() { // Узнать начинку гамбургера
        return this.stuffing;
    }
    addTopping(topping) { // Добавить добавку

    }
    removeTopping(topping) { // Убрать добавку

    }
    getToppings(topping) { // Получить список добавок

    }
    calculatePrice() {  // Узнать цен

    }
    calculateCalories() {   // Узнать калорийность

    }
}

//
// function eventListener() {
//     let form = document.querySelector("form");
//     let log = document.querySelector("#log");
//
//     form.addEventListener("click", function(event) {
//         let data = new FormData(form);
//         let output = "";
//         for (const entry of data) {
//             output = entry[0] + "=" + entry[1] + "\r";
//         };
//         log.innerText = output;
//         event.preventDefault();
//     }, false);
// }