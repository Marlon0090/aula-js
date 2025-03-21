/*var a = 5; // escopo global
var b = 10; // escopo global

function sum(a, b) {
    let soma = a + b;
    return soma;
}

console.log(sum(a, b)); 


const sub = () => {

    return 5-3;

}

console.log(sub)

function Pessoa (a,b){ 
    this.nome = a;
    this.idade = b;
}

const x = new Pessoa ('Marlon', 24); 
const y = new Pessoa ('Vinicius', 21) 
console.log(x);
console.log(y);


const array = [2, 3, 4, 5, 6];

array.forEach(item => {
    if (item % 2 === 0) {
        console.log(`Número ${item} é par`);
    } else {
        console.log(`Número ${item} é ímpar`);
    }
});


function Carro (a,b,c,d,e){
    this.carro = a;
    this.cor = b;
    this.ano = c;
    this.valor = d;
    this.popular = e
}

var carro = new Carro('Camaro', 'Amarelo', 2021, 130000, false)
console.log(carro)
*/

var lista = ["Vinicius", "Marlon", "imolene", "patrick"];

console.log(lista); // Imprime todo o array

console.log(lista[3]); // Imprime "patrick", que está no índice 3

lista.push("piaget"); // Adiciona "piaget" no final do array
console.log(lista); // Agora a lista tem o novo item ["Vinicius", "Marlon", "imolene", "patrick", "piaget"]
