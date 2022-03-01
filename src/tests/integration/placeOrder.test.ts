import CouponRepositoryMemory from "../../infra/repository/memory/couponRepositoryMemory"
import ItemRepositoryMemory from "../../infra/repository/memory/itemRepositoryMemory"
import OrderRepositoryMemory from "../../infra/repository/memory/orderRepositoryMemory"
import PlaceOrder from "../../application/usecase/placeOrder"

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
      coupon: 'VALE20'
    }
  
    const output = placeOrder.execute(input)
    expect(output.total).toBe(4872)
  })
})
