const lista = ['javascript', 'html', 'css']
const body = document.querySelector('body')

for(let index = 0; index < lista.length; index++){
  console.log(lista[index])
  body.innerHTML += '<li>' + lista[index] + '</li>'
}