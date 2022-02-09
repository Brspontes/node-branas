import { Pedido } from "../domain/pedido"
import { Pessoa } from "../domain/pessoa"

test('Deve retornar erro ao criar pedido com CPF inválido', () => {
  var pedido: Pedido
  pedido = new Pedido('Teste', 5, 100, new Pessoa('420.711.218-88'))

  expect(pedido.Pessoa.erros[0]).toEqual('CPF inválido')
})

test('Deve calcular valor total pedido sem desconto', () => {
  var pedido: Pedido
  pedido = new Pedido('Teste', 5, 100, new Pessoa('420.711.218-99'))

  const valorTotal = pedido.CalcularTotalPedido()

  expect(valorTotal).toEqual(500)
})

test('Deve calcular valor total pedido com desconto de 10%', () => {
  var pedido: Pedido
  pedido = new Pedido('Teste', 5, 100, new Pessoa('420.711.218-99'))

  const valorTotal = pedido.CalcularTotalPedido(10)

  expect(valorTotal).toEqual(450)
})
