const botoes = document.querySelectorAll('[data-categoria]');
const receitas = document.querySelectorAll('.receita');

botoes.forEach(function(botao){
  botao.addEventListener('click', function(){
    const categoria = botao.dataset.categoria;

    receitas.forEach(function(receita){
      receita.style.display = categoria === 'todas' || receita.classList.contains(categoria) ? 'block' : 'none';
    });
  });
});

const urlParams = new URLSearchParams(window.location.search);
const filtro = urlParams.get('filtro'); // ex: "doces"

if (filtro && filtro !== 'todas'){
  const receitas = document.querySelectorAll('.receita');
  receitas.forEach(function(receita){
    if (!receita.classList.contains(filtro)) {
      receita.classList.add('escondida');
    }
  });
}