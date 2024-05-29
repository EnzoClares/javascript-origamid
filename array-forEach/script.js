const lista = ['javascript', 'html', 'css', 'php', 'c+']
const body = document.querySelector('body')

function adicionaritem(item){
  body.innerHTML +='<li>'+item+'</li>'
}

lista.forEach(adicionaritem)