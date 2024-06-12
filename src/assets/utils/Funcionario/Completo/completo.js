export function envioDados(event, dia, mes, ano, imgPerfil, imgDiagnostico, setErro) {
    event.preventDefault();

    if (!(dia && mes && ano && imgPerfil && imgDiagnostico)) {
        setErro('Dados incompletos');
    } else {
        const dateOfBirth = `${dia}/${mes}/${ano}`;

        const dadosCompleto = new FormData();

        const dadosInformacao = JSON.parse(localStorage.getItem("dadosInformacao"))

        console.log(dadosInformacao)

        dadosCompleto.append("completeName", dadosInformacao.completeName);
        dadosCompleto.append("email", dadosInformacao.email);
        dadosCompleto.append("password", dadosInformacao.password);
        dadosCompleto.append("account", dadosInformacao.account);
        dadosCompleto.append("country", dadosInformacao.pais);
        dadosCompleto.append("state", dadosInformacao.estado);
        dadosCompleto.append("city", dadosInformacao.cidade);
        dadosCompleto.append("cep", dadosInformacao.cep);
        dadosCompleto.append("complement", dadosInformacao.complemento);
        dadosCompleto.append("cpf", dadosInformacao.cpf);
        dadosCompleto.append("numberPhone", dadosInformacao.telefone);
        dadosCompleto.append("sector", dadosInformacao.setor);
        dadosCompleto.append("training", dadosInformacao.formacao);
        dadosCompleto.append("institution", dadosInformacao.instituicao);
        dadosCompleto.append("dateOfBirth", dateOfBirth);
        dadosCompleto.append("photograph", imgPerfil.files[0]);
        dadosCompleto.append("diagnostic", imgDiagnostico.files[0]);
        
        enviarAPI(dadosCompleto);

        let url = "/registro/funcionario/completo";
        window.location.href = url;
    }
}

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

function enviarAPI(dados) {
    fetch("http://localhost:8080/api/account/employee/register", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(dados)
    })
    .then(response => {
        if (response.ok) {
            return response.text();
        } else {
            throw new Error('Credenciais inválidas');
        }
    })
    .then(data => {
        console.log(data); 
        localStorage.setItem('accountResponse', JSON.stringify(data));
    })
    .catch(error => {
        console.log("Erro: " + error.message);
        setErro("Credenciais inválidas");
    });
}