const navBtn = document.getElementById('nav-btn');

const navbar = document.getElementById('navbar');

const navClose = document.getElementById('nav-close');

//show Nav
navBtn.addEventListener('click', () => {
  navbar.classList.add('showNav');
});

//close Nav
navClose.addEventListener('click', () => {
  navbar.classList.remove('showNav');
});
