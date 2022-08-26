// var logins = document.getElementById("login");
// var registers = document.getElementById("register");
// var btn = document.getElementById("btn");
// var Login_Userid = document.getElementById("login-userid").value;
// var register_Userid = document.getElementById("register-userid").value;


// // if(Login_Userid === register_Userid){
// //     alert("Login Successfully");
// // }else{
// //     alert("Wrong UserId");

// // }

// // function user(){

// //     localStorage.setItem("login_userid"JSON.stringify(register_Userid))

// // }

// function register() {
//     logins.style.left = "-400px";
//     registers.style.left = "50px";
//     btn.style.left = "110px";
// }

// function login() {
//     logins.style.left = "50px";
//     registers.style.left = "450px";
//     btn.style.left = "0";
// }

// function signup() {
//     alert("Register Successfully");

// }
// function signin() {
//     alert("Login Successfully");

// }






var logins = document.getElementById("login");
var registers = document.getElementById("register");
var btn = document.getElementById("btn");
var Login_Userid = document.getElementById("login-userid").value;


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

let register_Userid = document.getElementById("register-userid").value;
let register_emailid = document.getElementById("register-emailid").value;
let register_passward = document.getElementById("register-passward").value;

    let data = {
        register_Userid:register_Userid,
        register_emailid: register_emailid,
        register_passward: register_passward
    }

    localStorage.setItem("signup_data",JSON.stringify(data));

}



function signin() {
let data = JSON.parse(localStorage.getItem('signup_data'))

let login_Userid = document.getElementById("login-userid").value;
let login_passward = document.getElementById("login-passward").value;



console.log(data)

    // debugger
if(data.register_Userid === login_Userid && data.register_passward === login_passward ){

    window.alert("Login Successful");
}
else{
    window.alert("Wrong Passward");

}

}



// function get_itom(name,image,email,country){
//     this.name=name;
//     this.image=image;
//     this.email=email;
//     this.country=country;
// }

// function save() {

//     let image = document.getElementById('image').value;
//     let name = document.getElementById('name').value;
//     let email = document.getElementById('email').value;
//     let country = document.getElementById('country').value;


//     let itom = new get_itom(name,image,email,country)
// localStorage.setItem("user",JSON.stringify(itom))


// }