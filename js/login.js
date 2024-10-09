var registerForm = document.getElementById('button');
var email = document.getElementById('form2Example1');
var password = document.getElementById('form2Example2');

registerForm.addEventListener('click', function(e){
    console.log(registerForm);
    e.preventDefault();
    var allUsers = JSON.parse(localStorage.getItem('userData')) || [];
    console.log(allUsers);

    for(var i=0; i<allUsers.length; i++){
        if(allUsers[i].email === email.value && allUsers[i].password === password.value){
            console.log('email already exists');
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "email already exists",
                showConfirmButton: false,
                timer: 1500
              });
            // window.location.href = 'index.html';
        }
        else{
            Swal.fire({
                icon: "error",
                title: "login failed check your email and password",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        }
    }
})