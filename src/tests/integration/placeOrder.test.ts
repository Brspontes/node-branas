import PlaceOrder from "../../application/usecase/place-order/placeOrder"
import CouponRepositoryMemory from "../../infra/repository/memory/couponRepositoryMemory"
import ItemRepositoryMemory from "../../infra/repository/memory/itemRepositoryMemory"
import OrderRepositoryMemory from "../../infra/repository/memory/orderRepositoryMemory"


describe('Deve realizar testes de pedido', () => {
  test('Deve fazer um pedido', () => {
    const itemRepository = new ItemRepositoryMemory()
    const orderRepository = new OrderRepositoryMemory()
    const couponRepository = new CouponRepositoryMemory()
    
    const placeOrder = new PlaceOrder(itemRepository, orderRepository, couponRepository)
    const input = {
      cpf: '420.711.218-99',
      orderItems: [
        { idItem: 1, quantity: 1 },
        { idItem: 2, quantity: 1 },
        { idItem: 3, quantity: 3 },
      ],
      coupon: 'VALE20',
      issueDate: new Date('2021-03-01T10:00:00')
    }
  
    const output = placeOrder.execute(input)
    expect(output.total).toBe(5132)
  })

  test('Deve fazer um pedido calculando o código', () => {
    const itemRepository = new ItemRepositoryMemory()
    const orderRepository = new OrderRepositoryMemory()
    const couponRepository = new CouponRepositoryMemory()
    
    const placeOrder = new PlaceOrder(itemRepository, orderRepository, couponRepository)
    const input = {
      cpf: '420.711.218-99',
      orderItems: [
        { idItem: 1, quantity: 1 },
        { idItem: 2, quantity: 1 },
        { idItem: 3, quantity: 3 },
      ],
      coupon: 'VALE20',
      issueDate: new Date('2021-03-01T10:00:00')
    }
  
    const output = placeOrder.execute(input)
    expect(output.code).toBe('202100000001')
  })
})
