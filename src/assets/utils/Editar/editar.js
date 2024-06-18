// src/assets/utils/Editar/editar.js

export function carregarPerfil() {
    const contaResposta = JSON.parse(localStorage.getItem("accountResponse"));
    const conta = JSON.parse(contaResposta);
    
    const idConta = conta.id;
    const tipoConta = conta.account.toLowerCase();

    perfil(tipoConta, idConta);
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

function perfil(tipoConta, idConta) {
    fetch(`http://localhost:8080/api/account/${tipoConta}/${idConta}`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "GET",
    })
    .then(response => response.json())
    .then(data => {
        if (tipoConta === "employer") {
            gerarDadosEmpresa(data, data.employer);
        } else {
            gerarDadosPessoa(data);
        }
    })
    .catch(error => {
        console.error("Error: ", error);
    });
}

function gerarDadosPessoa(dados) {
    document.getElementById("img").innerHTML = "";
    document.getElementById("nomeUsuario").innerHTML = "";
    document.getElementById("divEndereco").innerHTML = "";
    document.getElementById("divPessoais").innerHTML = "";

    const foto = document.createElement("img")
    foto.className = styles.imgPerfil
    foto.src = dados.photograph
    foto.alt = "Foto de perfil"
    document.getElementById("img").appendChild(foto)

    const nome = document.createElement("h1")
    nome.className = styles.nomeUsuario
    nome.innerHTML = dados.completeName
    document.getElementById("nomeUsuario").appendChild(nome)

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

    gerarDadosPessoa(funcionario)
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
