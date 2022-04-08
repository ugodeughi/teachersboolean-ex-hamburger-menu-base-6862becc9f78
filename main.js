
const menuToggle = document.querySelector('.header-right > a');
const closeButton = document.querySelector('.close');

menuToggle.addEventListener('click', function(){
  
  // aggiungo la classe active ad hamburger-menu
  
  const domHamburgerMenu = document.querySelector('.hamburger-menu');
  domHamburgerMenu.classList.add('active');

});


closeButton.addEventListener('click', function(){

  // rimuovo la classe active ad hamburger-menu
  const domHamburgerMenu = document.querySelector('.hamburger-menu');
  domHamburgerMenu.classList.remove('active');
  
});


