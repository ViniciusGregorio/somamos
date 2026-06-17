const botoes = document.querySelectorAll("button");

botoes.forEach(botao => {

    botao.addEventListener("mouseover", () => {
        botao.style.transform = "scale(1.05)";
    });

    botao.addEventListener("mouseout", () => {
        botao.style.transform = "scale(1)";
    });

});