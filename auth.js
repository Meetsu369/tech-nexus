// Function to make AJAX requests
async function makeRequest(url, method, data) {
    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response.json();
}

// Function to handle login
async function login(email, password) {
    try {
        const response = await makeRequest('db_operations.php', 'POST', {
            action: 'login',
            email: email,
            password: password
        });
        if (response.success) {
            // Login successful
            localStorage.setItem('currentUser', JSON.stringify(response.user));
            window.location.href = 'user_profile.html'; // Redirect to user profile
        } else {
            throw new Error(response.message);
        }
    } catch (error) {
        console.error('Login error:', error);
        alert(error.message);
    }
}

// Function to handle signup
async function signup(email, password, confirmPassword) {
    try {
        if (password !== confirmPassword) {
            throw new Error('Passwords do not match');
        }
        const response = await makeRequest('db_operations.php', 'POST', {
            action: 'signup',
            email: email,
            password: password
        });
        if (response.success) {
            alert('Signup successful! Please login.');
            showLogin(); // Switch to login form
        } else {
            throw new Error(response.message);
        }
    } catch (error) {
        console.error('Signup error:', error);
        alert(error.message);
    }
}

// Function to show login form
function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
}

// Function to show signup form
function showSignup() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
}

// Function to load user profile
function loadUserProfile() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        document.getElementById('userName').textContent = currentUser.email.split('@')[0];
        document.getElementById('profilePic').textContent = currentUser.email[0].toUpperCase();
        // Load other user data as needed
    } else {
        window.location.href = 'login.html'; // Redirect to login if not logged in
    }
}

// Event listeners for login page
if (document.getElementById('login-form')) {
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.querySelector('#login-form input[type="email"]').value;
        const password = document.querySelector('#login-form input[type="password"]').value;
        login(email, password);
    });
}

if (document.getElementById('signup-form')) {
    document.getElementById('signup-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.querySelector('#signup-form input[type="email"]').value;
        const password = document.querySelector('#signup-form input[type="password"]').value;
        const confirmPassword = document.querySelector('#signup-form input[type="password"]:nth-of-type(2)').value;
        signup(email, password, confirmPassword);
    });
}

// Event listener for user profile page
if (document.getElementById('userName')) {
    window.addEventListener('load', loadUserProfile);
}
