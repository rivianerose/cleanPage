// on click = aparecer o menu 
// clicar = desaparecer o menu 
// criar um inner html com lis opcao 2 

function clicar() {
    let hamburguer = document.getElementById('imagemjs').innerHTML = '<img src="./imagens/cardapio.png" alt=""> <br> <li> Home</li> <br> <li> Shop</li>  <br> <li> Contact</li>'
}

function desaparecer(){
let sair = document.getElementById('imagemjs').innerHTML = '<img src="./imagens/cardapio.png" alt=""> '
}