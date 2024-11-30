const menu = document.querySelector("#mobilemenu");

const menuLinks = document.querySelector(".navbar-menu");

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});



function loadHTML() {
    // Load Navbar
    fetch('navbar.html') // Reference the navbar file in the same directory
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("navbar").innerHTML = data;

            // Initialize Sign-Up functionality after navbar is loaded
            initSignup();
        })
        .catch(error => {
            console.error('Error loading navbar:', error);
        });

    // Load Footer
    fetch('footer.html') // Reference the footer file in the same directory
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading footer:', error);
        });
}

// Sign-Up Form Functionality
function initSignup() {
    const signinBtn = document.getElementById('navbarBtn'); // Button to open the form
    const signinForm = document.getElementById('signinForm'); // The form to show/hide

    if (signinBtn && signinForm) {
        // Show the form when the button is clicked
        signinBtn.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            signinForm.style.display = 'block'; // Show the form
        });

        // Close the form when clicking outside of it
        document.addEventListener('click', (event) => {
            if (!signinForm.contains(event.target) && event.target !== signinBtn) {
                signinForm.style.display = 'none'; // Hide the form
            }
        });
    } else {
        console.warn('Sign-in button or form not found after loading navbar!');
    }
}

// Call the loadHTML function on page load
document.addEventListener('DOMContentLoaded', loadHTML);