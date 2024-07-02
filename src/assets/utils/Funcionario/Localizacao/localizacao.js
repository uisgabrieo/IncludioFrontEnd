export function envioDados(event, pais, estado, cidade, cep, complemento, setErro) {
    event.preventDefault();

    if (!(pais && estado && cidade && cep)) {
        setErro("Algum campo está vazio!");
        return;
    }

    const dadosRegistro = JSON.parse(sessionStorage.getItem("dadosRegistro"))

    if (!dadosRegistro) {
        setErro("Dados não encontrados")
        return
    }

    const dadosLocalizacao = {
        completeName: dadosRegistro.completeName,
        email: dadosRegistro.email,
        password: dadosRegistro.password,
        account: dadosRegistro.account,
        country: pais,
        state: estado,
        city: cidade,
        cep: cep,
        complement: complemento
    }

    sessionStorage.setItem("dadosLocalizacao", JSON.stringify(dadosLocalizacao));

    let url = "/registro/funcionario/info";
    window.location.href = url;
}


export function log() {
    const dadosRegistro = JSON.parse(localStorage.getItem("dadosRegistro"))
    console.log(dadosRegistro)
}