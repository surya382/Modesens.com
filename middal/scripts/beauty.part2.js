let id;
let data=JSON.parse(localStorage.getItem("cart_data"));


data.forEach(function(el){
    let prod_img=document.createElement("img");
    prod_img.setAttribute("src",el.image);
    prod_img.style.width="80%";
    prod_img.style.height="200px"

    document.querySelector("#details_prod_img").append(prod_img)
})


display(data);



function display(data){

    //document.querySelector("#main_div").innerHTML="";

    data.forEach(function(el){


        let pic=document.createElement("img");
        pic.setAttribute("src",el.image);
        pic.style.width="80%"
        pic.style.height="80%"

        document.querySelector("#image").append(pic);

        let name=document.createElement("h4");
        name.innerText=el.name;

        let price=document.createElement("h4")
        price.innerText="INR"+" "+el.price;

        let det=document.createElement("h4");
        det.innerText="Join now to earn up to 480 points when you buy."
         
        document.querySelector("#detail_item").append(name,price,det);

    });
}


let real_cart=JSON.parse(localStorage.getItem("realcart_data"))||[];

function add_c(){

    

       let  quantity=document.querySelector("#qty").value;
    //    let size=document.querySelector("#size").value;
    //    let color=document.querySelector("#color").value;

    data.forEach(function(el){

        

        el.quantity=quantity;
        // el.size=size;
        // el.color=color;

        real_cart.push(el);

    });

    localStorage.setItem("realcart_data",JSON.stringify(real_cart));

  document.querySelector("#notify").innerText="Product Added successfully";
    
 id= setTimeout(function(){
document.querySelector("#notify").innerText="";

},5000);

}



function now(){

    let  quantity=document.querySelector("#qty").value;
    // let size=document.querySelector("#size").value;
    // let color=document.querySelector("#color").value;

    data.forEach(function(el){

        el.quantity=quantity;
        // el.size=size;
        // el.color=color;

    });

    localStorage.setItem("cart_data",JSON.stringify(data));

    window.location.href="checkout.html";

}
//clearTimeout(id);