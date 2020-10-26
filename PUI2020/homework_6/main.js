const purchases = [];

class Product {
  constructor(type, color, fill) {
    this.type = type;
    this.color = color;
    this.fill = fill;
  }
}

// From the gallery, I already know the pillow type and color. Do I pass these as UTM Params? or local storage

// If they select a new color is it a new page? or how do I update the color and the image
//a function for on color click update image and color type text. Turn the color type into button type?

//If they click plus or minus the quantity is updated

function addToCart() {
  //grabbing the pillow type?
  var type = document.getElementById("pillowType").value;

  //grabbing the color from the color options from the color button?
  var color = document.getElementById().value;

  //grabbing the fill type via the buttons
  var fill = document.getElementsByName().value;

  //grabbing the quantity
  var quant = document.getElementById("itemQuantity");
  quant = parseInt(quant.innerHTML);

  var pillow = new Product(type, color, fill);
  purchase.push(pillow);
}
