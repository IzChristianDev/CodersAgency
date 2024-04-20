let toggleButton = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");

toggleButton.addEventListener("click", ()=>{
    toggleButton.classList.toggle("active");
    navigation.classList.toggle("active");
});

navigation.addEventListener("click", ()=>{
    toggleButton.classList.toggle("active");
    navigation.classList.toggle("active");
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the entered username and password
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if the username and password are correct
    if (username === 'admin' && password === 'admin') {
        // Redirect to another HTML file (replace 'otherpage.html' with the actual file name)
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});