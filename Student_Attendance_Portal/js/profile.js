function openForm() {
    document.getElementById('update-form').style.display = 'flex';
}

function closeForm() {
    document.getElementById('update-form').style.display = 'none';
}

function updateProfile() {
    const name = document.getElementById('form-name').value;
    const institute = document.getElementById('form-institute').value;
    const email = document.getElementById('form-email').value;
    const phone = document.getElementById('form-phone').value;
    const address = document.getElementById('form-address').value;

    // Basic validation
    if (!name || !institute || !email || !phone || !address) {
        alert('All fields are required.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!validatePhone(phone)) {
        alert('Please enter a valid phone number (10 digits).');
        return;
    }

    document.getElementById('name').innerText = name;
    document.getElementById('institute').innerText = institute;
    document.getElementById('email').innerText = email;
    document.getElementById('phone').innerText = phone;
    document.getElementById('address').innerText = address;

    document.getElementById('name-display').innerText = name;
    document.getElementById('title-display').innerHTML = `Professor<br>${institute}`;

    closeForm();
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
}

// Ensure the form is open when the page loads
document.addEventListener('DOMContentLoaded', openForm);
