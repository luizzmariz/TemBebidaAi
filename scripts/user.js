window.onload = function () {
  const dados = JSON.parse(sessionStorage.getItem("user"));

  if (!dados) {
    alert("Usuário não encontrado. Redirecionando para a landing page.");
    window.location.href = "landing_page.html";
    return;
  }

  document.getElementById("email").textContent = dados.email || "-";
  document.getElementById("password").textContent = dados.password || "-";
  document.getElementById("endereco").textContent = dados.endereco || "-";
};

function CadastrarLojista()
{
  window.location.href = 'cadastro_lojistas.html';
}

function CadastrarBebida()
{
  window.location.href = 'cadastro_bebidas.html';
}

function EditarEstoque()
{
  window.location.href='editar_estoque.html';
}