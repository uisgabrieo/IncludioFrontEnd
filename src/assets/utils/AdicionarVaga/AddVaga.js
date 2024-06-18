import styles from "../../pages/AdicionarVaga/AddVaga.module.css";

export function envioDados(e, vaga, setor, modalidade, pais, estado, cidade, requesitos, sobreVaga, setErro) {


    e.preventDefault();
    if (!(vaga, setor, modalidade, pais, estado, cidade, requesitos, sobreVaga)){
        setErro("Dados incompletos")
    } else {
        const post = new FormData();

        const dadoUsuario = localStorage.getItem("dadoUsuario")

        console.log(vaga, setor, modalidade, pais, estado, cidade, requesitos, sobreVaga)

        post.append("email", dadoUsuario)
        post.append("role", vaga);
        post.append("field", setor);
        post.append("jobType", modalidade);
        post.append("country", pais);
        post.append("state", estado);
        post.append("city", cidade);
        post.append("requirements", requesitos);
        post.append("description", sobreVaga);

        enviarAPI(post)

    }
}

function enviarAPI(dados) {
    fetch("http://localhost:8080/api/account/employer/post/create", {
        method: "POST",
        body: dados
    })
    .then(response => {
        if (response.ok) {
            return response.text();
        } else {
            throw new Error('Credenciais inválidas');
        }
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log("Erro: " + error.message);
    });
}


//Criar uma Lista de setores selecionados
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
