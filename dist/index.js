"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_1 = require("./class");
// -- EXERCICIO 1 ---
const ing1 = new class_1.IngressoNormal().imprimeValorNormal();
const ing2 = new class_1.IngressoVip().imprimeValorNormal();
const ing3 = new class_1.IngressoCamarote().imprimeValorNormal();
// -- EXERCICIO 2 ---
const imovel1 = new class_1.ImovelNovo('Rua Xingu, 333 - São Bento, BG', 100000).mostrarPreco(2000); // ADICIONAL DO IMOVEL NOVO
const imovel2 = new class_1.ImovelVelho('Rua Candelária, 222 - Cidade Alta, BG', 80000).mostrarPreco(2000); // DESCONTO DO IMOVEL VELHO
// -- EXERCICIO 3 ---
const cachorro = new class_1.Chachorro('Dobermann', 'Marrom/Preto', 1, 4, 1);
cachorro.fazerBarulho();
cachorro.comer();
cachorro.dormir();
const cavalo = new class_1.Cavalo('Equus ferus', 'Morrom claro', 1.8, 420, 5);
cavalo.fazerBarulho();
cavalo.comer();
cavalo.dormir();
const gato = new class_1.Gato('Felis silvestris catus', 'Cinza', 0.5, 2, 2);
gato.fazerBarulho();
gato.comer();
gato.dormir();
// -- EXERCICIO 4 ---
const harvard = new class_1.Universidade('Harvard', 'EUA');
const pessoa1 = new class_1.Pessoa('Anderson', '16/05/1998');
const pessoa2 = new class_1.Pessoa('Eduarda', '30/09/1996');
pessoa1.cadastrarUniversidade(harvard);
pessoa2.cadastrarUniversidade(harvard);
harvard.adicionarFuncionario(pessoa1);
harvard.adicionarFuncionario(pessoa2);
pessoa1.mostrar();
pessoa2.mostrar();
// -- EXERCICIO 5 ---
