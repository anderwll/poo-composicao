// -- EXERCICIO 1 ---
class Ingresso {
    protected valorReais: number;

    constructor() {
        this.valorReais = 50;
    };

    imprimeValorNormal(): void {};
};

export class IngressoNormal extends Ingresso {
    imprimeValorNormal() {
        console.log(`O valor do Ingresso Normal é de R$${this.valorReais}`);
    };
};

export class IngressoVip extends Ingresso {
    imprimeValorNormal() {
        console.log(`O valor do Ingresso Vip é de R$${(this.valorReais + 50).toFixed(2)}`);
    };
};

export class IngressoCamarote extends Ingresso {
    imprimeValorNormal() {
        console.log(`O valor do Ingresso Camarote é de R$${(this.valorReais + 100).toFixed(2)}`);
    };
}

// -- EXERCICIO 2 ---
class Imovel {
    protected endereco: string;
    protected preco: number;

    constructor(endereco: string, preco: number) {
        this.endereco = endereco;
        this.preco = preco;        
    };

    mostrarPreco(valor: number): void {}; 
};

export class ImovelNovo extends Imovel {
    mostrarPreco(adicional: number): void {
        console.log(`O valor do Imovel Novo é de R$${(this.preco + adicional).toFixed(2)}`);
    };
};

export class ImovelVelho extends Imovel {
    mostrarPreco(desconto: number): void {
        console.log(`O valor do Imovel Velho é de R$${(this.preco - desconto).toFixed(2)}`);
    };
};

// -- EXERCICIO 3 ---
class Animal {
    protected especicie: string;
    protected cor: string;
    protected altura: number;
    protected peso: number;
    protected idade: number;
    
    constructor(especicie: string, cor: string, altura: number, peso: number, idade: number) {
        this.especicie = especicie;
        this.cor = cor;
        this.altura = altura;
        this.peso = peso;
        this.idade = idade;
    };

    fazerBarulho(): void {};
    comer(): void {
        console.log('Comendo...');
        
    };
    dormir(): void {
        console.log('Dormindo...');
        
    };
};

export class Chachorro extends Animal {
    fazerBarulho(): void {
        console.log('Au au au au');
        
    };
};

export class Cavalo extends Animal {
    fazerBarulho(): void {
        console.log('Hiiiinn in in');
        
    };
};

export class Gato extends Animal {
    fazerBarulho(): void {
        console.log('Miauuuu miauuuu');
        
    };
};

// -- EXERCICIO 4 ---
export class Universidade {
    private nome: string;
    private local: string;
    private funcionarios: Array<Pessoa>

    
    get buscarNome() : string {
        return this.nome
    };
    

    constructor(nome: string, local: string){
        this.nome = nome;
        this.local = local;
        this.funcionarios = [];
    };

    adicionarFuncionario(novaPessoa: Pessoa) {
        this.funcionarios.push(novaPessoa);
        console.log(`Funcionário novo cadastrado!`);  
    }
};

export class Pessoa {
    private nome: string;
    private dataNascimento: string;
    private universidade?: Universidade

    constructor(nome: string, dataNascimento: string){
        this.nome = nome;
        this.dataNascimento = dataNascimento;
    };

    cadastrarUniversidade(novaUniversidade: Universidade) {
        this.universidade = novaUniversidade;
        console.log('Universidade cadatrada!'); 
    }

    mostrar() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Data de Nascimento: ${this.dataNascimento}`);
        console.log(`Universidade: ${this.universidade?.buscarNome}`);
    };
};

// -- EXERCICIO 5 ---