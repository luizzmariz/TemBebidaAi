const navbar = document.querySelector('.navbar');
const search = document.querySelector('.search-container');
search.style.top = navbar.offsetHeight + 'px';

// Função para exibir as bebidas
function exibirBebidas() {
    const bebidas = JSON.parse(localStorage.getItem("bebidas")) || [];
    const container = document.getElementById('bebidasContainer');
    
    // Limpa o conteúdo existente
    container.innerHTML = '';

    if (bebidas.length === 0) {
        container.innerHTML = '<p class="text-muted text-center w-100">Nenhuma bebida cadastrada ainda.</p>';
        return;
    }

    // Adiciona cada bebida como um card
    bebidas.forEach(bebida => {
        const col = document.createElement('div');
        col.className = 'col-md-4 col-lg-3 mb-4';

        const card = document.createElement('div');
        card.className = 'card h-100 shadow-sm';

        const imagem = document.createElement('img');
        imagem.className = 'card-img-top';
        imagem.src = bebida.imagem;
        imagem.alt = bebida.nome;
        imagem.style.height = '200px';
        imagem.style.objectFit = 'cover';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body d-flex flex-column';

        const nome = document.createElement('h5');
        nome.className = 'card-title';
        nome.textContent = bebida.nome;

        const tipo = document.createElement('p');
        tipo.className = 'card-text text-muted mb-2';
        tipo.textContent = `Tipo: ${formatarTipo(bebida.tipo)}`;

        const preco = document.createElement('p');
        preco.className = 'card-text font-weight-bold mb-3';
        preco.textContent = `R$ ${bebida.preco.toFixed(2)}`;

        const descricao = document.createElement('p');
        descricao.className = 'card-text text-secondary small flex-grow-1';
        descricao.textContent = bebida.descricao;

        cardBody.appendChild(nome);
        cardBody.appendChild(tipo);
        cardBody.appendChild(preco);
        cardBody.appendChild(descricao);
        card.appendChild(imagem);
        card.appendChild(cardBody);
        col.appendChild(card);
        container.appendChild(col);
    });
}

// Função para formatar o tipo para exibição
function formatarTipo(tipo) {
    const tipos = {
        'cerveja': 'Cerveja',
        'destilado': 'Destilado',
        'vinho': 'Vinho',
        'drink': 'Drink',
        'nao_alcoolica': 'Não Alcoólica'
    };
    return tipos[tipo] || tipo;
}

// Chama a função ao carregar a página
document.addEventListener('DOMContentLoaded', exibirBebidas);