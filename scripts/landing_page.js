const produtos = [
    { nome: "Cerveja Pilsen *Promo*", preco: 4.5, quantidade: 100, distancia: 2, tipo: "alcolica", categoria: "CERVEJAS", destaque: true, promocao: true, distribuidor: "Distribuidora Boa Gelada" },
    { nome: "Cerveja IPA", preco: 7.0, quantidade: 60, distancia: 1.5, tipo: "alcolica", categoria: "CERVEJAS", destaque: true, promocao: false, distribuidor: "BebaMais Distribuidora" },
    { nome: "Cerveja Pilsen 2", preco: 7.5, quantidade: 200, distancia: 2.5, tipo: "alcolica", categoria: "CERVEJAS", destaque: true, promocao: false, distribuidor: "Lúpulo Express" },

    { nome: "Vodka", preco: 35.0, quantidade: 40, distancia: 5, tipo: "alcolica", categoria: "DESTILADOS", destaque: true, promocao: false, distribuidor: "BebaMais Distribuidora" },
    { nome: "Whisky", preco: 85.0, quantidade: 25, distancia: 6, tipo: "alcolica", categoria: "DESTILADOS", destaque: true, promocao: false, distribuidor: "Casa do Destilado" },

    { nome: "Vinho Tinto *Promo*", preco: 22.0, quantidade: 50, distancia: 4, tipo: "alcolica", categoria: "VINHOS", destaque: false, promocao: true, distribuidor: "Adega Real" },
    { nome: "Vinho Tinto 2", preco: 46.0, quantidade: 20, distancia: 4, tipo: "alcolica", categoria: "VINHOS", destaque: true, promocao: false, distribuidor: "Adega Real" },

    { nome: "Margarita Pronta", preco: 19.0, quantidade: 30, distancia: 3, tipo: "alcolica", categoria: "DRINKS", destaque: false, promocao: false, distribuidor: "Mixology Express" },
    { nome: "Caipirinha Tradicional", preco: 15.0, quantidade: 45, distancia: 2.8, tipo: "alcolica", categoria: "DRINKS", destaque: true, promocao: true, distribuidor: "Mixology Express" },

    { nome: "Água Mineral *Promo*", preco: 1.5, quantidade: 150, distancia: 1, tipo: "nao-alcolica", destaque: false, promocao: true, distribuidor: "Hidrat Distribuidora" },
    { nome: "Água Mineral", preco: 3.0, quantidade: 350, distancia: 0.5, tipo: "nao-alcolica", destaque: false, promocao: false, distribuidor: "Hidrat Distribuidora" },
    { nome: "Refrigerante Cola *Promo*", preco: 5.0, quantidade: 80, distancia: 3, tipo: "nao-alcolica", destaque: true, promocao: true, distribuidor: "Gaseifica Bebidas" },
    { nome: "Refrigerante Cola", preco: 6.0, quantidade: 300, distancia: 1.5, tipo: "nao-alcolica", destaque: false, promocao: false, distribuidor: "Gaseifica Bebidas" },
    { nome: "Suco Natural", preco: 6.0, quantidade: 70, distancia: 2.5, tipo: "nao-alcolica", destaque: false, promocao: false, distribuidor: "Natureza Sucos" },
    { nome: "Energético", preco: 10.0, quantidade: 30, distancia: 3.5, tipo: "nao-alcolica", destaque: false, promocao: false, distribuidor: "Power Distribuidora" },
    { nome: "Chá Gelado", preco: 4.0, quantidade: 60, distancia: 2, tipo: "nao-alcolica", destaque: false, promocao: false, distribuidor: "Natureza Sucos" }
];

function startPage()
{
    let conteudoNormal = document.getElementById("regular-exhibition");

    ordenar();
}

function renderProdutos(lista, containerId) 
{
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    const slide = document.createElement('div');
    slide.className = 'carousel-item';

    lista.slice(0, 4).forEach(prod => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="images/cerveja.png" class="card-img-top" alt="${prod.nome}">
        <div class="card-body">
        <h5 class="card-title">${prod.nome}</h5>
        <p class="card-text">Preço: R$ ${prod.preco.toFixed(2)}</p>
        <p class="card-text">Quantidade: ${prod.quantidade}</p>
        <p class="card-text">Distância: ${prod.distancia}km</p>
        </div>
    `;
    slide.appendChild(card);
    });

    container.appendChild(slide);
}

function ordenar()
{
    let lista = produtos;

    mostrarConteudoFiltrado = false;

    renderProdutos(lista.filter((produto) => { return produto.promocao === true }), 'ofertas-container');
    
    renderProdutos(lista.filter((produto) => { return produto.destaque === true }), 'destaques-container');
}