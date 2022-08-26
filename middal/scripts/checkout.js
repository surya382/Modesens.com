let form=document.querySelector("form")
form.addEventListener("submit",function(){
    event.preventDefault()
    let address={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        ad:document.getElementById("adr").value,
        city:document.getElementById("city").value,
        state:document.getElementById("state").value,
        pin:document.getElementById("pin").value

    }
   localStorage.setItem("address",JSON.stringify(address))
    window.location.href="payment.html"
})