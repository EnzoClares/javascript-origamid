/*const elemento = document.querySelector('p')

if(elemento || document.querySelector('body')){
  console.log('verdadeiro')
}
*/

const elemento = document.querySelector('p')
const texto = elemento.innerText

if(texto.toUpperCase() === 'HTML'){
  console.log('verficado')
}
