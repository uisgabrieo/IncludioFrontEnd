import styles from "../../pages/Buscar/Buscar.module.css"

function retornarToken() {
    const contaResposta = JSON.parse(localStorage.getItem("accountResponse"))
    const conta = JSON.parse(contaResposta)
    return conta.token;
}

//Nav fixa quando desce o scroll
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
export function fecharVaga() {
    const verMais = document.getElementById("verMais");
    Array.from(verMais.children).forEach(child => {
        if (!child.classList.contains(styles.fechar) && !child.classList.contains(styles.botaoEmail)) {
            verMais.removeChild(child);
        }
    });
    const botao = document.getElementById("janelaVaga");
    botao.classList.remove(styles.abrir);
}

//Bucar por vaga
export function buscarVagas(event, filtro) {
    const posts = document.getElementById("posts");
    if (posts != null){
        posts.innerHTML = "";
    }
    event.preventDefault();
    const url = `http://localhost:8080/api/account/employer/post/search?caixaDeBusca=${filtro}`
    console.log(url)
    vagasFiltradas(url)
}

function vagasFiltradas(busca) {
    const token = retornarToken();
    const imgPost = document.getElementById("imgVaga");
    fetch(busca, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        method: "GET",
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            carregarPost(data)
            if(data.length != 0) {
                console.log("Entrou")
                imgPost.classList.add(styles.comVaga);
            }
        })
        .catch(error => {
            console.error("Error: ", error)
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
    data.innerHTML = "<p>DATA DE PUBLICAÇÃO: <br />" + fomatarData(postagem.createAt) + "</p>"
    data.appendChild(botao)

    var informacoes = document.createElement("div")
    informacoes.className = styles.informacoes;
    informacoes.innerHTML = "<p>EMPRESA: <br />" + postagem.author.companyName + "</p>" +
        "<p>VAGA: <br />" + postagem.role + "</p>" 

    var post = document.createElement("div");
    post.className = styles.post;
    post.appendChild(logo)
    post.appendChild(informacoes)
    post.appendChild(data)
    document.getElementById("posts").appendChild(post)
}

function carregarPost(postagens) {
    const posts = document.getElementById("posts");
    posts.innerHTML = "";

    postagens.forEach(function (postagem) {
        criarPost(postagem);
    });
}

async function abrirVaga(vagaId) {
    const email = document.getElementById("botaoEmail")
    const botao = document.getElementById("janelaVaga")
    botao.classList.add(styles.abrir)

    const vaga = await capturarVaga(vagaId)
    console.log(vaga)

    gerarVaga(vaga)

    email.addEventListener("click", function () {
        const email = vaga.author.email
        window.location.href = `mailto:${email}`;
    })
}

async function capturarVaga(id) {
    const token = retornarToken();
    try {
        const response = await fetch(`http://localhost:8080/api/account/employer/post/${id}`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            method: "GET",
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erro: ", error);
    }
}


function gerarVaga(vaga) {

    let cabecalho = document.createElement("div")
    cabecalho.className = styles.cabecalhoVaga

    let logo = document.createElement("img")
    logo.className = styles.logoVaga
    logo.src = vaga.author.logo
    logo.alt = "Logo Empresa"
    cabecalho.appendChild(logo)

    let vagaPost = document.createElement("div")
    vagaPost.className = styles.tituloVaga
    vagaPost.innerHTML = "<h1>" + vaga.role + "</h1>"
    cabecalho.appendChild(vagaPost)
    document.getElementById("verMais").appendChild(cabecalho)

    let setores = document.createElement("div")
    setores.className = styles.setores
    setores.innerHTML = "<h2>" + vaga.field.map(element => element).join(', ') + "</h2>"
    document.getElementById("verMais").appendChild(setores)

    let localHorario = document.createElement("div")
    localHorario.className = styles.localHorario
    localHorario.innerHTML = "<h3>" + vaga.country + "/" + vaga.state + "/" + vaga.city + "-" + fomatarData(vaga.createAt) + "</h3>"
    document.getElementById("verMais").appendChild(localHorario)

    let info = document.createElement("div")
    info.className = styles.info
    info.innerHTML =
        `<i class="bi bi-clock-fill"></i>` +
        `<h3>Modalidade: ${vaga.jobType}</h3>` +
        `<i class="bi bi-exclamation-circle-fill"></i>` +
        `<h3>Requisitos: ${vaga.requirements}</h3>`;
    document.getElementById("verMais").appendChild(info)


    let sobreAVaga = document.createElement("div")
    sobreAVaga.className = styles.sobreAVaga
    sobreAVaga.innerHTML = "<h3> Sobre a vaga:  </h3>" + "<p>" + vaga.description + "</p>"
    document.getElementById("verMais").appendChild(sobreAVaga)
}