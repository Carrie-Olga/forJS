class Cart {
    constructor(container) {
        this.container = container;
        this.cartGoods = [];
        this.cartProducts = [];
        this._fetchProducts();
        this._render();
        this._cartTotal();
        this.clearCart();
        this.sendOrder();
    }
    _fetchProducts() { //put user selected goods in cartProduct (make them cart products, not regular)
        //pick a good selected by user
        //push it to the cartGoods array
    }
    _render() { //take each good and make a cart item of it
        const block = document.querySelector(this.container);

        for (let product of this.cartGoods) {
            const productObject = new CartItem(product);
            this.cartProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render())
        }
    }
    _cartTotal(products) {
        let sumCount = 0;
        for (let product in products) {
            const itemPrice = product.price;
            sumCount += itemPrice;
        }
        const block = document.querySelector(this.container);
        const total = `<div class = "cart-total">
                        <p>You ordered for ${sumCount} euro</p>
                        </div>`;
        block.insertAdjacentHTML('beforeend', total);
    }
    clearCart() {

    }
    sendOrder() {

    }
}

class CartItem {
    constructor(product, img = 'https://placehold.it/200x130') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
        this.modifyQuantity();
        this.deleteProduct();
    }
    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} Euro</p>
                    <button class="buy-btn">Buy</button>
                </div>
            </div>`;
    }
    modifyQuantity() {

    }
    deleteProduct() {

    }
}