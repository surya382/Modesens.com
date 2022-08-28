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
        nextAnim()
    }
    str1+=str[i]
  h1.innerText=str1;
  div.append(h1)
  i++;
},100)
}

function nextAnim(){
    let msg=document.createElement("div")
    msg.setAttribute("class","msg")
    let data=JSON.parse(localStorage.getItem("address"))
    let head1=document.createElement("h1")
    head1.setAttribute("class","white_text")
    let head2=document.createElement("h1")
    head2.setAttribute("class","white_text")
    let head3=document.createElement("h1")
    head3.setAttribute("class","white_text")
    let str1=`Thank You. ${data.name} for shopping with us.`,
    str2=`The items will be delivered to ${data.name} , ${data.ad} ${data.city} ${data.state} ${data.pin}`,
    str3=`Explore more,     Returning to HOME PAGE.`;
    let c1=0,c2=0,c3=0,str11="",str22="",str33="";
    id1=setInterval(function(){
        if(c1==str1.length-1){
            clearIntervalOf(id1)
            nextLine()
        }
        str11+=str1[c1]
      head1.innerText=str11;
      msg.append(head1)
      c1++;
    },100)
   function nextLine(){
    id2=setInterval(function(){
        if(c2==str2.length-1){
            clearIntervalOf(id2)
            nextLineNext()
        }
        str22+=str2[c2]
      head2.innerText=str22;
      msg.append(head2)
      c2++;
    },100)
   }
   function nextLineNext(){
    id3=setInterval(function(){
        if(c3==str3.length-1){
            clearIntervalOf(id3)
            homePAGE()
        }
        str33+=str3[c3]
      head3.innerText=str33;
      msg.append(head3)
      c3++;
    },100)
   }
   function homePAGE(){
    setTimeout(function(){
        // window.location.href="index.html"
    },1000)
   }
    // let head2=document.createElement("h2")
    // head2.innerText=""
    Container.append(msg)
    
}
order_successful.append(h1)

Container.append(div)

function clearIntervalOf(which){
    clearInterval(which)
}
