document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [
        { id: 1,  name: 'Samsung Galaxy S24 Ultra', price: 114990.0, quantity: 2, image: '/../product/images/mobile/product-mobile1.jpg' },
        { id: 11,  name: 'Apple Watch Ultra', price: 89990, quantity: 2, image: '/../product/images/watch/watch1.jpg' },
        { id: 21,  name: 'MSI Cyborg 15', price: 67990, quantity: 2, image: '/../product/images/laptop/laptop1.jpg' }
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
                        <div class="item-price">${item.price.toFixed(2)}</div>
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
        subtotalElement.textContent = `${subtotal.toFixed(2)}`;
        totalElement.textContent = `${(subtotal + 5).toFixed(2)}`;
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
