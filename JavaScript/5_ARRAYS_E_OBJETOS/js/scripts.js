// 1 - arrays
const lista = [1, 2, 3, 4, 5]
console.log(lista)
console.log(typeof lista)

const itens = [ "Raquel", true, 1, []]
console.log(itens)

// 2 - mais detalhes sobre array
const arr = ["a", "b", "c", "d", "d"]
console.log(arr[0])
console.log(arr[3])
console.log(arr[6])

// 3 - propriedades
const numbers = [5, 3, 4]
console.log(numbers.length)
console.log(numbers["length"])

const myName = "Raquel"
console.log(myName.length)

// 4 - métodos
const otherNumbers = [1, 2, 3]
const allNumbers = numbers.concat(otherNumbers)
console.log(allNumbers)

const text = "algum texto"
console.log(text.toUpperCase())
console.log(typeof text.toUpperCase)
console.log(text.indexOf("g")) // vai aparecer o numero 2, porque na palavra algum conta 0=a, 1=l e 2=g

// 5 - objeto
const person = {
  name: "Matheus",
  age: 31,
  job: "Programador",
}
console.log(person)
console.log(person.name)
console.log(person.name.length)
console.log(typeof person)

// 6 - criando e deletando propriedades
const car = {
  engine: 2.0,
  brand: 'VW',
  model: 'Tiguan',
  km: 20000,
}
console.log(car);
car.doors = 4; // com isso adicionamos um objeto
console.log(car);
delete car.km; // aqui deletamos uma propriedade do objeto
console.log(car);

// 7 - mais sobre objetos
const obj = {
  a: "teste",
  b: true,
};

console.log(obj instanceof Object);

const obj2 = {
  c: [],
};

Object.assign(obj2, obj);

console.log(obj2);

// 8 - conhecendo melhor os objetos
console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(person))
console.log(Object.entries(obj));

// 9 - Mutação
const a = {
  name: "Matheus",
};

const b = a;

console.log(a);
console.log(b);

console.log(a === b);

a.age = 31;

console.log(b);

delete b.age;

console.log(a);
console.log(b);

// 10 - loop em array
const users = ["Matheus", "João", "Pedro", "Miguel"];

for (let i = 0; i < users.length; i++) {
  console.log(`Listando usuário: ${users[i]}`);
}

// 11 - push e pop
const array = ["a", "b", "c"];

array.push("d"); // add no ultimo objeto do array

console.log(array);
console.log(array.length);

array.pop(); // remove no ultimo objeto do array

const itemRemovido = array.pop();

console.log(itemRemovido);
console.log(array);
console.log(array.length);

array.push("Dá", "Para", "Inserir", "Vários");
console.log(array);

// 12 - shift e unshift
const letters = ["a", "b", "c"]
const letter = letters.shift() // remove o primeiro objeto do array
console.log(letter)
console.log(letters)

letters.unshift("estou adicionando", "mais de 1") // add o primeiro objeto do array
letters.unshift("adiciona o primeiro")
console.log(letters)

// 13 - indexof e lastindexof
const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"];

console.log(myElements.indexOf("Maçã"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Abacate")]);

console.log(myElements.lastIndexOf("Abacate"));

console.log(myElements.lastIndexOf("Maçã"));

console.log(myElements.indexOf("Mamão"));
console.log(myElements.lastIndexOf("Mamão"));

// 14 - slice
const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2, 4);
console.log(subArray);

const subArray2 = testeSlice.slice(2, 4 + 1);
console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20);
console.log(subArray3);

// trazendo do 2 em diante
const subArray4 = testeSlice.slice(2);
console.log(subArray4);

// 15 - foreach
const nums = [1, 2, 3, 4, 5];

nums.forEach((num) => {
  console.log(`O número atual é: ${num}`);
});

const posts = [
  { title: "Primeiro post", category: "PHP" },
  { title: "Segundo post", category: "JavaScript" },
  { title: "Terceiro post", category: "Python" },
];

posts.forEach((post) => {
  console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
});

