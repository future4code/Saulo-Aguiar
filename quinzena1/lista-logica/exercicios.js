// // // Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const altura = Number(prompt("Digite altura do retângulo"))
  const largura = Number(prompt("Digite a largura do retângulo"))

  console.log(altura * largura)
}

// Exercício 2
function imprimeIdade() {
  const anoAtual = Number(prompt("Qual a sua idade?"))
  const AnoNascimento = Number(prompt("Em que ano você nasceu?"))

  console.log(anoAtual - AnoNascimento)
}

// Exercício 3
function calculaIMC() {
  const peso = Number(prompt("Qual o seu peso?"))
  const altura = Number(prompt("Qual a sua altura?"))

  console.log(peso / (altura * altura))
}

// Exercício 4
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual o seu nome?")
  const idade = Number(prompt("Qual a sua idade?"))
  const email = prompt("Qual o seu e-mail?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Digite sua cor favorita 1")
  const cor2 = prompt("Digite sua cor favorita 2")
  const cor3 = prompt("Digite sua cor favorita 3")

  const coresFavoritasArray = [cor1, cor2, cor3]

  console.log(coresFavoritasArray)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  const qualquerCoisa = prompt("Escreva qualquer coisa")
  const arrayMaiusculo = qualquerCoisa.toUpperCase()

  console.log(arrayMaiusculo)
}

// Exercício 7
function calculaIngressosEspetaculo() {
  const custoEspetaculo = Number(prompt("Qual é o custo do espetáculo?"))
  const valorIngresso = Number(prompt("Qual o valor do ingresso?"))

  console.log(custoEspetaculo / valorIngresso)

}

// Exercício 8
function checaStringsMesmoTamanho() {
  const string1 = prompt("Digite aqui")
  const string2 = prompt("Digite aqui")

  console.log(string1.length === string2.length)

}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  const outraString1 = prompt("Digite aqui")
  const outraString2 = prompt("Digite aqui")

  console.log(outraString1 !== outraString2)
//não consegui professor..

}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
}

// Exercício 11
function checaAnoBissexto() {
  const multiplosDe400 = Number(prompt("Digite o primeiro ano"))
  const multiplusDe4 = Number(prompt("Digite o segundo ano"))
  const demaisAnos = Number(prompt("Digite o terceiro ano"))

  const bissexto1 = (multiplosDe400 * 400)
  const bissexto2 = (multiplusDe4 * 4)
  
  console.log(bissexto1 !== bissexto2 <= demaisAnos)
  //não consegui professor..
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  const maisDe18 = prompt("Você tem mais de 18 anos?") == "sim"
  const ensinoMedio = prompt("Possui ensino médio completo?") == "sim"
  const dispDeHorario = prompt("Você possui disponibilidade de horário para aula?") == "sim"

  console.log(maisDe18&&ensinoMedio&&dispDeHorario)
}