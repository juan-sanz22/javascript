function calcular (n1,n2){
    const soma = n1 + n2;
    const divisao = n1 / n2;
    const multiplicacao = n1 * n2;
    const subtracao = n1 - n2;  

    console.log (soma);
    console.log (subtracao);
    console.log (multiplicacao);
    console.log (divisao);
}

let n1 = parseFloat(prompt("digite o seu primeiro número"));
let n2 = parseFloat(prompt("digite o seu segundo número"));
calcular (n1,n2);