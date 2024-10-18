/**
 * *Tipos de dados
 * !Todos são primitivos exceto os objetos
 */
var nome = "Lucas"; //String
var idade = 28; // Number
var possuiFaculdade = true; // Boolean
var time; // undefined;
var comida = null; // Null
var simbolo = Symbol(); // Symbol
var novoObjeto = {}; // Obejct

// ? typeof => verifica o tipo da variavel
console.log(typeof simbolo);

// ? Concatenar string = somar String
var sobrenome = "Tenório";
console.log(nome + " " + sobrenome);
var nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);
// ? somar numeros e string
var gols = 1000;
console.log("Romário fez " + gols + " gols");
