var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var password_error = document.getElementById('password_error');

email.addEventListener('input', email_verify);
password.addEventListener('input', password_verify);

function validate(){
    var isValid = true;

    if(email.value.length < 1 || !email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) && !email.value.match(/^\d{10}$/)){
        email_error.style.display = "block";
        isValid = false;
    } else {
        email_error.style.display = "none";
    }

    if(password.value.length < 6){
        password_error.style.display = "block";
        isValid = false;
    } else {
        password_error.style.display = "none";
    }

    return isValid;
}

function email_verify(){
    if(email.value.length >= 1 && (email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) || email.value.match(/^\d{10}$/))){
        email_error.style.display = "none";
    }
}

function password_verify(){
    if(password.value.length >= 6){
        password_error.style.display = "none";
    }
}

function togglePasswordVisibility() {
    var passwordField = document.querySelector('input[name="password"]');
    passwordField.type = document.getElementById('showPassword').checked ? 'text' : 'password';
}
