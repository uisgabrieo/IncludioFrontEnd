import styles from "../../pages/Bug/Bug.module.css";

const token = () => {
    const contaResposta = JSON.parse(localStorage.getItem("accountResponse"));
    const conta = JSON.parse(contaResposta);
    
    console.log(conta.token)
    return conta.token;
}

export function envioDados(event, descricao, nomeCompleto, email, setErro) {
    event.preventDefault();

    if (!(descricao && nomeCompleto && email)) {
        setErro("Dados incompletos");
        return;
    }

    const feedback = {
        completeName: nomeCompleto,
        email: email,
        description: descricao
    };

    console.log(feedback)

    enviarAPI(feedback);
}

function enviarAPI(dados) {
    fetch("http://localhost:8080/api/account/feedback", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token()}`
        },
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(response => response.json)
    .then(data => {
        alert("Feedback enviado!")
        window.location.href="/home";
    })
    .catch(error => {
        console.log("Erro: " + error.message);
    });
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
