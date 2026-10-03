// 1. Botão Adicionar: Redireciona diretamente para o formulário de adição
const btnAdicionar = document.querySelector(".adicionar");

if (btnAdicionar) {
    btnAdicionar.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "php/adicionar.php";
    });
}

// 2. Botões Editar: Redirecionam diretamente para a página do aluno correto
const btnEditar = document.querySelectorAll(".editar");

btnEditar.forEach(function (botao) {
    botao.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = this.getAttribute("href");
    });
});

// 3. Botões Excluir: Mantém o alerta de confirmação e redireciona ao aceitar
const btnExcluir = document.querySelectorAll(".excluir");

btnExcluir.forEach(function (botao) {
    botao.addEventListener("click", function (event) {
        event.preventDefault();
        const continuar = confirm("Deseja realmente excluir este aluno?");

        if (continuar) {
            window.location.href = this.getAttribute("href");
        } else {
            alert("Exclusão cancelada!");
        }
    });
});