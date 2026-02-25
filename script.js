let cart = [];

function addToCart(name, price) {
    cart.push({name: name, price: price});
    updateCart();
}

function updateCart() {
    let cartDiv = document.createElement('div');
    cartDiv.innerHTML = `<h3>Your Cart</h3><ul>${cart.map(item => `<li>${item.name} - $${item.price.toFixed(2)}</li>`).join('')}</ul><strong>Total: $${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</strong>`;
    document.body.appendChild(cartDiv);
}