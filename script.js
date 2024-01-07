const burgerElement = document.getElementById("burger");
const lestElement = document.getElementById("lest");
const chickbox = document.querySelector(".chickbox");
const lanElement = document.querySelector(".landing");

// Initial styles for lestElement
lestElement.style.transition =
  "opacity 0.3s ease-in-out, margin-top 0.3s ease-in-out ,visibility 0.3s ease-in-out ";
lestElement.style.opacity = 0;
lestElement.style.marginTop = "40px";

// Event listener for burgerElement
burgerElement.addEventListener("click", () => {
  lestElement.classList.toggle("show");

  if (lestElement.classList.contains("show")) {
    lestElement.style.zIndex = 10;
    lestElement.style.opacity = 1;
    lestElement.style.marginTop = 0;
  } else {
    lestElement.style.zIndex = 0;
    lestElement.style.opacity = 0;
    lestElement.style.marginTop = "40px";
    chickbox.checked = false;
  }
});

// Simplify event handling for lestElement and lanElement
const closeLestElement = () => {
  lestElement.style.zIndex = 0;
  lestElement.style.opacity = 0;
  lestElement.style.marginTop = "40px";
  chickbox.checked = false;
};

lestElement.addEventListener("click", closeLestElement);
lanElement.addEventListener("click", closeLestElement);
