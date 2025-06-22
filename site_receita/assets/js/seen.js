const form = document.getElementById("form-receita");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function(event) {
event.preventDefault();

mensagem.style.display = "block";

form.reset();

setTimeout(() => {
mensagem.style.display = "none";
}, 5000);
});

