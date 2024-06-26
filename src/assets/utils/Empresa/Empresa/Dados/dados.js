export function envioDados(event, nomeEmpresa, email, setErro) {
    event.preventDefault();

    if (!(nomeEmpresa && email)) {
        setErro("Dados incompletos");
    } else {
        const idEmployer = sessionStorage.getItem("idEmployer");

        const dadosEmpresa = {
            idEmployer: idEmployer,
            companyName: nomeEmpresa,
            companyEmail: email
        }


        sessionStorage.setItem("dadosEmpresa", JSON.stringify(dadosEmpresa));

        let url = "/registro/empresa/localizacao";
        window.location.href = url;
    }

}