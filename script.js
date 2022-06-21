var mailError = document.getElementById('mailError');
var phoneError = document.getElementById('phoneError');
var nameError = document.getElementById('nameError');
var addressError = document.getElementById('addressError');
var cityError = document.getElementById('cityError');
var countryError = document.getElementById('countryError');
var postalError = document.getElementById('postalError');

function validateMail() {
    var mail = document.getElementById('contact-mail').value;
    if (mail.length == 0) {
        mailError.innerHTML = "mail is required";
        return false;
    }
    if (!mail.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        mailError.innerHTML = "write valid email";
        return false;

    }
    mailError.innerHTML = "valid";
    return true;

}

function validatePhone() {
    var phone = document.getElementById('contact-phone').value;
    if (phone.length == 0) { phoneError.innerHTML = "phone number is required"; return false; }
    if (phone.length < 12) { phoneError.innerHTML = "phone number only 12 numbers"; return false; }
    phoneError.innerHTML = "valid";
    return true;
}

function validateName() {
    var name = document.getElementById('contact-name').value;
    if (name.length == 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) { nameError.innerHTML = "write full name"; return false; }
    nameError.innerHTML = "valid";
    return true;
}

function validateAddress() {
    var address = document.getElementById('contact-Address').value;
    if (address.length == 0) {
        addressError.innerHTML = "address is reuired";
        return false;
    }
    addressError.innerHTML = "valid";
    return true;

}

function validateCity() {
    var city = document.getElementById('contact-city').value;
    if (city.length == 0) {
        cityError.innerHTML = "address is reuired";
        return false;
    }
    cityError.innerHTML = "valid";
    return true;
}

function validateCountry() {
    var country = document.getElementById('contact-Country').value;
    if (country.length == 0) {
        countryError.innerHTML = "country is required";
        return false;
    }
    countryError.innerHTML = "valid";
    return true;

}

function validatePostal() {
    var postal = document.getElementById('contact-postal').value;
    if (postal.length == 0) {
        postalError.innerHTML = "postal code is required";
        return false;
    }

    postalError.innerHTML = "valid";
    return true
}