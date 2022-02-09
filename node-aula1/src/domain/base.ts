export abstract class Base {
  constructor () {
    this.erros = []
  }

  erros: string[]

  public AdicionarErro(erro: string) {
    this.erros.push(erro)
  }
}
