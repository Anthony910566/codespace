const menu = document.querySelector("#mobilemenu");

const menuLinks = document.querySelector(".navbar-menu");

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const signinBtn = document.getElementById('navbarBtn');
const signinForm = document.getElementById('signinForm');

// Show form on button click
signinBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link action
    signinForm.style.display = 'block';
});

// Close form when clicking outside of it
document.addEventListener('click', (event) => {
    // Check if the click is outside the signinForm
    if (!signinForm.contains(event.target) && event.target !== signinBtn) {
        signinForm.style.display = 'none';
    }
});