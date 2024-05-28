const botao = document.querySelector('.botao')

function mostrar(){
  const texto = document.querySelector('.texto')
  texto.classList.toggle('ativar')  
}

botao.addEventListener('click', mostrar)


/*function coordernadamouse(event){
  const coordenada = {
    x: event.x,
    y: event.y
  }
  console.log(coordenada)
}

window.addEventListener('mousemove', coordernadamouse)
*/

function scrolltime(){
  console.log(window.screenY)
}

window.addEventListener('scroll', scrolltime)