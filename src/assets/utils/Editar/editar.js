import styles from "../../pages/Editar/Editar.module.css";

const token = () => {
    const contaResposta = JSON.parse(localStorage.getItem("accountResponse"));
    const conta = JSON.parse(contaResposta);
    console.log(conta)

    return conta.token;
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

export function envioDados(formData) {
    editarPerfil(formData);
}

function editarPerfil(dado) {
    fetch("http://localhost:8080/api/account/company/edit", {
        headers: {
            "Authorization": `Bearer ${token()}`
        },
        method: "POST",
        body: dado
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert('Dados atualizados');
            window.location.href = "/home";
        })
        .catch(error => {
            console.log("Erro: " + error.message);
            alert("Erro ao atualizar os dados");
        });
}
