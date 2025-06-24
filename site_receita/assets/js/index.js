// função que habilita o botão para cair no filtro da página de gategorias
function irParaFiltro(categoria) {
    window.location.href = '/site_receita/categories.html?filtro=${categoria}';
    };