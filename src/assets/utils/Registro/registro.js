export function envioDados(event, nomeCompleto, email, senha, confirmarSenha, tipoConta, setErro) {
    event.preventDefault();

    console.log(nomeCompleto, email, senha, confirmarSenha, tipoConta)
    if (senha != confirmarSenha){
        setErro('Senhas diferentes');
    }
    if (!tipoConta) {
        setErro("Por favor, selecione um tipo de conta!");
    } else {

        const registro = {
            completeName: nomeCompleto,
            email: email,
            password: senha,
            account: tipoConta
        }
    
        sessionStorage.setItem("dadosRegistro", JSON.stringify(registro));
        
        let url = "/registro/funcionario/localizacao";
        if (tipoConta === 'EMPLOYER') {
            url = "/registro/empregador/localizacao";
        }
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

