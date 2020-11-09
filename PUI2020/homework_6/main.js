// Final array to be passed to local storage
let cart = localStorage.getItem("cart");
cart = cart ? JSON.parse(cart) : [];

updateCartCount();
addToCart();

if (document.getElementById("cart-container")) {
}

if (window.location.pathname == "/cart.html") {
  displayCart();
}

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

// removing objects from the cart
function removeItem() {
  let removeButton = document.querySelectorAll(".remove");

  removeButton.forEach((element, index) => {
    element.addEventListener("click", () => {
      cart.splice(index, 1);
      storeCart();
    });
  });
}

// Loading cart items to display
function displayCart() {
  let cartItems = localStorage.getItem("cart");
  cartItems = JSON.parse(cartItems);
  let cartContainer = document.querySelector(".cart-container");
  let cartHeader = document.querySelector(".cart");
  let cartDiv = document.querySelector(".cart-div");
  let cartCheckout = document.querySelector(".cart-checkout");

  if (cartItems && cartContainer) {
    cartContainer.innerHTML = ``;
    cartHeader.innerHTML = ``;
    cartDiv.innerHTML = ``;
    cartCheckout.innerHTML = ``;

    cartHeader.innerHTML = `
    <p class="label product-col">Product</p>
    <p class="label quantity-col">Quantity</p>
    <p class="label price-col">Price</p>`;

    cartDiv.innerHTML = `<hr class="border" />`;

    Object.values(cartItems).map((item, index) => {
      cartContainer.innerHTML += `
      <div class="cart-container-row">
<div class="product-col">
  <div class="pillow">
    <a href="${item.type}-pillow.html" class="">
      <div class="pillow-image">
        <img src="assets/product_gallery/${item.type}-cozy.png" alt="" />
      </div>
    </a>

    <div class="pillow-details">
      <h3>${item.type} Pillow</h3>
      <p><span>Color -</span>${item.color}</p>
      <p><span>Fill -</span>${item.fill}</p>
    </div>
  </div>
</div>

<div class="quantity-col">
  <div class="pillow">
    <div class="product-quantity">
      <div class="btn-outline-qty">
        <p id="itemQuantity">${item.qty}</p>
      </div>

    </div>
    <p class="remove"><a href="">Remove from cart</a></p>
  </div>
</div>

<div class="price-col">
  <div class="pillow">$${item.qty * 32}</div> 
</div>
</div> 

`;
    });

    cartCheckout.innerHTML += `
    <div class="cart-div"><hr class="border" /></div>
    <section class="cart">
    <a href="" class="btn-fill btn-standard">Proceed to checkout</a>
  </section>
    `;
    //create a function x object to dynamically display price

    removeItem();
  } else {
    //Need to figure out how to display when cart is [], vs not existing...
    cartContainer.innerHTML = `<div class="spacing-md"></div>

    <section class="section">
      <p class="cart label">You have nothing in your cart.</p>
    </section>

    <section class="display-col cart section spacing-mdflex">
      <p class="padding-16">Build a pillow with our custom pillow builder.</p>
      <a href="fluffme.html" class="btn-outline btn-standard">Fluff Me</a>
    </section>

    <div class="spacing-md"></div>`;
  }
}
