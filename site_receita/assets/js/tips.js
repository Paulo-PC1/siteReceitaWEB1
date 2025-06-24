//função para exibir as tabelas de cada card  e função para a animação de entrada da pagina
const artigos = document.querySelectorAll('.artigo');

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2
});

artigos.forEach(function(art){
observer.observe(art);
});
function toggleTabela(index) {
const tabelas = document.querySelectorAll('.tabela-info');
const tabela = tabelas[index];

if (tabela.style.display === 'none') {
    tabela.style.display = 'block';
} else {
    tabela.style.display = 'none';
}
}