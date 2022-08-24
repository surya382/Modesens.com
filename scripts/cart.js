let ArrData=JSON.parse(localStorage.getItem("cart"));
getData()
async function getData(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7bfa83b2c5msh425d2064d09a2bep13a9b6jsn507dfaac658c',
            'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
        }
    };
    
  let res=await  fetch('https://amazon24.p.rapidapi.com/api/todaydeals', options)
       let data=await res.json()
       console.log(data)
    //    DisplayTab(data)
}
// DisplayTab(ArrData)
function DisplayTab(data){
    let divMain=document.querySelector("#container")
    divMain.innerHTML=""
    data.forEach(function(elem,index){
        let div=document.createElement("div")
        let image=document.createElement("img")
        image.setAttribute("src",elem.image)
        let desc=document.createElement("p")
        desc.innerText=elem.desc;
        let type=document.createElement("p")
        type.innerText=elem.type;
        let price=document.createElement("p")
        price.innerText="Rs. "+elem.price;
        let rem=document.createElement("button")
        rem.setAttribute("id","remove_product")
        rem.innerText="Remove";
        rem.addEventListener("click",function(){
            removeData(elem,index)
        })
        div.append(image,desc,type,price,rem)
        divMain.append(div)
    })
}

function removeData(elem,index){
    ArrData.splice(index,1)
    localStorage.setItem("cart",JSON.stringify(ArrData))
    DisplayTab(ArrData)
}