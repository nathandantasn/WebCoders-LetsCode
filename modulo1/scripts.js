// estruturas condicionais, condição recebendo em variável, if, else if, else e switch
console.log('Condicionais na variável');
let numero = 3;
let paridade = numero % 2 == 0 ? 'par' : 'ímpar';
console.log(paridade)
console.log('Condicionais if e else');
if (numero > 1){
    console.log('Maior')
} else {
    console.log('Menor')
}

// estruturas de laço de repetição while, do while e for
console.log('Laços de repetição');
let contador = 0;
console.log('Usando While');
while (contador < 3){
    console.log(contador);
    contador++;
}
console.log('Usando for');
for (let i=0; i < 3; i++){
    console.log(i);
}

// estruturas de vetores e matrizes
console.log('Imprimindo posição de vetor');
let vetor = [10, 20, 30, 40, 50];
console.log(vetor[2]);
console.log('Imprimindo posição de vetor como String no mesmo vetor');
vetor[2] = '30'; // pode mudar para um tipo não numérico
console.log(vetor[2]);

console.log('Criando vetores vazios e recebendo elementos');
let vetor1 = [];
for(let i=0; i<10; i++){
    vetor1.push(i);
}
console.log(vetor1);

console.log('Imprimindo vetores');
let vetor2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
for(let i = 0; i < vetor2.length; i++){
    console.log(vetor2[i]);
}

console.log('Imprimindo vetores usando "for of"');
for(let numero of vetor2){
    console.log(numero);
}
console.log('Imprimindo vetores usando "for in"');
for(let indice in vetor2){
    console.log(vetor2[indice]);
}

// criando uma matriz

console.log('Declarando uma matriz');
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
console.log(matriz);
console.log('imprimindo elementos de uma matriz');
for (let linha of matriz){
    for (let elemento of linha){
        console.log(elemento);
    }
}
