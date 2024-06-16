export function envioDados(event, pais, estado, cidade, cep, complemento, setErro) {
    event.preventDefault();

    if (!(pais && estado && cidade && cep && complemento)) {
        setErro('Dados incompletos');
    } else {

        const dadosRegistro = JSON.parse(localStorage.getItem("dadosRegistro"))

        if (!dadosRegistro) {
            setErro("Dados não encontrados")
            return
        }

        const dadosLocalizacao = {
            completeName: dadosRegistro.completeName,
            email: dadosRegistro.email,
            password: dadosRegistro.password,
            country: pais,
            state: estado,
            city: cidade,
            cep: cep,
            complement: complemento
        }

        localStorage.setItem("dadosLocalizacao", JSON.stringify(dadosLocalizacao));

        let url = "/registro/empregador/info";
        window.location.href = url;
    }

}

export function log() {
    const dadosRegistro = JSON.parse(localStorage.getItem("dadosRegistro"))
    console.log(dadosRegistro)
}