const classeImagemAlugada = 'dashboard__item__img--rented';
const classeImagem = 'dashboard__item__img';
const classeBotaoAlugada = 'dashboard__item__button--return';
const classeBotao = 'dashboard__item__button';

function alterarStatus(id) {
    let jogo = document.getElementById(`game-${id}`);
    let imagem = jogo.querySelector(`.${classeImagem}`);
    let botao = jogo.querySelector(`.${classeBotao}`);

    if (imagem.classList.contains(classeImagemAlugada)) {
        imagem.classList.remove(classeImagemAlugada);
        botao.classList.remove(classeBotaoAlugada);
        botao.innerHTML = 'Alugar';
    } else {
        imagem.classList.add(classeImagemAlugada);
        botao.classList.add(classeBotaoAlugada);
        botao.innerHTML = 'Devolver';
    }
}