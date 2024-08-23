// import './style.css';
// import './font6-web/css/all.css'

// const { cli } = require("webpack");

// ------------------------------ 1. Product ---------------------------------- 
let product1Dom = document.querySelector("#id1");
product1Dom.addEventListener("click", function(){
    fetch("http://localhost/Deneme1/index.php")
    .then(response =>  response.json())
    .then(
        (data) => {
            if (data.length > 0) {
                let cardTitleDom = document.querySelector(".card-title");
                cardTitleDom.innerText = data[0]["ProductName"]; // İlk ürünü gösteriyoruz
                let cardTextDom = document.querySelector(".card-text");
                cardTextDom.innerHTML = `Fiyat: <strong>${data[0]["Price"]} Tl</strong> <br>  
                                         Kategori: <strong>${data[0]["Category"]}</strong> <br>
                                         Renk: <strong>${data[0]["Color"]}</strong>` 
            } else {
                console.log("Ürün bulunamadı");
            }
        } 
    )
    .catch(err => console.log(err))
    }
)

// ------------------------------ 2. Product ---------------------------------- 
let product2Dom = document.querySelector("#id2");
product2Dom.addEventListener("click", function(){
    fetch("http://localhost/Deneme1/index.php")
    .then(response =>  response.json())
    .then(
        (data) => {
            if (data.length > 0) {
                let cardTitleDom = document.querySelector(".p2");
                cardTitleDom.innerText = data[1]["ProductName"]; // İlk ürünü gösteriyoruz
                let cardTextDom = document.querySelector(".p2-text");
                cardTextDom.innerHTML = `Fiyat: <strong>${data[1]["Price"]} Tl</strong> <br>  
                                         Kategori: <strong>${data[1]["Category"]}</strong> <br>
                                         Renk: <strong>${data[1]["Color"]}</strong>` 
            } else {
                console.log("Ürün bulunamadı");
            }
        } 
    )
    .catch(err => console.log(err))
    }
)

// ------------------------------ 3. Product ---------------------------------- 
let product3Dom = document.querySelector("#id3");
product3Dom.addEventListener("click", function(){
    fetch("http://localhost/Deneme1/index.php")
    .then(response =>  response.json())
    .then(
        (data) => {
            if (data.length > 0) {
                let cardTitleDom = document.querySelector(".p3");
                cardTitleDom.innerText = data[2]["ProductName"]; // İlk ürünü gösteriyoruz
                let cardTextDom = document.querySelector(".p3-text");
                cardTextDom.innerHTML = `Fiyat: <strong>${data[2]["Price"]} Tl</strong> <br>  
                                         Kategori: <strong>${data[2]["Category"]}</strong> <br>
                                         Renk: <strong>${data[2]["Color"]}</strong>` 
            } else {
                console.log("Ürün bulunamadı");
            }
        } 
    )
    .catch(err => console.log(err))
    }
)

// ------------------------------ 4. Product ---------------------------------- 
let product4Dom = document.querySelector("#id4");
product4Dom.addEventListener("click", function(){
    fetch("http://localhost/Deneme1/index.php")
    .then(response =>  response.json())
    .then(
        (data) => {
            if (data.length > 0) {
                let cardTitleDom = document.querySelector(".p4");
                cardTitleDom.innerText = data[3]["ProductName"]; // İlk ürünü gösteriyoruz
                let cardTextDom = document.querySelector(".p4-text");
                cardTextDom.innerHTML = `Fiyat: <strong>${data[3]["Price"]} Tl</strong> <br>  
                                         Kategori: <strong>${data[3]["Category"]}</strong> <br>
                                         Renk: <strong>${data[3]["Color"]}</strong>` 
            } else {
                console.log("Ürün bulunamadı");
            }
        } 
    )
    .catch(err => console.log(err))
    }
)

// ------------------------------ 5. Product ---------------------------------- 
let product5Dom = document.querySelector("#id5");
product5Dom.addEventListener("click", function(){
    fetch("http://localhost/Deneme1/index.php")
    .then(response =>  response.json())
    .then(
        (data) => {
            if (data.length > 0) {
                let cardTitleDom = document.querySelector(".p5");
                cardTitleDom.innerText = data[4]["ProductName"]; // İlk ürünü gösteriyoruz
                let cardTextDom = document.querySelector(".p5-text");
                cardTextDom.innerHTML = `Fiyat: <strong>${data[4]["Price"]} Tl</strong> <br>  
                                         Kategori: <strong>${data[4]["Category"]}</strong> <br>
                                         Renk: <strong>${data[4]["Color"]}</strong>` 
            } else {
                console.log("Ürün bulunamadı");
            }
        } 
    )
    .catch(err => console.log(err))
    }
)

