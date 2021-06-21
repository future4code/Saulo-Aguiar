// EXERCÍCIO 01
function inverteArray(array) {
  const arrayInvertido = array.map((valor, i) => {
    return array[array.length - i]

  })
  
  return arrayInvertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  const numPar = array.filter((item) => {
    return item % 2 === 0
  })
  const NumAoQuadrado = numPar.map((item) => {
    return item ** 2

  }) 

  return NumAoQuadrado
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const numPar2 = array.filter((item) => {
    return item % 2 === 0 
  })

  return numPar2
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {

}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length  // é isso??
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {

}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  const primeirosNumPares = []
  for (let i = 0; i < n * 2; i++) {
    if (i % 2 === 0) { 
      primeirosNumPares.push(i)
  }
}
  return primeirosNumPares

}
// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
 if (a === b && b === c) {
   return "Equilátero"
 } else if (a === b || b === c || c == a) {
    return "Isósceles"
 }    else {
    return "Escaleno"
 }
} 

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {
  
}

// EXERCÍCIO 12
function filmeFavorito() {
  const filmeAstrodev = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]

  }
  return filmeAstrodev
}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
  const imprimirChamada = filmeFavorito()
  return (`Venha assistir ao filme ${imprimirChamada.nome}, de ${imprimirChamada.ano}, dirigido por ${imprimirChamada.diretor} e estrelado por ${imprimirChamada.atores[0]}, ${imprimirChamada.atores[1]}, ${imprimirChamada.atores[2]}, ${imprimirChamada.atores[3]}.`)
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const dadosRetangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: (2 * Number(lado1 + lado2)),
    area: Number(lado1 * lado2)
  }  
  return dadosRetangulo
}



// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  

// EXERCÍCIO 16A


}


// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  const novoArray = array.map((item) => {
    return item * 2
  })
  return novoArray
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  const novoArray = multiplicaArrayPor2(array)
  const novoArray2 = novoArray.map((item) => {
    return item.toString()
  })
  return novoArray2
}  


// EXERCÍCIO 17C
function verificaParidade(array) {
  const novoArray = array.map((item) => {
    if (item % 2 === 0) {
      return `${item} é par`
    } else {
      return `${item} é ímpar`
    }
  })
  return novoArray
}


// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
