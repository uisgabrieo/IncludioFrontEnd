export function envioDados(event, descricao, nomeCompleto, emial, setErro) {
    event.preventDefault();

    if (!(descricao, nomeCompleto, emial)) {
        setErro("Dados incompletos")
    }

    const feedback = {
        decription: descricao,
        nameComplete: nomeCompleto,
        emial: emial
    }

    fetch("http://localhost:8080/api/feedback", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(feedback)
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
    })
    .catch(error => {
        console.log("Erro: " + error.message);
        setErro("Credenciais inválidas");
    });

}