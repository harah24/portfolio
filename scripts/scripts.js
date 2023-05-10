
// NAV SECTION 

// define variables that target the hamburger menu and links

const navToggle = document.querySelector("#nav-toggle");
const nav = document.querySelector("#nav-links");


//add event listener to open the hamburger menu

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav-open")
});

// remove the hamburger menu once a selection has been made 

document.querySelectorAll("#nav-link").forEach(link => link.addEventListener("click", () => {
  navToggle.classList.remove("nav-open");
  nav.classList.remove("nav-open");
}))




// CONTACT FORM 

// Credit to formspree.io for the page reset code. 

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

