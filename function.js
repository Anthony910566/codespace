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

            // Initialize Mobile Menu after navbar is loaded
            initMobileMenu();
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



// Mobile Menu Functionality
function initMobileMenu() {
    const menu = document.querySelector("#mobilemenu");
    const menuLinks = document.querySelector(".navbar-menu");

    if (menu && menuLinks) {
        // Toggle the menu open/close on menu button click
        menu.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent the event from bubbling to the document
            menu.classList.toggle('is-active');
            menuLinks.classList.toggle('active');
        });

        // Close the menu when clicking anywhere else on the page
        document.addEventListener('click', (event) => {
            if (menuLinks.classList.contains('active') && !menuLinks.contains(event.target) && event.target !== menu) {
                menu.classList.remove('is-active');
                menuLinks.classList.remove('active');
            }
        });
    } else {
        console.error("Menu or Menu Links element not found!");
    }
}

// Sign-Up Form Functionality
function initSignup() {
    // Use querySelectorAll to get all buttons with the class 'navbarBtn'
    const signinBtns = document.querySelectorAll('#navbarBtn'); // Notice the '.' for class selector
    const signinForm = document.getElementById('signinForm'); // Get the form by ID

    if (signinBtns.length > 0 && signinForm) {
        // Loop through all buttons and add event listeners
        signinBtns.forEach(signinBtn => {
            signinBtn.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default button behavior
                signinForm.style.display = 'block'; // Show the form
            });
        });

        // Close the form when clicking outside of it
        document.addEventListener('click', (event) => {
            // Check if the click is outside the form and any button
            const clickedOutside = !signinForm.contains(event.target) && 
                ![...signinBtns].some(btn => btn.contains(event.target));

            if (clickedOutside) {
                signinForm.style.display = 'none'; // Hide the form
            }
        });
    } else {
        console.warn('Sign-in button(s) or form not found after loading navbar!');
    }
}

// Call the loadHTML function on page load
document.addEventListener('DOMContentLoaded', () => {
    if (!document.getElementById("navbar")) {
        console.warn("Navbar container not found in the main HTML!");
    }
    if (!document.getElementById("footer")) {
        console.warn("Footer container not found in the main HTML!");
    }
    loadHTML();
});