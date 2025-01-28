
const productsContainer = document.getElementById("products");

async function fetchAndDisplayProducts() {
  try {
    
    const response = await axios.get("https://fakestoreapi.com/products/");
    
    
    const products = response.data;
      
      products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("product");

      
      productElement.innerHTML = `
        <h2>${product.title}</h2>
        <img src="${product.image}" alt="${product.title}" width="150" />
        <p>Price: $${product.price}</p>
      `;
    
      productsContainer.appendChild(productElement);
    });
  } catch (error) {
    
    console.error("Error fetching products:", error);
    productsContainer.innerHTML = "<p>Failed to load products. Please try again later.</p>";
  }
}


fetchAndDisplayProducts();
