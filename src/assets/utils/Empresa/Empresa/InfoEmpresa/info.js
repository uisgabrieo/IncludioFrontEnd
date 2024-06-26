export function envioDados(event, dia, mes, ano, cnpj, telefone, website, setErro) {
    event.preventDefault();

    if (!(ano && dia && mes && telefone && cnpj && website)) {
        setErro('Dados incompletos');
    } else {

        const localizacaoEmpresa = JSON.parse(sessionStorage.getItem("localizacaoEmpresa"))

        if (!localizacaoEmpresa) {
            setErro("Dados não encontrados")
            return
        }
        
        const diaFomr = formatarDoisDigitos(dia);
        const mesFomr = formatarDoisDigitos(mes);
        const createdAt = `${diaFomr}/${mesFomr}/${ano}`;
        
        const informacoesEmpresa = {
            idEmployer: localizacaoEmpresa.idEmployer,
            companyName: localizacaoEmpresa.companyName,
            companyEmail: localizacaoEmpresa.companyEmail,
            country: localizacaoEmpresa.country,
            state: localizacaoEmpresa.state,
            city: localizacaoEmpresa.city,
            cep: localizacaoEmpresa.cep,
            neighborhood: localizacaoEmpresa.neighborhood,
            street: localizacaoEmpresa.street,
            numCompany: localizacaoEmpresa.numCompany,
            createdAt: createdAt,
            cnpj: cnpj,
            website: website,
            numberPhone: telefone
        }

        sessionStorage.setItem("informacoesEmpresa", JSON.stringify(informacoesEmpresa));

        let url = "/registro/empresa/descricao";
        window.location.href = url;
    }

}

export function formatarDoisDigitos(numero) {
    return numero.toString().padStart(2, '0');
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
