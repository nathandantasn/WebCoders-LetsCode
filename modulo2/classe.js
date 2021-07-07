// criando classes - classes são construtoras de objetos

class Pessoa {

    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa('Nathan', 22);
pessoa1.idade = 23;
console.log(pessoa1);

const pessoa2 = new Pessoa('Laura', 21);
console.log(pessoa2);