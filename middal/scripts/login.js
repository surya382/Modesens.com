var logins = document.getElementById("login");
var registers = document.getElementById("register");
var btn = document.getElementById("btn");
var Login_Userid = document.getElementById("login-email").value;

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

function signin() {
    let Detail = JSON.parse(localStorage.getItem("data"));

    if (Detail.length === 0) {
        alert("No user signup");
        return;
    }

    let obj1 = {

        login_email: document.getElementById("login-email").value,
        login_passward: document.getElementById("login-passward").value,
        login_contact: document.getElementById("login-phone").value
    }
    let Details1 = false;

    //  debugger

    Detail.forEach(function (el) {
        console.log(el)


        if (el.personemail === obj1.login_email && el.prpassword === obj1.login_passward && el.contact === obj1.login_contact) {
            Details1 = true;
            localStorage.setItem("final", JSON.stringify(el));
            alert("Succefully Log In");
            window.location.href = "index.html"

        }
    })

    if (Details1 === false) {
        alert("User Does Not Exist")
    }

}
let Detail = JSON.parse(localStorage.getItem("data")) || [];


function signup() {

    let obj = {

        personname: document.getElementById("register-userid").value,
        personemail: document.getElementById("register-emailid").value,
        prpassword: document.getElementById("register-passward").value,
        contact: document.getElementById("register-phone").value,
        age: document.getElementById("register-age").value,
    }

    if (obj.personname != "" && obj.personemail != "" && obj.prpassword != "" && obj.prpassword.length >= "8" && (obj.prpassword.includes("@") || obj.prpassword.includes("#")) && obj.contact.length == "10") {

        alert("Successfully signed up");
        Detail.push(obj);
        localStorage.setItem("data", JSON.stringify(Detail));
        // window.location.href = "log.html";
    }
    else if (obj.personname == "" || obj.personemail == "" || obj.prpassword == "" || obj.contact == "" || obj.age == "") {

        alert("Please Enter All the Details");
    }
    else {
        alert("Please use Special character @ or #");
    }
}















    






















