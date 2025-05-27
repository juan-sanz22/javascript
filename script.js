// 1 exercício
function checarParidade(valor) {
    if (valor % 2 === 0) {
        console.log("Este número é par");
    } else {
        console.log("Este número é ímpar");
    }
}

checarParidade(0);
checarParidade(9);
checarParidade(0);

// 2 exercício
function operacoesMatematicas(a, b) {
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(b !== 0 ? a / b : 'Não pode ser divisível por 0');
}

operacoesMatematicas(10, 0);

// 3 exercício
for (let contador = 10; contador > 0; contador--) {
    console.log(contador);
}

// 4 exercício
let textoOriginal = "JavaScript";
let textoInvertido = textoOriginal.split("").reverse().join("");
console.log(textoInvertido);

// 5 exercício
function contarLetras(texto) {
    console.log(texto.length);
}

contarLetras("Professor");

// 6 exercício
let veiculo = {
    marca: "BMW",
    modelo: "X1",
    anoFabricacao: 2010,
}
console.log(veiculo.modelo);

// 7 exercício
function saudacao(nomeUsuario){
    console.log("Oi, " + nomeUsuario);
}
saudacao(prompt("Diga o seu nome"));

// 8 exercício
function calcularMedia(valor1, valor2, valor3){
    console.log((valor1 + valor2 + valor3) / 3);
}
calcularMedia(10, 20, 30);

// 9 exercício
for (let numeroAtual = 1; numeroAtual <= 20; numeroAtual++) {
    if (numeroAtual % 3 === 0) {
        console.log(numeroAtual + " - Múltiplo de 3");
    } else {
        console.log(numeroAtual + " - Não múltiplo de 3");
    }
}

// 10 exercício
function ehPalindromo(entrada) {
    entrada = entrada.toLowerCase();
    let invertida = entrada.split('').reverse().join('');
    return entrada === invertida;
}

console.log(ehPalindromo("arara")); 
console.log(ehPalindromo("banana"));

// 11 exercício
function identificarSinal(numeroEntrada) {
    if (numeroEntrada === 0) {
        console.log('O número é exatamente igual a zero');
    } else if (numeroEntrada < 0) {
        console.log('O número é negativo');
    } else if (numeroEntrada > 0) {
        console.log('O número é positivo');
    }
}
identificarSinal(-12);

// 12 exercício
function converterTemperaturaCelsiusParaFahrenheit() {
    console.log("Converter Temperatura");
    let celsiusInformado = prompt("Digite uma temperatura em graus Celsius:");
    console.log((celsiusInformado * 9 / 5) + 32);
}

// 13 exercício
function somarAteCem() {
    let contador = 0;
    let somaTotal = 0;

    while (contador < 100) {
        contador += 1;
        somaTotal += contador;
        console.log(somaTotal);
    }
}
somarAteCem();

// 14 exercício
function substituirCorTexto() {
    console.log("Substituir palavras Azul por Vermelho");

    let fraseUsuario = prompt('Digite uma frase ou texto com a palavra azul:');

    console.log(fraseUsuario.replace(/azul/g, "vermelho"));
}

// 21 exercício
function somarElementosLista() {
    console.log("Soma dos Elementos de um Array");

    let numerosTexto = prompt("Digite números separados por vírgula:");
    let numerosConvertidos = numerosTexto.split(",").map(Number);

    console.log("Soma:", numerosConvertidos.reduce((somaParcial, numeroAtual) => somaParcial + numeroAtual, 0));
}

// 24 exercício
function capitalizarPrimeiraLetra() {
    console.log("Capitalizar a Primeira Letra");
    let palavraInformada = prompt('Digite uma palavra:');
    console.log(palavraInformada.charAt(0).toUpperCase() + palavraInformada.slice(1));
}