export function envioDados(event, pais, estado, cidade, cep, bairro, rua, numEmpresa, setErro) {
    event.preventDefault();

    if (!(pais && estado && cidade && cep && bairro && rua && numEmpresa)) {
        setErro('Dados incompletos');
    } else {

        const dadosEmpresa = JSON.parse(sessionStorage.getItem("dadosEmpresa"))

        console.log(dadosEmpresa)

        const localizacaoEmpresa = {
            idEmployer: dadosEmpresa.idEmployer,
            companyName: dadosEmpresa.companyName,
            companyEmail: dadosEmpresa.companyEmail,
            country: pais,
            state: estado,
            city: cidade,
            cep: cep,
            neighborhood: bairro,
            street: rua,
            numCompany: numEmpresa
        }


        sessionStorage.setItem("localizacaoEmpresa", JSON.stringify(localizacaoEmpresa));

        let url = "/registro/empresa/info";
        window.location.href = url;
    }

}

export function log() {
    const dadosEmpresa = JSON.parse(sessionStorage.getItem("dadosEmpresa"))

    console.log(dadosEmpresa)
}