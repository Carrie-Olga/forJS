//2. Реализовать модуль корзины. Создать блок товаров
// и блок корзины. У каждого товара есть кнопка 
//«Купить», при нажатии на которую происходит 
//добавление имени и цены товара в блок корзины. 
//Корзина должна уметь считать общую сумму заказа.

const buttons = document.querySelectorAll('button');
const cart = document.querySelector('.cart');
var total = 0;

buttons.forEach(btn => {
    btn.addEventListener('click', moveToCart);
})

function moveToCart(event) {
    var button = event.target;
    var itemToMove = button.previousSibling.previousSibling;
    //console.log(itemToMove);
    var name = itemToMove.firstElementChild;
    //console.log(name);
    var price = itemToMove.lastElementChild;
    //console.log(price);
    cart.appendChild(name);
    cart.appendChild(price);
    total = total + parseInt(price.innerText); 
    totalAmount.innerText = 'You purchased good for total of ' + total;
    //console.log(total);
}
var totalAmount = document.createElement('p');
totalAmount.innerText = 'You purchased good for total of ' + total;
cart.appendChild(totalAmount);
