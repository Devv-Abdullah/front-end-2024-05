/*var mainH1 = document.getElementById('mainH1');
mainH1.addEventListener('click', function(){
    mainH1.style.color = "red"
})*/

var mainH1 = document.getElementById('mainH1');
var mainH1 = document.getElementById('users');
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');

var userForm = document.getElementById('userForm');
userForm.addEventListener('submit', function(event){ //استمع للجدث اللي اسمه سبميت
    // alert('form submitted')
    event.preventDefault();
    console.log(fname.value, lname.value)
    // create element
    var firstH1 = document.createElement('H1');
    firstH1.innerHTML = "this is fname: "+fname.value +" | this is lname" + lname.value;
    console.log(firstH1)
    firstH1.style.color = 'red'
    // append or appendChild
    users.appendChild(firstH1);
})

var number1 = document.getElementById('number1');
var number2 = document.getElementById('number2');
var operation = document.getElementById('operation');
var result = document.getElementById('result');
function calculate(){
    if(operation.value == '+'){
        result.innerHTML = parseInt(number1.value) + parseInt(number2.value);
        alert("result : " + result.innerHTML)
    }
    else if(operation.value == '-'){
        result.innerHTML = parseInt(number1.value) - parseInt(number2.value);
        alert("result : " + result.innerHTML)
    }
    else if(operation.value == '*'){
        result.innerHTML = parseInt(number1.value) * parseInt(number2.value);
        alert("result : " + result.innerHTML)
    }
    else if(operation.value == '/'){
        result.innerHTML = parseInt(number1.value) / parseInt(number2.value);
        alert("result : " + result.innerHTML)
    }
}


var primeNumber = document.getElementById('primeNumber');
var result2 = document.getElementById('result2');
function isPrime(){
    console.log(primeNumber.value)
    // var isPrime = true;
    for(var i=2; i<parseInt(primeNumber.value); i++){
        if(primeNumber.value % i == 0){
        // isPrime = false;
        result2.innerText = "this is not a prime number";
        break;
        }
        else{
            // isPrime = true;
            result2.innerText = "this is a prime number";
        }
    }
}