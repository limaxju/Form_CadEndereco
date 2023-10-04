'use strict'; //Modo restrito
// https://viacep.com.br/
//função para limpar formulario
//Arrow Function
const limparFormulario = () =>{
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';

}
//Verifica se o CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);
//Responsavel pelo preenchimento do formulario
const preencherForumulario = (endereco) => {
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;

}
//Funcao para consumo de API da via CEP
const pesquisarCep = async() => {
    limparFormulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
    if(cepValido(cep.value)){
        const dados = await fetch(url); // esperar
        const address = await dados.json(); //retorna dados no formato JSON
        if(address.hasOwnProperty('erro')){
            alert('CEP não encontrado');
        }else{
            preencherForumulario( address );
        }
    }else{

        alert('CEP incorreto');
    }
}