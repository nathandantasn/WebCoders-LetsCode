let vetor = [10, 20, 30, 40];

let idade = 10;

const soma = (x) => (y) => x+ y;

console.log(vetor.map(soma(10)))

/*for (let i =0; i < vetor.length; i++){
    vetor[i] +=3;
}
console.log(vetor);
*/
