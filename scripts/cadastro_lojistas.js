document.getElementById("formLojista").addEventListener("submit", function(e) {
    e.preventDefault();

    const lojista = {
        nome: document.getElementById("nome").value,
        sobre: document.getElementById("sobre").value,
        telefone: document.getElementById("telefone").value,
        email: document.getElementById("email").value,
        cnpj: document.getElementById("cnpj").value,
        cep: document.getElementById("cep").value,
        estado: document.getElementById("estado").value,
        logradouro: document.getElementById("logradouro").value,
        cidade: document.getElementById("cidade").value,
        numero: document.getElementById("numero").value,
        complemento: document.getElementById("complemento").value,
        bairro: document.getElementById("bairro").value,
        imagem: document.getElementById("imagem").value.split("\\").pop() // Apenas o nome do arquivo
    };

    // Recupera lojistas existentes ou inicia um array vazio
    let lojistas = JSON.parse(localStorage.getItem("lojistas")) || [];
    lojistas.push(lojista);

    // Armazena o array atualizado no localStorage
    localStorage.setItem("lojistas", JSON.stringify(lojistas));
    this.reset();

    // Mostra a mensagem de sucesso
    const mensagem = document.getElementById("mensagem-sucesso");
    mensagem.style.display = "block";

    setTimeout(() => {
        mensagem.style.display = "none";
        window.location.href = "home_page.html"; 
    }, 3000);

});