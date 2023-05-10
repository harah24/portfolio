
//header section 
// define variables that target the button and links

const navToggle = document.querySelector("#nav-toggle");
const nav = document.querySelector("#nav-links");


//add event listener to target the hamburger menu

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav-open")
});






