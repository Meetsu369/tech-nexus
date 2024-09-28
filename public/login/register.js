document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');

    function clearSignupForm() {
        signupForm.reset();
    }

    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = signupForm.querySelector('input[type="text"]').value;
        const email = signupForm.querySelector('input[type="email"]').value;
        const password = signupForm.querySelector('input[type="password"]').value;

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Registration successful! Please log in.');
                clearSignupForm();
                window.showLogin();
            } else {
                alert(`Registration failed: ${data.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    });
});