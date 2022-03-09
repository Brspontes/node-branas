import Connection from "../../infra/database/connection"
import CouponRepositoryDatabase from "../../infra/database/couponRepositoryDatabase"
import PostgresSQLConnectionAdapter from "../../infra/database/postgresSQLConnectionAdapter"

let connection: Connection

beforeEach(() => {
  connection = new PostgresSQLConnectionAdapter()
})

test('Deve testar o repositorio de cupom', async () => {
  const couponRepository = new CouponRepositoryDatabase(connection)
  const coupon = await couponRepository.getByCode('VALE20')
  expect(coupon?.percentage).toBe(20)
})

afterEach(async () => {
  await connection.close()
})
