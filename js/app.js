const classeImagemAlugada = 'dashboard__item__img--rented';
const classeImagem = 'dashboard__item__img';
const classeBotaoAlugada = 'dashboard__item__button--return';
const classeBotao = 'dashboard__item__button';

function alterarStatus(id) {
    alterarStatusImagem(id); 
    alterarStatusBotao(id);
}

function alterarStatusImagem(id) {
    let jogo = document.getElementById(`game-${id}`);
    let statusImagem = jogo.querySelector(`.${classeImagem}`);

    if (statusImagem.classList.contains(classeImagem && classeImagemAlugada)) {
        statusImagem.classList.remove(classeImagem && classeImagemAlugada);
        statusImagem.classList.add(classeImagem);
    } else {
        statusImagem.classList.remove(classeImagem && classeImagemAlugada);
        statusImagem.classList.add(classeImagem && classeImagemAlugada);
    }
} 

function alterarStatusBotao(id) {
    let jogo = document.getElementById(`game-${id}`);
    let statusBotao = jogo.querySelector(`.${classeBotao}`);
    console.log(statusBotao.classList);

    if (statusBotao.classList.contains(classeBotao && classeBotaoAlugada)) {
        statusBotao.classList.remove(classeBotao && classeBotaoAlugada);
        statusBotao.classList.add(classeBotao);
        statusBotao.innerHTML = 'Alugar';
    } else {
        statusBotao.classList.remove(classeBotao && classeBotaoAlugada);
        statusBotao.classList.add(classeBotao && classeBotaoAlugada);
        statusBotao.innerHTML = 'Devolver';
    }
}