/*==================== MENU SHOW =====================*/ 
// #1
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if(toggle && nav){
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    })
  }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  // Active Link
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');

  // Remove Toggle menu
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');

}
navLink.forEach(n => n.addEventListener('click', linkAction));


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

/*==================== SCROLL REVEAL ANIMATION ===================*/

