let cart = [];
function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
    updateCartDisplay();
}
function updateCartDisplay() {
    const cartDiv = document.createElement('div');
    cartDiv.id = 'cart';
    cartDiv.innerHTML = `<h3>Your Cart</h3><ul>${cart.map(item => `<li>${item.name} - $${item.price.toFixed(2)}</li>`).join('')}</ul><p>Total: $${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</p>`;
    document.body.appendChild(cartDiv);
}