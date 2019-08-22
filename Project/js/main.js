const products = [
    {id: 1, title: 'Notebook', price: 1000},
    {id: 2, title: 'Mouse', price: 100},
    {id: 3, title: 'Keyboard', price: 250},
    {id: 4, title: 'Gamepad', price: 150},
];

const renderProduct = (title = '', price = 0) => `<div class="product-item">
                                            <h3>${title}</h3>
                                            <img src="https://place-hold.it/150">
                                            <p>${price} $</p>
                                            <button class="by-btn">Add</button>
                                        </div>`;

// const renderProducts = list => {
//     const productList = list.map(item => renderProduct(item.title, item.price));
//     document.querySelector('.products').innerHTML = productList;
// };
// const renderProducts = list => document.querySelector('.products').innerHTML = list.map(item => renderProduct(item.title, item.price));
const renderProducts = list => document.querySelector('.products').innerHTML = list.map(item => renderProduct(item.title, item.price)).join('');

renderProducts(products);

