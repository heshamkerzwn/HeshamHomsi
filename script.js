const burgerElement = document.getElementById("burger"); // use descriptive variable names
const lestElement = document.getElementById("lest");
const chickbox = document.querySelector(".chickbox");
const bodyElement = document.body;
burgerElement.onclick = function () {
    lestElement.style.display = "block"; // apply styles to the correct element
    lestElement.style.zIndex = 10; // use a numerical value for zIndex

};


lestElement.onclick = function () {
    lestElement.style.display = "none"; // apply styles to the correct element
    lestElement.style.zIndex = 0; // use a numerical value for
    // set the state to not chicked
    chickbox.checked = false;
}








