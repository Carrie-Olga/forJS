const products = [
    {id: 1, title: 'Notebook', price: 1000},
    {id: 2, title: 'Mouse', price: 100},
    {id: 3, title: 'Keyboard', price: 250},
    {id: 4, title: 'Gamepad', price: 150},
];

const renderProduct = (item, img = 'https://place-hold.it/150') => `<div class="product-item">
                                                                        <h3>${item.title}</h3>
                                                                        <img src="${img}" alt = 'Image'>
                                                                        <p>${item.price} $</p>
                                                                        <button class="by-btn">Add</button>
                                                                    </div>`;

// const renderProducts = list => {
//     const productList = list.map(item => renderProduct(item.title, item.price));
//     document.querySelector('.products').innerHTML = productList;
// };
// const renderProducts = list => document.querySelector('.products').innerHTML = list.map(item => renderProduct(item.title, item.price));
const renderProducts = list => document.querySelector('.products')
.insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));

renderProducts(products);

