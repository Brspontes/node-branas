import { somenteNumeros } from "../extensions/helpers/stringHelper"
export default class Cpf {
  private _cpf: string
  
  constructor (cpf: string ) {
    if (!this.validate(cpf)) throw new Error('CPF inválido')
    this._cpf = cpf
  }

  public get cpf(): string {
    return this._cpf
  }

  private validate(cpf: string): boolean {
    let soma: number = 0
    let primeiroDigito: number = 0
    let segundoDigito: number = 0
    
    if (!cpf) return false

    const cpfNumeros = somenteNumeros(cpf)
    if (cpfNumeros.length != 11 ) return false

    if (this.validaNumerosRepetidos(cpfNumeros)) return false

    const primeiroDigitoDigitado = parseInt(cpfNumeros.substring(9, 10))
    const segundoDigitoDigitado = parseInt(cpfNumeros.substring(10, 11))

    for (let i = 1; i <= 9; i++) {
      const multiplicadorDigito = (11 - i)
      soma = soma + parseInt(cpfNumeros.substring(i - 1, i)) * multiplicadorDigito
    }
    primeiroDigito = this.calcularDigitoVerificador(soma)
    if (primeiroDigitoDigitado !== primeiroDigito) return false

    soma = 0
    for (let i = 1; i <= 10; i++) {
      const multiplicadorDigito = (12 - i)
      soma = soma + parseInt(cpfNumeros.substring(i - 1, i)) * multiplicadorDigito
    }
    segundoDigito = this.calcularDigitoVerificador(soma)
    if (segundoDigitoDigitado === segundoDigito) return true

    return false
  }

  private calcularDigitoVerificador(resultadoSoma: number): number {
    const restoParaDigito = resultadoSoma % 11
    if (restoParaDigito < 2) return 0 
    return (11 - restoParaDigito)
  }

  private validaNumerosRepetidos(cpf: string) : boolean {
    return [...cpf].every(c => c === cpf[0])
  }
}
