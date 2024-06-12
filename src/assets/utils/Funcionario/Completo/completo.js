export function preencherData() {
    const dia = document.getElementById("dia");
    const mes = document.getElementById("mes");
    const ano = document.getElementById("ano");

    for (let i = 1; i <= 31; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        dia.appendChild(option);
    }

    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    for (let i = 0; i < months.length; i++) {
        const option = document.createElement("option");
        option.value = i + 1;
        option.textContent = months[i];
        mes.appendChild(option);
    }

    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1900; i--) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        ano.appendChild(option);
    }
}

export function envioDados() {
    
}
