// Function to show the login form
function showLogin() {
    // Change the title of the form to 'Login Form'
    document.getElementById('form-title').innerText = 'Login Form';
    
    // Display the login form and hide the signup form
    document.getElementById('login-form').style.display = 'block'; // Show login form
    document.getElementById('signup-form').style.display = 'none'; // Hide signup form
    
    // Update the tab styles to indicate the active tab
    document.getElementById('login-tab').classList.add('active'); // Add active class to login tab
    document.getElementById('login-tab').classList.remove('inactive'); // Remove inactive class from login tab
    document.getElementById('signup-tab').classList.add('inactive'); // Add inactive class to signup tab
    document.getElementById('signup-tab').classList.remove('active'); // Remove active class from signup tab
}

// Function to show the signup form
function showSignup() {
    // Change the title of the form to 'Register Form'
    document.getElementById('form-title').innerText = 'Register Form';
    
    // Display the signup form and hide the login form
    document.getElementById('login-form').style.display = 'none'; // Hide login form
    document.getElementById('signup-form').style.display = 'block'; // Show signup form
    
    // Update the tab styles to indicate the active tab
    document.getElementById('login-tab').classList.add('inactive'); // Add inactive class to login tab
    document.getElementById('login-tab').classList.remove('active'); // Remove active class from login tab
    document.getElementById('signup-tab').classList.add('active'); // Add active class to signup tab
    document.getElementById('signup-tab').classList.remove('inactive'); // Remove inactive class from signup tab
}
