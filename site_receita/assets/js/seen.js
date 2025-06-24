// função para exibir mensagem do formulario caso mensagem seja emviada com sucesso

const form = document.getElementById("form-receita");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function(event) {
event.preventDefault();

mensagem.style.display = "block";

form.reset();

setTimeout(function(){
mensagem.style.display = "none";
}, 5000);
});

