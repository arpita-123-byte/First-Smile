document.addEventListener("DOMContentLoaded", function () {
    // Select the form and add an event listener
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents the default form submission

        // Get the input values
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Simple validation
        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        // Additional validation can be added here (like email format checking)
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // If validation passes, simulate successful login
        alert("Login successful!");
        // Add further logic here to handle successful login
    });

    // Email format validation function
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }
});
