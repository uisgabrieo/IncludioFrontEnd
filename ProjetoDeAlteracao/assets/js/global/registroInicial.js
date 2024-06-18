const botao = document.querySelector("#submitAccount");

botao.addEventListener("click", function (event) {
    event.preventDefault();

    const iCompleteName = document.querySelector('#nomeCompleto').value;
    const iEmail = document.querySelector('#email').value;
    const iPassword = document.querySelector('#password').value;
    const iConfirmPassword = document.querySelector('#confirmPassword').value;
    const iTypeAccount = document.querySelector('#typeAccount').value;

    if (iConfirmPassword !== iPassword) {
        alert("Senhas diferentes!");
        return;
    } else {
        if (!iTypeAccount) {
            alert("Por favor, selecione um tipo de conta!");
            return;
        }
        const accountData = {
            "completeName": iCompleteName,
            "email": iEmail,
            "password": iPassword,
            "account": iTypeAccount
        };
    
        localStorage.setItem('accountData', JSON.stringify(accountData));
    
        let url = "../../pages/funcionario/registroCompleto.html";
        if (iTypeAccount === 'EMPLOYER') {
            url = "../../pages/empresa/registroCompleto.html";
        }
        window.location.href = url;
        
    }
});

function mostrarSenha() {
    var senha = document.getElementById("password")
    var exporSenha = document.getElementById("botaoSenha")

    if (senha.type === "password") {
        senha.setAttribute("type", "text")
        exporSenha.classList.replace("bi-eye-fill", "bi-eye-slash-fill")
    } else {
        senha.setAttribute("type", "password")
        exporSenha.classList.replace("bi-eye-slash-fill", "bi-eye-fill")
    }
}
function mostrarConfirmarSenha() {
    var senha = document.getElementById("confirmPassword")
    var exporSenha = document.getElementById("botaoConfirmarSenha")

    if (senha.type === "password") {
        senha.setAttribute("type", "text")
        exporSenha.classList.replace("bi-eye-fill", "bi-eye-slash-fill")
    } else {
        senha.setAttribute("type", "password")
        exporSenha.classList.replace("bi-eye-slash-fill", "bi-eye-fill")
    }
}

