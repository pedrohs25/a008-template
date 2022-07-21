// OPERADORES ARITIMÉTICOS
// let saldo
// saldo = 15
// saldo = saldo + 22.40
// console.log("soma", saldo);
// saldo -= 12.34
// //saldo = saldo -12.34
// console.log("subtração", saldo);

// saldo = saldo/3
// console.log("divisão", saldo);

// saldo = saldo*3.42
// console.log("multiplicacao", saldo);

// saldo = saldo%3
// console.log("resto", saldo);


//Exercício - Replica

let saldo
saldo = 15
saldo =+ saldo + 22.40
console.log("soma", saldo);

saldo = saldo - 12.34
console.log("soma", saldo);

saldo = saldo/2
console.log("divisao", saldo);

saldo = saldo*3.42
console.log("multiplicacao", saldo);

saldo = saldo%3
console.log("resto", saldo);

//PRECEDÊNCIA MATEMÁTICA
//Exercício - Replica

const multESoma = 2*2+2;
console.log("MS1", multESoma);

const multESoma2 = 2*(2+2)
console.log("MS2", multESoma2);

//IGUAL E DIFERENTE
//Exercício - Replica

const resultado1 = 5===5
console.log("Resul1", resultado1);
const resultado2 =5!==5
console.log("Result2",resultado2);
const resultado3 = 5!== "5"
console.log("Result3",resultado3);
const resultado4 = "5"=== "cinco"
console.log("Result4", resultado4);
const resultado5 = typeof 5 ===typeof 20
console.log("Result5", resultado5);
const resultado6 = typeof "5" === typeof "cinco"
console.log("Result6",resultado6);

//MENOR E MAIOR 
const primeiroNumero = 15
const segundoNumero = 30
console.log("O primeiro número é igual o segundo?", primeiroNumero === segundoNumero);
console.log("O primeiro número é menor ou igual ao segundo?",primeiroNumero <= segundoNumero);
console.log("O primeiro número é maior que o segundo?", primeiroNumero > segundoNumero);
console.log("O primeiro número é menor que o segundo?", primeiroNumero < segundoNumero);

//LÓGICA
const a= "Quero dirigir um Celta 2012"
const b= "Sou maior de idade"
const c= "Consigo comprar um Celta por 22.000 reais"
const d= "Tenho carteira de motorista"

// Quero dirigir o Celta
// Não sou maior de idade
// Sou maior de idade e não tenho carteira de motorista
// Sou maior de idade e consigo comprar ou alugar o celta
// Sou maior de idade e tenho carteira de motorista, mas não quero dirigir o Celta 

a
!b
b && !e
b && (c || d)
(b && e) && !a


//Exercício - Replica
pergunta1 = prompt ("Qual a sua idade?")
pergunta2 = prompt ("Qual é a idade do seu melhor amigo(a)?")
