const form = document.getElementById("formulario");
const submitButton = document.getElementById("enviar");

form.addEventListener("input", function () {
  const inputs = form.querySelectorAll("input[required]");
  let isFormValid = true;

  inputs.forEach(function (input) {
    if (input.value.trim() === "") {
      isFormValid = false;
    }
  });

  if (isFormValid) {
    submitButton.disabled = false;
    submitButton.classList.remove("botao-apagado");
    submitButton.classList.add("botao-ativo");
  } else {
    submitButton.disabled = true;
    submitButton.classList.remove("botao-ativo");
    submitButton.classList.add("botao-apagado");
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Realize a validação dos campos do formulário aqui

  // Exemplo de exibição dos valores no console
  const formData = new FormData(form);
  for (let [key, value] of formData.entries()) {
    console.log(key + ": " + value);
  }

  // Exibir mensagem de "formulario enviado"
  const mensagem = document.createElement("p");
  mensagem.textContent = "Formulário enviado";
  form.appendChild(mensagem);

  // Limpar o formulário
  form.reset();
});
s;
