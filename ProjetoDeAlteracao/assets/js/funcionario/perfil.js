const dadosUsuario = JSON.parse(sessionStorage.getItem("dadosUsuario"))
console.log(dadosUsuario)

if (dadosUsuario != null) {
    exporDados(dadosUsuario)
}

function exporDados(dados) {
    infoPerfil(dados)
    infoEndereco(dados)
    infoPessoal(dados)
}

function infoPerfil(dados) {
    var fotoPerfil = document.getElementById("fotoPerfil")
    fotoPerfil.src = dados.photograph;
    fotoPerfil.alt = "Foto Perfil"
    var nomePerfil = document.getElementById("nomeUsuario")
    nomePerfil.textContent = dados.completeName;
    var nomePerfil = document.getElementById("tituloNomeUsuario")
    nomePerfil.textContent = dados.completeName;
    var email = document.getElementById("email")
    email.textContent = dados.email
}

function infoEndereco(dados) {
    var endereco = document.createElement("div")
    endereco.className = "info"
    endereco.innerHTML = "<p>País: " + dados.country + "</p>"+
                        "<p>Estado: " + dados.state + "</p>" +
                        "<p>Cidade: " + dados.city + "</p>" +
                        "<p>Bairro: " + null + "</p>" +
                        "<p>CEP: " + dados.cep + "</p>"

    document.getElementById("endereco").appendChild(endereco)
}

function infoPessoal(dados) {
    var endereco = document.createElement("div")
    endereco.className = "info"
    endereco.innerHTML = "<p>Telefone: " + dados.numberPhone + "</p>"+
                        "<p>Data de Nascimento: " + dados.dateOfBirth + "</p>" +
                        "<p>Gênero: " + dados.gender + "</p>" 

    document.getElementById("infoPessoal").appendChild(endereco)
}

function confirmarSaida() {
    const botao = document.getElementById("janelaConfirmacao");
    botao.classList.add("abrir")

    botao.addEventListener("click", function(event) {
        if (event.target.id == "sairSim") {
            window.location.href = "../../../index.html";
        } else if (event.target.id == "sairNao" || event.target.id == "janelaConfirmacao") {
            botao.classList.remove("abrir");
        }
    })
}