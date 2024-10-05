var form = document.getElementById('registerForm');
console.log(form);
var username = document.getElementById('form3Example1c');
var email = document.getElementById('form3Example3c');
var password = document.getElementById('form3Example4c');
var confirmPassword = document.getElementById('form3Example4cd');

form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(username.value);
    console.log(email.value);
    console.log(password.value);
    console.log(confirmPassword.value);
})