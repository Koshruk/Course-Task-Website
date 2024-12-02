/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/send-form.js":
/*!*****************************!*\
  !*** ./src/js/send-form.js ***!
  \*****************************/
/***/ (function() {

eval("const form = document.querySelector('.form-section__form');\nconst footerInput = document.querySelector('.footer-main-section__form');\nconst formNameInput = document.querySelector('#hero-form-name');\nconst formEmailInput = document.querySelector('#hero-form-email');\nconst formPhoneInput = document.querySelector('#hero-form-phone');\n\nconst footerEmailInput = document.querySelector('#footer-email');\n\nconst emailRegex = /^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/;\nconst phoneRegex = /^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/;\n\nconst setError = (element, message) => {\n    const inputControl = element.parentElement;\n    const errorDisplay = inputControl.querySelector('.error');\n    errorDisplay.innerText = message;\n    inputControl.classList.add('error');\n    inputControl.classList.remove('success');\n};\n\nconst setSuccess = element => {\n    const inputControl = element.parentElement;\n    const errorDisplay = inputControl.querySelector('.error');\n    errorDisplay.innerText = '';\n    inputControl.classList.add('success');\n    inputControl.classList.remove('error');\n};\n\nconst isValidEmail = email => emailRegex.test(String(email).toLowerCase());\n\nconst isValidPhone = phone => phoneRegex.test(String(phone));\n\nconst validateForm = ({ user_name, user_email, user_phone }) => {\n    let isValid = true;\n\n    if (!user_name) {\n        setError(formNameInput, 'Name is required');\n        isValid = false;\n    } else {\n        setSuccess(formNameInput);\n    }\n\n    if (!user_email) {\n        setError(formEmailInput, 'Email is required');\n        isValid = false;\n    } else if (!isValidEmail(user_email)) {\n        setError(formEmailInput, 'Provide a valid email address');\n        isValid = false;\n    } else {\n        setSuccess(formEmailInput);\n    }\n\n    if (!user_phone) {\n        setError(formPhoneInput, 'Phone is required');\n        isValid = false;\n    } else if (!isValidPhone(user_phone)) {\n        setError(formPhoneInput, 'Provide a valid phone number');\n        isValid = false;\n    } else {\n        setSuccess(formPhoneInput);\n    }\n\n    return isValid;\n};\n\nconst validateEmailInput = ({user_email}) => {\n    let isValid = true;\n\n    if (!user_email) {\n        setError(footerEmailInput, 'Email is required');\n        isValid = false;\n    } else if (!isValidEmail(user_email)) {\n        setError(footerEmailInput, 'Provide a valid email address');\n        isValid = false;\n    } else {\n        setSuccess(footerEmailInput);\n    }\n\n    return isValid;\n};\n\nfunction formSend() {\n    const params = {\n        user_name: formNameInput.value.trim(),\n        user_email: formEmailInput.value.trim(),\n        user_phone: formPhoneInput.value.trim()\n    };\n\n    if (validateForm(params)) {\n        emailjs.send(\"service_vwejpc9\", \"template_nt8idp7\", params)\n            .then(response => {\n                console.log(\"Email sent successfully!\", response.status, response.text);\n                form.reset();\n                clearFormState(form);\n                alert(\"Email sent successfully!\");\n            })\n            .catch(error => {\n                console.error(\"Failed to send email:\", error);\n                alert(\"Failed to send email. Please try again.\");\n            });\n    }\n}\n\nfunction emailSend() {\n    const params = {\n        user_email: footerEmailInput.value.trim(),\n    };\n\n    if (validateEmailInput(params)) {\n        emailjs.send(\"service_vwejpc9\", \"template_nt8idp7\", params)\n            .then(response => {\n                console.log(\"Email sent successfully!\", response.status, response.text);\n                footerInput.reset();\n                clearFormState(footerInput);\n                alert(\"Email sent successfully!\");\n            })\n            .catch(error => {\n                console.error(\"Failed to send email:\", error);\n                alert(\"Failed to send email. Please try again.\");\n            });\n    }\n}\n\nfunction clearFormState(form) {\n    const inputs = form.querySelectorAll('.form-section__form input');\n    inputs.forEach(input => {\n        const inputControl = input.parentElement;\n        inputControl.classList.remove('success', 'error');\n        const errorDisplay = inputControl.querySelector('.error');\n        if (errorDisplay) errorDisplay.innerText = '';\n    });\n}\n\nwindow.formSend = formSend;\nwindow.emailSend = emailSend;\n\n\n\n\n//# sourceURL=webpack:///./src/js/send-form.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/send-form.js"]();
/******/ 	
/******/ })()
;