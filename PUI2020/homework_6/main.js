// Final array to be passed to local storage
const cart = [];

// blueprint for data to store in localstorage
{
  total: ###,
  cart: [/* some stuff */]
}

function storeCartCount() {
  let globalCart = cartCount();
  localStorage.setItem(key, value)
}

function cartCount() {
  let cartCount = 0; // accumulator
  
  // first check if cart exists in localstorage
  // if it does, get the total number of items

  cart.forEach((item) => {
    cartCount = item.qty + cartCount;
  });

  return cartCount;
}

UpdateCartCount();

function UpdateCartCount() {
  let cartNum = cartCount();
  document.getElementById("updateCart").innerHTML = `Cart (${cartNum})`;
}

//Adding pillow selection to cart
let cartclick = document.getElementById("add-cart");

cartclick.addEventListener("click", () => {
  createProduct();
  UpdateCartCount();
});

// Create pillow object for the cart
class Product {
  constructor(type, color, fill, qty) {
    this.type = type;
    this.color = color;
    this.fill = fill;
    this.qty = qty;
  }
}

function createProduct() {
  let type = document.getElementById("pillowType").innerHTML;

  let color = document.getElementById("pillowColor").innerHTML;

  let fill = document.querySelector('input[name="filltype"]:checked').value;

  let qty = document.getElementById("qty").innerHTML;
  qty = parseInt(qty);

  let pillow = new Product(type, color, fill, qty);
  cart.push(pillow);
}

//function to increment qty
manageQty();
function manageQty() {
  let qty = document.getElementById("qty").innerHTML;
  qty = parseInt(qty);

  let increaseQty = document.querySelector(".qty-plus");
  let decreaseQty = document.querySelector(".qty-minus");

  increaseQty.addEventListener("click", () => {
    qty = qty + 1;
    document.getElementById("qty").innerHTML = qty;
  });

  decreaseQty.addEventListener("click", () => {
    qty = qty - 1;
    if (qty < 1) {
      alert("You add less than one item.");
      return;
    }
    document.getElementById("qty").innerHTML = qty;
  });
}
