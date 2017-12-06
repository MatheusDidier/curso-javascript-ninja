/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// 

var array = [1, 2, 3, 4, 5]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// 

function recebeArray(parametro){
  return parametro; 
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// 
recebeArray(array[1]);


/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
// 

function arrayPosicao(array, posicao){
  return array[posicao]; 
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// 
var array2 = [5, 4, 3, 2, 1];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// 

arrayPosicao(array2, 0);
arrayPosicao(array2, 1);
arrayPosicao(array2, 2);
arrayPosicao(array2, 3);
arrayPosicao(array2, 4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// 

  function book(parametro){
   var variavel = { Fundacao:{quantidadePaginas: 10, autor: "Isaac Asimov", editora:"aleph"}, Guia:{quantidadePaginas:20, autor: "Douglas Adams", editora: "Arco"}, Game:{quantidadePaginas:30, autor: "GEORGE", editora: "LEIA"}};
   if(parametro!= undefined){
    console.log("O livro " + parametro + " tem " + variavel[parametro].quantidadePaginas + " páginas!");
    console.log("O autor do livro " + parametro + " é " + variavel[parametro].autor);
    console.log("O livro " + parametro + " foi publicado pela editora " + variavel[parametro].editora);
    
    return variavel[parametro];
   }
    return variavel;
  }

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// 

book("Fundacao");
book("Guia");
book("Game");

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// 
FEITO NA FUNÇÃO 
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// 
FEITO NA FUNÇÃO 

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// 
FEITO NA FUNÇÃO 
