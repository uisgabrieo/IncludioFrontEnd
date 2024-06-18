const botao = document.querySelector("#submitLogin");

botao.addEventListener("click", function (event) {
    event.preventDefault();

    const iEmail = document.querySelector("#email").value
    const iPassword = document.querySelector("#password").value

    console.log(iEmail, iPassword)

    const login = {
        email: iEmail,
        password: iPassword
    }

    fetch("http://localhost:8080/api/account/login", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(login)
    })
        .then(response => {
            if (response.ok) {
                return response.text();
            }
        })
        .then(data => {
            console.log(data); 
            localStorage.setItem('accountResponse', JSON.stringify(data))
            window.location.href = '../global/homePage.html';
        })
        .catch(error => {
            console.log("Erro: " + error)
            document.getElementById('mensagemErro').textContent = "Credenciais inválidas";
        });
    })

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