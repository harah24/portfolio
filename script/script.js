//define variables for the hamburger div and the nav unordered list

const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

//addeventlistener to the hamburger menu to toggle back and forth 
hamburger.addEventListener('click', () =>{
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');
})

// click event to hide the menu once selection has been made 
document.querySelectorAll('.nav-link').forEach(i => 
i.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}))