// ------------------------------ 6. Product ---------------------------------- 
let product6Dom = document.querySelector("#id6");
product6Dom.addEventListener("click", function(){
    fetch("http://localhost/Deneme1/index.php")
    .then(response =>  response.json())
    .then(
        (data) => {
            if (data.length > 0) {
                let cardTitleDom = document.querySelector(".p6");
                cardTitleDom.innerText = data[5]["ProductName"]; // İlk ürünü gösteriyoruz
                let cardTextDom = document.querySelector(".p6-text");
                cardTextDom.innerHTML = `Fiyat: <strong>${data[5]["Price"]} Tl</strong> <br>  
                                         Kategori: <strong>${data[5]["Category"]}</strong> <br>
                                         Renk: <strong>${data[5]["Color"]}</strong>` 
            } else {
                console.log("Ürün bulunamadı");
            }
        } 
    )
    .catch(err => console.log(err))
    }
)

// ------------------------------ 7. Product ---------------------------------- 
let product7Dom = document.querySelector("#id7");
product7Dom.addEventListener("click", function(){
    fetch("http://localhost/Deneme1/index.php")
    .then(response =>  response.json())
    .then(
        (data) => {
            if (data.length > 0) {
                let cardTitleDom = document.querySelector(".p7");
                cardTitleDom.innerText = data[6]["ProductName"]; // İlk ürünü gösteriyoruz
                let cardTextDom = document.querySelector(".p7-text");
                cardTextDom.innerHTML = `Fiyat: <strong>${data[6]["Price"]} Tl</strong> <br>  
                                         Kategori: <strong>${data[6]["Category"]}</strong> <br>
                                         Renk: <strong>${data[6]["Color"]}</strong>` 
            } else {
                console.log("Ürün bulunamadı");
            }
        } 
    )
    .catch(err => console.log(err))
    }
)

// ------------------------------ 8. Product ---------------------------------- 
let product8Dom = document.querySelector("#id8");
product8Dom.addEventListener("click", function(){
    fetch("http://localhost/Deneme1/index.php")
    .then(response =>  response.json())
    .then(
        (data) => {
            if (data.length > 0) {
                let cardTitleDom = document.querySelector(".p8");
                cardTitleDom.innerText = data[7]["ProductName"]; // İlk ürünü gösteriyoruz
                let cardTextDom = document.querySelector(".p8-text");
                cardTextDom.innerHTML = `Fiyat: <strong>${data[7]["Price"]} Tl</strong> <br>  
                                         Kategori: <strong>${data[7]["Category"]}</strong> <br>
                                         Renk: <strong>${data[7]["Color"]}</strong>` 
            } else {
                console.log("Ürün bulunamadı");
            }
        } 
    )
    .catch(err => console.log(err))
    }
)





// ---------------------------------------------------------------
// let btnDoms = document.querySelectorAll(".btn-primary"); // Tek bir buton seçiyoruz

 
// // for(let i = 0; i< btnDoms.length; i++)
// // {
//     btnDoms.forEach(btnElement =>
//         btnElement.addEventListener("click", function (){
//             cardDoms = document.querySelectorAll(".card-title");
//             for(let i = 0; i< cardDoms.length; i++)
//                 {
//                     fetch("http://localhost/Deneme1/index.php")
//                     .then(response =>  response.json())
//                     .then((data) => {
//                             let cardTitleDom = document.querySelector(".card-title");
//                             cardTitleDom.innerText = data[i]["ProductName"]; // İlk ürünü gösteriyoruz
//                             let cardTextDom = document.querySelector(".card-text");
//                             cardTextDom.innerHTML = `Fiyat: <strong>${data[i]["Price"]} Tl</strong> <br>  
//                                                     Kategori: <strong>${data[i]["Category"]}</strong> <br>
//                                                     Renk: <strong>${data[i]["Color"]}</strong>`             
//                     } )
//                     .catch(err => console.log(err));
//                 }   
//         })
//     )
// // }




// ********************************




fetch("http://localhost/Deneme1/index.php")
.then(response =>  response.json())
.then(json => console.log(json))
.catch(err => console.log(err));
