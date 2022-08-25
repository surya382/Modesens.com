//https://fakestoreapi.com/products

let imglink = ["https://modesens.com/banner/13114/getimg/?img=%2Fbanner%2F20220812-modesens-lengjing2-1140x400.jpg",
    "https://modesens.com/banner/13214/getimg/?img=%2Fbanner%2F20220824-modesens-AGJeans-1140x400-EN.jpg",
    "https://modesens.com/banner/11844/getimg/?img=%2Fbanner%2F20220803-modesens-Sale-1140x400-EN.jpg",
    "https://modesens.com/banner/13198/getimg/?img=%2Fbanner%2F20220823-modesens-Matchesfashion-1140x400-M-EN.jpg",
    "https://modesens.com/banner/13168/getimg/?img=%2Fbanner%2F20220821-modesens-RalphLauren-1140x400-EN.jpg",
    "https://modesens.com/banner/13178/getimg/?img=%2Fbanner%2F20220822-modesens-NEST-1140x400-EN.jpg"
]

let rightbtn = document.getElementById("right");
let leftbtn = document.getElementById("left");
let move = document.getElementById("image");

let imgstate = 0;
rightbtn.addEventListener("click", function () {

    imgstate++;
    if (imgstate === imglink.length) {
        imgstate = 0;
    }
    move.src = imglink[imgstate];
});

leftbtn.addEventListener("click", function () {

    imgstate--;
    if (imgstate < 0) {
        imgstate = imglink.length - 1;
    }

    move.src = imglink[imgstate];
});

async function getData() {

    try {

        let res = await fetch("https://fakestoreapi.com/products?limit=3")

        let data = await res.json();

        console.log(data)

        appendData(data)

    } catch (err) {
        console.log(err);
    }
}
getData()

appendData = (data) => {
    data.forEach((el, index) => {

        let div = document.createElement("div");

        let icon = document.createElement("button");
        icon.setAttribute("class", "fa-solid fa-heart");
        icon.setAttribute("id", "btn3")
        icon.addEventListener("click", function () {
            //console.log("good")
            Toggle(index)
        })
        // icon.setAttribute("onclick","Toggle()")


        let img = document.createElement("img");
        img.setAttribute("id", "pic")
        img.src = el.image;

        let title = document.createElement("h3");
        title.innerText = el.title;

        let btn = document.createElement("button");
        btn.setAttribute("id", "btn")
        btn.innerText = "SHOP NOW";

        div.append(img, title, btn, icon);

        document.getElementById("big").append(div);
    })
}

function Toggle( x) {
    console.log(x)

    if (x == 0) {
        document.getElementById("btn3").style.color = "red";
    } 
    else {
        document.getElementById("btn3").style.color = "grey";
    }
}


async function get() {

    try {

        let res = await fetch("https://fakestoreapi.com/products/category/women's%20clothing?limit=4")

        let data1 = await res.json();

        console.log(data1)

        appendDt(data1)

    } catch (err) {
        console.log(err);
    }
}
get()

appendDt = (dt) => {
    dt.forEach((el, index) => {

        let div = document.createElement("div");

        let icon = document.createElement("button");
        icon.setAttribute("class", "fa-solid fa-heart");
        icon.setAttribute("id", "btn6")
        icon.addEventListener("click", function () {
            //console.log("good")
            Toggle2(index)
        })

        let img = document.createElement("img");
        img.setAttribute("id", "pic1")
        img.src = el.image;

        let title = document.createElement("h4");
        title.innerText = el.title;

        let price = document.createElement("h4");
        price.innerText = `$ ${el.price}`;


        div.append(img, title, price, icon);

        document.getElementById("box").append(div);
    })
}

function Toggle1(x) {
    //console.log(x)

    if (x==0) {
        document.getElementById("btn4").style.color = "red";
    }
    else {
        document.getElementById("btn4").style.color = "red";
    }
}

async function getlast() {

    try {

        let res = await fetch("https://fakestoreapi.com/products/category/jewelery?limit=4")

        let data = await res.json();

        console.log(data)

        appendLast(data)

    } catch (err) {
        console.log(err);
    }
}
getlast()

appendLast = (data) => {
    data.forEach((el, index) => {

        let div = document.createElement("div");

        let icon = document.createElement("button");
        icon.setAttribute("class", "fa-solid fa-heart");
        icon.setAttribute("id", "btn4")
        icon.addEventListener("click", function () {
            //console.log("good")
            Toggle1(index)
        })

        let img = document.createElement("img");
        img.setAttribute("id", "pic")
        img.src = el.image;

        div.append(img, icon);

        document.getElementById("last").append(div);
    })
}


function Toggle2(x) {
    
    if (x==0) {
        document.getElementById("btn6").style.color = "red";
    } else {
        document.getElementById("btn6").style.color = "red";
    
    }
}