// Final array to be passed to local storage
let cart = [];
//localStorage.getItem("cart");
//cart = JSON.parse(cart);

updateCartCount();
addToCart();
//displayCart();

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

// Loading Cart.html Display
// function displayCart() {
//   let cartItems = localStorage.getItem("cart");
//   cartItems = JSON.parse(cartItems);
//   let cartContainer = document.querySelector(".cart-container");
//   console.log("Inside of display cart", cartItems);

//   if (!cartItems && cartContainer) {
//     cartContainer.innerHTML = `<div class="spacing-md"></div>

//     <section class="section">
//       <p class="cart label">You have nothing in your cart.</p>
//     </section>

//     <section class="display-col cart section spacing-mdflex">
//       <p class="padding-16">Build a pillow with our custom pillow builder.</p>
//       <a href="fluffme.html" class="btn-outline btn-standard">Fluff Me</a>
//     </section>

//     <div class="spacing-md"></div>

//     <div class="cart-div"><hr class="border" /></div> `;
//   } else {
//     console.log("Items in cart");
//   }
// }
