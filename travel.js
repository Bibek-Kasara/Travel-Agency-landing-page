const toggleButton = document.getElementById('nav-toggle');
const menuLinks = document.getElementById('menu-links');

toggleButton.addEventListener('click', () => {
  menuLinks.classList.toggle('active');
});