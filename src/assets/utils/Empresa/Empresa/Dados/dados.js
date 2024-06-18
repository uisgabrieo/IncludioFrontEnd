export function envioDados(event, nomeEmpresa, email, setErro) {
    event.preventDefault();

    if (!(nomeEmpresa && email)) {
        setErro("Dados incompletos");
    } else {
        const idEmployer = localStorage.getItem("idEmployer");

        const dadosEmpresa = {
            idEmployer: idEmployer,
            companyName: nomeEmpresa,
            companyEmail: email
        }


        localStorage.setItem("dadosEmpresa", JSON.stringify(dadosEmpresa));

        let url = "/registro/empresa/localizacao";
        window.location.href = url;
    }

}

export function log() {
    const idEmployer = localStorage.getItem("idEmployer");

    console.log(idEmployer)
}