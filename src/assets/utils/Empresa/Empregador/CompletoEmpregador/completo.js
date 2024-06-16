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

export function envioDados(event, dia, mes, ano, genero, imgPerfil, setErro) {
    event.preventDefault();

    if (!(dia && mes && ano && imgPerfil)) {
        setErro("Erro");
    } else {
        const dadosInformacao = JSON.parse(localStorage.getItem("dadosInformacao"));

        if (!dadosInformacao) {
            setErro("Dados não encontrados")
            return
        }

        const diaFomr = formatarDoisDigitos(dia);
        const mesFomr = formatarDoisDigitos(mes);
        const dateOfBirth = `${diaFomr}/${mesFomr}/${ano}`;

        console.log(dadosInformacao);

        const dadosCompletoEmpregador = {
            completeName: dadosInformacao.completeName,
            email: dadosInformacao.email,
            password: dadosInformacao.password,
            account: dadosInformacao.account,
            country: dadosInformacao.country,
            state: dadosInformacao.state,
            city: dadosInformacao.city,
            cep: dadosInformacao.cep,
            complement: dadosInformacao.complement,
            cpf: dadosInformacao.cpf,
            numberPhone: dadosInformacao.numberPhone,
            jobTitle: dadosInformacao.jobTitle,
            dateOfBirth: dateOfBirth,
            gender: genero,
            photograph: imgPerfil
        }

        localStorage.setItem("dadosCompletosEmpregador", JSON.stringify(dadosCompletoEmpregador));
        let url = "/registro/empresa/dados";
        window.location.href = url;
    }
}

export function formatarDoisDigitos(numero) {
    return numero.toString().padStart(2, '0');
}

export function log() {
    const dadosInformacao = JSON.parse(localStorage.getItem("dadosInformacao"));

    console.log(dadosInformacao);
}