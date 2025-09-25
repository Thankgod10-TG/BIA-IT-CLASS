//Project : use map( ) and filter() array methods to create a small shoping page with items and a search filter .

const items = [
  { id: 1, name: 'Apple', price: 1.0 , category: 'Fruits', image: 'apple.jpg',description: 'A sweet apple fruit' },
   { id: 2, name: 'Banana', price: 0.5 , category: 'Fruits', image: 'banana.jpg',description: 'A sweet banana fruit' },
  { id: 3, name: 'Carrot', price: 0.75 , category: 'Vegetables', image: 'carrot.jpg', description: 'A crunchy carrot vegetable' },
  { id: 4, name: 'Broccoli', price: 1.25 , category: 'Vegetables', image: 'broccoli.jpg', description: 'A healthy broccoli vegetable' },
  { id: 5, name: 'Chicken', price: 5.0 , category: 'Meat', image: 'chicken.jpg', description: 'A fresh chicken meat' },
  { id: 6, name: 'Beef', price: 7.0 , category: 'Meat', image: 'beef.jpg', description: 'A tender beef meat' },
  { id: 7, name: 'Milk', price: 1.5 , category: 'Dairy', image: 'milk.jpg', description: 'A fresh milk dairy product' },
  { id: 8, name: 'Cheese', price: 2.0 , category: 'Dairy', image: 'cheese.jpg', description: 'A creamy cheese dairy product' },
  { id: 9, name: 'Bread', price: 1.0 , category: 'Bakery', image: 'bread.jpg', description: 'A soft bread bakery product' },
    { id: 10, name: 'Eggs', price: 2.5, category: 'Dairy', image: 'eggs.jpg', description: 'Fresh eggs from the farm' },
    { id: 11, name: 'Orange', price: 0.8, category: 'Fruits', image: 'orange.jpg' , description: 'A juicy orange fruit' },
    { id: 12, name: 'Potato', price: 0.6, category: 'Vegetables', image: 'potato.jpg', description: 'A versatile potato vegetable' },        
    { id: 13, name: 'Fish', price: 4.0, category: 'Seafood', image: 'fish.jpg' , description: 'Fresh fish from the sea' },
    { id: 14, name: 'Shrimp', price: 6.0, category: 'Seafood', image: 'shrimp.jpg', description: 'Delicious shrimp seafood' },
    { id: 15, name: 'Yogurt', price: 1.2, category: 'Dairy', image: 'yogurt.jpg',   description: 'Creamy yogurt dairy product' },
    { id: 16, name: 'Pasta', price: 1.5, category: 'Grains', image: 'pasta.jpg', description: 'A versatile pasta grain product' },
    { id: 17, name: 'Rice', price: 1.0, category: 'Grains', image: 'rice.jpg', description: 'A staple rice grain product' },
    { id: 18, name: 'Chocolate', price: 2.5, category: 'Snacks', image: 'chocolate.jpg', description: 'A sweet chocolate snack' },
    { id: 19, name: 'Chips', price: 1.75, category: 'Snacks', image: 'chips.jpg',   description: 'Crispy chips snack' },
    { id: 20, name: 'Cookies', price: 2.0, category: 'Snacks', image: 'cookies.jpg', description: 'Delicious cookies snack' }
];

const searchInput = document.getElementById('search');
const productList = document.getElementById("productList");  

//Create a Function to render products
function renderProducts(products) {
  productList.innerHTML = ""; // Clear previous products

  // if there is no product found, display a message in and empty div with calss name "empty-product-list"
  if (products.length === 0) {
    const emptyMessage = document.createElement("div");
    emptyMessage.className = "empty-product-list";
    emptyMessage.innerHTML = "<p>No products found. Please try a different search term.</p>";
    productList.appendChild(emptyMessage);
    return;
  }

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Price: $${product.price.toFixed(2)}</p>
      <p>Category: ${product.category}</p>
      <button>Add to Cart</button>
    `;
    // Append the product div to the product list
    productList.appendChild(productDiv);
  });
}

//Create Function to filter products based on search input
function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredProducts = items.filter(item => 
    item.name.toLowerCase().includes(searchTerm) || 
    item.category.toLowerCase().includes(searchTerm) ||
    item.description.toLowerCase().includes(searchTerm)
  );
  renderProducts(filteredProducts);
}

// Initial render of all products
renderProducts(items);

// Event listener for search input
searchInput.addEventListener('input', filterProducts);


