const div = document.querySelector('div')
function move(event){
  div.style.top = event.y + 'px'
  div.style.left = event.x + 'px' 
}

window.addEventListener("mousemove", move )