import { validate } from "../extensions/helpers/cpfHelper"
import { Base } from "./base"

export class Pessoa extends Base {
  constructor (cpf: string) {
    super()
    this._Cpf = cpf
  }

  private _Cpf: string

  public get Cpf() {
    return this._Cpf
  }

  public EhValido() {
    const validacaoCpf = validate(this._Cpf)
    if (!validacaoCpf) this.AdicionarErro('CPF inválido')
  }
}
