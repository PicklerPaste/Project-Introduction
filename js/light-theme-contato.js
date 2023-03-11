const iconContato = document.getElementById("solluacontato");
const contato = document.getElementById("contato");
const botaoInicio = document.querySelector("#btninicio")

escreveIconeETema();

function escreveIconeETema () {
    try{
        const retornoIconeTema = localStorage.getItem("icone");
        const converteRetornoIconeTema = JSON.parse(retornoIconeTema);

        const retornoTema = localStorage.getItem("tema");
        const converteRetornoTema = JSON.parse(retornoTema);

        if(converteRetornoIconeTema === "fa-sun") {
            iconContato.classList.value = "fa-solid fa-moon"
        } else {
            iconContato.classList.value = "fa-solid fa-sun"
        }

        if(converteRetornoTema[0] === "light-mode") {
            document.body.classList = "light-mode";
            botaoInicio.classList.remove("contatocabeçalholistaitens")
        } else {
            document.body.classList.remove = "light-mode";
            botaoInicio.classList.add("contatocabeçalholistaitens")
        }
    } catch {}
}

function alteraIcon () {
    var iconClass = iconContato.classList[1];

    localStorage.setItem("icone", JSON.stringify(iconClass));

    if(iconClass === "fa-sun"){
        iconContato.classList.remove(iconClass);
        iconContato.classList.add("fa-moon");
    }
    if(iconClass === "fa-moon"){
        iconContato.classList.remove(iconClass);
        iconContato.classList.add("fa-sun");
    }
}

document.querySelector("#btn").addEventListener("click", () => {
    alteraIcon();
    
    document.body.classList.toggle("light-mode");

    localStorage.setItem("tema", JSON.stringify(document.body.classList));

    botaoInicio.classList.toggle("contatocabeçalholistaitens");
})

botaoInicio.addEventListener("click", () => {
    window.location.href = "index.html"
})