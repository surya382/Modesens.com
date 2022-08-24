
let main_data;
let count=0;
    async function request(){


        let res=await fetch("https://amazon-india-web-scraper.p.rapidapi.com/search/mens%20wear?&api_key=5e807588161dda4445ec22b79036a4c0",{
        
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '26adf3f779msh4e778dce1dc67f1p1d6d80jsn399d522ab600',
                'X-RapidAPI-Host': 'amazon-india-web-scraper.p.rapidapi.com'
            }
        
        });
        
        let data= await res.json();
          main_data=data.results;
        
         console.log(main_data);
         append_data(main_data)
        
            }
        
            
        
        
        
        
            
            function append_data(main_data){

                if(count>=50){
                    count=0;
                }

                let loop_run=count+10;
        
                document.querySelector("#append").innerHTML="";
        
                    for(let i=count;i<loop_run;i++){
        
        
                    let box=document.createElement("div");
        
                    let pic=document.createElement("img");
                    pic.setAttribute("src",main_data[i].image);
                     pic.style.width="100%";
                     pic.style.height="250px";

                     


                     let name=document.createElement("h4");
                     name.innerText=main_data[i].name;

                     let price=document.createElement("h5");
                     price.innerText=main_data[i].price_string;


                      
        
        
        
                     box.append(pic,name,price);
        
                     document.querySelector("#append").append(box);
                    }
                    count=count+10;
                
            }

          paginate();
            function paginate(){

                for(let i=1;i <=4;i++){

                    let but=document.createElement("button");
                    but.innerText=i;

                    but.addEventListener("click",function(){
                       
                        request();
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




        