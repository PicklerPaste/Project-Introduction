let icon = document.getElementById("sollua");
let menu = document.querySelectorAll("#cabeçalholistaitens");
let habilidades = document.querySelectorAll("#habilidadeslistaitens");
let projetosListaItens = document.querySelectorAll("#projetoslistaitens");
let projetosListaItensVazio = document.querySelectorAll("#projetoslistaitensvazio");
let projetosListaItensImagem = document.querySelectorAll("#projetoslistaitensimagem");
let projetosListaItensImagemCalculadora = document.querySelector("#projetoslistaitensimagemcalculadora");

function alteraIcon () {
    var iconClass = icon.classList[1];

    if(iconClass === "fa-sun"){
        icon.classList.remove(iconClass);
        icon.classList.add("fa-moon");
    }
    if(iconClass === "fa-moon"){
        icon.classList.remove(iconClass);
        icon.classList.add("fa-sun");
    }
}

document.querySelector("#btn").addEventListener("click", () => {
    alteraIcon();

    document.body.classList.toggle("dark-mode");
    
    habilidades.forEach( (elemento) => {
        elemento.classList.toggle("habilidadeslistaitens");
    })

    menu.forEach( (elemento) => {
        elemento.classList.toggle("cabeçalholistaitens");
    })

    projetosListaItens.forEach( (elemento) => {
        elemento.classList.toggle("projetoslistaitens");
    })

    projetosListaItensVazio.forEach( (elemento) => {
        elemento.classList.toggle("projetoslistaitensvazio");
    })

    projetosListaItensImagem.forEach( (elemento) => {
        elemento.classList.toggle("projetoslistaitensimagem");
    })

    projetosListaItensImagemCalculadora.classList.toggle("projetoslistaitensimagemcalculadora");
})