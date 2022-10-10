// on click = aparecer o menu 
// clicar = desaparecer o menu 
// criar um inner html com lis opcao 2 

//function clicar() {

    //let hamburguer = document.getElementById('imagemjs').innerHTML = '<img src="./imagens/cardapio.png" alt=""> <br> <li> Home</li> <br> <li> Shop</li>  <br> <li> Contact</li>'
//}

//function desaparecer(){
//let sair = document.getElementById('imagemjs').innerHTML = '<img src="./imagens/cardapio.png" alt=""> '
//}

function clicar() {
    let abrir = document.getElementById('menuresponsivo')
if (abrir.classList.contains('show')){
    abrir.classList.remove('show')
    abrir.classList.add('hide')
}else {
    abrir.classList.remove('hide')
    abrir.classList.add('show')
}
}