console.log('Javascript carregado');

function validaCPF(cpf) {
    return true;
}

function validacao() {
    console.log("Iniciando validação CPF");
    
    var cpf = document.getElementById('cpf_digitado').value;
    
    resultadoValidacao = validaCPF(cpf);

    if(resultadoValidacao) {
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    }
}