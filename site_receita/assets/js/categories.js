//função para funcionalidade do filtro das categorias de receitas
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

// função para filtrar as receitas pa pagina home que leva direto ao filto aplicado da pagina de categorias
const urlParams = new URLSearchParams(window.location.search);
const filtro = urlParams.get('filtro'); 

if (filtro && filtro !== 'todas'){
  const receitas = document.querySelectorAll('.receita');
  receitas.forEach(function(receita){
    if (!receita.classList.contains(filtro)) {
      receita.classList.add('escondida');
    }
  });
};