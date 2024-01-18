// // // 1 - variaveis
// // let nome = "Matheus";

// // console.log(nome)
// // // console.log("Matheus texto")

// // nome = "Mathes B";
// // console.log(nome);

// // const idade = 31;
// // console.log(idade);
// // // idade = 32; ñ posso fazer pq a const ñ muda o valor

// // console.log(typeof nome)
// // console.log(typeof idade)

// // // --------------------------------------------------------------
// // // 2 - mais sobre variaveis
// // // let 2teste = "invalido"
// // // let @teste = "invalido"
// // let a = 10, 
// //     b = 20, 
// //     c = 30;
// // console.log(a, b , c);

// // const nomecompleto = "Matheus Batista"
// // const nomeCompleto = "Matheus B"
// // console.log(nomecompleto)
// // console.log(nomeCompleto)

// // // --------------------------------------------------------------
// // // simbolos permitidos para criar var
// // let _teste = "ok"
// // let $teste = "ok"
// // console.log(_teste, $teste)

// // --------------------------------------------------------------
// // 3 - prompt
// // const age = prompt("Digite a sua idade:")
// // console.log(`Você tem ${age} anos.`)

// // --------------------------------------------------------------
// // 4 - alert
// // alert("Testando")
// // const z = 10
// // alert(`O número é ${z}`)

// // --------------------------------------------------------------
// // 5 - funções Math
// // max: encontra o maior número
// // floor: arredonda  o número para baixo
// // ceil: arredonda o número para cima
// // console.log(Math.max(5, 2, 2, 10));
// // console.log(Math.floor(5.14));
// // console.log(Math.ceil(5.14));

// // // --------------------------------------------------------------
// // // 6 - console
// // console.log("Teste!")
// // console.error("erro!")
// // console.warn("aviso!")

// // // --------------------------------------------------------------
// // // 7 - if
// // const m = 10
// // if (m > 5) {
// //   console.log("M é maior que 5")
// // }

// // const user = "João"
// // if (user === "João") {
// //   console.log("Bem vindo João!")
// // }
// // if (user === "Maria") {
// //   console.log("Bem vindo Maria!")
// // }

// // console.log(user === "João", user === "Maria")


// // // --------------------------------------------------------------
// // // 8 - else

// // const userName = "Maria"
// // if (userName === "Joao") {
// //   console.log("Bem vindo João!")
// // } else {
// //   console.log("Vc não é o Maria.")
// // }

// // const loggedIn = false;
// // if (loggedIn) {
// //   console.log("Está autenticado!")
// // } else {
// //   console.log("Não está autenticado!")
// // }

// // const q = 10
// // const z = 5
// // if (q > 5 && z > 20) {
// //   console.log("Número mais altos")
// // } else {
// //   console.log("Os números não são mais altos")
// // }

// // --------------------------------------------------------------
// // 9 - else if
// // if (1 > 2) {
// //   console.log("teste")
// // } else if (2 > 3) {
// //   console.log("teste2")
// // } else if (5 > 1) {
// //   console.log("teste3 a condição foi atendida")
// // }

// // const userNome = "Matheus";
// // const userAge = 31

// // if (userNome === "José") {
// //   console.log(`Bem vindo ${userNome}!`)
// // } else if (userNome === "Matheus" && userAge === 31) {
// //   console.log(`Bem vindo ${userNome}, vc tem ${userAge} anos!`)
// // } else {
// //   console.log("Nenhuma condição aceita!")
// // }

// // --------------------------------------------------------------
// // 10 - estrutura de repetição
// let p = 0;
// while (p < 5) {
//   console.log(`Repetindo ${p}`)
//   p = p + 1;
// }

// // loop infinito
// // let x = 10;
// // while (x > 5) {
// //   console.log(`Imprimindo ${x}`)
// //   p = p + 1;
// // }

// // --------------------------------------------------------------
// // 11 - do while
// let i = 10

// do {
//   console.log(`Valor de i: ${i}`)
//   i--; 
//   // i++ incrementa e -- decrementa
// } while (i > 1)

// --------------------------------------------------------------
// 12 - for
for (let t = 0; t < 10; t++) {
  console.log(`Repetindo algo ${t}`)
}

let r = 10
for (r; r> 0; r = r - 1) {
  console.log(`O r está diminuindo: ${r}`)
}

// --------------------------------------------------------------
// 13 - identação
for (let u = 0; u < 10; u++) {
  if (u * 2 > 10) {
    console.log(`Maior que 10! ${u}`);
  } else {
    if (u / 2 === 0) {
      console.log("deu 0!");
    }
  }
}

// --------------------------------------------------------------
// 14 - break (ele encerra)
for (let g = 20; g > 10; g--) {
  console.log(`O g é: ${g}`);

  if (g === 12) {
    console.log("Chegamos no 12!");
    break;
  }
}

// --------------------------------------------------------------
// 15 - continue (ele continua para o proximo)
for (s = 0; s < 10; s++) {
  if (s % 2 === 0) {
    console.log("Número par!");
    continue;
  }
  console.log(s);
}

// --------------------------------------------------------------
// 16 - switch
const job = "asd"
switch(job) {
  case "Programador":
    console.log("Você é um programdor")
    break
  case "Advogado":
    console.log("Você é um advogado")
    break
  case "Engenheiro":
    console.log("Você é um engenheiro")
    break
  default:
    console.log("Profissão não encontrada")
}

// --------------------------------------------------------------
// switch "errado" não faça
const l = 100;

switch (l) {
  case 200:
    console.log("L é 200!");
  case 100:
    console.log("L é 100!");
  case 10:
    console.log("L é 10!");
  default:
    console.log("L não foi encontrado");
}