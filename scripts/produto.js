window.onload = carregarProduto;

function getParam(name) {
  return decodeURIComponent(new URLSearchParams(window.location.search).get(name) || "");
}

function carregarProduto() {
  document.getElementById("nome").textContent = getParam("nome");
  document.getElementById("preco").textContent = `R$ ${parseFloat(getParam("preco")).toFixed(2)}`;
  document.getElementById("quantidade").textContent = getParam("quantidade");
  document.getElementById("distancia").textContent = `${getParam("distancia")} km`;
  document.getElementById("tipo").textContent = getParam("tipo") === "alcolica" ? "Alcoólica" : "Não-Alcoólica";
  document.getElementById("categoria").textContent = getParam("categoria");
  document.getElementById("distribuidor").textContent = getParam("distribuidor");
  document.getElementById("imagem-produto").src = getParam("imagem");
  document.getElementById("imagem-produto").alt = getParam("nome");
}

function adicionarAoCarrinho() {
  const produto = {
    nome: getParam("nome"),
    preco: parseFloat(getParam("preco")),
    quantidade: parseInt(getParam("quantidade")),
    distribuidor: getParam("distribuidor"),
    imagem: getParam("imagem")
  };

  let carrinho = JSON.parse(sessionStorage.getItem("carrinho")) || [];
  carrinho.push(produto);
  sessionStorage.setItem("carrinho", JSON.stringify(carrinho));

  alert(`"${produto.nome}" foi adicionado ao carrinho!`);
}

