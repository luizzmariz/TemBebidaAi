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

    let produtosSelecionados;
    let paginaNormal;

    let conteudoFiltrado;
    let conteudoNormal;

    let titulo;

    let mostrarConteudoFiltrado;

    function startPage()
    {
        conteudoNormal = document.getElementById("regular-exhibition");
        conteudoFiltrado = document.getElementById("filter-exhibition");

        titulo = document.getElementById("titulo");
        titulo.innerHTML = '';

        paginaNormal = true;

        conteudoFiltrado.hidden = true;

        ordenar('normal');
    }

    function mostrarProdutos(lista, containerId) 
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
        card.className = 'card clickable Expandable';

        card.addEventListener('click', () => VerProduto(prod));
        
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

    function pagina(pagina)
    {
      let lista;

      switch (pagina) {
        case 'normal': 
            paginaNormal = true; 

            titulo.innerHTML = '';

            lista = null;
            break;
        case 'cervejas': 
            paginaNormal = false; 
            titulo.innerHTML = 'Cervejas';

            lista = produtos.filter((produto) => { return produto.categoria === 'CERVEJAS' });
            break;
        case 'destilados': 
            paginaNormal = false; 
            titulo.innerHTML = 'Destilados';

            lista.sort((a, b) => a.quantidade - b.quantidade);

            lista = produtos.filter((produto) => { return produto.categoria === 'DESTILADOS' });
            break;
        case 'vinhos': 
            paginaNormal = false; 
            titulo.innerHTML = 'Vinhos';

            lista.sort((a, b) => b.quantidade - a.quantidade);

            lista = produtos.filter((produto) => { return produto.categoria === 'VINHOS' });
            break;
        case 'drinks': 
            paginaNormal = false; 
            titulo.innerHTML = 'Drinks';

            lista.sort((a, b) => a.distancia - b.distancia);

            lista = produtos.filter((produto) => { return produto.categoria === 'DRINKS' });
            break;
        case 'nao-alcoolicas': 
            paginaNormal = false; 
            titulo.innerHTML = 'Não Alcóolicas';

            lista = produtos.filter((produto) => { return produto.tipo === 'nao-alcolica' });
            break;
      }

      produtosSelecionados = lista;
      ordenar('normal');
    }

    function ordenar(filtro) 
    {
      let lista;

      if(paginaNormal === true)
      {
        lista = produtos;
      }
      else
      {
        lista = produtosSelecionados;
      }
      
      switch (filtro) {
        case 'normal': 
            mostrarConteudoFiltrado = false;

            mostrarProdutos(lista.filter((produto) => { return produto.promocao === true }), 'ofertas-container');
            
            mostrarProdutos(lista.filter((produto) => { return produto.destaque === true }), 'destaques-container');

            lista.sort((a, b) => a.distancia - b.distancia);
            mostrarProdutos(lista, 'proximos-container');
            break;
        case 'preco-asc': 
            lista.sort((a, b) => a.preco - b.preco); 
            mostrarConteudoFiltrado = true;
            mostrarProdutos(lista, 'filter-container');
            break;
        case 'preco-desc': 
            lista.sort((a, b) => b.preco - a.preco); 
            mostrarConteudoFiltrado = true;
            mostrarProdutos(lista, 'filter-container');
            break;
        case 'quantidade-asc': 
            lista.sort((a, b) => a.quantidade - b.quantidade);
            mostrarConteudoFiltrado = true; 
            mostrarProdutos(lista, 'filter-container');
            break;
        case 'quantidade-desc': 
            lista.sort((a, b) => b.quantidade - a.quantidade);
            mostrarConteudoFiltrado = true; 
            mostrarProdutos(lista, 'filter-container');
            break;
        case 'distancia': 
            lista.sort((a, b) => a.distancia - b.distancia);
            mostrarConteudoFiltrado = true; 
            mostrarProdutos(lista, 'filter-container');
            break;
      }
    }

    function buscar() {
      const termo = document.querySelector(".search-bar input").value.trim().toLowerCase();
      if (termo === "") return;

      const resultado = produtos.filter(prod => prod.nome.toLowerCase().includes(termo));

      titulo.innerHTML = `Resultado da busca por: "${termo}"`;
      produtosSelecionados = resultado;
      paginaNormal = false;
      mostrarConteudoFiltrado = true;
      mostrarProdutos(resultado, "filter-container");
    }

    function VerProduto(produto) {
      const imagem = `images/cerveja.png`;

      const query = new URLSearchParams({
        nome: produto.nome,
        preco: produto.preco,
        quantidade: produto.quantidade,
        distancia: produto.distancia,
        tipo: produto.tipo,
        categoria: produto.categoria || '',
        distribuidor: produto.distribuidor || '',
        imagem: imagem
      }).toString();

      window.location.href = `produto.html?${query}`;
    }
