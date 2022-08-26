var logins = document.getElementById("login");
var registers = document.getElementById("register");
var btn = document.getElementById("btn");
var Login_Userid = document.getElementById("login-userid").value;
var register_Userid = document.getElementById("register-userid").value;


// if(Login_Userid === register_Userid){
//     alert("Login Successfully");
// }else{
//     alert("Wrong UserId");

// }

// function user(){

//     localStorage.setItem("login_userid"JSON.stringify(register_Userid))

// }

function register() {
    logins.style.left = "-400px";
    registers.style.left = "50px";
    btn.style.left = "110px";
}

function login() {
    logins.style.left = "50px";
    registers.style.left = "450px";
    btn.style.left = "0";
}

function signup() {
    alert("Register Successfully");

}
function signin() {
    alert("Login Successfully");

}
