// Login form validation
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Enhanced email validation
    if (!validateEmail(email)) {
        showError('Please enter a valid email address (e.g., user@domain.com)');
        return;
    }
    
    if (password.length < 6) {
        showError('Password must be at least 6 characters long');
        return;
    }
    
    // Simulate login
    simulateLogin(email, password);
});

// Signup form validation
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Enhanced full name validation
    if (!validateFullName(fullName)) {
        showError('Please enter a valid full name (only letters, spaces, hyphens, and apostrophes allowed)');
        return;
    }
    
    // Enhanced email validation
    if (!validateEmail(email)) {
        showError('Please enter a valid email address (e.g., user@domain.com)');
        return;
    }
    
    // Enhanced password validation
    if (!validatePassword(password)) {
        showError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number');
        return;
    }
    
    // Check if passwords match
    if (password !== confirmPassword) {
        showError('Passwords do not match');
        return;
    }
    
    // Simulate signup
    simulateSignup(fullName, email, password);
});

// Contact form validation (if exists)
if (document.getElementById('contactForm')) {
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Validate name
        if (!validateFullName(name)) {
            showError('Please enter a valid name (only letters, spaces, hyphens, and apostrophes allowed)');
            return;
        }
        
        // Validate email
        if (!validateEmail(email)) {
            showError('Please enter a valid email address');
            return;
        }
        
        // Validate subject
        if (subject.length < 3) {
            showError('Subject must be at least 3 characters long');
            return;
        }
        
        // Validate message
        if (message.length < 10) {
            showError('Message must be at least 10 characters long');
            return;
        }
        
        // Simulate form submission
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Service form validation (if exists)
if (document.getElementById('serviceForm')) {
    document.getElementById('serviceForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const serviceName = document.getElementById('serviceName').value;
        const serviceDescription = document.getElementById('serviceDescription').value;
        const servicePrice = document.getElementById('servicePrice').value;
        
        // Validate service name
        if (serviceName.length < 3) {
            showError('Service name must be at least 3 characters long');
            return;
        }
        
        // Validate description
        if (serviceDescription.length < 10) {
            showError('Description must be at least 10 characters long');
            return;
        }
        
        // Validate price
        if (!validatePrice(servicePrice)) {
            showError('Please enter a valid price (positive number)');
            return;
        }
        
        // Simulate form submission
        alert('Service submitted successfully!');
        this.reset();
    });
}

// Helper functions
function validateEmail(email) {
    // Enhanced email validation with more specific pattern
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email) && email.length <= 254;
}

function validateFullName(name) {
    // Enhanced name validation allowing letters, spaces, hyphens, and apostrophes
    const re = /^[a-zA-Z\s\-']+$/;
    return re.test(name) && name.length >= 2 && name.length <= 50;
}

function validatePassword(password) {
    // Enhanced password validation
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasMinimumLength = password.length >= 8;
    
    return hasUpperCase && hasLowerCase && hasNumbers && hasMinimumLength;
}

function validatePrice(price) {
    // Validate price is a positive number
    const numPrice = parseFloat(price);
    return !isNaN(numPrice) && numPrice > 0;
}

function validateDateRange(startDate, endDate) {
    // Validate date range
    const start = new Date(startDate);
    const end = new Date(endDate);
    const today = new Date();
    
    return start >= today && end > start;
}

function showError(message) {
    // Remove any existing error messages
    const existingAlerts = document.querySelectorAll('.alert-danger');
    existingAlerts.forEach(alert => alert.remove());
    
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-danger mt-3';
    alertDiv.textContent = message;
    
    const form = event.target.closest('form');
    form.insertBefore(alertDiv, form.firstChild);
    
    // Remove alert after 5 seconds
    setTimeout(() => alertDiv.remove(), 5000);
}

// Simulate login/signup (in a real application, these would make API calls)
function simulateLogin(email, password) {
    // Simulate API call
    setTimeout(() => {
        // In a real application, you would:
        // 1. Make an API call to your backend
        // 2. Store the authentication token in localStorage
        // 3. Redirect to the dashboard or home page
        
        // For demo purposes:
        alert('Login successful!');
        window.location.href = 'index.html';
    }, 1000);
}

function simulateSignup(fullName, email, password) {
    // Simulate API call
    setTimeout(() => {
        // In a real application, you would:
        // 1. Make an API call to your backend
        // 2. Store user data
        // 3. Redirect to login page
        
        // For demo purposes:
        alert('Signup successful! Please login.');
        window.location.href = 'login.html';
    }, 1000);
}
