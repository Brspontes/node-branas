import PlaceOrder from "../../application/usecase/place-order/placeOrder"
import CouponRepository from "../../domain/repositories/couponRepository"
import ItemRepository from "../../domain/repositories/itemRepository"
import OrderRepository from "../../domain/repositories/orderRepository"
import Connection from "../../infra/database/connection"
import CouponRepositoryDatabase from "../../infra/database/couponRepositoryDatabase"
import PostgresSQLConnectionAdapter from "../../infra/database/postgresSQLConnectionAdapter"
import ItemRepositoryDatabase from "../../infra/repository/database/itemRepositoryDatabase"
import CouponRepositoryMemory from "../../infra/repository/memory/couponRepositoryMemory"
import ItemRepositoryMemory from "../../infra/repository/memory/itemRepositoryMemory"
import OrderRepositoryMemory from "../../infra/repository/memory/orderRepositoryMemory"


describe('Deve realizar testes de pedido', () => {

  let connection: Connection
  let itemRepository: ItemRepository
  let orderRepository: OrderRepository
  let couponRepository: CouponRepository
  
  beforeEach(() => {
    connection = new PostgresSQLConnectionAdapter()
    itemRepository = new ItemRepositoryDatabase(connection)
    orderRepository = new OrderRepositoryMemory()
    couponRepository = new CouponRepositoryDatabase(connection)
  })

  test('Deve fazer um pedido', async () => {
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
  
    const output = await placeOrder.execute(input)
    expect(output.total).toBe(4872)
  })

  test('Deve fazer um pedido calculando o código', async () => {
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
  
    const output = await placeOrder.execute(input)
    expect(output.code).toBe('202100000001')
  })

  afterEach(async () => {
    await connection.close()
  })
})
