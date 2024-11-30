function emailSend(){

    let params = {
        user_email: document.querySelector('#footer-email').value
    }

    emailjs.send("service_vwejpc9", "template_2tu4a59", params)
    .then(function(response) {
        console.log("Email sent successfully!", response.status, response.text);
        alert("Email sent successfully!");
    }, function(error) {
        console.error("Failed to send email:", error);
        alert("Failed to send email. Please try again.");
    });
}