let redirecter=document.querySelector(".checker")
let otp=12345;
let chance=1;
let head=document.createElement("h1")
head.innerText="Redirecting to Payment Page"
let head2=document.createElement("h2")
head2.innerText="Please Wait for moment while we are redirecting"
let head3=document.createElement("h3")
head3.innerText="Do not refresh or press back button."
let process=document.createElement("img")
process.src="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.webp?cid=ecf05e47pdtrym4qgaega01sq639llvcihokgyrc7cl03mbu&rid=giphy.webp&ct=g"
redirecter.append(head,head2,head3,process)

setTimeout(function(){
    redirecter.innerHTML=null;
    let hd1=document.createElement("h1")
    hd1.innerText="Payment Verifying through OTP."
    let hd2=document.createElement("p")
    hd2.innerText="A Six digit One-Time Password is sent to registered mobile number."
    let hd3=document.createElement("h3")
    hd3.innerText="Enter OTP To verify"
    let inp=document.createElement("input")
    inp.setAttribute("id","otp_input")
    inp.setAttribute("placeholder","Enter OTP")
    let btn=document.createElement("button")
    btn.setAttribute("id","otp_btn")
    btn.innerText="Proceed"
    btn.addEventListener("click",function(){
        checkOTP(inp,btn)
    })
    btn2=document.createElement("button")
    btn2.innerText="Cancel Payment"
    btn2.setAttribute("id","cancel_otp")
    btn2.addEventListener("click",function(){
        window.location.href="payment.html"
    })
    let timer=document.createElement("h3")
    timer.innerText="04:59";
    redirecter.append(hd1,hd2,hd3,inp,btn,btn2,timer)

    function checkOTP(inp,btn){
        if(chance<4){
            if(inp.value==otp){
                successfull()
            }else{
                chance++
            }
        }else{
            btn.disabled=true;
        }
    }



    let i=10;
    let j=0;
    let id=setInterval(function(){
        if(i==0 && j==0){
           cleared(timer)
        } else if(i==0){
            i=59;
            j--;
            timer.innerText=`0${j}:${i}`
        }else{
            timer.innerText=`0${j}:${i}`
        }
        i--;
        
    },1000)

    function cleared(timer){
        timer.innerText="Session Expired"
        document.querySelector("#otp_btn").disabled=true;
        document.querySelector("#otp_input").disabled=true;
        document.querySelector("#cancel_otp").disabled=true;
        clearInterval(id)
        let head=document.createElement("h3")
        head.innerText="Please return to checkout and retry"
        let anchor=document.createElement("a")
        anchor.innerText="Return"
        anchor.href="payment.html"
        redirecter.append(head,anchor)
    }
},3000)

function successfull(){

}