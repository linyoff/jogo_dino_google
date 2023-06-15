var personagem = document.getElementById('personagem');
var obstaculo = document.getElementById('obstaculo');

function desviar(){

    if(personagem.classList != 'animar')
    personagem.classList.add('animar')
    setTimeout(function(){
    personagem.classList.remove('animar') }, 500)

}

var colisao = setInterval(function(){

    var topPersonagem = parseInt(window.getComputedStyle(personagem).getPropertyValue('top'))

    var esqObstaculo = parseInt(window.getComputedStyle(obstaculo).getPropertyValue('left'))

    if (esqObstaculo<20 && esqObstaculo>0 && topPersonagem>=130) { //colisão
        obstaculo.style.animation = 'none'
        obstaculo.style.display = 'none' 
        alert('VOCÊ PERDEU!');
    }
}, 10)

// Função de reinicialização
function reiniciarJogo() {

    // Redefinir a posição e animação do obstáculo
    obstaculo.style.left = '200px';
    obstaculo.style.animation = 'obstaculo 1s infinite linear';
    obstaculo.style.display = 'block';
    
}

document.getElementById('botao-reiniciar').onclick = reiniciarJogo;
