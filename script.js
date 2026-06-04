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

// Password Check Function with Multiple Users
function checkValue() {
    let input = document.getElementById('userValue').value;
    
    // Multiple valid passwords for different users
    const validPasswords = ['240962411', 'student123', 'user456'];
    
    if (validPasswords.includes(input)) {
        // Log the successful login
        const loginTime = new Date().toLocaleString();
        const userNumber = input;
        console.log('Login Successful - User: ' + userNumber + ', Time: ' + loginTime);
        
        // Store login info in localStorage for tracking
        const loginHistory = JSON.parse(localStorage.getItem('loginHistory') || '[]');
        loginHistory.push({
            userNumber: userNumber,
            loginTime: loginTime,
            device: navigator.userAgent.substring(0, 50)
        });
        localStorage.setItem('loginHistory', JSON.stringify(loginHistory));
        
        // Redirect to portfolio
        window.location.href = 'portfolio.html';
    } else {
        // Log failed attempt
        console.warn('Failed Login Attempt - Input: ' + input);
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

// Welcome Message
console.log('Lwazi Siyanda Sibiya Portfolio - Mobile Responsive Website');
console.log('Valid Student Numbers: 240962411, student123, user456');