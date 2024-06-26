export function envioDados(event, logo, descricao, setErro) {
    event.preventDefault();

    if (!(descricao)) {
        setErro('Dados incompletos');
    } else {
        const cadastroCompleto = new FormData();

        const informacoesEmpresa = JSON.parse(sessionStorage.getItem("informacoesEmpresa"))

        if (!informacoesEmpresa) {
            setErro("Dados não encontrados")
            return
        }

        console.log(informacoesEmpresa)
        console.log("Completo1")

        console.log(logo)
        console.log(descricao)

        cadastroCompleto.append("idEmployer", informacoesEmpresa.idEmployer)
        cadastroCompleto.append("companyName", informacoesEmpresa.companyName)
        cadastroCompleto.append("companyEmail", informacoesEmpresa.companyEmail)
        cadastroCompleto.append("country", informacoesEmpresa.country)
        cadastroCompleto.append("state", informacoesEmpresa.state)
        cadastroCompleto.append("city", informacoesEmpresa.city)
        cadastroCompleto.append("cep", informacoesEmpresa.cep)
        cadastroCompleto.append("neighborhood", informacoesEmpresa.neighborhood)
        cadastroCompleto.append("street", informacoesEmpresa.street)
        cadastroCompleto.append("numCompany", informacoesEmpresa.numCompany)
        cadastroCompleto.append("createdAt", informacoesEmpresa.createdAt)
        cadastroCompleto.append("cnpj", informacoesEmpresa.cnpj)
        cadastroCompleto.append("website", informacoesEmpresa.website)
        cadastroCompleto.append("numberPhone", informacoesEmpresa.numberPhone)
        cadastroCompleto.append("logo", logo)
        cadastroCompleto.append("desciption", descricao)

        console.log("Completo1")

        console.log(cadastroCompleto.get("idEmployer"))
        enviarAPI(cadastroCompleto)
    }
}

function enviarAPI(dados) {
    console.log(dados.get("idEmployer"))
    fetch("http://localhost:8080/api/account/company/register", {
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

        if(data === 200)
            console.log("Completo1")

            window.location.href = "/login";
    })
    .catch(error => {
        console.log("Erro: " + error.message);
    });
}
