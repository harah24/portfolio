// nav toggle - select button and links  - define variables
const navToggle = document.querySelector("#navToggle");
const nav = document.querySelector("#nav-links");

//add event listener - arrow function to toggle b/w the css classes
navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
});
