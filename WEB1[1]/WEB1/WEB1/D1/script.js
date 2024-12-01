// Countdown Timer for Deal of the Day
function countdownTimer(endDate) {
    const timerInterval = setInterval(function () {
        const now = new Date().getTime();
        const distance = endDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.querySelector(".timer").innerHTML = `
            <div>${days}<span>Days</span></div>
            <div>${hours}<span>Hours</span></div>
            <div>${minutes}<span>Minutes</span></div>
            <div>${seconds}<span>Seconds</span></div>
        `;

        if (distance < 0) {
            clearInterval(timerInterval);
            document.querySelector(".timer").innerHTML = "Deal Expired";
        }
    }, 1000);
}

// Set the countdown end date (example: 7 days from now)
const countdownDate = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
countdownTimer(countdownDate);

// Function to render products from JSON data
function renderProducts(products) {
    const productsContainer = document.querySelector(".products");
    productsContainer.innerHTML = "";  // Clear existing products

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <a href="${product.link}">
                <img src="${product.image}" alt="${product.name}" width="200" height="200">
            </a>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">$${product.price}</div>
            <div class="rating">${getStarsHTML(product.rating)}</div>
        `;
        productsContainer.appendChild(productElement);
    });
}

// Helper function to generate star rating HTML
function getStarsHTML(rating) {
    const fullStar = `<i class="fas fa-star"></i>`;
    const halfStar = `<i class="fas fa-star-half-alt"></i>`;
    const emptyStar = `<i class="far fa-star"></i>`;

    let starsHTML = "";
    for (let i = 1; i <= 5; i++) {
        starsHTML += i <= rating ? fullStar : i - rating < 1 ? halfStar : emptyStar;
    }
    return starsHTML;
}

// Load products JSON data and render products
fetch("products.json")
    .then(response => response.json())
    .then(data => {
        renderProducts(data.products);  // Pass the products array from the JSON to render function
    })
    .catch(error => console.error("Error loading products:", error));


