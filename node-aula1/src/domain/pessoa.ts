export class Pessoa {

  constructor (cpf: string) {
    this._Cpf = cpf
  }

  private _Cpf: string

  public get Cpf() {
    return this._Cpf
  }
}
