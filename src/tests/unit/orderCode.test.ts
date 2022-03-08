import OrderCode from "../../domain/entities/orderCode"

test('Deve criar o código do pedido', () => {
  const date = new Date('2021-03-01T10:00:00')
  const sequence = 1
  const orderCode = new OrderCode(date, sequence)

  expect(orderCode.value).toBe('202100000001')
})
