window.onload = function () 
{
  const usuario = JSON.parse(sessionStorage.getItem("user"));

  const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
  const meusProdutos = produtos.filter(p => p.distribuidor === usuario.email);

  const container = document.getElementById("form-container");

  if (meusProdutos.length === 0) 
    {
    container.innerHTML = '<p>Nenhuma bebida cadastrada por você ainda.</p>';
    return;
  }

  meusProdutos.forEach((produto, index) => 
    {
    const form = document.createElement("form");
    form.className = "mb-4 border p-3 bg-white";

    form.innerHTML = `
      <h5>${produto.nome}</h5>
      <div class="form-group">
        <label for="preco-${index}">Preço:</label>
        <input type="number" class="form-control" id="preco-${index}" value="${produto.preco}" required />
      </div>
      <div class="form-group">
        <label for="quantidade-${index}">Quantidade:</label>
        <input type="number" class="form-control" id="quantidade-${index}" value="${produto.quantidade}" required />
      </div>
      <button type="submit" class="btn btn-primary">Salvar</button>
    `;

    form.addEventListener("submit", function (e) 
    {
      e.preventDefault();
      const preco = parseFloat(document.getElementById(`preco-${index}`).value);
      const quantidade = parseInt(document.getElementById(`quantidade-${index}`).value);

      produtos.forEach(p => {
        if (p.nome === produto.nome && p.distribuidor === produto.distribuidor) {
          p.preco = preco;
          p.quantidade = quantidade;
        }
      });

      localStorage.setItem("produtos", JSON.stringify(produtos));
      alert("Produto atualizado com sucesso!");
    });

    container.appendChild(form);
  });
};
