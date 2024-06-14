import styles from "../../pages/Home/Home.module.css";

export function rolarScroll() {
    const cabecalho = document.querySelector("#header");
    const navegacao = document.querySelector("#navMenu");
    const scroll = window.scrollY;

    if (scroll > 51) {
        cabecalho.classList.add(styles.rolar);
        navegacao.classList.add(styles.rolar);
    } else {
        cabecalho.classList.remove(styles.rolar);
        navegacao.classList.remove(styles.rolar);
    }
}

export function abrirCaixaFiltro() {
    console.log("abrir");
    const caixaFiltro = document.querySelector("#campoFiltro");
    console.log(caixaFiltro)
    caixaFiltro.classList.add(styles.abrir);
}

export function feicharCaixaFiltro() {
    console.log("feichar");
    const caixaFiltro = document.querySelector("#campoFiltro");

    caixaFiltro.classList.remove(styles.abrir);
}
