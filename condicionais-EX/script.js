const botao = document.querySelector('button')

function somar(){
  const div = document.querySelector('div')
  const total = Number(div.innerHTML) + 1
  if(total < 10){
  div.innerHTML = total
  console.log(total)}
  else{
    console.log('div maior ou igual a 10')
  }
}

if(botao){
  botao.addEventListener('click', somar)
}