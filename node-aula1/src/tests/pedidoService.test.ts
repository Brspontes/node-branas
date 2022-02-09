import { PedidoService } from './../services/pedidoService';

test('Deve retornar erro ao criar pedido com CPF inválido', () => {
  var pedidoService: PedidoService
  pedidoService = new PedidoService()

  const pedido = pedidoService.CriarPedido('', 5, 100, '420.711.218-88')
  expect(pedido.erros[0]).toEqual('CPF inválido')
})

test('Deve retornar erro ao criar pedido com quantidade ou valor inválidos', () => {
  var pedidoService: PedidoService
  pedidoService = new PedidoService()

  const pedido = pedidoService.CriarPedido('', 0, 0, '420.711.218-99')
  expect(pedido.erros[0]).toEqual('Valor ou quantidade estão incorretos')
})

