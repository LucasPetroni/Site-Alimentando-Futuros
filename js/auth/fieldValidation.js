const inputEmail = document.querySelector("#idEmail");

inputEmail.addEventListener("keyup", ()=>{
    const lblEmail = document.querySelector("label[for='idEmail']");

    if(inputEmail.value.length < 10){
        inputEmail.setAttribute("style", "outline-color:#f00");
        lblEmail.setAttribute("style", "color:#f00")
    }else{
        inputEmail.setAttribute("style", "outline-color:#0f0");
        lblEmail.setAttribute("style", "color:#0f0")
    }
})

const inputPassword = document.querySelector("#idPassword");

inputPassword.addEventListener("keyup", ()=>{
    const lblPass = document.querySelector("label[for='idPassword']");

    if(inputPassword.value.length < 8){
        inputPassword.setAttribute("style", "outline-color:#f00");
        lblPass.setAttribute("style", "color:#f00")
    }else{
        inputPassword.setAttribute("style", "outline-color:#0f0");
        lblPass.setAttribute("style", "color:#0f0")
    }
})
