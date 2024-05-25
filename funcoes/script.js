function logcurso(){
  const nome = 'JavaScript'
  const horas = '40 horas'
  console.log(nome, horas)
}
logcurso()

/*usa-se muito esse estilo de functions em eventos para uma ação do usuário*/


function logcurso2(nome){
  console.log(nome)
}
logcurso2('Javascript')
logcurso2('html')

/* nesse caso há um parametro(nome) e um argumento('javascript') */


function logcurso3(nome, hora){
  console.log(nome, hora, 'horas');
  return  nome;
}


const aleatoria = logcurso3('javascript', '40')

console.log(aleatoria)

/*como declarei o return com nome na function quando ponho uma constante ele me volta apenas o nome da minha function

obs: pode-se tbm passar o return como objeto abrindo chaves e colocando os parametros dentro

escopo: não há como ter acesso ao que é posto dentro de uma função apenas com um console.log() por fora dela, pra isso usa-se o return, e declarando uma const para que com o console.log() tenha agora acesso aqueles parametros da function
*/
