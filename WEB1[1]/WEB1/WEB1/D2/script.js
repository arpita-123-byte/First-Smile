document.addEventListener("DOMContentLoaded", function () {
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

        // Validate email format
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // If validation passes, trigger the link click
        window.location.href = "../D1/index.html";  // Redirect to D1
    });

    // Email format validation function
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }
});
