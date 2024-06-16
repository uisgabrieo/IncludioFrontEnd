export function envioDados(event, logo, nomeEmpresa, email, setErro) {
    event.preventDefault();

    if (!(logo && nomeEmpresa && email)){
        setErro('Dados incompletos');
    } else {
        const dadosCompletosEmpregador = JSON.parse(localStorage.getItem("dadosCompletosEmpregador"));

        const dadosEmpresa = {
            completeName: dadosCompletosEmpregador.completeName,
            email: dadosCompletosEmpregador.email,
            password: dadosCompletosEmpregador.password,
            account: dadosCompletosEmpregador.account,
            country: dadosCompletosEmpregador.country,
            state: dadosCompletosEmpregador.state,
            city: dadosCompletosEmpregador.city,
            cep: dadosCompletosEmpregador.cep,
            complement: dadosCompletosEmpregador.complement,
            cpf: dadosCompletosEmpregador.cpf,
            numberPhone: dadosCompletosEmpregador.numberPhone,
            jobTitle: dadosCompletosEmpregador.jobTitle,
            dateOfBirth: dadosCompletosEmpregador.dateOfBirth,
            gender: dadosCompletosEmpregador.gender,
            photograph: dadosCompletosEmpregador.photograph,
            logo: logo,
            companyName: nomeEmpresa,
            companyEmail: email
        }

        console.log(dadosEmpresa)
    
        localStorage.setItem("dadosEmpresa", JSON.stringify(dadosEmpresa));
        
        let url = "/registro/empresa/localizacao";
        window.location.href = url;
    }

}

