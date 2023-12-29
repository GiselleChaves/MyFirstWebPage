document
  .getElementById("send-button")
  .addEventListener("click", validaFormulario);

function validaFormulario() {
  if (
    document.getElementById("name").value != "" &&
    document.getElementById("email").value != ""
  ) {
    alert("Pronto! Você receberá as novidades por email.");
  } else {
    alert("Por favor, preencha os campos nome e email!");
  }
}
