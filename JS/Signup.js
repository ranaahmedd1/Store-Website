let Emailinput=document.getElementById("email")
let Firstnameinput=document.getElementById("Fname")
let Lastnameinput=document.getElementById("Lname")
let passwordinput=document.getElementById("password")
let submitButton=document.getElementById("Submitbutton")
let layer= document.getElementById("layer")
console.log(layer)
submitButton.addEventListener('click',()=>{

    let singlSignUp={
         email:Emailinput.value,
         fname:Firstnameinput.value,
         Lname:Lastnameinput.value,
         passwrd:passwordinput.value

    }



window.localStorage.setItem('signup',JSON.stringify(singlSignUp))
window.location.href="http://127.0.0.1:5500/index.htm"
layer.style.display="none"
})


