const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Here you can implement logic to check the email and password
    // For this example, let's assume if the email is "user@example.com" and password is "password", then redirect to the second page.
    if (email === 'user@example.com' && password === 'password') {
        window.location.href = 'second_page.html';
    } else {
        alert('Invalid email or password');
    }
});
