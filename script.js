// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
}

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickInsideToggle = menuToggle && menuToggle.contains(event.target);
    
    if (!isClickInsideMenu && !isClickInsideToggle && navMenu) {
        navMenu.classList.remove('active');
    }
});

// Update Clock
function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        clockElement.textContent = 'Now: ' + time;
    }
}

// Update clock every second
if (document.getElementById('clock')) {
    setInterval(updateClock, 1000);
    updateClock();
}

// Password Check Function
function checkValue() {
    let input = document.getElementById('userValue').value;
    
    if (input === '240962411') {
        window.location.href = 'portfolio.html';
    } else {
        alert('Student document not available! Please enter the correct student number.');
        document.getElementById('userValue').value = '';
    }
}

// Allow Enter key to submit
const passwordInput = document.getElementById('userValue');
if (passwordInput) {
    passwordInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            checkValue();
        }
    });
}

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});