import styles from "../../pages/AdicionarVaga/AddVaga.module.css";

export function exibirSetor(e, setor, setSetor) {
    const aetorSelecionada = e.target.value;

    if (!setor.includes(aetorSelecionada)) {
        setSetor([...setor, aetorSelecionada]);
    }
}

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
