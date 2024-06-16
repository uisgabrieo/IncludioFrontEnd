export function envioDados(event, logo, nomeEmpresa, email, senha, confirmarSenha, setErro) {
    event.preventDefault();

    if (senha != confirmarSenha){
        setErro('Senhas diferentes');
    } else {
        const dadosCompletosEmpregador = JSON.parse(localStorage.getItem("dadosCompletosEmpregador"));

        const dadosEmpresa = {
            completeName: dadosCompletosEmpregador.completeName,
            email: dadosCompletosEmpregador.email,
            password: dadosCompletosEmpregador.password,
            account: dadosCompletosEmpregador.account,
            country: dadosCompletosEmpregador.country,
            state: dadosCompletosEmpregador.state,
            city: dadosCompletosEmpregador.city,
            cep: dadosCompletosEmpregador.cep,
            complement: dadosCompletosEmpregador.complement,
            cpf: dadosCompletosEmpregador.cpf,
            numberPhone: dadosCompletosEmpregador.numberPhone,
            jobTitle: dadosCompletosEmpregador.jobTitle,
            dateOfBirth: dadosCompletosEmpregador.dateOfBirth,
            gender: dadosCompletosEmpregador.genero,
            photograph: dadosCompletosEmpregador.imgPerfil,
            logo: logo,
            companyName: nomeEmpresa,
            companyEmail: email,
            password: senha
        }
    
        localStorage.setItem("dadosEmpresa", JSON.stringify(dadosEmpresa));
        
        let url = "/registro/empresa/localizacao";
        window.location.href = url;
    }

}

export function mostrarSenha() {
    const senha = document.getElementById("senha");
    const exporSenha = document.getElementById("olho");

    if (senha.type === "password") {
        senha.setAttribute("type", "text");
        exporSenha.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
    } else {
        senha.setAttribute("type", "password");
        exporSenha.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
    }
}

export function mostrarSenhaConfirmar() {
    const senha = document.getElementById("confirmarSenha");
    const exporSenha = document.getElementById("olhoConfirmar");

    if (senha.type === "password") {
        senha.setAttribute("type", "text");
        exporSenha.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
    } else {
        senha.setAttribute("type", "password");
        exporSenha.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
    }
}

