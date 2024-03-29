document.addEventListener("DOMContentLoaded", function () {
    // Objeto com o conteúdo para cada aba
    const conteudoAba = {
        informacoes: `
            <h2>Aqui estão os itens que você deverá coletar para ter acesso a proxima fase:</h2>
            <p>5 alicates</p>
            <p>40 barras de cobre</p>
            <p>10 dados</p>
            <p>100 polvoras</p>
            <p>3 caixas de javali</p>
            <p>3 caixas de coiote</p>
            <p>3 caixas de puma</p>
            <p>2 caixas de servo</p>
            <p>10 placas</p>
            <p>15 C4 improvisada</p>
            <p>30 caixas de madeira</p>
        `,
        imagens: "<img src='localizacao.png' alt='Imagem'>",
        video: "<img src='localfixo.png' alt='Imagem'>"
    };

    // Função para atualizar o conteúdo da aba
    function atualizarConteudo(aba) {
        const conteudo = conteudoAba[aba];
        document.getElementById("conteudoPrincipal").innerHTML = conteudo;
    }

    // Adicione um ouvinte de eventos para cada link da navegação
    document.querySelectorAll("nav a").forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Evitar o comportamento padrão de seguir o link
            const aba = event.target.getAttribute("href").substring(1); // Remove o "#" do href
            atualizarConteudo(aba);
        });
    
    
    });
    
});

document.addEventListener("DOMContentLoaded", function () {
    // Verifica se o usuário está autenticado (pode variar dependendo do seu método de autenticação)
    const usuarioAutenticado = verificarAutenticacao(); // Implemente essa função conforme sua lógica de autenticação

    // Se o usuário não estiver autenticado, redirecione para a página de login
    if (!usuarioAutenticado) {
        window.location.href = "index.html"; // Substitua com o caminho correto para a página de login
    }

    // Restante do seu código...
    // ...
});

