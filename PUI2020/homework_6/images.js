const couchImages = {
  cd: "assets/colors/CozyDenim.png",
  mh: "assets/colors/MorningHaze.png",
  as: "assets/colors/AfterSchoolSpecial.png",
  rd: "assets/colors/RainyDay.png",
};

changeImage();
function changeImage() {
  let colorSelect = document.querySelectorAll(".colorToggle");

  colorSelect.forEach((element) => {
    element.addEventListener("click", () => {
      console.log("ColorCLick");
    });
  });
}
