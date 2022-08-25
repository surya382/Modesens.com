let form=document.querySelector("form")
form.addEventListener("submit",function(){
    event.preventDefault()
    console.log("checking whether am i working or not")
    window.location.href="checkout.html"
})