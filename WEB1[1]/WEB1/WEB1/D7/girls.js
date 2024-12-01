
  document.addEventListener('DOMContentLoaded', () => {
    fetch('products.json')
      .then(response => response.json())
      .then(data => {
        const productsContainer = document.querySelector('.products');
        productsContainer.innerHTML = '';

        data.forEach(product => {
          const productCard = document.createElement('div');
          productCard.classList.add('product-card');
          
          productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" width="300" height="400">
            <h3>${product.title}</h3>
            <p>${product.price}</p>
            <div class="stars">${generateStars(product.rating)}</div>
          `;

          productsContainer.appendChild(productCard);
        });
      })
      .catch(error => console.error('Error fetching product data:', error));
  });

  function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 ? '<i class="fas fa-star-half-alt"></i>' : '';
    return '<i class="fas fa-star">'.repeat(fullStars) + halfStar;
  }


  // Load products JSON data and render products
fetch("girls.json")
.then(response => response.json())
.then(data => {
    renderGirls(data.girls);  // Pass the products array from the JSON to render function
})
.catch(error => console.error("Error loading girls:", error));
