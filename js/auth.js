// Login form validation
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Basic validation
    if (!validateEmail(email)) {
        showError('Please enter a valid email address');
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
    
    // Validate full name
    if (!validateFullName(fullName)) {
        showError('Please enter a valid full name (only letters and spaces allowed)');
        return;
    }
    
    // Validate email
    if (!validateEmail(email)) {
        showError('Please enter a valid email address');
        return;
    }
    
    // Validate password
    if (password.length < 8) {
        showError('Password must be at least 8 characters long');
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

// Helper functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateFullName(name) {
    const re = /^[a-zA-Z\s]+$/;
    return re.test(name);
}

function showError(message) {
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
