// Get the input fields
var firstName = document.querySelector("#fName");
var lastName = document.querySelector("#fLastN");
var email = document.querySelector("#fEmail");
var password = document.querySelector("#fPassword");
var address = document.querySelector("#fAddress");
var phone = document.querySelector("#fPhone");

// Get the error elements
var errorFirstName = document.getElementById("errorName");
var errorLastName = document.getElementById("errorLastN");
var errorEmail = document.getElementById("errorEmail");
var errorPassword = document.getElementById("errorPassword");
var errorAddress = document.getElementById('errorAddress');
var errorPhone = document.getElementById('errorPhone');  

// Exercise 6
function validate() {
    // Validate fields entered by the user: name, phone, password, and email

    if (
        firstName.value === '' || 
        firstName.value.length < 3 || 
        !/^[a-zA-Z]+$/.test(firstName.value)
    ) {
        errorFirstName.style =  'display: inline';
    } else {
        errorFirstName.style =  '';
    }

    if (
        lastName.value === '' ||
        lastName.value.length < 3 ||
        !/^[a-zA-Z]+$/.test(lastName.value)
    ) {
        errorLastName.style = 'display: inline';
    } else {
        errorLastName.style = '';
    }

    if (
        phone.value === '' ||
        phone.value.length < 3 ||
        !/^\d+$/.test(phone.value)
    ) {
        errorPhone.style = 'display: inline';
    } else {
        errorPhone.style = '';
    }

    if (
        address.value === '' || 
        address.value.length < 3
    ) {
        errorAddress.style =  'display: inline';
    } else {
        errorAddress.style =  '';
    }

    if (
        password.value === '' ||
        password.value.length < 3 ||
        !/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/.test(password.value)
    ) {
        errorPassword.style = 'display: inline';
    } else {
        errorPassword.style = '';
    }

    if (
        email.value === '' ||
        email.value.length < 3 ||
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)
    ) {
        errorEmail.style = 'display: inline';
    } else {
        errorEmail.style = '';
    }
    
}
