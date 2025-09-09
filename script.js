// ==========================================================
// Assignment: Interactive Web Pages with JavaScript
// ==========================================================

// ----------------------------------------------------------
// Part 1: JavaScript Event Handling
// - Using event listeners to respond to user actions
// ----------------------------------------------------------

// 1. Click Event
const alertButton = document.getElementById('alertButton');
alertButton.addEventListener('click', () => {
    alert('You clicked the button!');
});

// 2. Mouseover & Mouseout Events
const hoverMessage = document.getElementById('hoverMessage');
hoverMessage.addEventListener('mouseover', () => {
    hoverMessage.textContent = 'You are hovering!';
    hoverMessage.classList.add('active');
});

hoverMessage.addEventListener('mouseout', () => {
    hoverMessage.textContent = 'Hover over this text!';
    hoverMessage.classList.remove('active');
});

// 3. Keyup Event
const keyboardInput = document.getElementById('keyboardInput');
const lastPressedKey = document.getElementById('lastPressedKey');

keyboardInput.addEventListener('keyup', (event) => {
    // The event object provides information about the event
    lastPressedKey.textContent = event.key;
});


// ----------------------------------------------------------
// Part 2: Building Interactive Elements
// - Creating dynamic components from scratch
// ----------------------------------------------------------

// Feature 1: Light/Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Feature 2: Simple Counter
const counterDisplay = document.getElementById('counterDisplay');
const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');
let count = 0;

incrementButton.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;
});

decrementButton.addEventListener('click', () => {
    count--;
    counterDisplay.textContent = count;
});

// Feature 3: Collapsible FAQ Section
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Toggle the visibility of the next sibling element (the answer)
        const answer = question.nextElementSibling;
        answer.classList.toggle('active');
    });
});


// ----------------------------------------------------------
// Part 3: Form Validation
// - Custom validation logic and user feedback
// ----------------------------------------------------------

const registrationForm = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const passwordConfirmInput = document.getElementById('passwordConfirm');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const passwordConfirmError = document.getElementById('passwordConfirmError');
const successMessage = document.getElementById('successMessage');

// Function to validate the form
function validateForm() {
    let isValid = true;
    
    // Reset all error messages and styles
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    passwordConfirmError.textContent = '';
    nameInput.classList.remove('error');
    emailInput.classList.remove('error');
    passwordInput.classList.remove('error');
    passwordConfirmInput.classList.remove('error');
    successMessage.textContent = '';

    // Validate Name: Must not be empty
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Full Name is required.';
        nameInput.classList.add('error');
        isValid = false;
    }

    // Validate Email: Must be a valid format using a simple regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailInput.classList.add('error');
        isValid = false;
    }

    // Validate Password: Must be at least 8 characters long
    if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        passwordInput.classList.add('error');
        isValid = false;
    }

    // Validate Password Confirmation: Must match the password field
    if (passwordConfirmInput.value !== passwordInput.value) {
        passwordConfirmError.textContent = 'Passwords do not match.';
        passwordConfirmInput.classList.add('error');
        isValid = false;
    }

    return isValid;
}

// Event listener for form submission
registrationForm.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior (which reloads the page)
    event.preventDefault();

    // Run the validation logic
    const formIsValid = validateForm();

    if (formIsValid) {
        // If the form is valid, show a success message
        successMessage.textContent = 'Form submitted successfully!';
        // In a real application, you would send the data to a server here.
        registrationForm.reset(); // Clear the form fields
    } else {
        // If the form is invalid, the error messages are already displayed
        successMessage.textContent = 'Please correct the errors in the form.';
        successMessage.style.color = '#dc3545';
    }
});
