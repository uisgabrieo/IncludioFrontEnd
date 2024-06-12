export function envioDados(event, pais, estado, cidade, cep, complemento, setErro) {
    console.log(pais, estado, cidade, cep, complemento)
    event.preventDefault();

    if (!(pais && estado && cidade && cep)) {
        setErro('Dados incompletos');
    } else {
        const dadosLocalizacao = new FormData();

        const dadosRegistro = JSON.parse(localStorage.getItem("dadosRegistro"))

        console.log(dadosRegistro)

        dadosLocalizacao.append("completeName", dadosRegistro.completeName);
        dadosLocalizacao.append("email", dadosRegistro.email);
        dadosLocalizacao.append("password", dadosRegistro.password);
        dadosLocalizacao.append("account", dadosRegistro.account);
        dadosLocalizacao.append("country", pais);
        dadosLocalizacao.append("state", estado);
        dadosLocalizacao.append("city", cidade);
        dadosLocalizacao.append("cep", cep);
        dadosLocalizacao.append("complement", complemento);

        localStorage.setItem("dadosLocalizacao", JSON.stringify(dadosLocalizacao));

        let url = "/registro/funcionario/info";
        window.location.href = url;
    }

}