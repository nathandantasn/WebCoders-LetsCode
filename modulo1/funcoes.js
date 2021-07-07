// declarando funções

function escreva(texto){
    console.log(texto);
}

// chamando a função
escreva('Olá, meu nome é Nathan');
escreva('Como você está?');

function somar (a, b){
    return a + b;
}

let resultado = somar(1,3);
console.log(resultado);

// salvando a função na variável
const somar1 = function(a,b){return a+b;}
console.log(somar1(1,3));

// outra forma de salvar função em variavel(função de flecha)

const somars = (a,b) => a+b;
console.log(somars(1,3));

// funções de alta ordem

const subtrair = (a, b) => a - b;
const aplicaOperacao = (a, b, operacao) => operacao(a,b);

// função passada como parâmetro
let resultado2 = aplicaOperacao(4,2, subtrair);
console.log(resultado2);

// função para receber um número como parâmetro (x) e somar (y)
const somarX = (x) => (y) => x + y;
const somar2 = somarX(2);
// poderia ter feito
const somar3 = somarX(3);

console.log(somar3(5));

// função MAP: passa a função informada como parâmetro para cada item do vetor

const vetor = ["10", "20", "30"];
const stringToInt = (x) => parseInt(x);
const vetor2 = vetor.map(stringToInt);

console.log(vetor2);

const vetor3 = vetor2.map(x => x*x);
console.log(vetor3);

// função filter

const vetor5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = vetor5.filter(x => x%2 === 0);

console.log(pares);

// aplicação do reduce
const vetor6 = [1, 2, 3, 4, 5, 6];
// reduce recebe dois parametros
const soma = vetor6.reduce((estado, item ) => estado*item);

console.log(soma);

// aplicando reduce em matrizes para fazer soma das linhas

const matriz = [
    [1,2,3,4,5,6],
    [6,5,4,3,2,1],
    [6,1,5,2,3,4]
];

const somaColuna = (estado, item) => {
    return [estado[0] + item[0] + item[1], estado[1] + item[2] + item[3], estado[2] + item[2]+item[3]];
}

const vetor10 = matriz.reduce(somaColuna[0,0,0]);
console.log(vetor10);