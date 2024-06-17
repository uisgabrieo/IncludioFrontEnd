export function envioDados(event, email, senha, setErro) {
    event.preventDefault();

    const login = {
        email: email,
        password: senha
    };

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
        } else {
            throw new Error('Credenciais inválidas');
        }
    })
    .then(data => {
        console.log(data); 
        localStorage.setItem("accountResponse", JSON.stringify(data));
        window.location.href = '/home';
    })
    .catch(error => {
        console.log("Erro: " + error.message);
        setErro("Credenciais inválidas");
    });
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
