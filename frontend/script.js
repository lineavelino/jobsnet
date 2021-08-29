const validarCep = (cep) => /^[0-9]+$/.test(cep);

const cepValido = (cep) => cep.length == 8 && validarCep(cep);

const buscarCep = async () => {
    limparFormulario();
    const cep = document.getElementById('zipCode').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    if (cepValido(cep)) {
        const dados = await fetch(url);
        const endereco = await dados.json();

        if (endereco.hasOwnProperty('erro')) {
            document.getElementById('address').value = 'Cep não encontrado';
        } else {
            preencherFormulario(endereco);
        }
    } else {
        document.getElementById('address').value = 'Cep incorreto';
    }

}

const limparFormulario = (endereco) => {
    document.getElementById('address').value = "";
    document.getElementById('neighborhood').value = "";
    document.getElementById('city').value = "";
    document.getElementById('uf').value = "";
}

const preencherFormulario = (endereco) => {
    document.getElementById('address').value = endereco.logradouro;
    document.getElementById('neighborhood').value = endereco.bairro;
    document.getElementById('city').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;
}

document.getElementById('zipCode').addEventListener('blur', buscarCep)