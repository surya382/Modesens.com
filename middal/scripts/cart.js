let ArrData=JSON.parse(localStorage.getItem("cart_data"));
for(let i=0;i<10;i++){
    ArrData.push(ArrData[0])
}
let couponDisplay=document.querySelector(".couponDisplay")
ArrData.forEach(function(el){
    el["quantity"]=1;
})
let coupon="TEAMJS201"
let applied=localStorage.getItem("applied") || "no"
console.log(applied)
let total,
discount,
del=80;
console.log(ArrData)
// getData()
// async function getData(){
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '7bfa83b2c5msh425d2064d09a2bep13a9b6jsn507dfaac658c',
//             'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
//         }
//     };
    
//   let res=await  fetch('https://amazon24.p.rapidapi.com/api/todaydeals', options)
//        let data=await res.json()
//        console.log(data)
//     //    DisplayTab(data)
// }
DisplayTab(ArrData)
function DisplayTab(data){
    let divMain=document.querySelector("#CartContent")
    divMain.innerHTML=""
    total=0;
    data.forEach(function(el,index){
        let div=document.createElement("div")
        let image=document.createElement("img")
        image.setAttribute("src",el.image)
        let desc=document.createElement("p")
        desc.innerText=el.desc;
        let type=document.createElement("p")
        type.innerText=el.name;
        let warnQty=document.createElement("p")
        warnQty.setAttribute("class","warnQty")
        let quantityDiv=document.createElement("div")
        let leftQty=document.createElement("button")
        leftQty.innerText="-"
        leftQty.addEventListener("click",function(){
            if(el.quantity==1){
                warnQty.innerText="You can't reduce quantity Please try removing the Item"
            }else{
                el.quantity--;
                qty.innerText=el.quantity;
                price.innerText="Rs. "+Number(el.price)*Number(el.quantity);
                total=Number(total)-Number(el.price);
                localStorage.setItem("cart_data",JSON.stringify(ArrData))
                cartData()
            }
        })
        let rightQty=document.createElement("button")
        rightQty.innerText="+"
        rightQty.addEventListener("click",function(){
           el.quantity++;
           qty.innerText=el.quantity;
           price.innerText="Rs. "+el.price*el.quantity;
           warnQty.innerText=""
           total=Number(total)+Number(el.price);
           ArrData=ArrData
           localStorage.setItem("cart_data",JSON.stringify(ArrData))
           console.log(total)
           cartData()
        })
        let qty=document.createElement("p")
        qty.innerText=el.quantity;
        let price=document.createElement("p")
        price.innerText="Rs. "+el.price*el.quantity;
        let rem=document.createElement("button")
        rem.setAttribute("id","remove_product")
        rem.innerText="Remove";
        rem.addEventListener("click",function(){
            removeData(el,index)
        })
        total=total+el.quantity*el.price;
        quantityDiv.append(leftQty,qty,rightQty)
        div.append(image,type,quantityDiv,warnQty,price,rem)
        divMain.append(div)
    })
    cartData()
}

function removeData(elem,index){
    total=total-(Number(elem.quantity)*Number(elem.price))
    ArrData.splice(index,1)
    localStorage.setItem("cart_data",JSON.stringify(ArrData))
    DisplayTab(ArrData)
}



function cartData(){
    
    let item_price=document.querySelector(".total_item_price")
    item_price.innerText=`Rs ${total}`;
    if(total>499){
        del=0
    }
    let delivery=document.querySelector(".delivery")
    delivery.innerText=`Rs ${del}`;
    let gst=document.querySelector(".gst")
    gst.innerText=`Rs ${eval(total*18/100)}`
      let total_payable=document.querySelector(".total_payable_price")
    total_payable.innerText=`Rs. ${Math.round(eval(total+(total*18/100)+del+(discount || 0)))}`
    let total_price=document.querySelector(".total_cart_price")
    total_price.innerText=`Rs ${Math.round(eval(total+(total*18/100)+del+(discount || 0)))}`;
    let discountH=document.querySelector(".discount_head")
    if(discount==1000 && applied=="no"){;
        discountH.innerText=`Discount : Rs. - ${discount}`
        total=total-discount;
        total_price.innerText=`Rs ${total}`;
        discount=0;
        localStorage.setItem("applied","yes")
    }else{
        console.log(applied)
    }
  
    localStorage.setItem("total",eval(total+(total*18/100)+del+(discount || 0)))

}
checkApplied()
function checkApplied(){
    if(applied=="yes"){
        couponDisplay.innerText="You Have Already Applied Coupon Successfully"
        couponDisplay.style.color="green"
    }
}

function checkCoupon(){
let couponValue=document.querySelector(".coupon_val").value;
if(couponValue==coupon){
    discount=1000;
    couponDisplay.innerText="You Have Applied Coupon Successfully"
    couponDisplay.style.color="green"
    cartData()
}else{
    couponDisplay.innerText="Invalid Coupon Code"
    couponDisplay.style.color="red"
}
}