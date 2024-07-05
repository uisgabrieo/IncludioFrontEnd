
import styles from "../../pages/AdicionarVaga/AddVaga.module.css";

function retornarToken() {
    const contaResposta = JSON.parse(localStorage.getItem("accountResponse"))
    const conta = JSON.parse(contaResposta)
    console.log(conta.token)
    return conta.token;
}

export function envioDados(e, vaga, setor, modalidade, pais, estado, cidade, requesitos, sobreVaga) {

    const post = new FormData();
    const email = localStorage.getItem("dadoUsuario");

    console.log("vagas:", vaga, setor, modalidade, pais, estado, cidade, requesitos, sobreVaga, email);

    post.append("email", email);
    post.append("role", vaga);
    post.append("field", setor);
    post.append("jobType", modalidade);
    post.append("country", pais);
    post.append("state", estado);
    post.append("city", cidade);
    post.append("requirements", requesitos);
    post.append("description", sobreVaga);

    enviarAPI(post);
}

function enviarAPI(dados) {
    console.log("dados:", dados);
    const token = retornarToken();
    console.log(token);

    fetch("http://localhost:8080/api/account/employer/post/create", {
        headers: {
            "Authorization": `Bearer ${token}`
        },
        method: "POST",
        body: dados
    })
    .then(response => response.json)
    .then(data => {
        alert("Vaga criada")
        window.location.href = '/home';
    })
    .catch(error => {
        alert("Ocorreu um erro no momento da criação da vaga!");
    });
}

// Criar uma Lista de setores selecionados
export function exibirSetor(e, setor, setSetor) {
    const setorSelecionado = e.target.value;

    if (!setor.includes(setorSelecionado)) {
        setSetor([...setor, setorSelecionado]);
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
