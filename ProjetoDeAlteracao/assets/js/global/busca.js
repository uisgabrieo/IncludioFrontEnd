const accountResponse = JSON.parse(sessionStorage.getItem("accountResponse"));
const account = JSON.parse(accountResponse)
const id = account.id;
const typeAccount = account.account.toLowerCase();

if (typeAccount == "employee") {
    let adicionar = document.getElementById("botaoAdicionar")
    adicionar.classList.add("remover")
}

function buscarVagas(event) {
    let posts = document.getElementById("posts");
    if (posts != null){
        posts.innerHTML = "";
    }
    event.preventDefault();
    const inputFiltro = document.getElementById("filtrar").value;
    console.log(inputFiltro)
    const url = `http://localhost:8080/api/account/employer/post/filter?caixaDeFiltro=${inputFiltro}`
    console.log("url", url)
    vagasFiltradas(url)
}

function vagasFiltradas(busca) {
    console.log(busca)
    fetch(busca, {
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
            console.error("Error: ", error)
        })
}

console.log(id)
console.log(typeAccount)
fetch(`http://localhost:8080/api/account/${typeAccount}/${id}`, {
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    method: "GET",
})
    .then(response => response.json())
    .then(data => {
        console.log(data)
        informacoesPerfil(data)
        sessionStorage.setItem('dadosUsuario', JSON.stringify(data))
    })
    .catch(error => {
        console.error("Error: ", error)
    })
function fomatarData(data) {
    var dataOriginal = new Date(data);
    var dataFormatada = dataOriginal.toLocaleDateString("pt-BR", {
        timeZone: "UTC",
    })
    return dataFormatada;
}

function criarPost(postagem) {
    var botao = document.createElement("button")
    botao.className = "botao"
    botao.innerHTML = "Ver mais"
    botao.addEventListener("click", function () {
        abrirVaga(postagem.id)
    })
    var logo = document.createElement("img")
    logo.id = "logoPost"
    logo.src = postagem.author.logo;

    var data = document.createElement("div")
    data.className = "informacoes"
    data.innerHTML = "<p>DATA DE PUBLICAÇÃO: " + fomatarData(postagem.createAt) + "</p>"
    data.appendChild(botao)

    var informacoes = document.createElement("div")
    informacoes.className = "informacoes";
    informacoes.innerHTML = "<p>EMPRESA: " + postagem.author.companyName + "</p>" +
        "<p>VAGA: " + postagem.role + "</p>" +
        "<p>DESCRIÇÃO: " + postagem.description + "</p>";

    var post = document.createElement("div");
    post.className = "post"
    post.appendChild(logo)
    post.appendChild(informacoes)
    post.appendChild(data)
    document.getElementById("posts").appendChild(post)
}

function carregarPost(postagens) {
    postagens.forEach(function (postagem) {
        criarPost(postagem);
    });
}

function informacoesPerfil(data) {
    if(typeAccount == "employer"){
        var fotoPerfil = document.getElementById("fotoPerfil")
        fotoPerfil.src = data.employer.photograph;
        fotoPerfil.alt = "Foto Perfil"
        var nomePerfil = document.getElementById("nomeUsuario")
        nomePerfil.textContent = data.employer.completeName;
    } else {
        var fotoPerfil = document.getElementById("fotoPerfil")
        fotoPerfil.src = data.photograph;
        fotoPerfil.alt = "Foto Perfil"
        var nomePerfil = document.getElementById("nomeUsuario")
        nomePerfil.textContent = data.completeName;
    }
}

async function abrirVaga(vagaId) {
    var email = document.getElementById("botaoEmail")
    var botao = document.getElementById("janelaVaga")
    botao.classList.add("abrir")

    var vaga = await capturarVaga(vagaId)

    gerarVaga(vaga)

    email.addEventListener("click", function () {
        var email = vaga.author.email
        window.location.href = `mailto:${email}`;
    })
    botao.addEventListener("click", function (event) {
        let verMais = document.getElementById("verMais")
        if (event.target.id == "fechar" || event.target.id == "janelaVaga") {
            if (verMais != null) {
                verMais.removeChild(document.getElementById("cabecalho"))
                verMais.removeChild(document.getElementById("infoVaga"))
                verMais.removeChild(document.getElementById("area"))
            }
            botao.classList.remove("abrir")
        }
    })
}

async function capturarVaga(id) {
    try {
        const response = await fetch(`http://localhost:8080/api/account/employer/post/${id}`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
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
    cabecalho.id = "cabecalho"
    let logo = document.createElement("img")
    logo.id = "logoVaga"
    logo.src = vaga.author.logo
    logo.alt = "Logo Empresa"
    cabecalho.appendChild(logo)

    let nomeEmpresa = document.createElement("div")
    nomeEmpresa.id = "nomeEmpresa"
    nomeEmpresa.innerHTML = "<h1>" + vaga.author.companyName + "</h1>"
    cabecalho.appendChild(nomeEmpresa)

    document.getElementById("verMais").appendChild(cabecalho)

    let area = document.createElement("div")
    area.id = "area"
    area.innerHTML = "<h2> Área: " + vaga.field.map(element => element).join(', ') + "</h2>"
    document.getElementById("verMais").appendChild(area)

    let info = document.createElement("div")
    info.id = "infoVaga"
    info.innerHTML = "<p> Vaga: " + vaga.role + "</p>" +
        "<p> Tipo de Vaga: " + vaga.jobType + "</p>" +
        "<p> Data: " + fomatarData(vaga.createAt) + "</p>" +
        "<p> Descrição Vaga: " + vaga.description + "</p>" +
        "<p> Requisitos: " + vaga.requirements + "</p>";
    document.getElementById("verMais").appendChild(info)
}

/*
author:
    comapanyName: "includio"
    email: "ingrid@gmail.com"
    name: "Ingrid"
createAt: 1717551566.543
description: "Vaga para desenvolvedor back-end"
field: ['Tecnologia', 'Contabiliades']
id: "665fc1ce712ac11c4a338e12"
jobType: "REMOTE"
requirements: "Saber Spring, Java 8+"
role: "Dev back-end"
*/