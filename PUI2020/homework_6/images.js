const productImages = {
  cd: "assets/product_gallery/couch-rainy.png",
  mh: "assets/product_gallery/couch-cozy.png",
  as: "assets/product_gallery/floor-after.png",
  rd: "assets/product_gallery/round-morning.png",
};

changeImage();
function changeImage() {
  let colorSelect = document.querySelectorAll(".colorToggle");
  let pillowColors = {
    cd: "Cozy Denim",
    mh: "Morning Haze",
    as: "After School Special",
    rd: "Rainy Day",
  };

  colorSelect.forEach((element) => {
    element.addEventListener("click", () => {
      console.log("ColorCLick");
      const imageid = element.id;
      if (productImages[imageid]) {
        document.getElementById("product-image-lg").src =
          productImages[imageid];
        document.getElementById("pillowColor").innerText =
          pillowColors[imageid];
      }
    });
  });
}
