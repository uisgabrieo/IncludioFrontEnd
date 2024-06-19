import styles from "../../pages/Perfil/Perfil.module.css";

export async function carregarPerfil() {
    const contaResposta = JSON.parse(localStorage.getItem("accountResponse"));
    const conta = JSON.parse(contaResposta);

    const idConta = conta.id;
    const tipoConta = conta.account.toLowerCase();

    await perfil(tipoConta, idConta);
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

async function perfil(tipoConta, idConta) {
    try {
        const response = await fetch(`http://localhost:8080/api/account/${tipoConta}/${idConta}`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "GET",
        });

        const data = await response.json();

        if (tipoConta === "employer") {
            gerarDadosEmpresa(data, data.employer);
        } else {
            gerarDadosPessoa(data);
        }
    } catch (error) {
        console.error("Error: ", error);
    }
}

function gerarDadosPessoa(dados) {
    document.getElementById("img").innerHTML = "";
    document.getElementById("nomeUsuario").innerHTML = "";
    document.getElementById("divEndereco").innerHTML = "";
    document.getElementById("divPessoais").innerHTML = "";

    const foto = document.createElement("img");
    foto.className = styles.imgPerfil;
    foto.src = dados.photograph;
    foto.alt = "Foto de perfil";
    document.getElementById("img").appendChild(foto);

    const nome = document.createElement("h1");
    nome.className = styles.nomeUsuario;
    nome.innerHTML = dados.completeName;
    document.getElementById("nomeUsuario").appendChild(nome);

    const endereco = document.createElement("div");
    endereco.className = styles.dados;
    endereco.innerHTML = `
    <p>País: ${dados.country}</p>
    <p>Estado: ${dados.state}</p>
    <p>Cidade: ${dados.city}</p>
    <p>Complemento: ${dados.complement}</p>
    <p>CEP: ${dados.cep}</p>`;
    document.getElementById("divEndereco").appendChild(endereco);

    const infoPessoais = document.createElement("div");
    infoPessoais.className = styles.dados;
    infoPessoais.innerHTML = `
    <p>Nome Completo: ${dados.completeName}</p>
    <p>Email: ${dados.email}</p>
    <p>Data de Nascimento: ${dados.dateOfBirth}</p>
    <p>Telefone: ${dados.numberPhone}</p>
    <p>Gênero: ${dados.gender}</p>`;
    document.getElementById("divPessoais").appendChild(infoPessoais);
}

function gerarDadosEmpresa(empresa, funcionario) {
    document.getElementById("divEmpresa").innerHTML = "";

    gerarDadosPessoa(funcionario);
    buscarPosts(funcionario.id);

    const infoEmpresa = document.createElement("div");
    infoEmpresa.className = styles.dados;
    infoEmpresa.innerHTML = `
    <p>Fundação: ${empresa.createdAt}</p>
    <p>Nome: ${empresa.companyName}</p>
    <p>Email: ${empresa.email}</p>
    <p>Website: ${empresa.website}</p>
    <p>País: ${empresa.country}</p>
    <p>Estado: ${empresa.state}</p>
    <p>Cidade: ${empresa.city}</p>
    <p>Bairro: ${empresa.neighborhood}</p>
    <p>Rua: ${empresa.street}</p>
    <p>Número da Empresa: ${empresa.numCompany}</p>
    <p>CEP: ${empresa.cep}</p>
    <p>Número de Telefone: ${empresa.numberPhone}</p>
    <p>Descrição: ${empresa.description}</p>`;
    document.getElementById("divEmpresa").appendChild(infoEmpresa);
}

function gerarPosts(dados) {
    var logo = document.createElement("img");
    logo.className = styles.logoPost;
    logo.src = dados.author.logo;

    var data = document.createElement("div");
    data.className = styles.informacoes;
    data.innerHTML = "<p>DATA DE PUBLICAÇÃO: <br />" + fomatarData(dados.createAt) + "</p>";

    var informacoes = document.createElement("div");
    informacoes.className = styles.informacoes;
    informacoes.innerHTML = "<p>VAGA: <br />" + dados.role + "</p>";

    var botao = document.createElement("button")
    botao.className = styles.botao;
    botao.innerHTML = "Remover"
    botao.addEventListener("click", function () {
        remover(dados.id)
    })

    var post = document.createElement("div");
    post.className = styles.post;
    post.appendChild(logo);
    post.appendChild(informacoes);
    post.appendChild(data);
    post.appendChild(botao)

    document.getElementById("divVagas").appendChild(post);
}

async function buscarPosts(id) {
    try {
        const response = await fetch(`http://localhost:8080/api/account/employer/post/all/${id}`, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "GET",
        });
        const data = await response.json();
        carregarPost(data);
    } catch (error) {
        console.error("Error: ", error);
    }
}

function carregarPost(postagens) {
    console.log(postagens);
    const posts = document.getElementById("divVagas");
    posts.innerHTML = "";

    postagens.forEach(function (postagem) {
        gerarPosts(postagem);
    });
}

function fomatarData(data) {
    var dataOriginal = new Date(data);
    var dataFormatada = dataOriginal.toLocaleDateString("pt-BR", {
        timeZone: "UTC",
    });
    return dataFormatada;
}

async function remover(id) {
    console.log(id)
    try {
        const response = await fetch(`http://localhost:8080/api/account/employer/post/${id}`, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });

        if (response.status === 204) {
            const data = await response.json();
            console.log("Removidp", data);    
        }
        else{
            throw new Error(`Erro na remoção: ${response.statusText}`);
        }
    } catch (error) {
        console.error("Erro:", error);
    }
}