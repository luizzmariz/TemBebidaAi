window.onload = function () {
  const dados = JSON.parse(sessionStorage.getItem("user"));

  if (!dados) {
    alert("Usuário não encontrado. Redirecionando para a landing page.");
    window.location.href = "landing_page.html";
    return;
  }

  document.getElementById("email").textContent = dados.email || "-";
  document.getElementById("password").textContent = dados.senha || "-";
  document.getElementById("endereco").textContent = dados.endereco || "-";

  if (dados.perfil === "admin") {
    document.getElementById("acoes-admin").style.display = "block";
  }

  if (dados.perfil === "lojista") {
    document.getElementById("acoes-lojista").style.display = "block";
  }
};
