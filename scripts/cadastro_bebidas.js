document.getElementById("formBebida").addEventListener("submit", function(e) {
    e.preventDefault();

    // Validação adicional do preço
    const precoInput = document.getElementById("preco");
    const preco = parseFloat(precoInput.value);
    if (isNaN(preco) || preco <= 0) {
        alert("Por favor, insira um preço válido maior que zero.");
        precoInput.focus();
        return;
    }

    const bebida = {
    nome: document.getElementById("nome").value,
    tipo: document.getElementById("tipo").value,
    preco: preco,
    imagem: document.getElementById("imagem").value.split("\\").pop(),
    categoria: document.getElementById("categoria").value || "",
    quantidade: parseInt(document.getElementById("quantidade").value) || 0,
    distancia: Math.floor(Math.random() * 5) + 1,
    distribuidor: sessionStorage.getItem("user") 
        ? JSON.parse(sessionStorage.getItem("user")).email 
        : "Distribuidor Desconhecido",
    destaque: false,
    promocao: false
    };


    let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
    produtos.push(bebida);
    localStorage.setItem("produtos", JSON.stringify(produtos));

    
    // Mostra a mensagem de sucesso
    const mensagem = document.getElementById("mensagem-sucesso");
    mensagem.style.display = "block";

    setTimeout(() => {
        mensagem.style.display = "none";
        window.location.href = "home_page.html"; 
    }, 3000);
});