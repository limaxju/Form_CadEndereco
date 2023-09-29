'use restrict'; //modo restrito
//https://viacep.com.br/

//limpar formulário 
//arrow function
const limparFormulario = () =>{
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value ='';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}
//verifica se CEP é válido
const eNumero = (numero) => /[0-9]+$/.test(numero);