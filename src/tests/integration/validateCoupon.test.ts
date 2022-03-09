import ValidateCoupon from "../../application/usecase/validate-coupon/validateCoupon"
import CouponRepository from "../../domain/repositories/couponRepository"
import Connection from "../../infra/database/connection"
import CouponRepositoryDatabase from "../../infra/database/couponRepositoryDatabase"
import PostgresSQLConnectionAdapter from "../../infra/database/postgresSQLConnectionAdapter"
import CouponRepositoryMemory from "../../infra/repository/memory/couponRepositoryMemory"

let connection: Connection
let couponRepository: CouponRepository

beforeEach(() => {
  connection = new PostgresSQLConnectionAdapter()
  couponRepository = new CouponRepositoryDatabase(connection)
})

test('Deve validar o cupom de desconto', async () => {
  const validateCoupon = new ValidateCoupon(couponRepository)
  const isvalid = await validateCoupon.execute('VALE20')
  expect(!isvalid).toBeTruthy()
})

afterEach(async () => {
  await connection.close()
})
