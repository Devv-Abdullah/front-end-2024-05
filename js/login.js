var registerForm = document.getElementById('registerForm');
var email = document.getElementById('form2Example1');
var password = document.getElementById('form2Example2');

registerForm.addEventListener('submit', function(e){
    e.preventDefault();
    var allUsers = JSON.parse(localStorage.getItem('userData'));
    console.log(allUsers);

    for(var i=0; i<allUsers.length; i++){
        if(allUsers[i].email == email.value && allUsers[i].password == password.value){
            console.log('email already exists');
            alert('login successful');
            window.location.href = 'index.html';
        }
        else{
            alert('login failed check your email and password');
        }
    }
})