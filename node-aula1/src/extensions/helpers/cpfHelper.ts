import { somenteNumeros } from "./stringHelper"

export function validate(cpf: string): boolean {
  let soma: number = 0
  let primeiroDigito: number = 0
  let segundoDigito: number = 0
  
  if (!cpf) return false

  const cpfNumeros = somenteNumeros(cpf)
  if (cpfNumeros.length != 11 ) return false

  if (validaNumerosRepetidos(cpfNumeros)) return false

  const primeiroDigitoDigitado = parseInt(cpfNumeros.substring(9, 10))
  const segundoDigitoDigitado = parseInt(cpfNumeros.substring(10, 11))

  for (let i = 1; i <= 9; i++) {
    const multiplicadorDigito = (11 - i)
    soma = soma + parseInt(cpfNumeros.substring(i - 1, i)) * multiplicadorDigito
  }
  primeiroDigito = calcularDigitoVerificador(soma)
  if (primeiroDigitoDigitado !== primeiroDigito) return false

  soma = 0
  for (let i = 1; i <= 10; i++) {
    const multiplicadorDigito = (12 - i)
    soma = soma + parseInt(cpfNumeros.substring(i - 1, i)) * multiplicadorDigito
  }
  segundoDigito = calcularDigitoVerificador(soma)
  if (segundoDigitoDigitado === segundoDigito) return true

  return false
}

function calcularDigitoVerificador(resultadoSoma: number): number {
  const restoParaDigito = resultadoSoma % 11
  if (restoParaDigito < 2) return 0 
  return (11 - restoParaDigito)
}

function validaNumerosRepetidos(cpf: string) : boolean {
  return [...cpf].every(c => c === cpf[0])
}
