document.addEventListener("DOMContentLoaded", function () {
    // Select the form and add an event listener for submission
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents the default form submission

        // Get input values
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        // Simple validation
        if (!email || !password || !confirmPassword) {
            alert("Please fill in all fields.");
            return;
        }

        // Validate email format
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // You can add more complex validation here (e.g., password strength)

        // If validation passes, simulate a successful sign-up (you can replace this with an actual registration process)
        // alert("Sign-up successful!");

        // Optionally, redirect to the login page or another page after successful sign-up
        window.location.href = "../D1/index.html";  // Redirect to login page after sign-up
    });

    // Email format validation function
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }
});


