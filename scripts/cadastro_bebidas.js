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

    // Obter o arquivo de imagem
    const imagemInput = document.getElementById("imagem");
    const imagemFile = imagemInput.files[0];
    
    if (!imagemFile) {
        alert("Por favor, selecione uma imagem para a bebida.");
        return;
    }

    // Criar um leitor para converter a imagem em base64
    const reader = new FileReader();
    reader.onload = function(e) {
        const bebida = {
            nome: document.getElementById("nome").value,
            tipo: document.getElementById("tipo").value,
            descricao: document.getElementById("descricao").value,
            preco: preco,
            imagem: e.target.result // Armazena a imagem como base64
        };

        // Recupera bebidas existentes ou inicia um array vazio
        let bebidas = JSON.parse(localStorage.getItem("bebidas")) || [];
        bebidas.push(bebida);

        // Armazena o array atualizado no localStorage
        localStorage.setItem("bebidas", JSON.stringify(bebidas));
        
        // Mostra a mensagem de sucesso
        const mensagem = document.getElementById("mensagem-sucesso");
        mensagem.style.display = "block";

        setTimeout(() => {
            mensagem.style.display = "none";
            window.location.href = "home_page.html"; 
        }, 3000);
    }

    reader.readAsDataURL(imagemFile);
});