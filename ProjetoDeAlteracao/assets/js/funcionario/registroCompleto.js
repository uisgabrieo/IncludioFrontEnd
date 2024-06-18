const botao = document.querySelector("#submitEmployee");

botao.addEventListener("click", function (event) {
    event.preventDefault();

    const accountData = JSON.parse(sessionStorage.getItem('accountData'));

    const dados = new FormData();

    const iDiagnostic = document.querySelector('#diagnostic').files[0];
    const iDia = document.querySelector('#dia').value;
    const iMes = document.querySelector('#mes').value;
    const iAno = document.querySelector('#ano').value;
    const iCpf = document.querySelector('#cpf').value;
    const iCountry = document.querySelector('#country').value;
    const iState = document.querySelector('#state').value;
    const iCity = document.querySelector('#city').value;
    const iDDD = document.querySelector('#ddd').value;
    const iPhone = document.querySelector('#phone').value;
    const iCep = document.querySelector('#cep').value;
    const iPhotograph = document.querySelector('#photograph').files[0];
    const iGender = document.querySelector("#gender").value;

    const diaFormatado = formatarDoisDigitos(iDia);
    const mesFormatado = formatarDoisDigitos(iMes);

    const dateOfBirth = `${diaFormatado}/${mesFormatado}/${iAno}`;

    const numberPhone = `+${iDDD} ${iPhone}`

    dados.append("diagnostic", iDiagnostic);
    dados.append("dateOfBirth", dateOfBirth);
    dados.append("cpf", iCpf);
    dados.append("country", iCountry);
    dados.append("state", iState);
    dados.append("city", iCity);
    dados.append("cep", iCep);
    dados.append("numberPhone", numberPhone);
    dados.append("photograph", iPhotograph);
    dados.append("gender", iGender);

    dados.append("completeName", accountData.completeName);
    dados.append("email", accountData.email);
    dados.append("password", accountData.password);
    dados.append("account", accountData.account);

    fetch("http://localhost:8080/api/account/employee/register", {
        method: "POST",
        body: dados
    })
        .then(response => {
            redirecionamento(response);
        })
        .catch(error => {
            console.log(error);
        });
});

function formatarDoisDigitos(numero) {
    return numero.toString().padStart(2, '0');
}

function redirecionamento(data) {
    if (data.status == 200) {
        console.log("Entrou");
        window.location.href="../pages/homeFuncionario.html";
    }
    console.log("Não entrou");
}

document.addEventListener('DOMContentLoaded', function () {
    const dia = document.getElementById('dia');
    const mes = document.getElementById('mes');
    const ano = document.getElementById('ano');

    for (let i = 1; i <= 31; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        dia.appendChild(option);
    }

    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    for (let i = 0; i < months.length; i++) {
        const option = document.createElement('option');
        option.value = i + 1;
        option.textContent = months[i];
        mes.appendChild(option);
    }

    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1900; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        ano.appendChild(option);
    }
});