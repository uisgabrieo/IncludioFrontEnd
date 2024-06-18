const botao = document.querySelector("#submitEmployer");

botao.addEventListener("click", function(event) {
    event.preventDefault();

    const accountData = JSON.parse(sessionStorage.getItem('accountData'));
    
    const iDia = document.querySelector("#dia").value;
    const iMes  = document.querySelector("#mes").value;
    const iAno = document.querySelector("#ano").value;
    const iCompanyName = document.querySelector('#companyName').value;
    const iCnpj = document.querySelector('#cnpj').value;
    const iLogo = document.querySelector('#logo').files[0];
    const iCompanyEmail = document.querySelector('#companyEmail').value;
    const iWebsite = document.querySelector('#website').value;
    const iCountry = document.querySelector('#country').value;
    const iState = document.querySelector('#state').value;
    const iCity = document.querySelector('#city').value;
    const iDDD = document.querySelector('#ddd').value;
    const iPhone = document.querySelector('#phone').value;
    const iCep = document.querySelector('#cep').value;
    const iDescription = document.querySelector('#description').value;

    function formatarDoisDigitos(numero) {
        return numero.toString().padStart(2, '0');
    }

    const diaFormatado = formatarDoisDigitos(iDia);
    const mesFormatado = formatarDoisDigitos(iMes);

    const dateOfBirth = `${diaFormatado}/${mesFormatado}/${iAno}`;
    const numberPhone = `+${iDDD} ${iPhone}`

    const registrationData = {
        employerDTO: {
            logo: iLogo? iLogo.name : null,
            createdAt: dateOfBirth,
            cnpj: iCnpj,
            companyName: iCompanyName,
            companyEmail: iCompanyEmail,
            website: iWebsite,
            country: iCountry,
            state: iState,
            city: iCity,
            cep: iCep,
            numberPhone: numberPhone,
            description: iDescription
        },
        accountDTO: {
            completeName: accountData.completeName,
            email: accountData.email,
            password: accountData.password,
            account: accountData.account
        }
    };

    fetch("http://localhost:8080/api/account/employer/register", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(registrationData)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Erro:', error);
        });
});

document.addEventListener('DOMContentLoaded', function() {
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