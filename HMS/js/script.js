$(document).ready(function() {
    // Add your JavaScript logic here (e.g., form submission handling)
    $('#patientRegistrationForm').submit(function(e) {
        e.preventDefault(); // Prevent form submission
        // Handle patient registration form submission here
        alert('Patient registration submitted!');
        // You can send data to server or perform other actions here
    });

    $('#doctorRegistrationForm').submit(function(e) {
        e.preventDefault(); // Prevent form submission
        // Handle doctor registration form submission here
        alert('Doctor registration submitted!');
        // You can send data to server or perform other actions here
    });

    $('#patientLoginForm').submit(function(e) {
        e.preventDefault(); // Prevent form submission
        // Handle patient login form submission here
        alert('Patient login submitted!');
        // You can send data to server or perform other actions here
    });

    $('#doctorLoginForm').submit(function(e) {
        e.preventDefault(); // Prevent form submission
        // Handle doctor login form submission here
        alert('Doctor login submitted!');
        // You can send data to server or perform other actions here
    });
});
