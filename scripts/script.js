// Selecteer de hamburgerknop en de navigatie
const hamburger = document.querySelector('nav button');
const nav = document.querySelector('nav');

// Voeg een event listener toe aan de hamburgerknop
hamburger.addEventListener('click', function() {
    nav.classList.toggle('active'); // Toggle de 'active' klasse
});
