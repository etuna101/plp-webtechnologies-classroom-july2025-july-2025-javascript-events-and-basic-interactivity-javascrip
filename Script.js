
// Interactive Feature 1: Form Validation
// Get form and feedback area
const form = document.getElementById("signupForm");
const feedback = document.getElementById("formFeedback");

// Custom form validation
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form from submitting immediately

  // Get input values
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validation checks
  if (username.length < 3) {
    feedback.textContent = " Username must be at least 3 characters long.";
    feedback.style.color = "red";
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    feedback.textContent = " Please enter a valid email address.";
    feedback.style.color = "red";
    return;
  }

  if (password.length < 6) {
    feedback.textContent = " Password must be at least 6 characters long.";
    feedback.style.color = "red";
    return;
  }

  // If all checks pass
  feedback.textContent = "Form submitted successfully!";
  feedback.style.color = "green";

  // Clear inputs (for demo purposes)
  form.reset();
});

// Password Toggle Button
document.getElementById("togglePassword").addEventListener("click", function() {
  const passwordField = document.getElementById("password");
  passwordField.type = passwordField.type === "password" ? "text" : "password";
});

// Interactive Feature 2: Counter

let count = 0;
const countDisplay = document.getElementById("countDisplay");
document.getElementById("countBtn").addEventListener("click", function() {
  count++;
  countDisplay.textContent = count;
});

// Interactive Feature 3: Background Color Changer

const colors = ["#f4f4f4", "#ffcccc", "#ccffcc", "#ccccff", "#ffffcc"];
let currentIndex = 0;

document.getElementById("colorBtn").addEventListener("click", function() {
  currentIndex = (currentIndex + 1) % colors.length;
  document.body.style.backgroundColor = colors[currentIndex];
});
