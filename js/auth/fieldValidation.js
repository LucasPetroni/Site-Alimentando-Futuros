const inputEmail = document.querySelector("#idEmail");


inputEmail.addEventListener("keyup", () => {
  const lblEmail = document.querySelector("label[for='idEmail']");

  if (inputEmail.value.length < 10) {
    inputEmail.setAttribute("style", "outline-color:#f00");
    // lblEmail.setAttribute("style", "color:#f00");
  } else {
    inputEmail.setAttribute("style", "outline-color:#0f0");
    // lblEmail.setAttribute("style", "color:#0f0");
  }
});

const inputPassword = document.querySelector("#idPassword");

inputPassword.addEventListener("keyup", () => {
  const lblPass = document.querySelector("label[for='idPassword']");

  if (inputPassword.value.length < 8) {
    inputPassword.setAttribute("style", "outline-color:#f00");
    // lblPass.setAttribute("style", "color:#f00");
  } else {
    inputPassword.setAttribute("style", "outline-color:#0f0");
    // lblPass.setAttribute("style", "color:#0f0");
  }
});

// const eyePass = document.querySelector(".fa");

// eyePass.addEventListener("click", () =>{

//     if(inputPassword.getAttribute("type") == "password"){
//         inputPassword.setAttribute("type", "text");
//         eyePass.setAttribute("class", "fa fa-eye-slash")
//     }else{
//         inputPassword.setAttribute("type", "password");
//         eyePass.setAttribute("class", "fa fa-eye")
//     }
// });

userList = [
  {
    "name": "Caio Boris",
    "email": "caio@email.com.br",
    "pass": "alimentandoFuturo"
  },
  {
    "name": "Lucas Petroni",
    "email": "lucas@email.com.br",
    "pass": "alimentandoFuturo"
  },
  {
    "name": "Nathaly Kailane",
    "email": "nathaly@email.com.br",
    "pass": "alimentandoFuturo"
  },
  {
    "name": "Kauan Oriene",
    "email": "kauan@email.com.br",
    "pass": "alimentandoFuturo"
  },
  {
    "name": "Matheus Delgado",
    "email": "matheus@email.com.br",
    "pass": "alimentandoFuturo"
  }
];


const submitButton = document.querySelector("#btnSubmit");

submitButton.addEventListener("click", () => {
  let userLogged = {
    emailLogged: inputEmail.value,
    passLogged: inputPassword.value,
  };

  let userAuthenticated = {};

  try {
    if (inputEmail.value.length < 10)
      throw "O EMAIL DEVE CONTER MAIS DE 10 CARACTERES";
    if (inputPassword.value.length < 8)
      throw "A SENHA DEVE CONTER MAIS DE 8 CARACTERES";

    userList.forEach((user) => {
      if (
        user.email == userLogged.emailLogged &&
        user.pass == userLogged.passLogged
      ) {
        userAuthenticated = user;
        throw "VALIDADO";
      }
    });

    throw "SENHA OU EMAIL INVALIDO";
  } catch (msg) {
    const msgStatus = document.querySelector("#msgStatus");

    console.log(msg);
    if (msg == "VALIDADO") {
      localStorage.setItem(
        "user-authenticated",
        JSON.stringify(userAuthenticated)
      );

      const token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);

      localStorage.setItem("token", token);

      setTimeout(() => {
        window.location.href = "../pages/home.html";
      }, 3000);
    } else {
      msgStatus.setAttribute("style", "color: #ff0000");
      msgStatus.innerHTML =
        "<span><strong>Email ou senha inválidos!</strong></span>";

      inputEmail.value = "";
      inputPassword.value = "";
    }
  }
});
