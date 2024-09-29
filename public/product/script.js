document.addEventListener('DOMContentLoaded', () => {
    const quantityInput = document.getElementById('quantity');
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    const writeReviewBtn = document.querySelector('.write-review-btn');
    const viewProductBtns = document.querySelectorAll('.view-product-btn');

    // Quantity input validation
    quantityInput.addEventListener('change', (e) => {
        let value = parseInt(e.target.value);
        if (value < 1) {
            e.target.value = 1;
        }
    });

    // Add to cart functionality
    addToCartBtn.addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value);
        alert(` ${quantity} items to cart!`);
    });

    // Write a review functionality
    writeReviewBtn.addEventListener('click', () => {
        alert('Review form will be implemented here.');
        // Implement a modal or redirect to a review form
    });

    // View related product functionality
    viewProductBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const productPage = btn.getAttribute('data-href');
            window.location.href = productPage; // Navigate to the related product page
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        const container = document.querySelector('.related-products-container');
        const grid = document.querySelector('.related-products-grid');
        const cards = grid.querySelectorAll('.related-product-card');
        const dotNav = document.querySelector('.dot-navigation');
    
        // Create dots
        cards.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => scrollToCard(index));
            dotNav.appendChild(dot);
        });
    
        function scrollToCard(index) {
            const cardWidth = cards[0].offsetWidth + 20; // Include margin
            grid.style.transform = `translateX(-${index * cardWidth}px)`;
            
            // Update active dot
            document.querySelectorAll('.dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }
    
        // Optional: Add touch swipe functionality
        let startX, moveX;
        container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX;
        });
        container.addEventListener('touchmove', (e) => {
            moveX = e.touches[0].pageX;
        });
        container.addEventListener('touchend', () => {
            if (startX - moveX > 50) {
                // Swipe left
                let currentIndex = Array.from(document.querySelectorAll('.dot')).findIndex(dot => dot.classList.contains('active'));
                if (currentIndex < cards.length - 1) scrollToCard(currentIndex + 1);
            } else if (moveX - startX > 50) {
                // Swipe right
                let currentIndex = Array.from(document.querySelectorAll('.dot')).findIndex(dot => dot.classList.contains('active'));
                if (currentIndex > 0) scrollToCard(currentIndex - 1);
            }
        });
    });

    // Implement smooth scrolling for category links
    document.querySelectorAll('.category-menu a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const viewProductBtns = document.querySelectorAll('.view-product-btn');

    viewProductBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const productPage = btn.getAttribute('data-href');
            window.location.href = productPage; // Navigate to the specified page
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const categoryLinks = document.querySelectorAll('.category-menu a');
    const currentPath = window.location.pathname;

    categoryLinks.forEach(link => {
        // Highlight current category
        if (link.getAttribute('href').includes(currentPath)) {
            link.classList.add('active');
        }

        // Handle navigation
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Check if it's an anchor link (for index.html sections)
            if (href.includes('#') && href.includes('index.html')) {
                e.preventDefault();
                const targetId = href.split('#')[1];
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    // Smooth scroll to the target section
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                } else {
                    // If target doesn't exist on current page, navigate normally
                    window.location.href = href;
                }
            }
            // For non-anchor links, let the default behavior handle navigation
        });
    });

    // Optional: Highlight category based on URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category) {
        const categoryLink = document.querySelector(`.category-menu a[href*="${category}"]`);
        if (categoryLink) {
            categoryLink.classList.add('active');
        }
    }
});