    const produtos = [
      { nome: "Cerveja Pilsen *Promo*", preco: 4.5, quantidade: 100, distancia: 2, tipo: "alcolica", destaque: true , promocao: true},
      { nome: "Água Mineral *Promo*", preco: 1.5, quantidade: 150, distancia: 1, tipo: "nao-alcolica", destaque: false, promocao: true },
      { nome: "Água Mineral", preco: 3.0, quantidade: 350, distancia: 0.5, tipo: "nao-alcolica", destaque: false, promocao: false },
      { nome: "Refrigerante Cola *Promo*", preco: 5.0, quantidade: 80, distancia: 3, tipo: "nao-alcolica", destaque: true, promocao: true },
      { nome: "Vinho Tinto *Promo*", preco: 22.0, quantidade: 50, distancia: 4, tipo: "alcolica", destaque: false, promocao: true },
      { nome: "Cerveja IPA", preco: 7.0, quantidade: 60, distancia: 1.5, tipo: "alcolica", destaque: true, promocao: false },
      { nome: "Suco Natural", preco: 6.0, quantidade: 70, distancia: 2.5, tipo: "nao-alcolica", destaque: false, promocao: false },
      { nome: "Vodka", preco: 35.0, quantidade: 40, distancia: 5, tipo: "alcolica", destaque: true, promocao: false },
      { nome: "Energético", preco: 10.0, quantidade: 30, distancia: 3.5, tipo: "nao-alcolica", destaque: false, promocao: false },
      { nome: "Whisky", preco: 85.0, quantidade: 25, distancia: 6, tipo: "alcolica", destaque: true, promocao: false },
      { nome: "Chá Gelado", preco: 4.0, quantidade: 60, distancia: 2, tipo: "nao-alcolica", destaque: false, promocao: false },
      { nome: "Cerveja Pilsen 2", preco: 7.5, quantidade: 200, distancia: 2.5, tipo: "alcolica", destaque: true , promocao: false},
      { nome: "Vinho Tinto 2", preco: 46.0, quantidade: 20, distancia: 4, tipo: "alcolica", destaque: true, promocao: false },
      { nome: "Refrigerante Cola", preco: 6.0, quantidade: 300, distancia: 1.5, tipo: "nao-alcolica", destaque: false, promocao: false },
    ];

    let conteudoFiltrado;
    let conteudoNormal;

    let mostrarConteudoFiltrado;

    function startPage()
    {
        conteudoNormal = document.getElementById("regular-exhibition");
        conteudoFiltrado = document.getElementById("filter-exhibition");

        conteudoFiltrado.hidden = true;

        ordenar('normal');
    }

    function renderProdutos(lista, containerId) 
    {
      if(mostrarConteudoFiltrado === conteudoFiltrado.hidden)
      {
        conteudoFiltrado.hidden = !conteudoFiltrado.hidden;
        conteudoNormal.hidden = !conteudoNormal.hidden;
      }

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

    function ordenar(filtro) 
    {
      let lista = produtos;
      switch (filtro) {
        case 'normal': 
            mostrarConteudoFiltrado = false;

            renderProdutos(lista.filter((produto) => { return produto.promocao === true }), 'ofertas-container');
            
            renderProdutos(lista.filter((produto) => { return produto.destaque === true }), 'destaques-container');

            lista.sort((a, b) => a.distancia - b.distancia);
            renderProdutos(lista, 'proximos-container');
            break;
        case 'preco-asc': 
            lista.sort((a, b) => a.preco - b.preco); 
            mostrarConteudoFiltrado = true;
            renderProdutos(lista, 'filter-container');
            break;
        case 'preco-desc': 
            lista.sort((a, b) => b.preco - a.preco); 
            mostrarConteudoFiltrado = true;
            renderProdutos(lista, 'filter-container');
            break;
        case 'quantidade-asc': 
            lista.sort((a, b) => a.quantidade - b.quantidade);
            mostrarConteudoFiltrado = true; 
            renderProdutos(lista, 'filter-container');
            break;
        case 'quantidade-desc': 
            lista.sort((a, b) => b.quantidade - a.quantidade);
            mostrarConteudoFiltrado = true; 
            renderProdutos(lista, 'filter-container');
            break;
        case 'distancia': 
            lista.sort((a, b) => a.distancia - b.distancia);
            mostrarConteudoFiltrado = true; 
            renderProdutos(lista, 'filter-container');
            break;
      }
    }

    ordenar('preco-asc');