let Container=document.getElementById("OrderContainer");
let div=document.createElement("div")
div.setAttribute("class","orderSuccess")
let order_successful=document.createElement("div")
order_successful.setAttribute("class","order_successful")
let h1=document.createElement("h1")
let circle=document.createElement("div")
circle.setAttribute("class","circle")
let slant_left=document.createElement("div")
slant_left.setAttribute("class","slant_left")
let slant_right=document.createElement("div")
slant_right.setAttribute("class","slant_right")
let str="Order Successful."
let i=0,str1="";
let all=[circle,slant_left,slant_right],allCount=0;
let circle_anim=setInterval(function(){
    if(allCount==all.length-1){
        circle.style.borderColor="black"
        slant_left.style.backgroundColor="black"
        slant_right.style.backgroundColor="black"
        div.style.backgroundColor="green";
        orderAnim()
        clearIntervalOf(circle_anim)
    }
    div.append(all[allCount])
    allCount++ 
},600)
let id;
orderAnim= function(){
    id=setInterval(function(){
    if(i==str.length-1){
        clearIntervalOf(id)
    }
    str1+=str[i]
  h1.innerText=str1;
  div.append(h1)
  i++;
},500)
}

order_successful.append(h1)



Container.append(div)

function clearIntervalOf(which){
    clearInterval(which)
}
