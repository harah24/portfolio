
//header section 
// define variables that target the button and links

const navToggle = document.querySelector("#nav-toggle");
const nav = document.querySelector("#nav-links");


//add event listener to target the hamburger menu

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
});

// add add event listener to close the nav once a selection has been made 

document.querySelectorAll("#nav-link").forEach(i => i.addEventListener('click', () => {
  navToggle.classList.toggle("nav-close");

}))




