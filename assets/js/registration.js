function showPopup(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    var ghostContainer = document.getElementById('popup');
    ghostContainer.style.display = 'flex';

    // Set a timer to hide the animation after 30 seconds (30000 milliseconds)
    setTimeout(function () {
        ghostContainer.style.display = 'none';
        resetForm();
    }, 2000);
}

function closePopup() {
    var ghostContainer = document.getElementById('popup');
    ghostContainer.style.display = 'none';
}

// Function to reset the form to its default state
function resetForm() {
    document.getElementById("registration-form").reset();
}


document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('registration-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from being submitted initially

        var emailInput = document.getElementById('email');
        var fnameInput = document.getElementById('fname');
        var lnameInput = document.getElementById('lname');

        if (fnameInput.value.trim() === '' || lnameInput.value.trim() === '' || emailInput.value.trim() === '') {
            alert('Please fill in all required fields with valid information.');
        } else if (!emailIsValid(emailInput.value.trim())) {
            alert('Please enter a valid email address.');
        } else {
            showPopup(event);
        }
    });

    // Function to validate email format
    function emailIsValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});