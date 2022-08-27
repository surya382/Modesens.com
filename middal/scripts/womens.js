
let main_data=[
	
	{
		image:"https://m.media-amazon.com/images/I/717fAwfl6-L._AC_UL320_.jpg",
		name:"Women Striped Top with Half Sleeves for Office Wear, Casual ",
		price:"669",
		description:""
	},

	{
		image:"https://m.media-amazon.com/images/I/71AOLDbW+IL._AC_UL320_.jpg",
		name:"Women's Cotton Kurti with Pant & Dupatta",
		price:"499",
		description:""
	},

	{
		image:"https://m.media-amazon.com/images/I/61Dxa4I8qmS._AC_UL320_.jpg",
		name:"Women's Fashion Sandals | Light weight, Comfortable &",
		price:"290",
		description:""
	},

	{
		image:"https://m.media-amazon.com/images/I/71yaktShQCL._AC_UL320_.jpg",
		name:"Women's Floral Maxi Dress",
		price:"440",
		description:""
	},

	{
		image:"https://m.media-amazon.com/images/I/81k2lRkVAlL._AC_UL320_.jpg",
		name:"Women Dress Material",
		price:"499",
		description:""
	},

	{
		image:"https://m.media-amazon.com/images/I/61xrTERNdCL._AC_UL320_.jpg",
		name:"Women's Synthetic Ready to Wear Saree With Blouse Piece",
		price:"799",
		description:""
	},

	{
		image:"https://m.media-amazon.com/images/I/61PvevXbHmL._AC_UL320_.jpg",
		name:"womens Kurta with Pant & Dupatta",
		price:"499",
		description:""
	},

	{
		image:"https://m.media-amazon.com/images/I/81bann3iZlL._AC_UL320_.jpg",
		name:"Women Upper Cotton and Inner Rayon Anarkali Kurta",
		price:"459",
		description:""
	},

	{
		image:"https://m.media-amazon.com/images/I/61HrmuAz0xL._AC_UL320_.jpg",
		name:"Women Top (526-576)",
		price:"789",
		description:""
	},

	{
		image:"https://m.media-amazon.com/images/I/81npdOYMaFL._AC_UL320_.jpg",
		name:"Women's Grey Chanderi Silk Embroidered Semi-Stitched ",
		price:"499",
		description:""
	},

	{
		image:"https://m.media-amazon.com/images/I/61JQO-dRupL._AC_UL320_.jpg",
		name:"Flat Sandals for Women & Girls|Lightweight, Comfortable",
		price:"385",
		description:""
	},

	{
		image:"https://m.media-amazon.com/images/I/51BO-LVQxUL._AC_UL320_.jpg",
		name:"Bulicorn Women and Girls Fashion Heels Sandals Latest ",
		price:"429",
		description:""
	},

	{
		image:"https://m.media-amazon.com/images/I/711nw0gay6L._AC_UL320_.jpg",
		name:"womens Aroma Sandal Fashion Sandals",
		price:"599",
		description:""
	},

	{
		image:"https://m.media-amazon.com/images/I/61TDvh3cgsL._AC_UL320_.jpg",
		name:"Toe Srap Wedge Sandal",
		price:"299",
		description:""
	},

	{
		image:"https://m.media-amazon.com/images/I/41qgEeFThPL._AC_UL320_.jpg",
		name:"womens Lille Fashion Sandals",
		price:"549",
		description:""
	},

	{
		image:"https://m.media-amazon.com/images/I/71XFks+CAfL._AC_UL320_.jpg",
		name:"womens Square Toe Corporate Sandals Fashion Sandals",
		price:"999",
		description:""
	},

	{
		image:"https://m.media-amazon.com/images/I/61I36lS9gwL._AC_UL320_.jpg",
		name:"Sandal for Women's Super Comfort Cushion Sandal",
		price:"497",
		description:""
	},

	{
		image:"https://m.media-amazon.com/images/I/81Vl8nxoJIL._AC_UL320_.jpg",
		name:"Women's Skinny Jeans",
		price:"849",
		description:""
	},

	{
		image:"https://m.media-amazon.com/images/I/61T40GxrqPL._AC_UL320_.jpg",
		name:"Women's Straight Jeans (A1472-0009_Indigo_32",
		price:"645",
		description:""
	},

	{
		image:"https://m.media-amazon.com/images/I/81AzFbAMflS._AC_UL320_.jpg",
		name:"Women's Skinny Jeans",
		price:"475",
		description:""
	},

	{
		image:"https://m.media-amazon.com/images/I/51VMYJcp1aL._AC_UL320_.jpg",
		name:"Fashion Solid Denim Mid Rise Rugged Slim Fit Stretchable",
		price:"758",
		description:""
	},

	{
		image:"https://m.media-amazon.com/images/I/71E9iEes8YL._AC_UL320_.jpg",
		name:"Women's Black Skinny Fit High Rise Clean Look Regular Lengt",
		price:"699",
		description:""
	},

	{
		image:"https://m.media-amazon.com/images/I/313389wmFrL._AC_UL320_.jpg",
		name:"Womens High Rise Cotton Lycra Clean Look Ankle Lengt",
		price:"498",
		description:""
	},

	{
		image:"https://m.media-amazon.com/images/I/61pwV5yI5qL._AC_UL320_.jpg",
		name:"Women's Jeans",
		price:"919",
		description:""
	},

	{
		image:"https://m.media-amazon.com/images/I/617o9rdZXML._AC_UL320_.jpg",
		name:"Women's Denim Stretchable Slim Fit Jeans",
		price:"599",
		description:""
	}

	
	
	];
            
        
        
        
        append_data(main_data);
            
            function append_data(main_data){

               

                
        
                document.querySelector("#append").innerHTML="";
        
                    
                   main_data.forEach(function(el){

                 
        
                    let box=document.createElement("div");
        
                    


                    let pic=document.createElement("img");
                    pic.setAttribute("src",el.image);
                     pic.style.width="75%";
                     pic.style.height="250px";

                     


                     let name=document.createElement("h4");
                     name.innerText=el.name;

                     let price=document.createElement("h5");
                     price.innerText="INR"+" "+el.price;


                      
        
        
        
                     box.append(pic,name,price);

                     box.addEventListener("click",function(){

                        store(el);
                    });
        
                     document.querySelector("#append").append(box);
                    });
                    
                
            }

          paginate();
            function paginate(){

                for(let i=1;i<=4;i++){

                    let but=document.createElement("button");
                    but.innerText=i;

                    but.addEventListener("click",function(){
                       
                        append_data(main_data);
                    })

                    
                    document.querySelector("#but_div").append(but);
                    
                }
            }




            function search(){

         let search_for= document.createElement("input");
            search_for.setAttribute("id","look")
         search_for.addEventListener("input",function(){

            sort();
         })
         document.querySelector("#search_bar").innerHTML="";
         document.querySelector("#search_bar").append(search_for);
                  
            }


        function sort(){

            let value=document.querySelector("#look").value;

            let filter_data=main_data.filter(function(el){

                return el.name.includes(value);
            });

            append_data(filter_data);
        }


        

        function store(el){
      
            let arr=[];
            

            arr.push(el);

            localStorage.setItem("cart_data",JSON.stringify(arr));

            window.location.href="part2.html";


        }

        