const links = document.querySelectorAll('nav a')


function ativarlink(link){
  const href = link.href
  const url = document.location.href

  if(href === url){
    link.style.backgroundColor = 'black'
    link.style.color = 'white'
  }
  console.log(href)
  console.log(url)
}

links.forEach(ativarlink)