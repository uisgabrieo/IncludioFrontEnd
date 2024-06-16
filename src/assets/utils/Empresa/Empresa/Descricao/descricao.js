export function envioDados(event, descricao, setErro) {
    event.preventDefault();

    if (!(descricao)) {
        setErro('Dados incompletos');
    } else {
        const cadastroCompleto = new FormData();

        const informacoesEmpresa = JSON.parse(localStorage.getItem("informacoesEmpresa"))

        if (!informacoesEmpresa) {
            setErro("Dados não encontrados")
            return
        }

        cadastroCompleto.append("completeName", informacoesEmpresa.completeName)
        cadastroCompleto.append("email", informacoesEmpresa.email)
        cadastroCompleto.append("password", informacoesEmpresa.password)
        cadastroCompleto.append("account", informacoesEmpresa.account)
        cadastroCompleto.append("country", informacoesEmpresa.country)
        cadastroCompleto.append("state", informacoesEmpresa.state)
        cadastroCompleto.append("city", informacoesEmpresa.city)
        cadastroCompleto.append("cep", informacoesEmpresa.cep)
        cadastroCompleto.append("complement", informacoesEmpresa.complement)
        cadastroCompleto.append("cpf", informacoesEmpresa.cpf)
        cadastroCompleto.append("numberPhone", informacoesEmpresa.numberPhone)
        cadastroCompleto.append("jobTitle", informacoesEmpresa.jobTitle)
        cadastroCompleto.append("dateOfBirth", informacoesEmpresa.dateOfBirth)
        cadastroCompleto.append("gender", informacoesEmpresa.gender)
        cadastroCompleto.append("photograph", informacoesEmpresa.photograph)
        cadastroCompleto.append("logo", informacoesEmpresa.logo)
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
        cadastroCompleto.append("desciption", descricao)

        console.log(cadastroCompleto)
        enviarAPI(cadastroCompleto)
    }
}

function enviarAPI(dados) {
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
        window.location.href = "/home";
    })
    .catch(error => {
        console.log("Erro: " + error.message);
    });
}
