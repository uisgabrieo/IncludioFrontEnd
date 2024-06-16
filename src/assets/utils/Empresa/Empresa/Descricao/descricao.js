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
        cadastroCompleto.append("gender", informacoesEmpresa.genero)
        cadastroCompleto.append("photograph", informacoesEmpresa.imgPerfil)
        cadastroCompleto.append("logo", informacoesEmpresa.logo)
        cadastroCompleto.append("companyName", informacoesEmpresa.nomeEmpresa)
        cadastroCompleto.append("companyEmail", informacoesEmpresa.email)
        cadastroCompleto.append("country", informacoesEmpresa.pais)
        cadastroCompleto.append("state", informacoesEmpresa.estado)
        cadastroCompleto.append("city", informacoesEmpresa.cidade)
        cadastroCompleto.append("cep", informacoesEmpresa.cep)
        cadastroCompleto.append("neighborhood", informacoesEmpresa.bairro)
        cadastroCompleto.append("street", informacoesEmpresa.rua)
        cadastroCompleto.append("numCompany", informacoesEmpresa.numEmpresa)
        cadastroCompleto.append("createdAt", informacoesEmpresa.createdAt)
        cadastroCompleto.append("cnpj", informacoesEmpresa.cnpj)
        cadastroCompleto.append("website", informacoesEmpresa.website)
        cadastroCompleto.append("numberPhone", informacoesEmpresa.telefone)
        cadastroCompleto.append("desciption", descricao)

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
        localStorage.setItem("data", JSON.stringify(data));
        window.location.href = "/home";
    })
    .catch(error => {
        console.log("Erro: " + error.message);
    });
}
