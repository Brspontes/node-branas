import { Base } from './base';
import { Pessoa } from './pessoa';
export class Pedido extends Base {
  constructor (descricao: string, preco: number, quantidade: number, pessoa: Pessoa) {
    super()
    this._descricao = descricao
    this._preco = preco
    this._quantidade = quantidade
    this._pessoa = pessoa

    this._pessoa.EhValido()
  }

  private _descricao: string
  private _preco: number
  private _quantidade: number
  private _pessoa: Pessoa

  public get Descricao() {
    return this._descricao
  }

  public get Preco() {
    return this._preco
  }

  public get Quantidade() {
    return this._quantidade
  }

  public get Pessoa() {
    return this._pessoa
  }

  public get Erros() {
    return this.erros
  }

  public CalcularTotalPedido (porcentagemVoucher: number = 0): number {
    return this.AplicarDescontoVoucher((this._preco * this._quantidade), porcentagemVoucher)
  }

  private AplicarDescontoVoucher (valorTotal: number, porcentagemVoucher: number): number {
    if (porcentagemVoucher > 100 || porcentagemVoucher === 0) return valorTotal
    const valorTotalPedidoComDesconto = (valorTotal * porcentagemVoucher) / 100
    return valorTotal - valorTotalPedidoComDesconto
  }
}
