//Declarando uma variável e armanezando ela o modal
const modal = document.getElementById("meuModal");

//Criando a função de abrir o modal, quando o botão for clicado
function abrirModal() {
modal.style.display = "block";
}

//Criando a função de fechar o modal, quando o botão for clicado
function fecharModal() {
modal.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do modal, ele se fecha
window.onclick = function(event) {
if (event.target === modal) {
fecharModal();
}
}
