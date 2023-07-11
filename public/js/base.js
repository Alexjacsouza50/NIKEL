const nome ="Marcelo Eltz"
let nome2 =""

console.log("Valor incial:")
console.log(nome2);

nome2 ="Pedro Silva";

console.log("Valor alterado:");
console.log(nome2);

function alterarNome() {
   nome2 ="Maria Silva";
   console.log("Valor alterado:")
console.log(nome2)
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}
    



recebeEalteraNome("João Silva Pereira")
recebeEalteraNome("Maria Silva");

//alterarNome();
