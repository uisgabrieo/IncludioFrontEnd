export function preencherData() {
    const dia = document.getElementById("dia");
    const mes = document.getElementById("mes");
    const ano = document.getElementById("ano");

    for (let i = 1; i <= 31; i++) {
        const dias = document.createElement("option");
        dias.value = i;
        dias.textContent = i;
        dia.appendChild(dias);
    }

    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    for (let i = 0; i < meses.length; i++) {
        const optMes = document.createElement("option");
        optMes.value = i + 1;
        optMes.textContent = meses[i];
        mes.appendChild(optMes);
    }

    const anos = new Date().getFullYear();
    for (let i = anos; i >= 1900; i--) {
        const optAnos = document.createElement("option");
        optAnos.value = i;
        optAnos.textContent = i;
        ano.appendChild(optAnos);
    }
}

export function envioDados(event, dia, mes, ano, genero, imgPerfil, imgDiagnostico, setErro) {
    event.preventDefault();

    if (!(dia && mes && ano && imgPerfil && imgDiagnostico)) {
        setErro("Algum campo está vazio!");
        return;
    }

    const dadosCompleto = new FormData();
    const dadosInformacao = JSON.parse(sessionStorage.getItem("dadosInformacao"));

    if (!dadosInformacao) {
        setErro("Dados não encontrados")
        return
    }

    const diaFomr = formatarDoisDigitos(dia);
    const mesFomr = formatarDoisDigitos(mes);
    const dateOfBirth = `${diaFomr}/${mesFomr}/${ano}`;

    console.log(dadosInformacao);

    console.log("Completo1")

    dadosCompleto.append("completeName", dadosInformacao.completeName);
    dadosCompleto.append("email", dadosInformacao.email);
    dadosCompleto.append("password", dadosInformacao.password);
    dadosCompleto.append("account", dadosInformacao.account);
    dadosCompleto.append("country", dadosInformacao.country);
    dadosCompleto.append("state", dadosInformacao.state);
    dadosCompleto.append("city", dadosInformacao.city);
    dadosCompleto.append("cep", dadosInformacao.cep);
    dadosCompleto.append("complement", dadosInformacao.complement);
    dadosCompleto.append("cpf", dadosInformacao.cpf);
    dadosCompleto.append("numberPhone", dadosInformacao.numberPhone);
    dadosCompleto.append("sector", dadosInformacao.sector);
    dadosCompleto.append("training", dadosInformacao.training);
    dadosCompleto.append("institution", dadosInformacao.institution);
    dadosCompleto.append("dateOfBirth", dateOfBirth);
    dadosCompleto.append("gender", genero);
    dadosCompleto.append("photograph", imgPerfil);
    dadosCompleto.append("diagnostic", imgDiagnostico);

    console.log("Completo1")
    sessionStorage.clear();
    console.log("Completo1")
    enviarAPI(dadosCompleto);
}

function enviarAPI(dados) {
    fetch("http://localhost:8080/api/account/employee/register", {
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
            console.log("Completo1")
            if (data === 200)
                console.log("Completo1")
            window.location.href = "/login";
        })
        .catch(error => {
            console.log("Erro: " + error.message);
        });
}

export function formatarDoisDigitos(numero) {
    return numero.toString().padStart(2, '0');
}

export function log() {
    const dadosInformacao = JSON.parse(localStorage.getItem("dadosInformacao"));

    console.log(dadosInformacao);
}