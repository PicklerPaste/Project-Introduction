import { animacao } from "./animacao-enviar.js";

const formulario = document.getElementById("formulario");

const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
})

const tiposDeErro = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "tooShort",
    "customError"
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    telefone: {
        valueMissing: "O campo de telefone não pode estar vazio.",
        typeMismatch: "Por favor, preencha um telefone válido.",
        customError: "Este telefone não existe.",
        patternMismatch: "Formato de telefone inválido. Considere (XX) XXXXX-XXXX",
        tooShort: "Por favor, preencha um telefone válido."
    },
    mensagem: {
        valueMissing: "O campo de mensagem não pode estar vazio.",
        tooShort: "Por favor, a mensagem deve ter no mínimo 10 caracteres."
    }
}

function verificaCampo(campo) {
    let mensagemDeErro = "";

    tiposDeErro.forEach(erro => {
        if(campo.validity[erro]) {
            mensagemDeErro = mensagens[campo.name][erro];
        }
    })
    const mensagemDeErroHTML = campo.parentNode.querySelector(".mensagem-erro");
    const validadorDeInput = campo.checkValidity();

    if(!validadorDeInput) {
        mensagemDeErroHTML.textContent = mensagemDeErro;
    } else {
        mensagemDeErroHTML.textContent = "";
    }
}

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    animacao.adicionaLoading();

    const nome = document.getElementById("nomesobrenome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const mensagem = document.getElementById("mensagem").value;
    const tipoDeContato = document.querySelector('input[name="contato"]:checked').value;
    
    capturaFormulario(nome, email, telefone, mensagem, tipoDeContato);

    document.getElementById("nomesobrenome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("mensagem").value = "";
})

async function capturaFormulario (nome, email, telefone, mensagem, tipoDeContato) {
    const conexao = await fetch("https://sheetdb.io/api/v1/ma8vxxds3ga0j", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            data: [
                {
                    "nome": nome,
                    "email": email,
                    "telefone": telefone,
                    "mensagem": mensagem,
                    "contato": tipoDeContato
                    
                }
            ]
        })
    })
    .then((response) => response.json())
    .then(() => animacao.removeLoading());
}