// let variable=``
let parent = document.getElementById("singleProduct")
let images=document.getElementById("images")
let text=document.getElementById("text")
let imagesContent=``
let textContent=``
let parentContent=``
let product = {}
if(window.localStorage.getItem('singleProduct')!== null){
     product=JSON.parse(window.localStorage.getItem('singleProduct'))
        console.log(product.id);
     imagesContent=`
     <img class='selectedimage' src="${product.images[0]}">
     <img class='selectedimage' src="${product.images[1]}">
     <img class='selectedimage' src="${product.images[2]}">
     <img class='selectedimage' src="${product.images[3]}">
     `
     textContent=`
     <h1>${product.title}</h1>
     <h4>${product.price}$</h4>
     <p>${product.category}</p>
     <p>rate ${product.rating}</p>
     `

     parentContent=`
     <img src="${product.thumbnail}">

     `

     parent.innerHTML=parentContent;
     images.innerHTML=imagesContent;
     text.innerHTML=textContent;

    // console.log("heeloiij");
}

// console.log(JSON.parse(window.localStorage.getItem('singleProduct')));

let singleProduct=document.getElementById("singleProduct")
let Selectedimage=document.getElementsByClassName("selectedimage")
console.log(Selectedimage);

for (let i = 0; i < Selectedimage.length; i++) {
    Selectedimage[i].addEventListener('click' , ()=>{
        singleProduct.innerHTML = `<img src="${product.images[i]}">`
    })
    
}

