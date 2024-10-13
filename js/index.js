console.log("this is from js file")


//  data types in js
//  1 - string :> any symbols or characters enclosed in single or double quates "ahmad", 'ali', "hello world", "dbhfghdg"
//  2 - numbers :> integer or decimal numbers
//  3 - boolean :> true or false
//  4 - list or array :> collection of items enclosed in square brackets []  [1, 2, 3, 4 , 5, "hdfsfgh", true, false]
//  5 - object :> collection of key-value paris enclosed in curly braces {}  {name:"ahmad",age:20}
//  6 - NaN :> not a number
//  7 - undefined :> variable has not been assigned a value نسبت ل متغير بس ما نسبت اله قيمه
//  8 - null :> value is explicitly set to null تحجز مكان للمتغير بس فش اله قيمه

//  variables in js
//  1- var
    var age = 25 //global var
    age = 30
    // console.log("this is global var ", age)

//  2- let
    let age1 = 25 //block scope , local to the block
    age1 = 33
    // console.log("local age : ",age1)

//  3- const
    const age2 = 25
    // console.log("constant age : ", age2)
    test1 = "this is test variable"
    // console.log("test variable : ", test1)

//  boolean
    var isActive = true
    // console.log("is active : ", isActive)

//   list and array
//   index : location value in a list starts from 0
var names = ["ahmed", "ali", "mohammed"]
// console.log("names : ", names)
var sample = null
// console.log("sample : ", sample)

//   == : value , === :> value and data type
//   =>, =< , ==<, ==>, !=
// if(age2 == '25'){
//     console.log("the condition is true")
// }
// else{
//     console.log("ths condition is false")
// }

// console.log("___________________________________")

// if(age2 === '25'){
//     console.log("the condition is true")
// }
// else{
//     console.log("ths condition is false")
// }


// new lecture

// document كلشي بال html

/* var ulList = document.getElementById('navList')
console.log(('search by id'),ulList)
var ulList2 = document.getElementsByClassName('ulList')
console.log('search by class',ulList2[0]) */

/*var h1 = document.getElementsByTagName("h1")[0]
console.log('h1 tag',h1)
// h1.innerHTML = "this is from js"
h1.innerText = "this is from js"
h1.style.color = "blue"
h1.style.backgroundColor = "yellow" */

//function
/*var body = document.getElementsByTagName('body')[0] //اول بدي داخل html
function changeBGRed(){
    body.style.backgroundColor = "red"
}
function changeBGBlue(){
    body.style.backgroundColor = "blue"
}
function changeBGGreen(){
    body.style.backgroundColor = "green"
}
function changeBGYellow(){
    body.style.backgroundColor = "yellow"
}
function changeBGBlack(){
    body.style.backgroundColor = "black"
}*/


var body = document.getElementsByTagName('body')[0]
//argument > value passed to the function
function changeBG(color){
    body.style.backgroundColor = color
}

var h1 = document.getElementsByTagName('h1')[0]
var changed = false
function changH1(){
    // if(h1.innerHTML === "new page"){
    // h1.innerText = "this is from js function"
    // }
    // else{
    //     h1.innerText = "new page"
    // }
    if(changed == false){
        h1.innerHTML = "this is from js function"
        changed = true
    }
    else{
        h1.innerText = "new page"
        changed = false
    }
}

var screen = document.getElementById('screen')
function fullScreen(){
    console.log('full screen')
    screen.requestFullscreen()
    // screen.webkitRequestFullscreen()
    document.exitFullscreen()
}

function logData(){
    console.log('i am just a function');
}

var logDa = document.getElementById('log');
logDa.onclick = function(){
    logData();
}


var title = document.getElementById('title');
var lang = localStorage.getItem('lang');
changeLanguage(lang);

function changeLanguage(lang){
    console.log("Language changed to " ,lang);
    // title.innerText = "this is title " +lang;
    if(lang === 'eng'){
        title.innerText = "this lang is eng";
        localStorage.setItem('lang', lang);
        document.dir = "ltr";
    }
    else if(lang === 'ar'){
        title.innerText = "هذه اللغه عربيه"
        localStorage.setItem('lang', lang);
        document.dir = "rtl";
    }
}