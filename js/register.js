var form = document.getElementById('registerForm');
console.log(form);
var username = document.getElementById('form3Example1c');
var email = document.getElementById('form3Example3c');
var password = document.getElementById('form3Example4c');
var confirmPassword = document.getElementById('form3Example4cd');

var allUsers = JSON.parse(localStorage.getItem('userData')) || []; //json.parse => يعني حول الشكل من سترينغ ل الشكل اللي بتعرفه جافا سكربت

form.addEventListener('submit', function(event){
    event.preventDefault(); // للفورم
    console.log(username.value);
    console.log(email.value);
    console.log(password.value);
    console.log(confirmPassword.value);

    // localStorage.setItem('username', username.value);

    var userData ={
        username: username.value,
        password: password.value,
        email: email.value,
        confirmPassword: confirmPassword.value
    }
    // console.log(userData);
    console.log(allUsers);
    if(password.value === confirmPassword.value){
    allUsers.push(userData);
    }
    
    // JSON :> javascript object nation
    localStorage.setItem('userData', JSON.stringify(allUsers)); //حولي هذا المتغير على شكل جيسون => يحول اوبجكت من جافا سكربت الى جيسون
})

// object
// key: value;