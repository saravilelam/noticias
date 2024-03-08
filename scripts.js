const botaoabrir = document.querySelector(".header-mobile > button")
const body = document.querySelector("body")
const nav = document.querySelector(".header-mobile nav")
const botaoFechar = document.querySelector(".header-mobile > nav button")

botaoabrir.addEventListener(`click`, abrirMenu)
function abrirMenu(){
    body.eclassList.add ("escurecer")
    nav.classList.add("abrir")
}

function fecharMenu() {
    body.classList.remove("escurecer")
    nav.classList.remove("abrir")
}