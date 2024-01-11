//  comentário de uma linha só
/* esse pode comentar várias linhas */

// 1 - Number
// usando o typeof eu imprimo o tipo dele number
console.log(typeof 2)
console.log(typeof 5.14)
console.log(typeof -127)

// 2 - Operações Artimeticas
console.log(2 + 4 )
console.log(10 - 5)
console.log(2 * 5)
console.log(15/3)
console.log(5+4*2)

// 3 - Special Numbers
console.log(typeof Infinity)
console.log(typeof infinity)
console.log(typeof -Infinity)
console.log(12*"asd")
console.log(typeof Nan)

// 4 - Strings
console.log("Um texto")
console.log('Mais um texto')
console.log('13')
console.log(typeof "Um texto")
console.log(typeof 'Mais um texto')

// 5 - Simbolos especiais em string
console.log("Testando a \n quebra de linha")
console.log("Testando a \nquebra de linha")
console.log("Espaçamento \t de tab")

// 6 - Concatenação
console.log("Oi, " + "tudo " + "bem?" )
console.log(`Testando ` + `com` + `a crase`)

// 7 - Interpolação (template Strings, permite escrever tudo na mesma string)
console.log(`A soma de 2 + 2 é: ${2+2}`)
console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`)

// 8 - Booleans (qualquer comparação, utilizando os sinais >,<, ==, resulta em booleano)
console.log(true)
console.log(false)
console.log(5>20)
console.log(30>10)

// 9 - Comparações
// maior ou menor : > e <
// maior ou igual e menor ou igual : >= e <=
// igual : ==
// diferente : !=
// identico : ===
console.log(5 < 5)
console.log(5 <= 5)
console.log(5 == 5)
console.log(5 != 5)
console.log(5 === 5)

// 10 - Identico
console.log(9 == "9")
console.log(9 + "9")
console.log(9 === "9") 
// dessa forma sabemos que 9 é number e "9" é string, são diferentes
console.log(9 != "9")
console.log(9 !== "9")


//  11 - Operadores lógicos
// && - AND - true apenas se os 2 lados forem verdadeiros
// || - OR - para ser true, um lado com true é suficiente
// ! - NOT - este operador inverte a comparação
console.log(true && true)
console.log(true && false)
console.log(5 > 2 && 2 < 10)
console.log(5 > 2 && "Matheus" === '1')
console.log(5 > 2 || "Matheus" === '1')
console.log(5 < 2 || 5 > 100)
console.log(!true)
console.log(!5 > 2)

// 12 - Empety values
console.log(typeof null, typeof undefined)
console.log(null === undefined)
console.log(null == undefined)
console.log(null == false)
console.log(undefined == false)

// 13 - Conversão de tipo automatica
// 5*null => 0
// "5"-3 => 2
// "5"+1 => 51
// "a"*"b" => NaN
console.log(5 * null)
console.log("teste" * "opa")
console.log("10" + 1)
console.log("10" - 1)
