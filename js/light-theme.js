const icon = document.getElementById("sollua");
const menu = document.querySelectorAll("#cabeçalholistaitens");
const habilidades = document.querySelectorAll("#habilidadeslistaitens");
const projetosListaItens = document.querySelectorAll("#projetoslistaitens");
const projetosListaItensVazio = document.querySelectorAll("#projetoslistaitensvazio");
const projetosListaItensImagem = document.querySelectorAll("#projetoslistaitensimagem");
const projetosListaItensImagemCalculadora = document.querySelector("#projetoslistaitensimagemcalculadora");
const botaoContato = menu[4];

escreveIconeETema();

function escreveIconeETema () {
    try{
        const retornoIconeTema = localStorage.getItem("icone");
        const converteRetornoIconeTema = JSON.parse(retornoIconeTema);

        const retornoTema = localStorage.getItem("tema");
        const converteRetornoTema = JSON.parse(retornoTema);

        if(converteRetornoIconeTema === "fa-sun") {
            icon.classList.value = "fa-solid fa-moon"
        } else {
            icon.classList.value = "fa-solid fa-sun"
        }

        if(converteRetornoTema[0] === "light-mode") {
            document.body.classList = "light-mode";
            menu.forEach ((elemento) => {
                elemento.classList.remove("cabeçalholistaitens")
            })
            habilidades.forEach ((elemento) => {
                elemento.classList.remove("habilidadeslistaitens")
            })
            projetosListaItens.forEach ((elemento) => {
                elemento.classList.remove("projetoslistaitens")
            })
            projetosListaItensVazio.forEach ((elemento) => {
                elemento.classList.remove("projetoslistaitensvazio")
            })
            projetosListaItensImagem.forEach ((elemento) => {
                elemento.classList.remove("projetoslistaitensimagem")
            })
            projetosListaItensImagemCalculadora.classList.remove("projetoslistaitensimagemcalculadora")
        } else {
            document.body.classList = "";
            menu.forEach ((elemento) => {
                elemento.classList.add("cabeçalholistaitens")
            })
            habilidades.forEach ((elemento) => {
                elemento.classList.add("habilidadeslistaitens")
            })
            projetosListaItens.forEach ((elemento) => {
                elemento.classList.add("projetoslistaitens")
            })
            projetosListaItensVazio.forEach ((elemento) => {
                elemento.classList.add("projetoslistaitensvazio")
            })
            projetosListaItensImagem.forEach ((elemento) => {
                elemento.classList.add("projetoslistaitensimagem")
            })
            projetosListaItensImagemCalculadora.classList.add("projetoslistaitensimagemcalculadora")
        }
    } catch {}
}

function alteraIcon () {
    var iconClass = icon.classList[1];

    localStorage.setItem("icone", JSON.stringify(iconClass));
    
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

    document.body.classList.toggle("light-mode");

    localStorage.setItem("tema", JSON.stringify(document.body.classList));

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

botaoContato.addEventListener("click", () => {
    window.location.href = "contato.html"
})