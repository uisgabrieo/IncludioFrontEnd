export function envioDados(event, cpf, telefone, setor, formacao, instituicao, setErro) {
    event.preventDefault();

    if (!(cpf && telefone && setor && formacao && instituicao)) {
        setErro('Dados incompletos');
    } else {
        const dadosInformacao = new FormData();

        const dadosLocalizacao = JSON.parse(localStorage.getItem("dadosLocalizacao"))

        console.log(dadosLocalizacao)

        dadosInformacao.append("completeName", dadosLocalizacao.completeName);
        dadosInformacao.append("email", dadosLocalizacao.email);
        dadosInformacao.append("password", dadosLocalizacao.password);
        dadosInformacao.append("account", dadosLocalizacao.account);
        dadosInformacao.append("country", dadosLocalizacao.pais);
        dadosInformacao.append("state", dadosLocalizacao.estado);
        dadosInformacao.append("city", dadosLocalizacao.cidade);
        dadosInformacao.append("cep", dadosLocalizacao.cep);
        dadosInformacao.append("complement", dadosLocalizacao.complemento);
        dadosInformacao.append("cpf", cpf);
        dadosInformacao.append("numberPhone", telefone);
        dadosInformacao.append("sector", setor);
        dadosInformacao.append("training", formacao);
        dadosInformacao.append("institution", instituicao);


        localStorage.setItem("dadosInformacao", JSON.stringify(dadosInformacao));

        let url = "/registro/funcionario/completo";
        window.location.href = url;
    }

}