// 1 - movendo-se no DOM
console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes);
console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2 - selecionando por tag (metodo getElementsByTagName)
const listItens = document.getElementsByTagName("li");
console.log(listItens);

// 3 - selecionando elemento por id (metodo getElementById)
const title = document.getElementById("title");
console.log(title);

// 4 - selecionando elementos por classe (metodo getElementsByClassName)
const products = document.getElementsByClassName("product")
console.log(products)

// 5 - selecionando os elementos por CSS (por meio de um seletor)
const productsQuery = document.querySelectorAll(".product");
console.log(productsQuery);

const mainContainer = document.querySelector("#main-container");
console.log(mainContainer);

// 6 - insertBefore (cria um elemento antes do outro elemento)
const p = document.createElement("p");
const header = title.parentElement;
header.insertBefore(p, title);

// 7 - appendChild (adiciona um elemento dentro de outro, será o último elemento)
const navLinks = document.querySelector("nav ul");
const li = document.createElement("li");
navLinks.appendChild(li);

// 8 - replaceChild (para trocar um elemento)
const h2 = document.createElement("h2");
h2.textContent = "Meu novo título!";
header.replaceChild(h2, title);

// 9 - createTextNode
const myText = document.createTextNode("Agora vamos colocar mais um título");
const h3 = document.createElement("h3");
h3.appendChild(myText);
mainContainer.appendChild(h3);

// 10 - trabalhando com atributos
const firstLink = navLinks.querySelector("a");
console.log(firstLink);

firstLink.setAttribute("href", "https://horadecodar.com.br");
console.log(firstLink.getAttribute("href"));

firstLink.setAttribute("target", "_blank");

// 11 - altura e largura
const footer = document.querySelector("footer");

console.log(footer.offsetWidth); // considera com borda
console.log(footer.offsetHeight);

console.log(footer.clientWidth); // considera sem borda
console.log(footer.clientHeight);

// 12 - posicao do elemento (conseguimos acessar todas as propriedades do elemento)
const product1 = products[0];
console.log(product1.getBoundingClientRect());

// 13 - CSS com JS
mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#333";
mainContainer.style.paddingBottom = "15px";

// 14 - Alterando estilos de varios elementoss
for (const li of listItens) {
  li.style.backgroundColor = "red";
}
