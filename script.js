document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formContacto");
  const resultado = document.getElementById("resultado");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !mensagem) {
      resultado.textContent = "⚠️ Todos os campos são obrigatórios!";
      resultado.style.color = "red";
    } else {
      resultado.textContent = "✅ Obrigado pelo seu contacto!";
      resultado.style.color = "green";
      form.reset();
    }
  });
});