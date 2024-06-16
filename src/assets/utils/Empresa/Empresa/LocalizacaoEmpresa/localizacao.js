export function envioDados(event, pais, estado, cidade, cep, bairro, rua, numEmpresa, setErro) {
    event.preventDefault();

    if (!(pais && estado && cidade && cep && bairro && rua && numEmpresa)) {
        setErro('Dados incompletos');
    } else {

        const dadosEmpresa = JSON.parse(localStorage.getItem("dadosEmpresa"))

        const localizacaoEmpresa = {
            completeName: dadosEmpresa.completeName,
            email: dadosEmpresa.email,
            password: dadosEmpresa.password,
            account: dadosEmpresa.account,
            country: dadosEmpresa.country,
            state: dadosEmpresa.state,
            city: dadosEmpresa.city,
            cep: dadosEmpresa.cep,
            complement: dadosEmpresa.complement,
            cpf: dadosEmpresa.cpf,
            numberPhone: dadosEmpresa.numberPhone,
            jobTitle: dadosEmpresa.jobTitle,
            dateOfBirth: dadosEmpresa.dateOfBirth,
            gender: dadosEmpresa.genero,
            photograph: dadosEmpresa.imgPerfil,
            logo: dadosEmpresa.logo,
            companyName: dadosEmpresa.nomeEmpresa,
            companyEmail: dadosEmpresa.email,
            password: dadosEmpresa.senha,
            country: pais,
            state: estado,
            city: cidade,
            cep: cep,
            neighborhood: bairro,
            street: rua,
            numCompany: numEmpresa
        }

        localStorage.setItem("localizacaoEmpresa", JSON.stringify(localizacaoEmpresa));

        let url = "/registro/empresa/info";
        window.location.href = url;
    }

}

export function log() {
    const dadosRegistro = JSON.parse(localStorage.getItem("dadosRegistro"))
    console.log(dadosRegistro)
}