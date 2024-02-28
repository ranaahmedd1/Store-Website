/// Navbar Design changes on scroll
let menuIcon=document.getElementsByClassName("menuIcon")[0]
let menu=document.getElementsByClassName("menu")[0]

menuIcon.addEventListener('click',function(){

    menu.classList.toggle("smallscreen");

});


console.log(window);
let scrollImg=document.getElementsByClassName("scrollbtn")[0]
console.log(scrollImg);
window.addEventListener("scroll",function(){
    if(window.scrollY >= 650){
        scrollImg.style.display="block"  
    }
    else
    {
        scrollImg.style.display = 'none'
    }

})

scrollImg.addEventListener('click',function(){
    window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
    })
})


// let login=false
let x=new XMLHttpRequest()
let allproducts=[]
x.open('GET','https://dummyjson.com/products')
x.send()
x.addEventListener('readystatechange',()=>{
    if(x.readyState ==4)
    {
        // if(login){
        allproducts=JSON.parse(x.response).products
        // console.log(allproducts);
        showAllProducts()
        // }
    
        // else{


        // }
    }
})

let variable=""
let Div=document.getElementById("productTable")

function showAllProducts(){
 allproducts.map((el,idx) => {
                variable+=`
               
    <div class="product" onclick="singleProduct(${idx})">
    <img src="${el.thumbnail}">
    <h1>${el.title}</h1>
    <h4>${el.price}$</h4>
    <p>${el.category}</p>
    <p>rate ${el.rating}</p>
    <a hrf="" target="_blank" > <button >Read More</button>
    </a>   

    </div>`;
//  console.log(idx);
Div.innerHTML=variable;
})}


function singleProduct(index){
window.localStorage.setItem('singleProduct',JSON.stringify(allproducts[index]))
window.location.href="http://127.0.0.1:5500/SingleProduct.html"
// window.location.blank=""

}
