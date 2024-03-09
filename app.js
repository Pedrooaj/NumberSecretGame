//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Numero Secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um Numero Entre 1 e 10';

let tentativas = 1;

let listaNumerosSecretos = [];


exibirTextoNaTela = (tag, texto) => {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.5});
}


exibirMensagemInicial = () => {
    exibirTextoNaTela('h1', 'Jogo Do Numero Secreto');
    exibirTextoNaTela('p','Escolha um Numero Entre 1 e 10');    
}

exibirMensagemInicial();



verificarChute = () => {
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
               exibirTextoNaTela('h1', `Acertou!`);
               let palavraTentativa =  tentativas > 1 ? 'tentativas' : 'tentativa';
               let mensagemTentativas = `Você Descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
               exibirTextoNaTela('p', mensagemTentativas);
               document.getElementById('reiniciar').removeAttribute('disabled');
            }else{
                if(chute > numeroSecreto){
                    exibirTextoNaTela('p', 'O Número e menor que o chute!');
                }else{
                    exibirTextoNaTela('p','O Número e maior que o chute')
                }
                tentativas++;
            }
}

gerarNumeroAleatorio = () => {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);

    if(listaNumerosSecretos.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        return numeroEscolhido;
    }
}

limparCampo = () => {
    chute = document.querySelector('input');
    chute.value = '';
}

reiniciarJogo = () => {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}


let numeroSecreto = gerarNumeroAleatorio();

