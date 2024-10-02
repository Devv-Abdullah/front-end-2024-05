var mainH1 = document.getElementById("mainH1");
var users = document.getElementById("users");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");

var userForm = document.getElementById("userForm");
userForm.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(fname.value, lname.value);
    // create element
    var firstH1 = document.createElement('h1');
    firstH1.innerText = "this is fname: "+fname.value +" | this is lname: "+lname.value;
    console.log(firstH1);
    firstH1.style.color = "red";
    // firstH1.style.fontSize = '10px'
    // append or appendChild
    users.appendChild(firstH1);
})