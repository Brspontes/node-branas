import Coupon from "../../../domain/entities/coupon";
import coupon from "../../../domain/entities/coupon";
import CouponRepository from "../../../domain/repositories/couponRepository";

export default class CouponRepositoryMemory implements CouponRepository {
  coupons: Coupon[]
  constructor () {
    this.coupons = [
      new Coupon('VALE20', 20)
    ]
  }
  
  getByCode(code: string): coupon | undefined {
    return this.coupons.find(coupon => coupon.code === code)
  }
}
