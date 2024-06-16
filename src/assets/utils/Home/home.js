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

export function exibirVagas() {
    fetch("http://localhost:8080/api/account/employer/post",
        {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "GET",
        })
        .then(response => response.json())
        .then(data => {
            carregarPost(data)
        })
        .catch(error => {
            console.error("Erro: ", error)
        })
}

function fomatarData(data) {
    var dataOriginal = new Date(data);
    var dataFormatada = dataOriginal.toLocaleDateString("pt-BR", {
        timeZone: "UTC",
    })
    return dataFormatada;
}

function criarPost(postagem) {
    var botao = document.createElement("button")
    botao.className = styles.botao;
    botao.innerHTML = "Ver mais"
    botao.addEventListener("click", function () {
        abrirVaga(postagem.id)
    })
    var logo = document.createElement("img")
    logo.className = styles.logoPost;
    logo.src = postagem.author.logo;

    var data = document.createElement("div")
    data.className = styles.informacoes;
    data.innerHTML = "<p>DATA DE PUBLICAÇÃO: " + fomatarData(postagem.createAt) + "</p>"
    data.appendChild(botao)

    var informacoes = document.createElement("div")
    informacoes.className = styles.informacoes;
    informacoes.innerHTML = "<p>EMPRESA: " + postagem.author.companyName + "</p>" +
        "<p>VAGA: " + postagem.role + "</p>" +
        "<p>DESCRIÇÃO: " + postagem.description + "</p>";

    var post = document.createElement("div");
    post.className = styles.post;
    post.appendChild(logo)
    post.appendChild(informacoes)
    post.appendChild(data)
    document.getElementById("posts").appendChild(post)
}

function carregarPost(postagens) {
    const postsContainer = document.getElementById("posts");
    postsContainer.innerHTML = "";

    postagens.forEach(function (postagem) {
        criarPost(postagem);
    });
}