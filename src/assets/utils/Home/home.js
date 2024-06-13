export function log() {
    const dados = (localStorage.getItem("dadosCompletos"));
    const data = JSON.parse(localStorage.getItem("data"));

    console.log(data)
    console.log(dados)
}