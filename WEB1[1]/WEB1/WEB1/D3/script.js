document.addEventListener('DOMContentLoaded', () => {
    // Search functionality (simple placeholder for now)
    const searchInput = document.querySelector('input[type="text"]');
    searchInput.addEventListener('input', () => {
        console.log('Searching for:', searchInput.value);
    });

    // Shopping Cart (removed alert functionality)
    const cartIcon = document.querySelector('.fa-shopping-cart');
    cartIcon.addEventListener('click', () => {
        // Placeholder for shopping cart functionality
        console.log('Shopping Cart icon clicked');
    });

    // Like/Heart Icon (removed alert functionality)
    const heartIcon = document.querySelector('.fa-heart');
    heartIcon.addEventListener('click', () => {
        // Placeholder for wishlist functionality
        console.log('Heart icon clicked');
    });

    // User Profile (removed alert functionality)
    const userIcon = document.querySelector('.fa-user');
    userIcon.addEventListener('click', () => {
        // Placeholder for user profile functionality
        console.log('User Profile icon clicked');
    });

    // Subscribe Button functionality
    const subscribeButton = document.querySelector('.subscribe-section button');
    subscribeButton.addEventListener('click', () => {
        const userEmail = prompt('Enter your email to subscribe:');
        if (userEmail) {
            alert(`Thank you for subscribing, ${userEmail}! You get 10% off.`);
        }
    });

    // Footer social media links
    const socialLinks = document.querySelectorAll('.social-icons a');
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert(`Redirecting to ${e.target.href}`);
        });
    });

    // Hide horizontal scrollbar, allow vertical scrolling
    document.body.style.overflowX = 'hidden';  // Hides horizontal scrollbar
    document.documentElement.style.overflowX = 'hidden';  // Hides horizontal scrollbar

    // If you want to allow horizontal scrolling again, you can set:
    // document.body.style.overflowX = 'auto';
    // document.documentElement.style.overflowX = 'auto';
});


