// encapsulando nosso código

class Quadrado {
    constructor(base, altura){
        if (isNaN(base) || isNaN(altura)) throw "Informação não numérica";
        this.base = base;
        this.altura = altura;
        let cor = 'blue';
        // criando método para acessar a cor 
        this.getCor = () => {return cor;};
    }
}

const quadrado = new Quadrado(3,4);
console.log(quadrado.getCor());

// factory function = criar uma função para gente ter acesso aos atributos

function criaQuadrado(base, altura){
    let cor = 'blue';
    return {
        base,
        altura,
        getCor : function(){return cor;}
    }
}

const quadrado2 = criaQuadrado(3,4);
quadrado2.cor = 'red';
console.log(quadrado2.getCor());
