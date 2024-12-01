// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Quantity Buttons
    const minusButton = document.getElementById('minus');
    const plusButton = document.getElementById('plus');
    const quantityInput = document.getElementById('quantity');

    // Event listeners for minus and plus buttons
    minusButton.addEventListener('click', function() {
        let currentQuantity = parseInt(quantityInput.value);
        if (currentQuantity > 1) {
            quantityInput.value = currentQuantity - 1;
        }
    });

    plusButton.addEventListener('click', function() {
        let currentQuantity = parseInt(quantityInput.value);
        quantityInput.value = currentQuantity + 1;
    });

    // Add to Cart Button Functionality
    const addToCartButton = document.getElementById('addToCart');
    addToCartButton.addEventListener('click', function() {
        if (addToCartButton.textContent.trim() === "ADD TO CART") {
            addToCartButton.innerHTML = '<i class="fas fa-check"></i> Added to Cart'; // Change text with icon
        } else {
            addToCartButton.textContent = "ADD TO CART"; // Change back to original text
        }
    });

    // Add to Wishlist Button Functionality
    const addToWishlistButton = document.getElementById('addToWishlist');
    addToWishlistButton.addEventListener('click', function() {
        if (addToWishlistButton.textContent.trim() === "ADD TO WISHLIST") {
            addToWishlistButton.innerHTML = '<i class="fas fa-check"></i> Added to Wishlist'; // Change text with icon
        } else {
            addToWishlistButton.textContent = "ADD TO WISHLIST"; // Change back to original text
        }
    });

});








