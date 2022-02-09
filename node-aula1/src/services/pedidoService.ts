import { Pessoa } from './../domain/pessoa';
import { Pedido } from "../domain/pedido";
import { validate } from "../extensions/helpers/cpfHelper";

export class PedidoService {
  public CriarPedido(descricao: string, quantidade: number, valor: number, cpf: string) : Pedido {
    if (quantidade <= 0 || valor <= 0) {
      var pedido: Pedido
      var pessoa: Pessoa
      pessoa = new Pessoa('')
      pedido = new Pedido('', 0, 0, pessoa)

      pedido.adicionarErro('Valor ou quantidade estão incorretos')
      return pedido
    }
    if (!validate(cpf)) {
      var pedido: Pedido
      var pessoa: Pessoa
      pessoa = new Pessoa('')
      pedido = new Pedido('', 0, 0, pessoa)

      pedido.adicionarErro('CPF inválido')
      return pedido
    }

    return new Pedido(descricao, valor, quantidade, new Pessoa(cpf))
  }
}
