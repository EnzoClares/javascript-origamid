const imagens = document.querySelectorAll('#galeria ul img')

function galeriatrocar(event){
  const principal = document.querySelector('#imagem-p')
  const clicada = event.currentTarget
  principal.src = clicada.src
  principal.setAttribute('alt', clicada.getAttribute('alt'))
  console.log(principal.alt)
}

function galeriaclique(imagem){
  imagem.addEventListener('click', galeriatrocar)
}

imagens.forEach(galeriaclique)