//Image Objects
const productImages = {
  cd: "assets/product_gallery/bed-rainy.png",
  mh: "assets/product_gallery/bed-cozy.png",
  as: "assets/product_gallery/bed-after.png",
  rd: "assets/product_gallery/bed-morning.png",
};

//If I can figure this section out, trying to conditional the right image set
const roundImages = {
  cd: "assets/product_gallery/round-rainy.png",
  mh: "assets/product_gallery/round-cozy.png",
  as: "assets/product_gallery/round-after.png",
  rd: "assets/product_gallery/round-morning.png",
};

const floorImages = {
  cd: "assets/product_gallery/floor-rainy.png",
  mh: "assets/product_gallery/floor-cozy.png",
  as: "assets/product_gallery/floor-after.png",
  rd: "assets/product_gallery/floor-morning.png",
};

const couchImages = {
  cd: "assets/product_gallery/round-rainy.png",
  mh: "assets/product_gallery/round-cozy.png",
  as: "assets/product_gallery/round-after.png",
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
