// Simulate a "logged in" state
let isLoggedIn = false;

// Show Login Popup
document.getElementById('login-btn').addEventListener('click', function() {
    document.getElementById('login-popup').style.display = 'block';
});

// Show Signup Popup
document.getElementById('signup-btn').addEventListener('click', function() {
    document.getElementById('signup-popup').style.display = 'block';
});

// Close Popups
document.querySelectorAll('.close').forEach(function(closeBtn) {
    closeBtn.addEventListener('click', function() {
        closeBtn.parentElement.parentElement.style.display = 'none';
    });
});

// Handle Log In Form Submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    
    // Simulated login process
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email === "user@example.com" && password === "password123") {
        isLoggedIn = true;
        alert("Login successful! Games unlocked.");
        document.getElementById('login-popup').style.display = 'none';
        unlockGames(); // Call function to unlock games
    } else {
        alert("Invalid credentials. Try again.");
    }
});

// Handle Sign Up Form Submission
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
    
    // Simulated signup process (In real-world apps, you'd handle this server-side)
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
    } else {
        alert(`Welcome ${username}! You have signed up successfully. Please log in.`);
        document.getElementById('signup-popup').style.display = 'none';
    }
});

// Function to unlock games once logged in
function unlockGames() {
    if (isLoggedIn) {
        const lockedGames = document.querySelectorAll('.game-card.locked');
        
        lockedGames.forEach(function(game) {
            game.classList.remove('locked'); // Remove 'locked' class
            game.querySelector('.locked-text').style.display = 'none'; // Hide the locked text
        });

        document.getElementById('locked-message').textContent = 'Enjoy your unlocked games!';
    }
}

// Close popups when clicking outside of them
window.onclick = function(event) {
    if (event.target.classList.contains('popup')) {
        event.target.style.display = 'none';
    }
};
