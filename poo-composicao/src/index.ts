import { Cavalo, Chachorro, Departamento, Gato, ImovelNovo, ImovelVelho, IngressoCamarote, IngressoNormal, IngressoVip, Pessoa, Universidade } from "./class";

// -- EXERCICIO 1 ---
const ing1 = new IngressoNormal().imprimeValorNormal();
const ing2 = new IngressoVip().imprimeValorNormal();
const ing3 = new IngressoCamarote().imprimeValorNormal();

// -- EXERCICIO 2 ---
const imovel1 = new ImovelNovo('Rua Xingu, 333 - São Bento, BG', 100000, 200).mostrarPreco(); // ADICIONAL DO IMOVEL NOVO
const imovel2 = new ImovelVelho('Rua Candelária, 222 - Cidade Alta, BG', 80000, 200).mostrarPreco(); // DESCONTO DO IMOVEL VELHO

// -- EXERCICIO 3 ---
const cachorro = new Chachorro('Dobermann', 'Marrom/Preto', 1, 4, 1);
cachorro.fazerBarulho();
cachorro.comer();
cachorro.dormir();
const cavalo = new Cavalo('Equus ferus', 'Morrom claro', 1.8, 420, 5);
cavalo.fazerBarulho();
cavalo.comer();
cavalo.dormir();
const gato = new Gato('Felis silvestris catus', 'Cinza', 0.5, 2, 2);
gato.fazerBarulho();
gato.comer();
gato.dormir();

// -- EXERCICIO 4 ---
const harvard = new Universidade('Harvard', 'EUA');
const pessoa1 = new Pessoa('Anderson', '16/05/1998');
const pessoa2 = new Pessoa('Eduarda', '30/09/1996');
pessoa1.cadastrarUniversidade(harvard);
pessoa2.cadastrarUniversidade(harvard);

harvard.adicionarFuncionario(pessoa1);
harvard.adicionarFuncionario(pessoa2);

// pessoa1.mostrar();
// pessoa2.mostrar();

// -- EXERCICIO 5 ---
const departamento1 = new Departamento('RH');

pessoa1.cadastrarDepartamento(departamento1);
pessoa2.cadastrarDepartamento(departamento1);

pessoa1.mostrar();
pessoa2.mostrar();

