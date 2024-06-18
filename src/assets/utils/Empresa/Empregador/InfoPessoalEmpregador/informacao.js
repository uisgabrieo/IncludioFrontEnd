export function envioDados(event, cpf, telefone, cargo, setErro) {
    event.preventDefault();

    if (!(cpf && telefone && cargo)) {
        setErro('Dados incompletos');
    } else {

        const dadosLocalizacao = JSON.parse(localStorage.getItem("dadosLocalizacao"))

        if (!dadosLocalizacao) {
            setErro("Dados não encontrados")
            return
        }

        console.log(dadosLocalizacao)

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
            jobTitle: cargo,
        }


        localStorage.setItem("dadosInformacao", JSON.stringify(dadosInformacao));

        let url = "/registro/empregador/completo";
        window.location.href = url;
    }

}

export function log() {
    
    const dadosLocalizacao = JSON.parse(localStorage.getItem("dadosLocalizacao"))

    console.log(dadosLocalizacao)
}