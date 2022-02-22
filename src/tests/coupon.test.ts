import Coupon from "../domain/coupon"

describe('Testes de cupom de desconto', () => {
  test('Deve criar um cupom de desconto', function() {
    const coupon = new Coupon('VALE20', 20)
    const isExpired = coupon.isExpired()
    expect(isExpired).toBeFalsy()
  })
  
  test('Deve criar um cupom de desconto expirado', function() {
    const coupon = new Coupon('VALE20', 20, new Date('2021-03-01T10:00:00'))
    const isExpired = coupon.isExpired()
    expect(isExpired).toBeTruthy()
  })
})
