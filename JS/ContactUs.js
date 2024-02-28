let submitBtn=document.getElementById("submit")
let emailInput=document.getElementById("email")
let nameInput=document.getElementById("name")
let responseInput=document.getElementById("response")
let tableBody=document.getElementById("tableBody")
let table=document.getElementById("table")

let tabledata=``
submitBtn.addEventListener("click",()=>{

        let sumbitedData={
            name:nameInput.value,
            email:emailInput.value,
            response:responseInput.value,

        }
console.log(sumbitedData);

tabledata+=`
<tr>
<td>${sumbitedData.email}</td>
<td>${sumbitedData.name}</td>
<td>${sumbitedData.response}</td>
</tr>
`
table.style.display="block"
tableBody.innerHTML=tabledata


clearinputs()
})


function clearinputs(){
    emailInput.value=""
    nameInput.value=""
    responseInput.value=""

}