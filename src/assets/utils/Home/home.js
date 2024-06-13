export function abriFiltro() {
    const texto = document.getElementById("filtrar")
    const botao = document.getElementById("imgFeicgar")

    texto.classList.add("abrir");
    botao.classList.add("abrir")

}

export function feicharFiltro() {
    const texto = document.getElementById("filtrar")
    const botao = document.getElementById("imgFeicgar")

    texto.classList.remove("abrir")
    botao.classList.remove("abrir")
}