<!DOCTYPE html>
<html>
<head>
    <title>Login Form</title>
    <!-- Link to Font Awesome for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <!-- Link to Google Fonts for styling -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <!-- Link to external stylesheet for custom styles -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Main container for the form -->
    <div class="container">
        <h2 id="form-title">Login Form</h2>
        <!-- Tabs for switching between Login and Signup -->
        <div class="tab">
            <button id="login-tab" class="active" onclick="showLogin()">Login</button>
            <button id="signup-tab" class="inactive" onclick="showSignup()">Register</button>
        </div>
        
        <!-- Login form section -->
        <div id="login-form">
            <div class="input-group">
                <input type="email" placeholder="Email Address"> <!-- Email input -->
            </div>
            <div class="input-group">
                <input type="password" placeholder="Password"> <!-- Password input -->
            </div>
            <a href="#" class="forgot-password">Forgot password?</a> <!-- Link for forgotten password -->
            <button class="login-btn">Login</button> <!-- Login button -->
            <div class="signup-link">
                Not a member? <a href="#" onclick="showSignup()">Register now</a> <!-- Link to switch to Signup -->
            </div>
        </div>

        <!-- Signup form section, initially hidden -->
        <div id="signup-form" action="register.php" style="display: none;">
            <div class="input-group">
                <input type="text" placeholder="Full Name"> <!-- Full name input -->
            </div>
            <div class="input-group">
                <input type="email" placeholder="Email Address"> <!-- Email input -->
            </div>
            <div class="input-group">
                <input type="password" placeholder="Password"> <!-- Password input -->
            </div>
            <button class="signup-btn">Register</button> <!-- Register button -->
            <div class="signup-link">
                Already a member? <a href="#" onclick="showLogin()">Login now</a> <!-- Link to switch to Login -->
            </div>
        </div>
    </div>

    <!-- Link to external JavaScript file for interactivity -->
    <script src="script.js"></script>
    
</body>
</html>
