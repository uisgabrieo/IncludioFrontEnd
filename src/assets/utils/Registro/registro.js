export function envioDados(event, nomeCompleto, email, senha, confirmarSenha, tipoConta, setErro) {
    event.preventDefault();

    console.log(nomeCompleto, email, senha, confirmarSenha, tipoConta)
    if (senha != confirmarSenha){
        setErro('Senhas diferentes');
    }
    if (!tipoConta) {
        setErro("Por favor, selecione um tipo de conta!");
    }

    const resgistro = {
        nomeCompleto: nomeCompleto,
        email: email,
        password: senha,
        tipoConta: tipoConta
    };

    localStorage.setItem("dadosRegistro", JSON.stringify(resgistro));
    
    let url = "/registro/funcionario/registroCompleto";
    if (tipoConta === 'EMPLOYER') {
        url = "/registro/empresa/registroCompleto";
    }
    window.location.href = url;
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

