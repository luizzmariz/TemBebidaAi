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
        descricao: document.getElementById("descricao").value,
        preco: preco, 
        imagem: document.getElementById("imagem").value.split("\\").pop() // Apenas o nome do arquivo
    };

    // Recupera bebidas existentes ou inicia um array vazio
    let bebidas = JSON.parse(localStorage.getItem("bebidas")) || [];
    bebidas.push(bebida);

    // Armazena o array atualizado no localStorage
    localStorage.setItem("bebidas", JSON.stringify(bebidas));
    this.reset();
    
    // Mostra a mensagem de sucesso
    const mensagem = document.getElementById("mensagem-sucesso");
    mensagem.style.display = "block";

    setTimeout(() => {
        mensagem.style.display = "none";
        window.location.href = "home_page.html"; 
    }, 3000);
});