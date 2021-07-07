// métodos de acesso a informação privada
class Quadrado {
    constructor(base, altura){
        if (isNaN(base) || isNaN(altura)) throw "Informação não numérica";
        this.base = base;
        this.altura = altura;
        this._cor = 'blue';
        
    }
    // criando método para acessar a cor 
    get cor() {return this._cor;}
    set cor(cor) {this._cor = cor;}
}

const quadrado = new Quadrado(3,4);
console.log(quadrado.cor);
quadrado.cor = 'red';
console.log(quadrado.cor);