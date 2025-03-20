var a = 5; // escopo global
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