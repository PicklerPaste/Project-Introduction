const botaoEnviar = document.getElementById("enviar");
const imagemEnviar = document.getElementById("contatoimagem");

function adicionaLoading () {
    botaoEnviar.innerHTML = '<img src="./imagens/loading_submit.png" alt="Loading" class="loading">';
}

function removeLoading () {
    botaoEnviar.innerHTML = 'Enviar Formulário';
    imagemEnviar.src = "./imagens/imagem_contato_apos_enviar.png"
}

export const animacao = {
    adicionaLoading,
    removeLoading
}