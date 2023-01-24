"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Departamento = exports.Pessoa = exports.Universidade = exports.Gato = exports.Cavalo = exports.Chachorro = exports.ImovelVelho = exports.ImovelNovo = exports.IngressoCamarote = exports.IngressoVip = exports.IngressoNormal = void 0;
// -- EXERCICIO 1 ---
class Ingresso {
    constructor() {
        this.valorReais = 50;
    }
    ;
    imprimeValorNormal() { }
    ;
}
;
class IngressoNormal extends Ingresso {
    imprimeValorNormal() {
        console.log(`O valor do Ingresso Normal é de R$${this.valorReais}`);
    }
    ;
}
exports.IngressoNormal = IngressoNormal;
;
class IngressoVip extends Ingresso {
    imprimeValorNormal() {
        console.log(`O valor do Ingresso Vip é de R$${(this.valorReais + 50).toFixed(2)}`);
    }
    ;
}
exports.IngressoVip = IngressoVip;
;
class IngressoCamarote extends Ingresso {
    imprimeValorNormal() {
        console.log(`O valor do Ingresso Camarote é de R$${(this.valorReais + 100).toFixed(2)}`);
    }
    ;
}
exports.IngressoCamarote = IngressoCamarote;
// -- EXERCICIO 2 ---
class Imovel {
    constructor(endereco, preco) {
        this.endereco = endereco;
        this.preco = preco;
    }
    ;
    mostrarPreco(valor) { }
    ;
}
;
class ImovelNovo extends Imovel {
    mostrarPreco(adicional) {
        console.log(`O valor do Imovel Novo é de R$${(this.preco + adicional).toFixed(2)}`);
    }
    ;
}
exports.ImovelNovo = ImovelNovo;
;
class ImovelVelho extends Imovel {
    mostrarPreco(desconto) {
        console.log(`O valor do Imovel Velho é de R$${(this.preco - desconto).toFixed(2)}`);
    }
    ;
}
exports.ImovelVelho = ImovelVelho;
;
// -- EXERCICIO 3 ---
class Animal {
    constructor(especicie, cor, altura, peso, idade) {
        this.especicie = especicie;
        this.cor = cor;
        this.altura = altura;
        this.peso = peso;
        this.idade = idade;
    }
    ;
    fazerBarulho() { }
    ;
    comer() {
        console.log('Comendo...');
    }
    ;
    dormir() {
        console.log('Dormindo...');
    }
    ;
}
;
class Chachorro extends Animal {
    fazerBarulho() {
        console.log('Au au au au');
    }
    ;
}
exports.Chachorro = Chachorro;
;
class Cavalo extends Animal {
    fazerBarulho() {
        console.log('Hiiiinn in in');
    }
    ;
}
exports.Cavalo = Cavalo;
;
class Gato extends Animal {
    fazerBarulho() {
        console.log('Miauuuu miauuuu');
    }
    ;
}
exports.Gato = Gato;
;
// -- EXERCICIO 4 ---
class Universidade {
    get buscarNome() {
        return this.nome;
    }
    ;
    constructor(nome, local) {
        this.nome = nome;
        this.local = local;
        this.funcionarios = [];
        this.departamentos = [];
    }
    ;
    adicionarFuncionario(novaPessoa) {
        this.funcionarios.push(novaPessoa);
        console.log(`Funcionário novo cadastrado! 🎉`);
    }
    ;
    adicionarDepartamento(novoDepartamento) {
        this.departamentos.push(novoDepartamento);
        console.log(`Departamento adicionado com sucesso! 🎉`);
    }
}
exports.Universidade = Universidade;
;
class Pessoa {
    constructor(nome, dataNascimento) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
    }
    ;
    cadastrarUniversidade(novaUniversidade) {
        this.universidade = novaUniversidade;
        console.log('Universidade cadatrada! 🎉');
    }
    cadastrarDepartamento(novoDepartamento) {
        this.departamento = novoDepartamento;
        console.log('Departamento cadatrado! 🎉');
    }
    mostrar() {
        var _a, _b;
        console.log(`Nome: ${this.nome}`);
        console.log(`Data de Nascimento: ${this.dataNascimento}`);
        console.log(`Universidade: ${(_a = this.universidade) === null || _a === void 0 ? void 0 : _a.buscarNome}`);
        console.log(`Departamento: ${(_b = this.departamento) === null || _b === void 0 ? void 0 : _b.buscarNome}`);
    }
    ;
}
exports.Pessoa = Pessoa;
;
// -- EXERCICIO 5 ---
class Departamento {
    get buscarNome() {
        return this.nome;
    }
    constructor(nome) {
        this.nome = nome;
    }
    ;
}
exports.Departamento = Departamento;
