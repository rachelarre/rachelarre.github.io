// Final array to be passed to local storage
const cart = [];
updateCartCount();
addToCart();

if (document.getElementById("qty")) {
  manageQty();
}

//Adding pillow selection to cart

function addToCart() {
  let cartClick = document.getElementById("add-cart");

  if (cartClick) {
    cartClick.addEventListener("click", () => {
      createProduct();
      storeCart();
      updateCartCount();
    });
  }
}

function cartCount() {
  let cartCount = 0;

  let cartItems = localStorage.getItem("cart");

  if (!cartItems) {
    return cartCount;
  }

  cartItems = JSON.parse(cartItems);

  cartItems.forEach((item) => {
    cartCount = item.qty + cartCount;
  });

  return cartCount;
}

function updateCartCount() {
  let cartNum = cartCount();
  document.getElementById("updateCart").innerHTML = `Cart (${cartNum})`;
}

//Placing items into the cart
function storeCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

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
