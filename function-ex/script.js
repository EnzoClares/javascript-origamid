/*function livro(nome, autor, ano){
  const total = 2050 - ano
  const nomemaior = nome.toUpperCase()
  const frase = nome + ' por ' + autor
  const objeto = {
    nome: nomemaior,
    total,
    frase,
  }
  return objeto;
}
*/

/*function livro(nome, autor, ano){
  objeto = {
    nome: nome.toUpperCase(),
    total: 2050 - ano,
    frase: nome + " por " + autor,
  }
  return objeto
};*/

function livro(nome, autor, ano){
  return  {
    nome: nome.toUpperCase(),
    total: 2050 - ano,
    frase: nome + " por " + autor,
  };
};
  

const livroretorno = livro('senhor dos aneis', 'J. R. R. Tricken', 1954); 

console.log(livroretorno);
