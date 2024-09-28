document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [
        { id: 1, name: 'Product 1', price: 29.99, quantity: 1, image: 'product1.jpg' },
        { id: 2, name: 'Product 2', price: 49.99, quantity: 2, image: 'product2.jpg' },
        { id: 3, name: 'Product 3', price: 19.99, quantity: 1, image: 'product3.jpg' },
    ];

    const cartItemsContainer = document.getElementById('cartItems');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');
    const itemCountElement = document.getElementById('itemCount');

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let subtotal = 0;
        cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <div class="item-details">
                    <img src="${item.image}" alt="${item.name}" class="item-image">
                    <div>
                        <div class="item-name">${item.name}</div>
                        <div class="item-price">$${item.price.toFixed(2)}</div>
                    </div>
                </div>
                <div class="item-quantity">
                    <button class="quantity-btn" onclick="changeQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
                </div>
            `;
            cartItemsContainer.appendChild(itemElement);
            subtotal += item.price * item.quantity;
        });
        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        totalElement.textContent = `$${(subtotal + 5).toFixed(2)}`;
        itemCountElement.textContent = `${cartItems.length} items`;
    }

    window.changeQuantity = (id, delta) => {
        const item = cartItems.find(item => item.id === id);
        if (item) {
            item.quantity += delta;
            if (item.quantity < 1) {
                item.quantity = 1;
            }
            updateCart();
        }
    };

    window.checkout = () => {
        alert('Proceeding to checkout...');
    };

    updateCart();
});
