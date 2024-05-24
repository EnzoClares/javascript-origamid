const nav = document.querySelector('nav');
const produtos = document.querySelector('.produtos a');

console.log(nav);
console.log(produtos);

console.log(produtos.innerHTML);
console.log(produtos.href);
console.dir(nav)

nav.style.backgroundColor = 'black'
nav.style.padding = '20px'

nav.classList.add('navegacao')
/* const não aceita mudança

let aceita mudança

manipulação do DOM, primeiro você seleciona por meio do const ou let e depois no script você consegue o manipular através de açoes*/