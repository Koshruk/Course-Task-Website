const form = document.querySelector('.form-section__form');
const footerInput = document.querySelector('.footer-main-section__form');
const formNameInput = document.querySelector('#hero-form-name');
const formEmailInput = document.querySelector('#hero-form-email');
const formPhoneInput = document.querySelector('#hero-form-phone');

const footerEmailInput = document.querySelector('#footer-email');

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => emailRegex.test(String(email).toLowerCase());

const isValidPhone = phone => phoneRegex.test(String(phone));

const validateForm = ({ user_name, user_email, user_phone }) => {
    let isValid = true;

    if (!user_name) {
        setError(formNameInput, 'Name is required');
        isValid = false;
    } else {
        setSuccess(formNameInput);
    }

    if (!user_email) {
        setError(formEmailInput, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(user_email)) {
        setError(formEmailInput, 'Provide a valid email address');
        isValid = false;
    } else {
        setSuccess(formEmailInput);
    }

    if (!user_phone) {
        setError(formPhoneInput, 'Phone is required');
        isValid = false;
    } else if (!isValidPhone(user_phone)) {
        setError(formPhoneInput, 'Provide a valid phone number');
        isValid = false;
    } else {
        setSuccess(formPhoneInput);
    }

    return isValid;
};

const validateEmailInput = ({user_email}) => {
    let isValid = true;

    if (!user_email) {
        setError(footerEmailInput, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(user_email)) {
        setError(footerEmailInput, 'Provide a valid email address');
        isValid = false;
    } else {
        setSuccess(footerEmailInput);
    }

    return isValid;
};

function formSend() {
    const params = {
        user_name: formNameInput.value.trim(),
        user_email: formEmailInput.value.trim(),
        user_phone: formPhoneInput.value.trim()
    };

    if (validateForm(params)) {
        emailjs.send("service_vwejpc9", "template_nt8idp7", params)
            .then(response => {
                console.log("Email sent successfully!", response.status, response.text);
                form.reset();
                clearFormState(form);
                alert("Email sent successfully!");
            })
            .catch(error => {
                console.error("Failed to send email:", error);
                alert("Failed to send email. Please try again.");
            });
    }
}

function emailSend() {
    const params = {
        user_email: footerEmailInput.value.trim(),
    };

    if (validateEmailInput(params)) {
        emailjs.send("service_vwejpc9", "template_nt8idp7", params)
            .then(response => {
                console.log("Email sent successfully!", response.status, response.text);
                footerInput.reset();
                clearFormState(footerInput);
                alert("Email sent successfully!");
            })
            .catch(error => {
                console.error("Failed to send email:", error);
                alert("Failed to send email. Please try again.");
            });
    }
}

function clearFormState(form) {
    const inputs = form.querySelectorAll('.form-section__form input');
    inputs.forEach(input => {
        const inputControl = input.parentElement;
        inputControl.classList.remove('success', 'error');
        const errorDisplay = inputControl.querySelector('.error');
        if (errorDisplay) errorDisplay.innerText = '';
    });
}

window.formSend = formSend;
window.emailSend = emailSend;


