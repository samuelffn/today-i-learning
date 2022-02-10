/* Fazendo replace nas strings */

const cpf = '123.456.789-00';
const cpfLimpo = cpf.replace(/\D/g, '');

console.log('cpf: ', cpf); //123.456.789-00
console.log('cpfLimpo: ', cpfLimpo); //12345678900

/* Setando uma máscara numa variável */
const cpf = '123.456.789-00';
const addMaskCpf = cpfLimpo.replace(
  /(\d{3})(\d{3})(\d{3})(\d{2})/,
  '$1.$2.$3-$4'
);
console.log('cpfWithMask: ', addMaskCpf); //123.456.789-00
