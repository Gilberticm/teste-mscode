/* Botão menu principal */
let botao = document.querySelector('.menu-principal__btn');
let menuPrincipal = document.querySelector('.menu-principal');
botao.addEventListener('click', menu);

function menu(evento) {
  menuPrincipal.classList.toggle('menu-principal--fechado')
}