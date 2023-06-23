const btnEl= document.querySelector(".btn");
const inputEl=document.querySelector("input");
const copyEl=document.querySelector(".fa-copy");
const alertEl=document.querySelector(".alert-container");

btnEl.addEventListener("click", ()=>{
    createPassword()
})

copyEl.addEventListener("click", ()=>{
    copyPassword();
    alertEl.classList.remove("active");
    setTimeout(()=>{
        alertEl.classList.add("active");

    },2000)
})

function createPassword(){

    const chars ="0123456789zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP!@#$%^&*()-=_+[]\;',./{}|:<>?";
    const Passwordlength=14;
    let password=""
    for (let index = 0; index < Passwordlength; index++) {
        const randomNum =Math.floor( Math.random()*chars.length)
        password+=chars.substring(randomNum, randomNum+1);



        
    }

    inputEl.value=password;
    alertEl.innerText= password +"copied!";

}
 
function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0,9999);
    navigator.clipboard.writeText(inputEl.value);
    
}

