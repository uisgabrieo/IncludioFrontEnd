export function envioDados(event, cpf, telefone, setor, formacao, instituicao, setErro) {
    event.preventDefault();

    if (!(cpf && telefone && setor && formacao && instituicao)) {
        setErro('Dados incompletos');
    } else {

        const dadosLocalizacao = JSON.parse(localStorage.getItem("dadosLocalizacao"))

        if (!dadosLocalizacao) {
            setErro("Dados não encontrados")
            return
        }

        const dadosInformacao = {
            completeName: dadosLocalizacao.completeName,
            email: dadosLocalizacao.email,
            password: dadosLocalizacao.password,
            account: dadosLocalizacao.account,
            country: dadosLocalizacao.country,
            state: dadosLocalizacao.state,
            city: dadosLocalizacao.city,
            cep: dadosLocalizacao.cep,
            complement: dadosLocalizacao.complement,
            cpf: cpf,
            numberPhone: telefone,
            sector: setor,
            training: formacao,
            institution: instituicao
        }


        localStorage.setItem("dadosInformacao", JSON.stringify(dadosInformacao));

        let url = "/registro/funcionario/completo";
        window.location.href = url;
    }

}

export function log() {
    
    const dadosLocalizacao = JSON.parse(localStorage.getItem("dadosLocalizacao"))

    console.log(dadosLocalizacao)
}