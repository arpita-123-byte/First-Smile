

const jsonData = {
  "products": [
    {
      "image": "https://storage.googleapis.com/a1aa/image/JjLarf6kEo3oByH9GWpnUf8iYV1n3zmRdsbQTLbFW2rfFIfOB.jpg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "rating": 4.5,
      "price": "1200"
    },
    {
      "image": "https://storage.googleapis.com/a1aa/image/Z6NKFA8Cnta0NNxPKpfKnveArQ3svvegexN5RvBwipeIYg8dC.jpg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "rating": 4.5,
      "price": "1100"
    }
    // Add more products as needed
  ]
};

// Function to render products
function renderProducts(data) {
  const productGrid = document.querySelector('.product-grid');

  data.products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    productCard.innerHTML = `
      <img src="${product.image}" alt="Product Image" />
      <p>${product.description}</p>
      <div class="stars">${renderStars(product.rating)}</div>
      <p class="price">${product.price}</p>
      <button>ADD TO CART</button>
    `;
    productGrid.appendChild(productCard);
  });
}

// Function to generate star icons based on rating
function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  let starsHTML = '';

  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="fas fa-star"></i>';
  }
  if (halfStar) {
    starsHTML += '<i class="fas fa-star-half-alt"></i>';
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

