document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Perform login actions (e.g., authentication)
    alert('Login successful');
    
    // Clear form inputs
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
});

document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    var name = document.getElementById('signupName').value;
    var email = document.getElementById('signupEmail').value;
    var password = document.getElementById('signupPassword').value;
    var errorMessage = document.getElementById('errorMessage');
    
    if (!name || !email || !password) {
        errorMessage.textContent = "All fields are required.";
        errorMessage.style.display = 'block';
    } else if (!validateEmail(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        errorMessage.style.display = 'block';
    } else if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters.";
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        // Here you can add code to handle form submission, e.g., send data to a server
        alert('Signup successful');
        
        // Clear form inputs
        document.getElementById('signupName').value = '';
        document.getElementById('signupEmail').value = '';
        document.getElementById('signupPassword').value = '';
    }
});

function validateEmail(email) {
    var re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(String(email).toLowerCase());
}

document.getElementById('showSignup').addEventListener('click', function () {
    document.getElementById('loginContainer').classList.remove('active');
    document.getElementById('signupContainer').classList.add('active');
});

document.getElementById('showLogin').addEventListener('click', function () {
    document.getElementById('signupContainer').classList.remove('active');
    document.getElementById('loginContainer').classList.add('active');
});
